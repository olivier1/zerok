let chatScatter={user: game.user._id,
                                 speaker:{actor,alias:game.user.name},
                                 content:`Scatter! <img class="zerok" src="../systems/zerok/icons/scatter.png">`,
                                 flavor:"Rolling Scatters!",
                                 author:game.user.name};
                await ChatMessage.create(chatScatter,{});
                let distanceRoll=new Roll("1d5");
                distanceRoll.roll();
                await distanceRoll.toMessage({
                    speaker: ChatMessage.getSpeaker({ actor: actor }),
                    flavor: "Rolling for scatter distance."
                });
                let directionRoll=new Roll("1d10");
                directionRoll.roll();
                await directionRoll.toMessage({
                    speaker: ChatMessage.getSpeaker({ actor: actor }),
                    flavor: "Rolling for scatter direction."
                });