export const preloadHandlebarsTemplates = async function() {

    // Define template paths to load
    const templatePaths = [

        // Actor Sheet Partials
        "systems/zerok/templates/actor/actor-main.html",
        "systems/zerok/templates/actor/actor-skills.html",
        "systems/zerok/templates/actor/actor-tnt.html",
        "systems/zerok/templates/actor/actor-exp.html",
        "systems/zerok/templates/actor/actor-combat.html",
        "systems/zerok/templates/actor/actor-gear.html",
        "systems/zerok/templates/actor/actor-corruption.html",
        "systems/zerok/templates/actor/actor-psykana.html",
        "systems/zerok/templates/actor/actor-background.html",    
        "systems/zerok/templates/item/item-header.html"



        // Item Sheet Partials

    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};
export const sleep=function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//returns an actors token object, not the token document. Will search teh active canvas for the current token.
export const getActorToken=function(actor){
    if(actor.token!==null){
        return actor.token._object; 
    }
    let tokens=[];
    if(canvas.tokens.children.length>0){
        tokens=canvas.tokens.children[0].children;
    }
    
    let t=null;
    for(let token of tokens){
        if(token.data.actorId===actor.data._id){
            t=token;
        }
    }
    return t;
}
export const tokenDistance=function(token1,token2){
    let gridRatio=canvas.dimensions.distance/canvas.dimensions.size;
    if(canvas.scene.data.gridType===0){
        let distancePx=Math.sqrt((Math.pow(token1.data.x-token2.data.x),2)+Math.pow((token1.data.y-token2.data.y),2))
        return distancePx*gridRatio
    }
    if(canvas.scene.data.gridType===1){
        let xDistance=Math.abs(gridRatio*(token1.data.x-token2.data.x));
        let yDistance=Math.abs(gridRatio*(token1.data.y-token2.data.y));
       
        return Math.max(xDistance,yDistance) 
    }

}
export const getItem= function(actor, name){
    for(let item of actor.items){
        if(item.name===name){
            return item;
        }
    }
    return null;
};

export const getSkills= async function(){
    let skillCollection=[];
    const pack = game.packs.find(p => p.collection == "zerok.zerokskills-fantasy");
    let skills = [];
    await pack.getIndex().then(index => skills = index);
    for (let sk of skills)
    {
        let skillItem = undefined;
        await pack.getDocument(sk._id).then(skill => skillItem = skill);
        skillCollection.push(skillItem.data);
    }
    return skillCollection;
};
export const objectByString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

export const setNestedKey = (obj, path, value) => {
    if (path.length === 1) {
        obj[path] = value
        return
    }
    return setNestedKey(obj[path[0]], path.slice(1), value)
}
export const makeRangeArray=function (upperBounds, values) {
    var rangeArray = new Array(upperBounds[upperBounds.length-1]);

    var idx = 0;
    for (var i=0; i < rangeArray.length; i++) {
        if (i > upperBounds[idx]) {
            idx++;
        }
        rangeArray[i] = values[idx];
    }
    return rangeArray;
}
export const isEmpty=function (obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
//
//for looping through items to give them flags
/*
console.log("starting item flag update")
    let actors=game.actors;
    
    let weaponFlags=duplicate(game.zerok.zerok.weaponFlags);
    for(let actor of actors){
        let items=actor.items;
        for(let item of items){
            if(item.type==="rangedWeapon"||item.type==="meleeWeapon"||item.type==="psychicPower"||item.type==="ammunition"){
                let mod=duplicate(item);
                if(mod.flags===undefined){
                    mod=mod.data;
                }   
                let update=false;
                console.log(mod);
                if(mod.flags.specials===undefined){
                    update=true;
                    mod.flags.specials={}
                }
                for (let [key, spec] of Object.entries(weaponFlags)){
                    if(mod.flags.specials[key]===undefined){
                        update=true;
                        mod.flags.specials[key]=spec;
                    }
                } 
                if(update){
                    console.log(await actor.updateEmbeddedDocuments("Item",mod));
                }
                
            }

        }
    }

//import data packs
// Reference a Compendium pack by it's callection ID




/* this is already uploaded should probably put this into a utilities script sheet or something
    const pack = game.packs.find(p => p.collection === `zerok.skills`);

    // Load an external JSON data file which contains data for import
    const response = await fetch("systems/zerok/imports/skills.json");
    const content = await response.json();
    console.log(content);
    // Create temporary Actor entities which impose structure on the imported data
    const items = await Item.create(content, {temporary: true});
    console.log(items);

    // Save each temporary Actor into the Compendium pack
    for ( let i of items ) {
        await pack.importEntity(i);
        console.log(`Imported Item ${i.name} into Compendium pack ${pack.collection}`);
    }
    */ 



