export class ActiveEffectDialog extends Dialog {



    activateListeners(html) {
        super.activateListeners(html);



        html.find('.ae').click(this._onAeClick.bind(this));
        html.find('.ae-create').click(this._onAeCreate.bind(this));
        html.find('.ae-delete').click(this._onAeDelete.bind(this));


    } 
    getData(){
        console.log(this)
        console.log("hello");
        return this.data;
    }
    async _onAeClick(event){
        let effectId = event.currentTarget.attributes["data-ae-id"].value;
        let actorId = event.currentTarget.attributes["data-actor-id"].value;
        let tokenId = event.currentTarget.attributes["data-token-id"].value;
        let actor = game.actors.get(actorId);

        if(tokenId){
            let token =canvas.tokens.get(tokenId);
            actor= token.actor;
            actorId=actor.id;
        }

        let effect = actor.effects.get(effectId);

        new ActiveEffectConfig(effect).render(true);
    }
    async _onAeCreate(event){

        let actorId = event.currentTarget.attributes["data-actor-id"].value;
        let tokenId = event.currentTarget.attributes["data-token-id"].value;
        let actor = game.actors.get(actorId);

        if(tokenId){
            let token =canvas.tokens.get(tokenId);
            actor= token.actor;
            actorId=actor.id;
        }


        await actor.createEmbeddedDocuments("ActiveEffect",[{name:"newActiveEffect","label":"newActiveEffect"}]);
        this.updateDialog(actor);


    }
    async _onAeDelete(event){
        new Dialog({
            title: "Deletion Confirmation",
            content: "Are you sure you want to delete this Active Effect?",
            buttons:{
                submit:{
                    label:"Yes",
                    callback: async dlg => { 

                        let actorId = event.currentTarget.attributes["data-actor-id"].value;
                        let tokenId = event.currentTarget.attributes["data-token-id"].value;
                        let actor = game.actors.get(actorId);

                        if(tokenId){
                            let token =canvas.tokens.get(tokenId);
                            actor= token.actor;
                            actorId=actor.id;
                        }
                        let effectId = event.currentTarget.attributes["data-ae-id"].value;
                        let effect = actor.effects.get(effectId);

                        await effect.delete();

                        this.updateDialog(actor);
                    }
                },
                cancel:{
                    label: "No",
                    callback: null
                }
            },
            default: "submit"
        }).render(true)






    }
    async updateDialog(actor){

        let templateOptions={actor:actor};

        let renderedTemplate=await renderTemplate('systems/zerok/templates/actor/dialogs/activeEffects-dialog.html', templateOptions);
        this.data.content=renderedTemplate;

        this.render(true);
    }
}