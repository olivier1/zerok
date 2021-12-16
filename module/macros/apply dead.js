for(let target of canvas.tokens.controlled){
    if(target.data.overlayEffect===undefined||target.data.overlayEffect===null||!target.data.overlayEffect.includes("icons/svg/skull.svg")){
        let id=target.data._id;

        let effect="icons/svg/skull.svg";
        target.toggleOverlay(effect);
        try{
            let combatant = game.combat.getCombatantByToken(id);

            let combatid=combatant._id;
            game.combat.updateCombatant({
                '_id':combatid,
                'defeated':true
            }) 
        }catch(err){} 
    }

}