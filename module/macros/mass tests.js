
new Dialog({
    title: "Mass Test",
    content: `<div><label>Characteristic:</label><select name="characteristic"><option value="agi">agi</option><option value="t">t</option><option value="wp">wp</option><option value="s">s</option><option value="per">per</option><option value="int">int</option><option value="fel">fel</option><option value="ws">ws</option><option value="bs">bs</option></select></div><div><label>Modifier:</label> <input id="modifier" type="text" name="modifier" value="0" autofocus/></div>`,
    buttons: {
        submit: {
            label: 'OK',
            callback: async(html) => {
                let mod = Number($(html).find('input[name="modifier"]').val());
                let char = $(html).find('select[name="characteristic"]').val();

                for(let token of canvas.tokens.controlled){
                    let tokenActor=token.actor;
                    let tokenActorData=token.actor.data;
                    let data=token.actor.data.data;

                    let testTarget=data.characteristics[char].total+mod;
                    let test=await game.zerok.zerokRolls.zerokTest(char, "Test", testTarget, tokenActor, char);
                    let newColor="";
                    if(test.value){
                        newColor="#00ff00";
                    }else{
                        newColor="#ff0000";
                    }

                    token.update({tint: newColor});
                }

            }
        }
    },
    default: "submit",


    width:100}
          ).render(true);



