import {zerokRolls} from "../zerokRolls.js";
import {objectByString} from "../utilities.js";
import {setNestedKey} from "../utilities.js";
import zerokBaseActorSheet from "./base-sheet.js";
import {zerokItem} from "../item/item.js";
/**
 * 
 * @extends {ActorSheet}
 */
export default class zerokPCActorSheet extends zerokBaseActorSheet {


    /** @override */

    static get defaultOptions() {

        return mergeObject(super.defaultOptions, {
            classes: ["zerok", "sheet", "actor"],
            template: "systems/zerok/templates/actor/actor-sheet.html",
            width: 666,
            height: 760,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-content", initial: "main" }],
            default:null
        });
    }



    /** @override */
    activateListeners(html) {
        super.activateListeners(html);




        //change skill characteristic
        html.find('.skill-char').change(this._onSkillCharEdit.bind(this));
        //change skill advancement
        html.find('.skill-adv').change(this._onSkillAdvEdit.bind(this));
        //favorite psychic power
        //toggle half strength for squadrons
        html.find('.favorite').click(this._onFavoriteClick.bind(this));
        //change cybernetic location
        html.find('.cyber-location-select').change(this._onCyberLocationEdit.bind(this));
        //change navigator power training
        html.find('.power-training').change(this._onPowerTrainingEdit.bind(this));
        //create different types of wargear
        html.find('.wargear-create').click(this._onWargearCreate.bind(this));



        //handles adding or removing worn weapon slots
        html.find('.worn-item-plus').click(this._onAddExtraWeapon.bind(this));
        html.find('.worn-item-minus').click(this._onRemoveExtraWeapon.bind(this));
        html.find('.extra-weapon').change(this._onExtraWeaponChange.bind(this));
        //handles changing ammo type
        html.find('.weapon-ammo').change(this._onAmmoChange.bind(this));
        //handles reloading a ranged weapon
        html.find('.weapon-reload').click(this._onWeaponReload.bind(this));
        //handles swapping weapons
        html.find('.hand-weapon').change(this._onWeaponChange.bind(this));

        //filters
        html.find('.skillfilter').keyup(this._onFilterChange.bind(this));

    }

    /* -------------------------------------------- */




