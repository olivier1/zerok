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
zerok.damageTypes=["Explosive","Rending","Impact","Energy"]
zerok.meleeWeaponTypes=["Chain", "Force", "Power", "Shock", "Low-tech", "Exotic"]
zerok.rangedWeaponTypes=["Bolt","Grenade", "Flame", "Las", "Melta", "Plasma", "Solid projectile", "Launcher", "Low-tech", "Exotic"]
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
    "accurate": {
        "value": false,
        "num": 0,
        "label": "Accurate",
        "description": "The weapon is crafted for precision attacks, with perfectly crafted las-lenses or finely honed barrels. This grants an additional bonus of +10 to the firer’s Ballistic Skill when used with an Aim action, in addition to the normal bonus granted from Aiming. When a character fires a single shot from a single Basic weapon with the Accurate quality while benefiting from the Aim action, the attack inflicts an additional 1d10 damage for every two degrees of success beyond the first (to a maximum of an extra Xd10, x is equal to 2 by default). These extra d10s cannot generate Righteous Fury. The accurate quality is only active while the target is further than 20m away."
    },
    "balanced": {
        "value": false,
        "label": "Balanced",
        "description": "Carefully weighted, the weapon moves naturally with the user, making his parries more successful. Balanced weapons grant a +10 bonus to Weapon Skill tests made to Parry. Even if the wielder is using multiple Balanced weapons, he only gains the bonus once."
    },
    "blast": {
        "value": false,
        "num": 0,
        "label": "Blast",
        "description": "Attacks from this weapon explode on impact, hurling debris and shrapnel in all directions. When working out a hit from a Blast weapon, anyone within the weapon’s blast radius in metres, indicated by the number in parentheses, is also suffers a single hit from the weapon. Roll damage once and apply it to each character affected by the blast. A Blast weapon also scatters when the user fails his Ballistic Skill test when firing it (see page 230)."
    },
    "concussive": {
        "value": false,
        "num": -1,
        "label": "Concussive",
        "description": "Concussive weapons strike with a powerful impact strong enough to temporarily knock a foe senseless. When a target is struck by a Concussive weapon, he must take a Toughness test with a penalty equal to 10 times the number in parentheses (X). For example, a weapon with Concussive (2) would impose a –20 on this Toughness test and Concussive (0) would cause a test with no penalty. If he fails, the target is Stunned for 1 round per degree of failure. If the attack also inflicted an amount of damage greater than the target’s Strength bonus, the target is knocked Prone."
    },
    "corrosive": {
        "value": false,
        "label": "Corrosive",
        "description": "These weapons utilise highly caustic acids which cause damage to both the target and his equipment. If a target is struck by an attack from a Corrosive weapon, the Armour points of any armour worn by the target in that location are reduced by 1d10 points. If the Armour points of the armour are reduced below 0 or the target is not wearing any armour in that location, the excess amount of Armour point damage (or the whole amount if the target is wearing no armour in that location) is dealt to the target. This excess damage is not reduced by Toughness. A target’s armour can be reduced multiple times by the effects of a Corrosive weapon, and the Armour point damage is cumulative. A suit of armour can be repaired with a successful Challenging (+0) Tech-Use test, and an Acolyte who possesses the Armour Monger talent can repair the armour while making use of that talent."
    },
    "crippling": {
        "value": false,
        "num": 0,
        "label": "Crippling",
        "description": "Designed for cruelty and viciousness, crippling devices are favourites amongst those who prize pain and suffering. When a target suffers at least one wound from this weapon, he is considered Crippled for the remainder of the encounter or until healed of all damage. If a Crippled character takes more than a Half Action on his turn, he suffers Rending damage equal to the number in parentheses (X) to the Hit Location that suffered the original damage. This damage is not reduced by Armour or Toughness."
    },
    "crushing": {
        "value": false,
        "label": "Crushing",
        "description": "This weapon is extremely weighty and impactful, as such it applies twice it's wielder's strength bonus in melee combat."
    },
    "daemonbane": {
        "value": false,
        "label": "Daemonbane",
        "description": "Some weapons receive blessings that give them a level of power against the minions of the Dark Gods, but there are special Ordo Malleus rites that go beyond mere sanctification. When used against targets with the Daemonic trait, weapons with this quality gain the Vengeful (8) quality and their damage is not reduced by the target’s Toughness bonus."
    },
    "defensive": {
        "value": false,
        "label": "Defensive",
        "description": "A Defensive weapon, such as a shield, is intended to be used to block attacks and is awkward when used to attack. A weapon with this quality grants a +15 bonus to tests made when used to Parry, but imposes a –10 penalty on tests to make attacks with it."
    },
    "encumbering": {
        "value": false,
        "num": 0,
        "label": "Encumbering",
        "description": "Encumbering(X) reduces your movement by X"
    },
    "felling": {
        "value": false,
        "num": 0,
        "label": "Felling",
        "description": "Felling weapons make a mockery of even the most resilient enemies, cutting dense tissue and bone with ease. When calculating damage from Felling weapons, reduce the target’s Unnatural Toughness bonus by the number in parentheses (X). Felling only reduces Unnatural Toughness, not the target’s base Toughness bonus, and does not persist once the damage has been calculated."
    },
    "flame": {
        "value": false,
        "label": "Flame",
        "description": "Using materials such as promethium and incendiary powders, this weapon ignites with primordial fire. Whenever a target is struck by an attack with this quality (even if he suffers no damage), he must make an Agility test or be set on fire (see page 243). If the target of the Flame attack is a vehicle, the pilot must make the appropriate Operate skill test with a bonus equal to the vehicle’s Armour value on the facing hit by the Flame attack. If the pilot fails, the vehicle immediately catches fire (see the On Fire! sidebar on page 263)."
    },
    "flexible": {
        "value": false,
        "label": "Flexible",
        "description": "These are often made of linked metal, rope, or other non-rigid materials that deny defensive counters. They cannot be Parried, though they themselves can be used to Parry an opponent’s weapon."
    },
    "force": {
        "value": false,
        "label": "Force",
        "description": "A force weapon relies on the user’s mind to unlock its true potential, suddenly turning a sword or staff into a device burning with eldritch energies able to reave tanks. Force weapons count as Best craftsmanship Mono variants of the equivalent Low-Tech weapon. In the hands of a psyker, the weapon also deals bonus damage and gains bonus penetration equal to the psyker’s base psy rating (so a psy rating 3 would grant +3 damage and +3 penetration), and the damage type changes to Energy. In addition, whenever a psyker damages an opponent, he may take a Focus Power action (Opposed with Willpower) as a Half Action. If he wins the test, then for every degree of success, the Force weapon’s wielder deals an additional 1d10 Energy damage, ignoring Armour and Toughness bonus. Psykers always use their base psy rating when determining psychic strength for this test, and cannot generate Psychic Phenomena on this test. Force weapons cannot be destroyed by weapons with the Power Field quality."
    },
    "graviton": {
        "value": false,
        "label": "Graviton",
        "description": "Graviton weapons alter the target’s local gravity field, transforming protective armour into crushing force. When a weapon with the Graviton quality hits a target, it gives 2x of the target's AP in bonus damage. When damaging vehicles the weapon deals 1d10 damage ignoring armor and gains vengeful(9)."
    },
    "hallucinogenic": {
        "value": false,
        "num": 0,
        "label": "Hallucinogenic",
        "description": "Where most weapons seek to harm the body, those with this quality seek to damage the mind with exotic chemicals and neurotoxic drugs. When a creature is struck by a weapon with the Hallucinogenic quality, it must make a Toughness test with a penalty equal to 10 times the number in parentheses (X) or suffer a temporary delusion and roll 1d10 on Table 5–3: Hallucinogenic Effects. Respirators and sealed armour provide a +20 bonus to this test. The effects last for 1 round, plus 1 additional round for every degree of failure."
    },
    "haywire": {
        "value": false,
        "num": 0,
        "label": "Haywire",
        "description": "A foul affront to the Omnissiah in the eyes of many Tech-Priests, devices with this quality seek to cripple machine spirits and make metal as weak as flesh. Everything within the field’s radius, indicated by the number in parentheses, is affected; Haywire (3), for example, would affect an area with a three metre radius. Roll 1d10 on Table 5–4: Haywire Field Effects (adding any modifiers from the weapon) to determine the strength of the effect. As the field slowly dissipates, the strength lessens one step in severity each round until it becomes Insignificant (i.e., a result of Major Disruption would become Minor Disruption the following round and then cease to have an effect the round after that). Additional Haywire attacks in the same area do not stack but instead create a new effect that is either ignored if lower than the current effect or replaces the old one if higher."
    },
    "ignoreNaturalArmor": {
        "value": false,
        "label": "Ignore Natural Armor",
        "description": "Some weapons ignore the natural armor of their targets. This weapon ignores the armor granted by the natural armor trait."
    },
    "ignoreSoak": {
        "value": false,
        "label": "Ignore Soak",
        "description": "Some weapons deal damage regardless on the target's resilience. This weapon deals damage which ignores armor and toughness bonus reduction."
    },
    "indirect": {
        "value": false,
        "num": 0,
        "label": "Indirect",
        "description": "Many weapons are designed to be fired in high arcs at unseen foes or thrown from protective cover at charging enemies. Indirect weapons do not require line of sight to their target, but the attacker must still be aware of his intended target’s location, either through last known position, use of a spotter, or other means. When making any ranged attack action (Standard Attack, Semi-Auto Burst, or Full Auto Burst) with an Indirect weapon, the attack does not have to target a location in line of sight of the active player, but is made at a –10 penalty and requires a Full Action instead of the normal Half Action. The GM makes the final determination on whether the character is aware of his target’s location, and can add penalties to this ranged attack based on how aware the character is of his target. For each hit the ranged attack inflicts, roll once on the Scatter Diagram (see page 230). The hit instead strikes the ground at a location a number of metres away from the intended target, in the direction rolled on the Scatter Diagram, equal to 1d10 minus the firer’s Ballistic Skill bonus (to a minimum of zero). If the ranged attack fails, or if the Semi-Auto Burst or Full Auto Burst actions fail to achieve the maximum potential hits, the remaining missed hits—up to the maximum potential hits for the rate of fire used in the attack—are still fired, but miss their target. For each missed hit, roll once on the Scatter Diagram. The hit instead strikes the ground at a location Xd10 metres away from the intended target in the direction rolled on the Scatter Diagram, where X is equal to the number in parentheses (X)."
    },
    "innacurate": {
        "value": false,
        "label": "Inaccurate",
        "description": "Poorly manufactured with often shoddy construction, inaccurate weapons are common in underhive gangs and heretical cults. A character gains no benefit from the Aim action when attacking with a weapon with this quality."
    },
    "lance": {
        "value": false,
        "label": "Lance",
        "description": "Lance weapons focus devastating energy, piercing armour with ease. Weapons with this quality have a variable penetration value that is dependent on the accuracy of each shot. When a target is hit by a weapon with the Lance quality, increase the weapon’s penetration value by its base value once for each degree of success the attacker achieves. For example, if a Lance weapon had a base penetration value of 5 and hit with three degrees of success (adding 3x5=15), the total penetration for the attack would be 20."
    },
    "lasModal": {
        "value": false,
        "label": "Las Modal",
        "mode":0,
        "description": "The standard las weapon has a variable setting option, allowing it to fire higher-powered bursts. It may be set to overcharge mode, dealing +1 damage, but using two shots worth of ammunition per shot fired. Further, the weapon may be set to overload mode, dealing +2 damage and gaining +2 penetration. In this case, it uses four shots of ammunition per shot fired, loses Reliable, and gains Unreliable."
    },
    "maximal": {
        "value": false,
        "maximal": false,
        "label": "Maximal",
        "description": "Many energy weapons have multiple settings, allowing the user greater tactical flexibility in combat. As a Free Action, this weapon can be switched between two modes: Standard (which uses the normal weapon profile) and Maximal. When the weapon is fired on Maximal, it adds 10 metres to its range, 1d10 to its damage, and +2 to its penetration. If it has the Blast quality, then the value of this quality is increased by 2 (i.e., Blast [3] becomes Blast [5]). The weapon also uses three times the normal amount of ammunition per shot and gains the Recharge quality."
    },
    "melta": {
        "value": false,
        "label": "Melta",
        "description": "These weapons rely on intense heat to negate protective armour, turning even the thickest to steaming liquid. This weapon doubles its penetration when firing at Short range or closer."
    },
    "niditus": {
        "value": false,
        "label": "Niditus",
        "description": "When a psyker suffers damage from this weapon, he must make a Difficult (–10) Willpower test or be Stunned for a number of rounds equal to his degrees of failure. When a target with the Warp Instability trait suffers damage from this weapon, it must immediately test for Instability with a –10 penalty."
    },
    "overheats": {
        "value": false,
        "label": "Overheats",
        "description": "Through inefficient shielding, defective venting, or simply inherent design, the weapon often becomes overcome with the heat of its ammunition or firing methods. On an attack roll of 91 or higher, this weapon overheats. The wielder suffers Energy damage equal to the weapon’s damage with a penetration of 0 to an arm location (the arm holding the weapon if the weapon was fired one-handed, or a random arm if the weapon was fired with two hands). The wielder may choose to avoid taking the damage by dropping the weapon as a Free Action. A weapon that overheats must spend the round afterwards cooling down, and cannot be fired again until the second round after overheating. A weapon with this quality does not jam, and any effect that would cause the weapon to jam instead causes the weapon to overheat."
    },
    "powerfield": {
        "value": false,
        "label": "Power Field",
        "description": "Power fields form a cloud of disruptive energy, allowing a weapon to strike with terrible force. When the character successfully uses this weapon to Parry an attack made with a weapon that lacks this quality, roll 1d100; on a result of 26 or higher, he destroys the attacker’s weapon. Weapons with the Warp Weapon or Force quality, and Natural Weapons, are immune to this effect."
    },
    "primitive": {
        "value": false,
        "num": 0,
        "label": "Primitive",
        "description": "Crude and basic in design, these kinds of weapons, while still deadly, are less effective against modern armour. When rolling for damage with these weapons, any die result greater than the number in parentheses (X) counts as that number instead. For example, a weapon with Primitive (7) would count all damage rolls of 8, 9 or 10 as 7. These weapons can still generate Righteous Fury (see page 227) as normal, on a damage roll of 10."
    },
    "proven": {
        "value": false,
        "num": 0,
        "label": "Proven",
        "description": "These weapons always inflict massive trauma. When rolling for damage with these weapons, any die result lower than the number in parentheses (X) counts as that number instead. Thus, a Proven (3) weapon would treat any die result of 1 or 2 as a 3 for the purposes of calculating damage."
    },
    "radpoisoning": {
        "value": false,
        "label": "Rad Poisoning",
        "description": "Anyone within 3m of the target must test against toxic(0)"
    },
    "razorsharp": {
        "value": false,
        "label": "Razor Sharp",
        "description": "Certain weapons or ammunition types have the ability to slice right through armour if they hit just right. If the wielder scores three or more degrees of success when attacking with this weapon, the weapon’s penetration value is doubled when resolving any hits from that attack."
    },
    "recharge": {
        "value": false,
        "label": "Recharge",
        "description": "Some weapons lack continuous power or ammunition supplies, and each strike drains capacitors or empties fuel reservoirs. When a weapon with this quality is used to make an attack, that weapon cannot be used to attack again until the end of the next round (in effect, it can only be used once every other round)."
    },
    "reliable": {
        "value": false,
        "label": "Reliable",
        "description": "Using ancient and well-consecrated designs, reliable weapons bring glory to the Omnissiah with each attack. Reliable weapons only jam on an unmodified result of 100. Reliable weapons with the Spray quality, or which do not make hit rolls, never jam."
    },
    "sanctified": {
        "value": false,
        "label": "Sanctified",
        "description": "These weapons are blessed against the forces of Chaos. Any damage inflicted by a Sanctified weapon counts as Holy damage, which can have unique effects against some terrible Daemons and other denizens of the Warp."
    },
    "scatter": {
        "value": false,
        "label": "Scatter",
        "description": "The standard ammunition of these weapons spreads out when fired, ripping apart targets at close range but inflicting considerably less harm from afar. When fired at Point Blank range, this weapon gains +10 to hit and deals +3 damage. When fired at Short range, it gains +10 to hit. At any longer ranges, it suffers –3 damage."
    },
    "shocking": {
        "value": false,
        "label": "Shocking",
        "description": "Shocking weapons can incapacitate their opponents with a powerful surge of energy or other non-lethal means. A target that takes at least 1 point of damage from a Shocking weapon (after Armour and Toughness bonus) must make a Challenging (+0) Toughness test. If he fails, he suffers 1 level of Fatigue and is Stunned for a number of rounds equal to half of his degrees of failure (rounding up)."
    },
    "shockwave": {
        "value": false,
        "label": "Shockwave",
        "description": "When the character scores 4+ DoS on an attack roll the weapon releases shockwaves on every hit, in a blast(3). Secondary targets take half damage and half pen but still must test against concussive(0)"
    },
    "shredding": {
        "value": false,
        "label": "Shredding",
        "description": "Double the weapon's d10s and drop the lowest half."
    },
    "smoke": {
        "value": false,
        "num": 0,
        "label": "Smoke",
        "description": "Rather than inflicting damage, these weapons throw up dense clouds to create cover. When a hit is scored from a weapon with this quality, it creates a smokescreen at the point of impact with a radius in metres equal to the number in parentheses (X). This screen lasts for 1d10+10 rounds, or a shorter time in adverse weather conditions (see the effects of smoke on page 229)."
    },
    "snare": {
        "value": false,
        "num": -1,
        "label": "Snare",
        "description": "These ensnaring devices use masses of fibrous webbing, adhesive fluids, and other entangling materials to bring an enemy down. When a target is struck by a weapon with this quality, it must make an Agility test with a penalty equal ten times the number in parentheses (X) or be Immobilised. For example, a weapon with Snare (1) would impose a –10 penalty on this test. An Immobilised target can attempt no actions other than trying to escape the bonds. As a Full Action, he can make a Challenging (+0) Strength or Agility test, with a penalty equal to ten times the number in parentheses (X). If he succeeds, he bursts free or wriggles out. The target is considered Helpless (see page 229) until he escapes."
    },
    "spray": {
        "value": false,
        "label": "Spray",
        "description": "Spray weapons use large area-effect shots to strike more foes, sacrificing range for wider coverage. Unlike other weapons,they have just one range and, when fired, hit all those in their area of effect. The wielder does not need to test Ballistic Skill; all creatures in the weapon’s path (a cone-shaped area extending in a 30° arc from the firer out to the weapon’s range) must make a Challenging (+0) Agility test or suffer one hit from the weapon. If the wielder does not possess the appropriate Weapon Training talent, targets gain a +20 bonus on the test; this rises to +30 if the weapon is Heavy and the wielder is not braced. Cover does not protect from Spray attacks unless it completely conceals a target. Because there is no attack roll, they are always considered to strike the Body location. They jam if the firer rolls a 9 on any damage dice (before any modifiers are applied). Due to the inaccurate nature of their design, they cannot be used to make Called Shot actions."
    },
    "storm": {
        "value": false,
        "label": "Storm",
        "description": "Firing with a hail of shots, these weapons strike so rapidly that enemies are filled with metal in an instant. This quality doubles the number of hits the weapon inflicts on the target and the amount of ammunition expended. For example, when firing a weapon with the Storm quality in fully automatic mode, each degree of success yields two additional hits (up to the weapon’s firing rate, as normal)."
    },
    "tainted": {
        "value": false,
        "label": "Tainted",
        "description": "Permeated with the power of the Warp, these weapons draw out the inner darkness of their wielders. Weapons with this quality inflict additional damage equal to the value of the user’s Corruption bonus or Daemonic (X) trait value (whichever is higher)."
    },
    "tearing": {
        "value": false,
        "label": "Tearing",
        "description": "These weapons call on spinning chainblades, serrated claws, burrowing projectiles, and other vicious means to rip apart targets. These weapons roll one extra die for damage, and the lowest result is discarded."
    },
    "toxic": {
        "value": false,
        "num": 0,
        "label": "Toxic",
        "description": "Filled with malignant chemicals and fast acting poisons, toxic weapons bring down enemies through virulence and sickness. At the end of his turn, if a character has suffered damage (after Armour and Toughness bonus) in the last round from a weapon with this quality, he must make a Toughness test with a penalty equal to 10 times the number in parentheses (X) or suffer 1d10 additional damage (of the same type as the first weapon with this quality to damage him that round). For example, a weapon with Toxic (4) imposes a –40 on the tests to resist its effects. Some weapons or creatures carry additional effects with their toxins or inflict more damage, as indicated in their individual descriptions."
    },
    "twinlinked": {
        "value": false,
        "label": "Twin-Linked",
        "description": "A Twin-Linked weapon represents two identical weapons connected together and set to fire at the same time, increasing the chances of scoring a hit by blasting more shots at the target. A weapon with this quality gains a +20 to hit when fired and uses twice as much ammunition. In addition, the weapon scores one additional hit if the attack roll succeeds by two or more degrees of success. When emptied, the weapon’s reload time is doubled."
    },
    "unbalanced": {
        "value": false,
        "label": "Unbalanced",
        "description": "Cumbersome, awkward to use, and often heavy, these are usually powerful offensively, but suffer in defence actions such as parrying. These weapons cannot be used to make Lighting Attack actions, and impose a –10 penalty when used to Parry."
    },
    "unreliable": {
        "value": false,
        "label": "Unreliable",
        "description": "A clear affront to the Omnissiah, Unreliable devices represent poorly designed, badly manufactured, or improperly consecrated weapons that are perhaps better than no weapon at all, but not by a great measure. An Unreliable weapon suffers a jam on a roll of 91 or higher, even if fired on Semi- or Full Auto."
    },
    "unwieldy": {
        "value": false,
        "label": "Unwieldy",
        "description": "Huge and often top-heavy, Unwieldy weapons are too awkward to be used with finesse. They cannot be used to Parry or make Lightning Attack actions."
    },
    "vengeful": {
        "value": false,
        "num": 10,
        "label": "Vengeful",
        "description": "These weapons seemingly embody the Emperor’s wrath, and eagerly strike down any who would stand against His servants. When attacking with this weapon, the attacker triggers Righteous Fury (see page 227) on any damage die result with a value of X or higher (before any modifiers are applied)."
    },
    "volkite": {
        "value": false,
        "label": "Volkite",
        "description": "Damage rolls of 10 add another d10 to the damage, extra d10s do not generate further d10s."
    },
    "warp": {
        "value": false,
        "label": "Warp",
        "description": "Creatures with this trait have weapons that are partially insubstantial, able to ignore such mundane things as armour or cover. Natural weapons and attacks made by a creature with this trait ignore physical armour, unless the armour is created from psychoactive materials or is somehow warded against the Warp. Force fields still work against these attacks normally."
    }
}
zerok.lasModes=["normal","overcharge","overload"]
zerok.itemQualities=["Poor","Common","Good","Best"]
zerok.skillChars={"ws":{"name":"ws","caps":"WS"},"bs":{"name":"bs","caps":"BS"},"s":{"name":"s","caps":"S"},"t":{"name":"t","caps":"T"},"agi":{"name":"agi","caps":"AGI"},"int":{"name":"int","caps":"INT"},"per":{"name":"per","caps":"PER"},"wp":{"name":"wp","caps":"WP"},"fel":{"name":"fel","caps":"FEL"}}
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
zerok.comradeRanks=["Green","Guardsman","Veteran"]
