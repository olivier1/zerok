export const zerok={};
zerok.races=["Human",
              "Elf",
            "Dwarf",
            "Halfling",
            "Skaven",
            "Orc",
            "Mutant",
            "Goblin",
            "Monster"]
zerok.size=[
    {"name":"Miniscule",
     "mod":-30,
     "stealth":30,
     "movement":-3,
     "size":1},
    {"name":"Puny",
     "mod":-20,
     "stealth":20,
     "movement":-2,
     "size":1},
    {"name":"Scrawny",
     "mod":-10,
     "stealth":10,
     "movement":-1,
     "size":1},
    {"name":"Average",
     "mod":0,
     "stealth":0,
     "movement":0,
     "size":1},
    {"name":"Hulking",
     "mod":10,
     "stealth":-10,
     "movement":1,
     "size":1.2},
    {"name":"Enormous",
     "mod":20,
     "stealth":-20,
     "movement":2,
     "size":2},
    {"name":"Massive",
     "mod":30,
     "stealth":-30,
     "movement":3,
     "size":3},
    {"name":"Immense",
     "mod":40,
     "stealth":-40,
     "movement":4,
     "size":4},
    {"name":"Monumental",
     "mod":50,
     "stealth":-50,
     "movement":5,
     "size":5},
    {"name":"Titanic",
     "mod":60,
     "stealth":-60,
     "movement":6,
     "size":6}]
zerok.carry=[
    {"carry":0.9,
     "lift":2.25,
     "push":4.5},
    {"carry":2.25,
     "lift":4.5,
     "push":9},
    {"carry":4.5,
     "lift":9,
     "push":18},
    {"carry":9,
     "lift":18,
     "push":36},
    {"carry":18,
     "lift":36,
     "push":72},
    {"carry":27,
     "lift":54,
     "push":108},
    {"carry":36,
     "lift":72,
     "push":144},
    {"carry":45,
     "lift":90,
     "push":180},
    {"carry":56,
     "lift":112,
     "push":224},
    {"carry":67,
     "lift":134,
     "push":268},
    {"carry":78,
     "lift":156,
     "push":312},
    {"carry":90,
     "lift":180,
     "push":360},
    {"carry":112,
     "lift":224,
     "push":448},
    {"carry":225,
     "lift":450,
     "push":900},
    {"carry":337,
     "lift":674,
     "push":1348},
    {"carry":450,
     "lift":900,
     "push":1800},
    {"carry":675,
     "lift":1350,
     "push":2700},
    {"carry":900,
     "lift":1800,
     "push":3600},
    {"carry":1350,
     "lift":2700,
     "push":5400},
    {"carry":1800,
     "lift":3600,
     "push":7200},
    {"carry":2250,
     "lift":4500,
     "push":9000}]
zerok.extraHits={ 
    "head":[{"value":"head","label":"Head"},{"value":"head","label":"Head"},{"value":"rArm","label":"Right Arm"},{"value":"body","label":"Body"},"lArm",{"value":"body","label":"Body"}],
    "rArm":[{"value":"rArm","label":"Right Arm"},{"value":"rArm","label":"Right Arm"},{"value":"body","label":"Body"},{"value":"head","label":"Head"},{"value":"body","label":"Body"},{"value":"lArm","label":"Left Arm"}],
    "lArm":[{"value":"lArm","label":"Left Arm"},{"value":"lArm","label":"Left Arm"},{"value":"body","label":"Body"},{"value":"head","label":"Head"},{"value":"body","label":"Body"},{"value":"rArm","label":"Right Arm"}],
    "body":[{"value":"body","label":"Body"}, {"value":"body","label":"Body"}, {"value":"lArm","label":"Left Arm"}, {"value":"head","label":"Head"}, {"value":"rArm","label":"Right Arm"},{"value":"body","label":"Body"}],
    "lLeg":[{"value":"lLeg","label":"Left Leg"}, {"value":"lLeg","label":"Left Leg"}, {"value":"body","label":"Body"},{"value":"lArm","label":"Left Arm"}, {"value":"head","label":"Head"},{"value":"body","label":"Body"}],
    "rLeg":[{"value":"rLeg","label":"Right Leg"}, {"value":"rLeg","label":"Right Leg"}, {"value":"body","label":"Body"},{"value":"rArm","label":"Right Arm"}, {"value":"head","label":"Head"}, {"value":"body","label":"Body"}]}
