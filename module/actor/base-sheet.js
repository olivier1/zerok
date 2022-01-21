/*abstract class that is not used, sets most of the functions that are common to all sheets of the system*/
import {zerokRollDialogs} from "../zerokRollDialogs.js";
import {zerokRolls} from "../zerokRolls.js";
import {objectByString} from "../utilities.js";
import {setNestedKey} from "../utilities.js";
import {tokenDistance} from "../utilities.js";
import {zerokItem} from "../item/item.js";
export default class zerokBaseActorSheet extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            scrollY: [
                ".main",
                ".skills",
                ".tnt",
                ".exp",
                ".combat",
                ".gear",
                ".psykana"
            ]

        });
    }
    /* -------------------------------------------- */
    /** @override */
    getData() {
        const data = super.getData().actor.data;
        data.actor=this.actor.prepare();
        data.isGM=game.user.isGM;
        data.isOwner=this.actor.isOwner;
        data.dtypes = ["String", "Number", "Boolean"];
        data.races=game.zerok.zerok.races;
        data.aptitudes=game.zerok.zerok.aptitudes;
        data.size=game.zerok.zerok.size;
        data.skillChars=game.zerok.zerok.skillChars;
        data.skillTraining=game.zerok.zerok.skillTraining;
        data.psyDisciplines=game.zerok.zerok.psychicDisciplines;
        data.editable = this.options.editable;
        data.money=game.settings.get("zerok","dhMoney");
        return data;
    }
    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
        //right click profile img
        html.find('.profile-img').contextmenu(this._onImgRightClick.bind(this));

        // Everything below here is only needed if the sheet is editable

        if (!this.options.editable) return;

        //handles combat tab resources

        html.find('.combat-resources').focusout(this._combatResourceEdit.bind(this));
        html.find('.combat-resources').keydown(this._combatResourceEnter.bind(this));
        //Add item to actor
        html.find('.item-create').click(this._onItemCreate.bind(this));
        //edit item on actor
        html.find('.item-edit').click(this._onItemEdit.bind(this));
        //delete item on actor
        html.find('.item-delete').click(this._onItemDelete.bind(this));

        //change item property via text input
        html.find('.item-text-input').focusout(this._itemTextInputEdit.bind(this));
        //get item description
        html.find('.item-descr').click(this._onItemDescrGet.bind(this));
        //handles maximal checkbox
        html.find('.maximal').click(this._onMaximalClick.bind(this));
        //handles lasmode select
        html.find('.lasMode').change(this._onLasModeChange.bind(this));
        //reset cover fields
        html.find('.cover-reset').click(this._onCoverReset.bind(this));
        //reset cover fields
        html.find('.armor-select').change(this._onArmorChange.bind(this));
        //reset cover fields
        html.find('.force-field').change(this._onForceFieldChange.bind(this));
        //Damage rolls
        html.find('.damage-roll').click(this._onDamageRoll.bind(this));
        //Psychic power buff/debuffs
        html.find('.buff-debuff').click(this._onBuffDebuff.bind(this));
        //autofcus modifier input
        html.find('.rollable').click(this._onRoll.bind(this));
        //force damage roll
        html.find('.force-roll').click(this._onForceRoll.bind(this));
        //creating a tnt
        html.find('.tnt-create').click(this._onTntCreate.bind(this));
        //sorting
        html.find('.sort-button').click(this._onSortClick.bind(this));
        html.find('.drag').each((i, li) => {
            li.setAttribute("draggable", true);
            li.addEventListener("dragstart", this._onDragListItem, false);
            li.addEventListener("dragover", this._onDragOverListItem, false);
            li.addEventListener("drop", this._onDropListItem.bind(this), false);
        });

        // Autoselect entire text 
        $("input[type=text]").focusin(function() {
            $(this).select();
        });
    }
    _onDragListItem(event){

        event.dataTransfer.setData("text", event.target.dataset["id"]);


    }
    _onDragOverListItem(event){

        event.preventDefault();

    }
    _onImgRightClick(event){

        event = event || window.event;


        var options = {
            width: "auto",
            height: "auto"
        };
        let img=this.actor.img
        let dlg = new Dialog({
            title: `Profile Image`,
            content: `<img src="${img}"  width="auto" height="auto">`,
            buttons: {
                submit: {
                    label: "OK",
                    callback: null
                }
            },
            default: "submit",
        }, options);
        dlg.render(true);


    }
    async _onDropListItem(event){

        let draggedId=event.dataTransfer.getData("text");
        let targetId=event.target.dataset["id"];
        if(draggedId!==targetId){
            let draggedItem=await this.actor.items.get(draggedId);

            let targetItem=await this.actor.items.get(targetId);

            let sortDrag=draggedItem.data.sort;
            let sortTarget=targetItem.data.sort;
            if(sortTarget>sortDrag){

                sortDrag=sortTarget;
                sortTarget-=1;
            }else{
                sortDrag=sortTarget;
                sortTarget+=1;
            }
            await this.actor.updateEmbeddedDocuments("Item",[{"_id":draggedId,"sort":sortDrag},{"_id":targetId,"sort":sortTarget}]);

        }



    }
    //handles the duplicate inputs for wounds fatigue fate points etc on the combat tab

    async _combatResourceEdit(event){

        event.preventDefault();
        if(!this.updateObj){
            this.updateObj={};
        }

        let actor=this.actor;
        let target=event.target.attributes["data-target"].value;
        let newAmt=event.target.value;

        let oldValue=objectByString(actor.data,target);
        if(oldValue!=newAmt){
            this.updateObj[target]=newAmt;
            if(!event.relatedTarget||($(event.relatedTarget).prop("class").indexOf("combat-resources") === -1)) {

                await actor.update(this.updateObj);
                this.updateObj=undefined;

            }

        }

    }
    async _combatResourceEnter(event){
        if (event.keyCode == 13){
            if(!this.updateObj){
                this.updateObj={};
            }
            let actor=this.actor;
            let target=event.target.attributes["data-target"].value;
            let newAmt=event.target.value;

            let oldValue=objectByString(actor.data,target);
            if(oldValue!=newAmt){
                this.updateObj[target]=newAmt;
                await actor.update(this.updateObj);
                this.updateObj=undefined;



            }
        }
    }
    async _onSortClick(event){

        let sortType=event.target.dataset["sortType"];
        let path=event.target.dataset["path"];
        let itemType=event.target.dataset["itemType"];
        let actor=this.actor.data;
        let items=actor[itemType];
        let update={};
        let updatePath="data.sort."+itemType;

        update[updatePath]={};
        update[updatePath].type=sortType;
        update[updatePath].path=path;
        if(!actor.data.sort[itemType]||actor.data.sort[itemType].type!==sortType||actor.data.sort[itemType].reverse){
            update[updatePath].reverse=false;
        }else{
            update[updatePath].reverse=true;
        }

        await this.actor.update(update);

    }
    //Handle the popup when user clicks item name to show item description
    async _onItemDescrGet(event){
        event.preventDefault();
        let descr = event.target.attributes["data-item-descr"].value;
        var options = {
            width: 300,
            height: 400
        };
        var name=event.currentTarget.dataset["name"];
        let dlg = new Dialog({
            title: `${name} Description`,
            content: "<p>"+descr+"</p>",
            buttons: {
                submit: {
                    label: "OK",
                    callback: null
                }
            },
            default: "submit",
        }, options);
        dlg.render(true);
    }
    //Handle creating a new item, will sort the item type before making the new item
    async _onItemCreate(event) {
        event.preventDefault();
        const header = event.currentTarget;
        const type = header.dataset["type"];
        const itemData = {
            name: `new ${type}`,
            type: type
        };
        let item=await zerokItem.create(itemData,{temporary:true});
        await this.actor.createEmbeddedDocuments("Item",[item.data],{"renderSheet":true});

    }
    //provides an interface to add new talents and apply the corresponding flags
    async _onTntCreate(event){
        event.preventDefault();
        var actor=this.actor;
        const dh2Talents=await game.packs.get("zerok.talent-core-dh2");
        let tnts=await dh2Talents.getDocuments();
        var dh2Traits=await game.packs.get("zerok.traits-core-dh2");
        tnts=tnts.concat(await dh2Traits.getDocuments());
        var dh2EnemyWithinTalents=await game.packs.get("zerok.talents-enemies-within");
        tnts=tnts.concat(await dh2EnemyWithinTalents.getDocuments());
        var dh2EnemyWithoutTalents=await game.packs.get("zerok.talents-enemies-without");
        tnts=tnts.concat(await dh2EnemyWithoutTalents.getDocuments());
        var dh2EnemyBeyondTalents=await game.packs.get("zerok.talents-enemies-beyond");
        tnts=tnts.concat(await dh2EnemyBeyondTalents.getDocuments());
        var owCoreTalents=await game.packs.get("zerok.talents-ow-core");
        tnts=tnts.concat(await owCoreTalents.getDocuments());
        var owHOTETalents=await game.packs.get("zerok.talents-hammer-of-the-emperor");
        tnts=tnts.concat(await owHOTETalents.getDocuments());
        var owShieldOfHumanityTalents=await game.packs.get("zerok.talents-shield-of-humanity");
        tnts=tnts.concat(await owShieldOfHumanityTalents.getDocuments());
        var customTalents=await game.packs.get("zerok.custom-talents");
        tnts=tnts.concat(await customTalents.getDocuments());
        //load different packs depending on actor type
        if(actor.data.type==="dhPC"){
            var dh2CoreBonus=await game.packs.get("zerok.role-homeworld-and-background-bonuscore-dh2");
            tnts=tnts.concat(await dh2CoreBonus.getDocuments());
            var dh2EnemiesWithinBonus=await game.packs.get("zerok.role-homeworld-and-background-bonusenemies-within");
            tnts=tnts.concat(await dh2EnemiesWithinBonus.getDocuments());
            var dh2EnemiesWithoutBonus=await game.packs.get("zerok.role-homeworld-and-background-bonusenemies-without");
            tnts=tnts.concat(await dh2EnemiesWithoutBonus.getDocuments());
            var dh2EnemiesBeyondBonus=await game.packs.get("zerok.role-homeworld-and-background-bonusenemies-beyond");
            tnts=tnts.concat(await dh2EnemiesBeyondBonus.getDocuments());
        }else if(actor.data.type==="dwPC"){
            var dwBonus=await game.packs.get("zerok.deathwatch-bonus-and-drawbacks");
            tnts=tnts.concat(await dwBonus.getDocuments());
        }else if(actor.data.type==="owPC"){
            var owCoreAbilities=await game.packs.get("zerok.homeworld-and-specialty-abilities-core-ow");
            tnts=tnts.concat(await owCoreAbilities.getDocuments());
            var owHOTEAbilities=await game.packs.get("zerok.homeworld-and-specialty-abilities-hammer-of-the-emperor");
            tnts=tnts.concat(await owHOTEAbilities.getDocuments());
            var owHOTEOrders=await game.packs.get("zerok.orders-hammer-of-the-emperor");
            tnts=tnts.concat(await owHOTEOrders.getDocuments());
            var owShieldOfHumanityAbilities=await game.packs.get("zerok.homeworld-and-specialty-abilities-shield-of-humanity");
            tnts=tnts.concat(await owShieldOfHumanityAbilities.getDocuments());
            var owShieldOfHumanityOrders=await game.packs.get("zerok.orders-shield-of-humanity");
            tnts=tnts.concat(await owShieldOfHumanityOrders.getDocuments());
        }
        tnts=tnts.sort(function compare(a, b) {
            if (a.name<b.name) {
                return -1;
            }
            if (a.name>b.name) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
        let templateOptions={"tnts":tnts};

        let renderedTemplate=renderTemplate('systems/zerok/templates/actor/dialogs/tnt-dialog.html', templateOptions);
        var options = {
            width: 666,
            height: 600,
            classes:["systems/zerok/css/zerok.css","tntdialog"]
        };

        renderedTemplate.then(content => { 
            new Dialog({
                title: "Add Talents, Traits and Bonus",
                content: content,
                buttons:{
                    submit:{
                        label:"Add selected to Character",
                        callback: async html => {
                            let selectedIds=[];
                            $(html).find('input:checked').each(function(){
                                selectedIds.push($(this).val());
                            })
                            
                            let $selectedCompendiums= $('input:checked',html).map(function(){
                                return this.getAttribute('data-compendium');
                            }).get();
                            
                            let talentsNTraits=[];
                            for(let i=0;i<selectedIds.length;i++){
                                let tnt=null;
                                switch($selectedCompendiums[i]){
                                    case"zerok.talent-core-dh2":
                                        tnt=await dh2Talents.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.traits-core-dh2":
                                        tnt=await dh2Traits.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.talents-enemies-within":
                                        
                                        tnt=await dh2EnemyWithinTalents.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.talents-enemies-without":
                                        tnt=await dh2EnemyWithoutTalents.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.talents-enemies-beyond":
                                        tnt=await dh2EnemyBeyondTalents.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.role-homeworld-and-background-bonuscore-dh2":
                                        tnt=await dh2CoreBonus.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.role-homeworld-and-background-bonusenemies-without":
                                        tnt=await dh2EnemiesWithoutBonus.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.role-homeworld-and-background-bonusenemies-within":
                                        tnt=await dh2EnemiesWithinBonus.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.role-homeworld-and-background-bonusenemies-beyond":
                                        tnt=await dh2EnemiesBeyondBonus.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.deathwatch-bonus-and-drawbacks":
                                        tnt=await dwBonus.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.talents-ow-core":
                                        tnt=await owCoreTalents.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.talents-hammer-of-the-emperor":
                                        tnt=await owHOTETalents.getDocument(selectedIds[i]);

                                        break;
                                    case "zerok.talents-shield-of-humanity":
                                        tnt=await owShieldOfHumanityTalents.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.homeworld-and-specialty-abilities-core-ow":
                                        tnt=await owCoreAbilities.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.homeworld-and-specialty-abilities-hammer-of-the-emperor":
                                        tnt=await owHOTEAbilities.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.orders-hammer-of-the-emperor":
                                        tnt=await owHOTEOrders.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.homeworld-and-specialty-abilities-shield-of-humanity":
                                        tnt=await owShieldOfHumanityAbilities.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.orders-shield-of-humanity":
                                        tnt=await owShieldOfHumanityOrders.getDocument(selectedIds[i]);
                                        break;
                                    case "zerok.custom-talents":
                                        tnt=await customTalents.getDocument(selectedIds[i]);
                                        break;
                                }
                                let itemData=tnt.data;
                                let tntData=itemData.data;
                                let spec=tntData.specialisation.value;
                                let flag=tntData.flagId.value;
                                if(!actor.getFlag("zerok",flag)){

                                    if(spec==="N/A"){

                                        await actor.setFlag("zerok",flag,true);
                                    }else{
                                        let chosenSpec=await Dialog.prompt({
                                            title: "Choose specialisation",
                                            content: `<p><label>Specialisation:</label> <input id="specInput" type="text" name="spec" value="${tntData.specialisation.value}" autofocus/></p>`,



                                            callback: async(html) => {
                                                const choosenSpec = $(html).find('input[name="spec"]').val();
                                                await actor.setFlag("zerok",flag,choosenSpec);
                                                return choosenSpec;
                                            },






                                            width:100}
                                                                          );
                                        setTimeout(function() {document.getElementById('specInput').select();}, 50);
                                        await itemData.update({"data.specialisation.value": chosenSpec});

                                    }
                                    talentsNTraits.push(itemData);
                                }


                            }
                            await actor.createEmbeddedDocuments("Item",talentsNTraits);
                            this.render(true);
                        }
                    }
                },
                default: "submit"
            },options).render(true)
        });
        setTimeout(function() {document.getElementById('tntfilter').select();}, 50);
    }
    //Edits the item that was clicked
    async _onItemEdit(event){
        event.preventDefault();
        let itemId = event.currentTarget.attributes["data-item-id"].value;
        const item = this.actor.items.find(i => i.data._id == itemId);
        item.sheet.render(true);
    }
    //deletes the selected item from the actor
    async _onItemDelete(event){
        event.preventDefault();
        let itemId = event.currentTarget.attributes["data-item-id"].value;
        let item=await this.actor.getEmbeddedDocument("Item",itemId);

        let renderedTemplate=renderTemplate('systems/zerok/templates/actor/dialogs/delete-item-dialog.html');
        renderedTemplate.then(content => {
            new Dialog({
                title: "Deletion Confirmation",
                content: content,
                buttons:{
                    submit:{
                        label:"Yes",
                        callback: async dlg => { 

                            await this.actor.deleteEmbeddedDocuments("Item",[itemId]);
                            this.render(true);
                        }
                    },
                    cancel:{
                        label: "No",
                        callback: null
                    }
                },
                default: "submit"
            }).render(true)
        });
    }

    //handles editing text inputs that are linked to owned items 
    async _itemTextInputEdit(event){
        let actor= this.actor;
        let newAmt=event.target.value;

        let dataItemId=event.target.attributes["data-item-id"].value;
        let target=event.target.attributes["data-target"].value.toString();
        let item= actor.getEmbeddedDocument("Item", dataItemId);
        let oldValue=event.target.defaultValue;
        if(oldValue!=newAmt){
            let update={};
            update[target]=newAmt;
            item.update(update);
        }
    }
    //handles firing mode change for maximal weapons
    async _onMaximalClick(event){
        let dataset=event.currentTarget.dataset;
        let weaponID=dataset["itemId"];
        let zerokWeapon=this.actor.items.get(weaponID);


        if(zerokWeapon.getFlag("zerok","maximalMode")){
            await zerokWeapon.setFlag("zerok","maximalMode",false);
            await zerokWeapon.setFlag("zerok","recharge",false);

            if(zerokWeapon.getFlag("zerok","blast")){
                await zerokWeapon.setFlag("zerok","blast",parseInt(zerokWeapon.getFlag("zerok","blast"))-2);

            }
        }else{
            await zerokWeapon.setFlag("zerok","maximalMode",true);
            await zerokWeapon.setFlag("zerok","recharge",true);
            if(zerokWeapon.getFlag("zerok","blast")){
                await zerokWeapon.setFlag("zerok","blast",parseInt(zerokWeapon.getFlag("zerok","blast"))+2);
            }
        }
    }
    //handles firing mode change for las weapons
    async _onLasModeChange(event){
        event.preventDefault;
        const data=this.actor.data.data;
        let dataset=event.currentTarget.dataset;

        let actor=this.actor;
        let weaponID=dataset["itemId"];
        let fireMode=parseInt(event.currentTarget.value);
        let weapon=actor.items.get(weaponID);
        await weapon.update({"flags.zerok.lasMode":fireMode});


    }
    /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
    async _onRoll(event) {
        event.preventDefault();
        const element = event.currentTarget;
        const dataset = element.dataset;
        let testType=dataset["rollType"];
        var testTarget=parseInt(dataset["target"]);
        var testLabel=dataset["label"];
        var testChar=dataset["char"];
        let rating=dataset["rating"];
        if(rating!==undefined){
            testTarget+=parseInt(rating);
        }
        var item=null;
        let attackOptions={
        }
        let targets=game.user.targets;
        if(targets.size>0&&this.actor.type!=="spaceship"){
            let targetIt=targets.values();
            let target=targetIt.next().value;
            let attacker=this.actor.getActiveTokens()[0];
            let targetActor=target.actor;


            attackOptions.prone=targetActor.getFlag("core","prone");
            attackOptions.stunned=targetActor.getFlag("core","stunned");
            attackOptions.totalDef=targetActor.getFlag("core","totalDef");
            attackOptions.running=targetActor.getFlag("core","running");
            attackOptions.size=targetActor.data.data.secChar.size.value;
            attackOptions.selfProne=this.actor.getFlag("core","prone");
            if(targetActor.getFlag("core","unconscious")||targetActor.getFlag("core","snare")){
                attackOptions.helpless=true;
            }else{
                attackOptions.helpless=false;
            }
            attackOptions.selfBlind=this.actor.getFlag("core","blind");
            attackOptions.distance=tokenDistance(target, attacker);

        }
        if(dataset["itemId"]){
            item=await this.actor.items.get(dataset["itemId"]);

            if(!item.data.data.isPrepared){
                await item.prepareData();
            }
        }

        if(testType!=="focuspower"&&testType!=="rangedAttack"&&testType!=="meleeAttack"){
            await zerokRollDialogs.callRollDialog(testChar, testType, testTarget, this.actor, testLabel, item, false);

        }else if(testType==="meleeAttack"){
            zerokRollDialogs.callMeleeAttackDialog(testChar, testType, testTarget, this.actor, testLabel, item, attackOptions);
        }else if(testType==="rangedAttack"){
            zerokRollDialogs.callRangedAttackDialog(testChar, testType, testTarget, this.actor, testLabel, item, attackOptions);
        }else if(testType==="focuspower"){
            zerokRollDialogs.callFocusPowerDialog(testChar, testType, testTarget, this.actor, testLabel, item, attackOptions);
        }
        //autofocus the input after it is rendered.
        setTimeout(function() {document.getElementById('modifier').select();}, 100);
    }
    //handles weapon damage rolls
    async _onDamageRoll(event) {
        event.preventDefault();
        const element = event.currentTarget;
        const dataset = element.dataset;
        if(dataset.weapon){

            let actor=this.actor;
            let zerokWeapon=actor.items.get(dataset.weapon);
            if(!zerokWeapon.data.data.isPrepared){
                await zerokWeapon.prepareData();
                console.log(zerokWeapon);
            }
            let weapon=zerokWeapon.data;
            let dfa=false;
            if(actor.getFlag("zerok","deathfromabove")&&actor.data.data.secChar.lastHit.attackType==="charge"){
                dfa=true;
            }
            let options={dfa:dfa};
            let renderedTemplate=renderTemplate('systems/zerok/templates/actor/dialogs/damage-dialog.html', options);
            let formula=duplicate(weapon.data.damageFormula);
            renderedTemplate.then(content => {new Dialog({
                title: `Number of Hits & Bonus Damage`,
                content: content,
                buttons: {
                    submit: {
                        label: 'OK',
                        callback: (el) => {
                            const hits = parseInt(Number($(el).find('input[name="hits"]').val()));
                            const dmg = parseInt(Number($(el).find('input[name="dmg"]').val()));
                            const magdmg = parseInt(Number($(el).find('input[name="dmg"]').val()));
                            if(dmg>0){
                                formula.value+=`+${dmg}`
                            }
                            zerokRolls.damageRoll(formula,actor,zerokWeapon,hits,false,false,magdmg);
                        }
                    }
                },
                default: "submit",
                width:100}).render(true)
                                             });
            setTimeout(function() {document.getElementById('modifier').select();}, 50);
        }else if(dataset.formula){
            let roll = new Roll(dataset.formula, this.actor.data.data);
            let label = dataset.label ? `Rolling ${dataset.label} damage.` : '';
            roll.roll().then(roll=>{roll.toMessage({
                speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                flavor: label
            });})
        }
    }
    //handles applying active effects from psychic powers
    async _onBuffDebuff(event){
        event.preventDefault();
        let targets=game.user.targets;
        if(targets.size>0){

            const element = event.currentTarget;
            const dataset = element.dataset;
            let powerId=dataset["power"];
            let label=dataset["label"];
            let power=this.actor.getEmbeddedDocument("Item",powerId);
            let ae=power.effects.entries().next().value[1];
            if(power.data.data.transferId){
                ae=this.actor.effects.get(power.data.data.transferId);
            }
            let aeData=duplicate(ae.data);
            let pr=power.data.data.curPR.value;
            aeData.changes.forEach(function(change){
                change.value=eval(change.value);
                if(change.value>=0){
                    aeData.icon="icons/svg/upgrade.svg";
                    aeData.id="buff";
                    aeData.flags.core={ statusId: "buff" }
                }else{
                    aeData.icon="icons/svg/downgrade.svg";
                    aeData.id="weakened";
                    aeData.flags.core={ statusId: "weakened" }
                }
            })

            aeData.disabled=false;
            aeData.origin=null;
            targets.forEach(async function(target){
                let actor=target.actor;
                zerokRolls.applyActiveEffect(target,[aeData]);

            });

        }
    }
    //handles resetting cover values to zero
    async _onCoverReset(event){
        let actor=this.actor;
        let data=duplicate(actor.data);
        data.data.secChar.cover.value=0;
        data.data.characterHitLocations.head.cover=false;
        data.data.characterHitLocations.body.cover=false;
        data.data.characterHitLocations.rArm.cover=false;
        data.data.characterHitLocations.lArm.cover=false;
        data.data.characterHitLocations.rLeg.cover=false;
        data.data.characterHitLocations.lLeg.cover=false;
        actor.update(data);
    }
    //handle enabling and disabling active effects associated with armor
    async _onArmorChange(event){
        let actor=this.actor;
        let newArmorId=event.currentTarget.value;
        let newArmor=actor.getEmbeddedDocument("Item",newArmorId);
        let oldArmorId=this.actor.data.data.secChar.wornGear.armor._id;

        let oldArmor=this.actor.data.data.secChar.wornGear.armor
        let updates=[];

        if(oldArmor&&oldArmor.data){
            updates.push({"_id":oldArmorId,"data.isEquipped":false});
        }
        if(newArmor&&newArmor.data){
            updates.push({"_id":newArmorId,"data.isEquipped":true});
        }

        if(updates.length>0){
            await this.actor.updateEmbeddedDocuments("Item",updates);
        }


    }
    async _onForceFieldChange(event){
        let actor=this.actor;
        let newForceFieldId=event.currentTarget.value;
        let newForceField=actor.getEmbeddedDocument("Item",newForceFieldId);
        let oldForceFieldId=this.actor.data.data.secChar.wornGear.forceField._id;
        let oldForceField=this.actor.data.data.secChar.wornGear.forceField
        let updates=[];
        if(oldForceField&&oldForceField.data){
            updates.push({"_id":oldForceFieldId,"data.isEquipped":false});
        }
        if(newForceField&&newForceField.data){
            updates.push({"_id":newForceFieldId,"data.isEquipped":true});
        }
        if(updates.length>0){
            await this.actor.updateEmbeddedDocuments("Item",updates);
        }


    }
    //handles force weapon special damage rolls
    async _onForceRoll(event){
        event.preventDefault();
        const element = event.currentTarget;
        const dataset = element.dataset;
        let actor=this.actor;
        new Dialog({
            title: `Force Attack`,
            content: `<p><label>Number of Dice:</label> <input type="text" id="modifier" name="hits" value="1" data-dtype="Number" autofocus/></p>`,
            buttons: {
                submit: {
                    label: 'OK',
                    callback: async (el) =>  {
                        const hits = parseInt(Number($(el).find('input[name="hits"]').val()));

                        let forceData={name:"Force",type:"rangedWeapon"}
                        let force=await Item.create(forceData, {temporary: true});

                        force.data.flags.zerok={};
                        force.data.flags.zerok.ignoreSoak=true;
                        force.data.data.damageFormula.value=`${hits}d10`;
                        force.data.data.damageType.value="Energy";
                        zerokRolls.damageRoll(force.data.data.damageFormula,actor,force,1);
                    }
                }
            },
            default: "submit",
            width:100}
                  ).render(true);
        setTimeout(function() {document.getElementById('modifier').select();}, 50);
    }


}