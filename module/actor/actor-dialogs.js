//utility functions to handle events on dialogs created from the actor sheets
export class ActorDialogs{
    static chatListeners(html){
        html.find('.tntfilter').keyup(this._onTntFilterChange.bind(this));
        html.find('.tntdescr-button').click(this._onTntDescrClick.bind(this));
        /*html.find('.ae').click(this._onAeClick.bind(this));
        html.find('.ae-create').click(this._onAeCreate.bind(this));
        html.find('.ae-delete').click(this._onAeDelete.bind(this));*/
    }
    static _onTntDescrClick(event){
        event.preventDefault();
        let descr = event.target.attributes["data-description"].value;
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
    static _onTntFilterChange(event){

        let tnts=document.getElementsByName("tntEntry");

        let filterInput=document.getElementById("tntfilter");
        let filter=filterInput.value.toLowerCase();
        for(let i=0;i<tnts.length;i++){
            let tnt=tnts[i];

            let tntName=tnt.attributes["data-search"].value.toLowerCase();
            if(tntName.indexOf(filter)>-1){
                tnt.style.display="";
            }else{
                tnt.style.display="none";
            }
        }

    }
    static _onAeClick(event){
        
        let effectId = event.currentTarget.attributes["data-ae-id"].value;
        let actorId = event.currentTarget.attributes["data-actor-id"].value;
        let actor = game.actors.get(actorId);
        let effect = actor.effects.get(effectId);
        new ActiveEffectConfig(effect).render(true);
    }
    static async _onAeCreate(event){
        
        let actorId = event.currentTarget.attributes["data-actor-id"].value;
        let actor = game.actors.get(actorId);
       
        /*
        await actor.createEmbeddedDocuments("ActiveEffect",[{name:"newActiveEffect","data.label":"newActiveEffect"}])*/



    }
    static async _onAeDelete(event){

        let actorId = event.currentTarget.attributes["data-actor-id"].value;
        let actor = game.actors.get(actorId);
        let effectId = event.currentTarget.attributes["data-ae-id"].value;
        let effect = actor.effects.get(effectId);
        effect.delete();




    }
}
