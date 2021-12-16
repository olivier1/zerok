import {zerokRolls} from "../zerokRolls.js";
import {objectByString} from "../utilities.js";
import {setNestedKey} from "../utilities.js";
import zerokBaseActorSheet from "./base-sheet.js";
export class zerokNPCSheet extends zerokBaseActorSheet {
    
    static async create(data, options) {
        data.skillFilter="";
        super.create(data,options);
    }
    
    /** @override */

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["zerok", "sheet", "actor"],
            template: "systems/zerok/templates/actor/actor-npc-sheet.html",
            width: 600,
            height: 660,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "weapons" }],
            default:null
        });
    }

    /* -------------------------------------------- */

    /** @override */
   /* getData() {



        const data = super.getData();
        mergeObject(data.actor,this.actor.prepare());
        data.isGM=game.user.isGM;
        data.dtypes = ["String", "Number", "Boolean"];
        data.aptitudes=zerok.aptitudes;
        data.size=zerok.size;
        return data;
    }*/
    activateListeners(html) {
        super.activateListeners(html);
        //right click profile img
        html.find('.npc-img').contextmenu(this._onImgRightClick.bind(this));

        if (!this.options.editable) return;
        
        html.find('.parse-tnt').click(this._onTntParse.bind(this));
        html.find('.npc-armor-create').click(this._onArmorCreate.bind(this));
        html.find('.npc-armor-delete').click(this._onArmorDelete.bind(this));
         html.find('.npc-armor-edit').click(this._onArmorEdit.bind(this));


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
    async _onArmorCreate(event) {
        event.preventDefault();
        const header = event.currentTarget;
        const type = header.dataset["type"];
        const itemData = {
            name: `new ${type}`,
            type: type
        };

        let armor=await this.actor.createEmbeddedDocuments("Item",[itemData],{"renderSheet":true});
        
        let armorID=armor[0].id;
        await this.actor.update({"data.secChar.wornGear.armor._id":armorID});
    }
    async _onArmorDelete(event){
        await this.actor.items.get(this.actor.data.data.secChar.wornGear.armor._id).delete();
        await this.actor.update({"data.secChar.wornGear.armor._id":""});
    }
    async _onArmorEdit(event){
        event.preventDefault();
        let itemId = this.actor.data.data.secChar.wornGear.armor._id;
        const item = this.actor.items.find(i => i.data._id == itemId);
        item.sheet.render(true);
    }
    async _onTntParse(event){

        let actor=this.actor;
        let data=actor.data.data;
        let tnt=data.talentsntraits.value.toLowerCase();
        let message="Trait changes on "+actor.name+":";
        if(tnt.includes("true grit")){
            await actor.setFlag("zerok","truegrit",true);


        }else{
            await actor.setFlag("zerok","truegrit",false);

        }
        if(tnt.includes("overwhelming")){
            await actor.setFlag("zerok","overwhelming",true);

        }else{
            await actor.setFlag("zerok","overwhelming",false);

        }
        if(tnt.includes("regeneration")){
            let regex=/.*?regeneration\((\d+)\).*$/;

            let found=tnt.match(regex);
            let amt=found[1];

            await actor.setFlag("zerok","regeneration",found[1]);


        }else{
            await actor.setFlag("zerok","regeneration",false);

        }
        if(tnt.includes("swarm")){
            await actor.setFlag("zerok","swarm",true);

        }else{
            await actor.setFlag("zerok","swarm",false);
        }
        message+=`</br>True Grit:${actor.getFlag("zerok","truegrit")}`;
        message+=`</br>Overwhelming:${actor.getFlag("zerok","overwhelming")}`;
        message+=`</br>Regeneration:${actor.getFlag("zerok","regeneration")}`;
        message+=`</br>Swarm:${actor.getFlag("zerok","swarm")}`;

        let chatData = {
            user: game.user._id,
            speaker: ChatMessage.getSpeaker(),
            content: message,
            type: CONST.CHAT_MESSAGE_TYPES.OTHER
        };
        ChatMessage.create(chatData);
    }



}