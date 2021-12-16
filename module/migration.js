
let upd=async ()=>{
    for ( let a of game.actors.entities ) {
        console.log(a);
        let weps=[]
        for (let i of a.items){
            if(i.data.type==="rangedWeapon")
            try {
                

              let updateData={};
               
                console.log(i);

                console.log(`Migrating Item entity ${i.name}`);
              await a.updateEmbeddedDocuments("Item",updateData);
                //weps.push(i);

            } catch(err) {
                console.error(err);
            } 
        }
        //console.log(await a.updateEmbeddedDocuments("Item",weps));
    }
}



upd();
//const model = game.system.model.Actor[actorData.type];
// actorData.data = filterObject(actorData.data, model);