zerok.damageTypes=["Bullet","Claw","Arrows","Blade","Blunt","Fire","Piercing"]
zerok.meleeWeaponTypes=["Ordinary", "Parrying", "Cavalry", "Two-Handed", "Flail"]
zerok.rangedWeaponTypes=["Ordinary","Entangling", "Crossbow", "Longbow", "Gunpowder", "Engineer", "Sling", "Throwing"]
zerok.rangedWeaponClasses=[ "Basic","Pistol", "Heavy", "Thrown"]
zerok.meleeWeaponClasses=["Melee", "Melee Two-handed", "Shield"]
zerok.psychicPowerTypes=["Psychic Bolt", "Psychic Barrage", "Psychic Storm", "Psychic Blast", "Buff/Debuff", "Other"]
zerok.psychicDisciplines=["Biomancy","Divination","Pyromancy","Telekinesis","Telepathy","Sanctic Daemonology","Malefic Daemonology","Tzeench","Slaanesh","Nurgle","Chapter","WAAAGH!","Navigator"]
zerok.spaceshipWeaponLocations=["Dorsal","Prow","Keel","Port","Starboard"]
zerok.spaceshipWeaponTypes=["Macrocannon","Lance","Torpedo","Hangar"]
zerok.spaceshipCargoTypes=["Food Supplies","Unrefined Materials","Refined Materials","Military Technology","Manufacturing Technology","Survival Technology","Ship Parts","Energy Source","Entertainment","Contraband","Livestock","Xeno-Artifacts","Archeotech","Torpedoes"]
zerok.spaceshipComponentStatuses=["Online", "Damaged", "Destroyed"]
zerok.spaceshipCargoRarity=["Poor","Common","Rare","Unique"]
zerok.spaceshipSquadronTypes=["Fighter","Bomber","Assault Boat","Civilian"]
zerok.aptitudes=["Weapon Skill", "Ballistic Skill", "Strength", "Toughness", "Agility", "Intelligence", "Perception", "Willpower", "Fellowship", "Offence", "Finesse", "Defence","Tech", "Knowledge", "Leadership", "Fieldcraft", "Social","Psyker"]
zerok.advancementTypes=["Custom","Characteristic Upgrade","Skill Upgrade", "Talent"]
//For costs put the number of matching aptitudes into the array, then whatever other parameter
zerok.characteristicUpgradeCosts=[{"5":500,"10":750,"15":1000,"20":1500,"25":2500},
                                  {"5":250,"10":500,"15":750,"20":1000,"25":1500},
                                  {"5":100,"10":250,"15":500,"20":750,"25":1250}]
zerok.skillUpgradeCosts=[{"0":300,"10":600,"20":900,"30":1200},
                         {"0":200,"10":400,"20":600,"30":800},
                         {"0":100,"10":200,"20":300,"30":400}]
zerok.talentCosts=[[600,900,1200],
                   [300,450,600],
                   [200,300,400]]
zerok.psykerTypes={"bound":{"push":2,"sustain":"+10 to Phenomena rolls, -1 to PR per power after the first","perils":0},"unbound":{"push":4,"sustain":"+10 to all rolls on Table 6–2: Psychic Phenomena (see page 196), decrease psy rating by 1 per power.","perils":5}, "daemon":{"push":3, "sustain":"+10 to all rolls on Table 6–2: Psychic Phenomena (see page 196), decrease psy rating by 1 per power. He is not affected by the result unless the result causes Perils of the Warp, though those around him might be.","perils":10},
                    "navigator":{"push":-1,"sustain":"N/A","perils":-1}}