    //handle creating a wargear item, these can be several types of different item types
    async _onWargearCreate(event){
        event.preventDefault();
        let templateOptions={"type":[{"name":"wargear","label":"Wargear"},{"name":"meleeWeapon","label":"Melee Weapon"},{"name":"rangedWeapon","label":"Ranged Weapon"},{"name":"ammunition","label":"Ammunition"},{"name":"armor","label":"Armor"}]};

        let renderedTemplate=renderTemplate('systems/zerok/templates/actor/dialogs/select-wargear-type-dialog.html', templateOptions);

        renderedTemplate.then(content => { 
            new Dialog({
                title: "New Wargear Type",
                content: content,
                buttons:{
                    submit:{
                        label:"Yes",
                        callback: async html => {
                            const type = html.find('select[name="wargear-type"]').val();
                            const itemData = {
                                name: `new ${type}`,
                                type: type
                            };

                            let item=await zerokItem.create(itemData,{temporary:true});
                            await this.actor.createEmbeddedDocuments("Item",[item.data],{"renderSheet":true});





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

    /**
    *Handle select change for cybernetic location selector
    * @param {Event} event   The originating click event
    * @private
    */
    async _onCyberLocationEdit(event){

        event.preventDefault();

        let newLoc=event.target.value;
        let dataItemId=event.target.attributes["data-item-id"].value;
        let item= this.actor.getEmbeddedDocument("Item", dataItemId);

        item.update({"data.location.value":newLoc});


    }

    async _onPowerTrainingEdit(event){
        event.preventDefault();

        let newTraining=event.target.value;
        let dataItemId=event.target.attributes["data-item-id"].value;
        let item= this.actor.getEmbeddedDocument("Item", dataItemId);

        item.update({"data.training.value":newTraining});


    }


    /**
    *Handle select change for skill characterteristic selector
    * @param {Event} event   The originating change event
    * @private
    */
    async _onSkillCharEdit(event){

        event.preventDefault();
        let newChar=event.target.value;
        let dataItemId=event.target.attributes["data-item-id"].value;
        let item= this.actor.getEmbeddedDocument("Item", dataItemId);
        item.update({"data.characteristic.value":newChar});

    }
    /**
    *Handle select change for skill advancement selector
    * @param {Event} event   The originating click event
    * @private
    */
    async _onSkillAdvEdit(event){
        event.preventDefault();
        let newAdv=event.target.value;
        let dataItemId=event.target.attributes["data-item-id"].value;
        let item= this.actor.getEmbeddedDocument("Item", dataItemId);
        item.update({"data.value":newAdv});



    }




    //handles adding extra worn weapon slots
    async _onAddExtraWeapon(event){
        let actor=this.actor;
        let data=duplicate(actor.data);

        let weapons=Object.values(data.data.secChar.wornGear.extraWeapons);
        weapons.push({});
        let weaponsObj=Object.assign({},weapons);
        await actor.update({"data.secChar.wornGear.extraWeapons":weaponsObj});

    }
    //handles removing extra weapon slots
    async _onRemoveExtraWeapon(event){
        let actor=this.actor;
        let data=duplicate(actor.data.data);
        let weapons=Object.values(data.secChar.wornGear.extraWeapons);

        if(weapons.length>0){

            weapons.pop();

            await actor.update({"data.secChar.wornGear.extraWeapons":weapons});
        }

    }
    async _onExtraWeaponChange(event){
        let actor=this.actor;
        const weaponId=event.currentTarget.value;
        const index=parseInt(event.currentTarget.dataset["index"]);
        const previousWeaponId=this.actor.data.data.secChar.wornGear.extraWeapons[index].id;
        let str="extra"+index;
        let updates=[];
        if(weaponId!==""){
            updates.push({"_id":weaponId,"data.isEquipped":str});
        }
        if(previousWeaponId!==undefined){
            updates.push({"_id":previousWeaponId,"data.isEquipped":false});
        }
        if(updates.length>0){
            await actor.updateEmbeddedDocuments("Item",updates);
        }

    }
    //handles when swapping ammo type in a ranged weapon
    async _onAmmoChange(event){

        event.preventDefault;
        const dataset=event.currentTarget.dataset;
        const weapon=this.actor.getEmbeddedDocument("Item",dataset["weapon"]);
        if(!weapon){return};

        let weaponData=weapon.data;
        const previousAmmo=this.actor.getEmbeddedDocument("Item",dataset["previous"]);
        const ammoID=event.currentTarget.value;
        const ammo=this.actor.getEmbeddedDocument("Item",ammoID);
        let weaponUpdate={}
        weaponUpdate["data.ammo._id"]=ammoID;




        if(previousAmmo!==undefined&&previousAmmo.data.data!==undefined){



            previousAmmo.update({"data.currentClip.value":weaponData.data.clip.value});
        }
        if(ammo!==undefined){
            weaponUpdate["data.clip.value"]=ammo.data.data.currentClip.value;
        }else{
            weaponUpdate["data.clip.value"]=0;
        }


        weapon.update(weaponUpdate);



    }
    //handles reloading a ranged weapon
    async _onWeaponReload(event){
        event.preventDefault;
        const dataset=event.currentTarget.dataset;
        let weapon=this.actor.getEmbeddedDocument("Item",dataset.weapon);

        let actor=this.actor;
        let update=[];
        let weaponUpdate={};
        let ammoUpdate={};

        let ooa=false;
        //different logic for throwing weapons
        if(weapon.data.data.class.value!=="Thrown"){
            const ammo=this.actor.getEmbeddedDocument("Item",weapon.data.data.ammo._id);

            if(ammo!==null){
                let ammoAmt=parseInt(ammo.data.data.amount.value);

                if(ammoAmt>0){
                    weaponUpdate["data.clip.value"]=weapon.data.data.clip.max;
                    ammoUpdate["data.amount.value"]=ammoAmt-1
                    weapon.update(weaponUpdate);
                    ammo.update(ammoUpdate);


                }else{
                    ooa=true;
                } 
            }else{
                return;
            }

        }else{
            if(weapon.data.data.amount.value>0){

                weaponUpdate["data.clip.value"]=weapon.data.data.clip.max;
                weaponUpdate["data.amount.value"]=parseInt(weapon.data.data.amount.value)-1;
                weapon.update(weaponUpdate);
            }else{
                ooa=true;
            }

        }
        //check if out of ammo to reload
        if(ooa){
            new Dialog({
                title: `Out of Ammunition!`,
                content: `You are out of ammunition and cannot reload.`,
                buttons: {
                    submit: {
                        label: 'OK',
                        callback: null
                    }
                },
                default: "submit",


                width:100}
                      ).render(true);
        }



    }
    //handles when weapons are swapped and stuff
    async _onWeaponChange(event){
        event.preventDefault;
        const data=this.actor.data.data;

        let actor=this.actor;
        let weapon=actor.items.get(event.currentTarget.value);

        if(weapon){



            weapon=weapon.data;
        }
        const weaponID=event.currentTarget.value;
        const hand=event.currentTarget.dataset["hand"];
        const leftHand=document.getElementById("left");
        const rightHand=document.getElementById("right");
        var update=[];
        var previousWeaponID="";
        console.log(data.secChar)
        if(hand==="right"){
            previousWeaponID=data.secChar.wornGear.weapons[0].id;
            if(previousWeaponID){
                update.push({"_id":previousWeaponID,"data.isEquipped":false});
            }
            if(weaponID!==""){
                if(weapon.data.twohanded.value){
                    update.push({"_id":weaponID,"data.isEquipped":"rightleft"});
                }else{
                    update.push({"_id":weaponID,"data.isEquipped":"right"});
                }

            }

        }else if(hand==="left"){

            previousWeaponID=data.secChar.wornGear.weapons[1].id;
            if(previousWeaponID){
                update.push({"_id":previousWeaponID,"data.isEquipped":false});
            }
            if(weaponID!==""){
                if(weapon.data.twohanded.value){
                    update.push({"_id":weaponID,"data.isEquipped":"rightleft"});
                }else{
                    update.push({"_id":weaponID,"data.isEquipped":"left"});
                }
            }

        }


        if(update.length>0){
            await this.actor.updateEmbeddedDocuments("Item",update);
        }


    }
    async _onFavoriteClick(event){
        let dataset=event.currentTarget.dataset;
        let powerID=dataset["itemId"];
        let power=this.actor.items.get(powerID);

        let favorite=power.data.data.favorite;
        if(favorite){
            await power.update({"data.favorite":false});
        }else{
            await power.update({"data.favorite":true});
        }
        await this.actor.prepare();
    }

    _onFilterChange(event){

        let skills=document.getElementsByName("skill");
        let skillHeads=document.getElementsByName("skillheads");

        let filterInput=document.getElementById("skillfilter");
        let filter=filterInput.value.toLowerCase();
        for(let i=0;i<skills.length;i++){
            let skill=skills[i];
            let elements=skill.getElementsByTagName("a");
            let nameElement=elements[0];
            let skillName=nameElement.attributes["data-name"].value.toLowerCase();
            if(skillName.indexOf(filter)>-1){
                skill.style.display="";
            }else{
                skill.style.display="none";
            }
        }
        for(let index=0;index<skillHeads.length;index++){
            if(filter===""){
                skillHeads[index].style.display="";
            }else{
                skillHeads[index].style.display="none";
            }
        }
    }

}
