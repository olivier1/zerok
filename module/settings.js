export const registerSystemSettings = function() {
    //Register if the user wants to disable sounds effects or not
    game.settings.register("zerok","soundEffects",{
        name: "System Sound Effects",
        hint: "Enable system sound effects.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
    })
    //Setting if the DM wants the game to obfuscate the damage dealt and taken
    game.settings.register("zerok","privateDamage",{
        name: "Damage Report",
        hint: "Obfuscate damage report.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
    })
    //Setting if the DM wants the game to obfuscate the perils of the warp results
    game.settings.register("zerok","privatePerils",{
        name: "Perils Report",
        hint: "Obfuscate perils of the warp report.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
    })
    //Setting to disable the money on dark heresy sheets
    game.settings.register("zerok","dhMoney",{
        name: "Dark Heresy Money",
        hint: "Enable a section on the dark heresy sheet if using money variant rules.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
    })
}