zerok.navigatorPowerTraining=["Novice","Adept","Master"]
zerok.armorFlags={
    "explosive": {
        "value": false,
        "label": "Explosive Resistant",
        "description": "This armor is built to resist explosions, its armor value counts as double against explosive damage."
    },
    "rending": {
        "value": false,
        "label": "Rending Resistant",
        "description": "This armor is built to resist rending attacks, its armor value counts as double against rending damage."
    },
    "impact": {
        "value": false,
        "label": "Impact Resistant",
        "description": "This armor is built to resist impacts, its armor value counts as double against impact damage."
    },
    "energy": {
        "value": false,
        "label": "Energy Resistant",
        "description": "This armor is built to resist energy attacks, its armor value counts as double against energy damage."
    },
    "flamerepellent": {
        "value": false,
        "label": "Flame Repellent",
        "description": "This armor negates flammable substances that come into contact with it, making the wearer immune to the flame weapon quality."
    },
    "holy": {
        "value": false,
        "label": "Holy",
        "description": "This armor has been blessed by a higher power, it still blocks warp attacks or attacks that normally bypass armor."
    }
}
zerok.weaponFlags={
   "armourpiercing": {
        "value": false,
        "label": "Armour Piercing",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "balanced": {
        "value": false,
        "label": "Balanced",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "defensive": {
        "value": false,
        "label": "Defensive",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "experimental": {
        "value": false,
        "label": "Experimental",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    
    
    "tearing": {
        "value": false,
        "label": "Impact",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "precise": {
        "value": false,
        "label": "Precise",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "pummeling": {
        "value": false,
        "label": "Pummeling",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "shrapnel": {
        "value": false,
        "label": "Shrapnel",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "slow": {
        "value": false,
        "label": "Slow",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "snare": {
        "value": false,
        "label": "Snare",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "special": {
        "value": false,
        "label": "Special",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "tiring": {
        "value": false,
        "label": "Tiring",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "unreliable": {
        "value": false,
        "label": "Unreliable",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    }
}
zerok.lasModes=["normal","overcharge","overload"]
zerok.itemQualities=["Poor","Common","Good","Best"]
zerok.skillChars={"ws":{"name":"ws","caps":"WS"},"bs":{"name":"bs","caps":"BS"},"s":{"name":"s","caps":"S"},"t":{"name":"t","caps":"T"},"agi":{"name":"agi","caps":"AGI"},"int":{"name":"int","caps":"INT"},"wp":{"name":"wp","caps":"WP"},"fel":{"name":"fel","caps":"FEL"}}
zerok.skillTraining={"0":{"name":"Untrained","value":-20},"1":{"name":"Known","value":0},"2":{"name":"Trained","value":10},"3":{"name":"Experienced","value":20},"4":{"name":"Veteran","value":30}}
zerok.ACTIVE_EFFECT_MODES = {
    CUSTOM: 0,
    MULTIPLY: 1,
    ADD: 2,
    DOWNGRADE: 3,
    UPGRADE: 4,
    OVERRIDE: 5
};
zerok.StatusEffects = [
    {
        id: "dead",
        label: "Dead",
        icon: "icons/svg/skull.svg",
        overlay: true,
        flags: { core: { statusId: "dead" } }
    },
    {
        id: "unconscious",
        label: "Unconscious",
        icon: "icons/svg/unconscious.svg",
        flags: { core: { statusId: "unconscious" } }
    },
    {
        id: "running",
        label: "Running",
        icon: "systems/zerok/icons/running.png",
        flags: { core: { statusId: "running" } },
        duration:{

            rounds:1
        }
    },
    {
        id: "totalDef",
        label: "Total Defense",
        icon: "systems/zerok/icons/defense.png",
        flags: { core: { statusId: "totalDef" } },
        duration:{

            rounds:1
        }
    },
    {
        id: "stunned",
        label: "Stunned",
        icon: "icons/svg/daze.svg",
        flags: { core: { statusId: "stunned" } }
    },
    {
        id: "prone",
        label: "Prone",
        icon: "icons/svg/falling.svg",
        flags: { core: { statusId: "prone" } }
    },
    {
        id: "snare",
        label: "Snare",
        icon: "icons/svg/net.svg",
        flags: { core: { statusId: "snare" } }
    },
    {
        id: "blind",
        label: "Blind",
        icon: "icons/svg/blind.svg",
        flags: { core: { statusId: "blind" } }
    },
    {
        id: "deaf",
        label: "Deaf",
        icon: "icons/svg/deaf.svg",
        flags: { core: { statusId: "deaf" } }
    },
    {
        id: "shock",
        label: "Shocked",
        icon: "icons/svg/terror.svg",
        flags: { core: { statusId: "shock" } },
        changes:[
            {key: "data.globalMOD.value", value: -10, mode:zerok.ACTIVE_EFFECT_MODES.ADD}            
        ]
    },
    {
        id: "fire",
        label: "Fire",
        icon: "icons/svg/fire.svg",
        flags: { core: { statusId: "fire" } }
    },
    {
        id: "corrode",
        label: "Corroded",
        icon: "icons/svg/acid.svg",
        flags: { core: { statusId: "corrode" } }
    },
    {
        id: "bleeding",
        label: "Bleeding",
        icon: "icons/svg/blood.svg",
        tint:"#8a0303",
        flags: { core: { statusId: "bleeding" } }
    },
    {
        id: "toxic",
        label: "Toxic",
        icon: "icons/svg/poison.svg",
        flags: { core: { statusId: "toxic" } }
    },
    {
        id: "rad",
        label: "Radiation",
        icon: "icons/svg/radiation.svg",
        flags: { core: { statusId: "rad" } }
    },
    {
        id: "frenzy",
        label: "Frenzy",
        icon: "systems/zerok/icons/frenzy.png",
        flags: { core: { statusId: "frenzy" } },
        changes:[
            {key: "data.characteristics.s.value", value: 10, mode:zerok.ACTIVE_EFFECT_MODES.ADD},
            {key: "data.characteristics.t.value", value: 10, mode:zerok.ACTIVE_EFFECT_MODES.ADD},
            {key: "data.characteristics.wp.value", value: 10, mode:zerok.ACTIVE_EFFECT_MODES.ADD},
            {key: "data.characteristics.ws.value", value: 10, mode:zerok.ACTIVE_EFFECT_MODES.ADD},
            {key: "data.characteristics.bs.value", value: -20, mode:zerok.ACTIVE_EFFECT_MODES.ADD},
            {key: "data.characteristics.int.value", value: -20, mode:zerok.ACTIVE_EFFECT_MODES.ADD},
            {key: "data.characteristics.fel.value", value: -20, mode:zerok.ACTIVE_EFFECT_MODES.ADD}
        ]
    },
    {
        id: "buff",
        label: "Buff",
        icon: "icons/svg/upgrade.svg",
        flags: { core: { statusId: "buff" } }
    },
    {
        id: "weakened",
        label: "Weakened",
        icon: "icons/svg/downgrade.svg",
        flags: { core: { statusId: "weakened" } }
    },
    {
        id: "target",
        label: "Target",
        icon: "icons/svg/target.svg",
        flags: { core: { statusId: "target" } }
    },
    {
        id: "marked",
        label: "Marked",
        icon: "icons/svg/eye.svg",
        flags: { core: { statusId: "marked" } }
    },
    {
        id: "crippled",
        label: "Crippled",
        icon: "icons/svg/sun.svg",
        flags: { core: { statusId: "crippled" } }
    },
    {
        id: "blessed",
        label: "Blessed",
        icon: "icons/svg/angel.svg",
        flags: { core: { statusId: "blessed" } }
    },
    {
        id: "fireShield",
        label: "FireShield",
        icon: "icons/svg/fire-shield.svg",
        flags: { core: { statusId: "fireShield" } }
    },
    {
        id: "coldShield",
        label: "IceShield",
        icon: "icons/svg/ice-shield.svg",
        flags: { core: { statusId: "coldShield" } }
    },
    {
        id: "magicShield",
        label: "MagicShield",
        icon: "icons/svg/mage-shield.svg",
        flags: { core: { statusId: "magicShield" } }
    },
    {
        id: "holyShield",
        label: "HolyShield",
        icon: "icons/svg/holy-shield.svg",
        flags: { core: { statusId: "holyShield" } }
    },
    {
        id: "ws",
        label: "Weapon Skill Damage",
        icon: "systems/zerok/icons/ws.png",
        flags: { core: { statusId: "ws" } }
    },
    {
        id: "bs",
        label: "Ballistic Skill Damage",
        icon: "systems/zerok/icons/bs.png",
        flags: { core: { statusId: "bs" } }
    },
    {
        id: "s",
        label: "Strength Damage",
        icon: "systems/zerok/icons/s.png",
        flags: { core: { statusId: "s" } }
    },
    {
        id: "t",
        label: "Toughness Damage",
        icon: "systems/zerok/icons/t.png",
        flags: { core: { statusId: "t" } }
    },
    {
        id: "agi",
        label: "Agility Damage",
        icon: "systems/zerok/icons/agi.png",
        flags: { core: { statusId: "agi" } }
    },
    {
        id: "int",
        label: "Intelligence Damage",
        icon: "systems/zerok/icons/int.png",
        flags: { core: { statusId: "int" } }
    },
    {
        id: "per",
        label: "Perception Damage",
        icon: "systems/zerok/icons/per.png",
        flags: { core: { statusId: "per" } }
    },
    {
        id: "wp",
        label: "Willpower Damage",
        icon: "systems/zerok/icons/wp.png",
        flags: { core: { statusId: "wp" } }
    },
    {
        id: "fel",
        label: "Fellowship Damage",
        icon: "systems/zerok/icons/fel.png",
        flags: { core: { statusId: "fel" } }
    },
    {
        id: "arm",
        label: "Arm Injury",
        icon: "systems/zerok/icons/arm.png",
        flags: { core: { statusId: "arm" } }
    },
    {
        id: "leg",
        label: "Leg Injury",
        icon: "systems/zerok/icons/leg.png",
        flags: { core: { statusId: "leg" } }
    }
];
