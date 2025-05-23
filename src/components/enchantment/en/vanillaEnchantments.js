const vanillaEnchantments = {
    vanilla: {
      Armor: [
        {
          name: "Protection",
          maxLevel: 4,
          description: "Reduces incoming damage by %placeholder% %",
          placeholder: "%level% * 4",
          conflict: ["Fire Protection", "Blast Protection", "Projectile Protection"],
        },
        {
          name: "Fire Protection",
          maxLevel: 4,
          description: "Reduces incoming fire damage by %damage% % and burn time by %time% %",
          placeholder: { damage: "%level% * 8", time: "%level% * 15" },
          conflict: ["Protection", "Blast Protection", "Projectile Protection"],
        },
        {
          name: "Feather Falling",
          maxLevel: 4,
          description: "Reduces fall damage by %placeholder% %",
          placeholder: "%level% * 12",
          conflict: [],
        },
        {
          name: "Blast Protection",
          maxLevel: 4,
          description: "Reduces incoming explosion damage by %damage% % % and incoming blast knockback by %knockback%",
          placeholder: { damage: "%level% * 8", knockback: "%level% * 15" },
          conflict: ["Protection", "Fire Protection", "Projectile Protection"],
        },
        {
          name: "Projectile Protection",
          maxLevel: 4,
          description: "Reduces incoming projectile damage by %placeholder% %",
          placeholder: "%level% * 8",
          conflict: ["Protection", "Fire Protection", "Blast Protection"],
        },
        {
          name: "Respiration",
          maxLevel: 3,
          description: "Extends underwater breathing time by %seconds% seconds and gives a %chance% % chance to ignore drowning damage",
          placeholder: { seconds: "15 * %level%", chance: "%level% / (%level% + 1)" },
          conflict: [],
        },
        {
          name: "Aqua Affinity",
          maxLevel: 1,
          description: "Removes underwater mining speed penalty",
          placeholder: "-",
          conflict: [],
        },
        {
          name: "Thorns",
          maxLevel: 3,
          description: "Gives a %placeholder% % chance to reflect some incoming damage to the attacker",
          placeholder: "%level% * 15",
          conflict: [],
        },
        {
          name: "Depth Strider",
          maxLevel: 3,
          description: "Reduces underwater movement slowdown by %placeholder%",
          placeholder: "%level% * 33.333333",
          conflict: ["Frost Walker"],
        },
        {
          name: "Frost Walker",
          maxLevel: 2,
          description: "Turns water within a %placeholder% % block radius of the player into ice",
          placeholder: "%level% + 2",
          conflict: ["Depth Strider"],
        },
        {
          name: "Soul Speed",
          maxLevel: 3,
          description: "Increases walking speed on soul sand and soul soil by %placeholder%",
          placeholder: "(%level% * 0.105) + 1.3",
          conflict: [],
        },
        {
          name: "Swift Sneak",
          maxLevel: 4,
          description: "Reduces sneaking movement slowdown by %placeholder%",
          placeholder: "min(%level% * 15, 100)",
          conflict: [],
        },
      ],
      Weapon: [
        {
          name: "Sharpness",
          maxLevel: 20,
          description: "Deals %placeholder% % bonus melee damage",
          placeholder: "0.5 * %level% + 1",
          conflict: ["Smite", "Bane of Arthropods"],
        },
        {
          name: "Smite",
          maxLevel: 6,
          description: "Gives a %placeholder% % bonus to melee damage against undead mobs",
          placeholder: "2.5 * %level%",
          conflict: ["Sharpness", "Bane of Arthropods"],
        },
        {
          name: "Bane of Arthropods",
          maxLevel: 6,
          description: "Gives a %damage% % bonus to melee damage against arthropods and gives up to %seconds% seconds of Slowness IV",
          placeholder: { damage: "2.5 * %level%", seconds: "0.5 * %level%" },
          conflict: ["Sharpness", "Smite"],
        },
        {
          name: "Knockback",
          maxLevel: 5,
          description: "Gives a %placeholder% % bonus to attack knockback",
          placeholder: "%level% * 85 + 20",
          conflict: [],
        },
        {
          name: "Fire Aspect",
          maxLevel: 4,
          description: "Sets opponents on fire, dealing damage each fire tick",
          placeholder: "-",
          conflict: [],
        },
        {
          name: "Looting",
          maxLevel: 3,
          description: "Increases maximum common drops by %common%, and the chance to get rare drops by %rare%",
          placeholder: { common: "%level%", rare: "%level%" },
          conflict: [],
        },
        {
          name: "Sweeping Edge",
          maxLevel: 5,
          description: "Increases sweeping attack damage by %placeholder%",
          placeholder: "%level% / (%level% + 1)",
          conflict: [],
        },
      ],
      Tool: [
        {
          name: "Efficiency",
          maxLevel: 10,
          description: "Increases mining speed by %placeholder%",
          placeholder: "20 + 5 * %level%",
          conflict: [],
        },
        {
          name: "Silk Touch",
          maxLevel: 1,
          description: "Mined blocks drop themselves exactly",
          placeholder: "-",
          conflict: ["Fortune"],
        },
        {
          name: "Unbreaking",
          maxLevel: 7,
          description: "Increases item durability %placeholder%",
          placeholder: "%level% + 1",
          conflict: [],
        },
        {
          name: "Fortune",
          maxLevel: 4,
          description: "Gives a %placeholder% % boost to certain block drops",
          placeholder: "ceil(((1 / (%level% + 2)) + ((%level% + 1) / 2)) * 100 - 100)",
          conflict: ["Silk Touch"],
        },
      ],
      Bow: [
        {
          name: "Power",
          maxLevel: 8,
          description: "Gives a %placeholder% % bonus to arrow damage",
          placeholder: "25 * (%level% + 1)",
          conflict: [],
        },
        {
          name: "Punch",
          maxLevel: 5,
          description: "Increases arrow knockback by %placeholder% % blocks",
          placeholder: "3 * %level%",
          conflict: [],
        },
        {
          name: "Flame",
          maxLevel: 1,
          description: "Arrows set target on fire, dealing 5 fire damage",
          placeholder: "-",
          conflict: [],
        },
        {
          name: "Infinity",
          maxLevel: 1,
          description: "Stops regular arrows from being consumed when shot. Does not conflict with Mending.",
          placeholder: "-",
          conflict: [],
        },
      ],
      FishingRod: [
        {
          name: "Luck of the Sea",
          maxLevel: 3,
          description: "Increases chance of getting treasure loot by %placeholder%",
          placeholder: "2 * %level%",
          conflict: [],
        },
        {
          name: "Lure",
          maxLevel: 4,
          description: "Decreases fishing wait time by %placeholder% % seconds",
          placeholder: "%level% * 5",
          conflict: [],
        },
      ],
      Trident: [
        {
          name: "Loyalty",
          maxLevel: 3,
          description: "Trident returns after being thrown",
          placeholder: "-",
          conflict: ["Riptide"],
        },
        {
          name: "Impaling",
          maxLevel: 5,
          description: "Deals %placeholder% % additional damage to ocean mobs",
          placeholder: "%level% * 2.5",
          conflict: [],
        },
        {
          name: "Riptide",
          maxLevel: 3,
          description: "Trident launches player when thrown in water or while raining",
          placeholder: "-",
          conflict: ["Loyalty", "Channeling"],
        },
        {
          name: "Channeling",
          maxLevel: 1,
          description: "Strikes lightning where trident lands during thunderstorms",
          placeholder: "-",
          conflict: ["Riptide"],
        },
      ],
      Crossbow: [
        {
          name: "Multishot",
          maxLevel: 1,
          description: "Shoots 3 arrows instead of 1",
          placeholder: "-",
          conflict: ["Piercing"],
        },
        {
          name: "Quick Charge",
          maxLevel: 5,
          description: "Decreases crossbow charging time by %placeholder% % seconds",
          placeholder: "%level% * 0.25",
          conflict: [],
        },
        {
          name: "Piercing",
          maxLevel: 4,
          description: "Arrows pass through %placeholder% % entities",
          placeholder: "%level% + 1",
          conflict: ["Multishot"],
        },
      ],
      Special: [
        {
          name: "Mending",
          maxLevel: 1,
          description: "Repair the item while gaining XP orbs. Does not conflict with Infinity.",
          placeholder: "-",
          conflict: [],
        },
        {
          name: "Curse of Binding",
          maxLevel: 1,
          description: "Items cannot be removed from armor slots",
          placeholder: "-",
          notes: "Curse",
          conflict: [],
        },
        {
          name: "Curse of Vanishing",
          maxLevel: 1,
          description: "Item destroyed on death",
          placeholder: "-",
          notes: "Curse",
          conflict: [],
        },
      ],
    },
  };
  
  export default vanillaEnchantments;