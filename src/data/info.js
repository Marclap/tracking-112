export const ilLabelsIndex = [
  4, 11, 15, 20, 24, 28, 33, 41, 48, 54, 60, 66, 70, 76, 80, 88, 94, 101, 106,
  113, 117, 125, 134, 140, 146, 154, 161, 165, 166, 167, 168, 179, 184, 194,
  201, 211, 221, 231, 241, 283,
]

export const segmentsLabelsIndex = [
  20, 41, 66, 88, 113, 140, 165, 168, 201, 283,
]

export const nameLabelsILs = () => ilLabelsIndex.map((il) => labels[il])

export const nameLabelsSegments = () =>
  segmentsLabelsIndex.map((segment) => labels[segment])

export const dataHitsAccumulate = () => {
  let data = Array(dataHits.length)
  for (let i = 0; i < dataHits.length; i++) {
    data[i] = Array(dataHits[i].length)
    data[i][0] = dataHits[i][0]
    for (let j = 1; j < dataHits[i].length; ++j)
      data[i][j] = data[i][j - 1] + dataHits[i][j]
  }
  return data
}

export const dataHitsTotal = () =>
  dataHits.map((hits) => hits.reduce((acc, curr) => acc + curr, 0))

export const labels = [
  'Fury of the fallen',
  'Aspid arena',
  'Forgotten Crossroads stag',
  'City Crest',
  'Vengeful spirit',
  'Soul catcher',
  'Enter Greenpath',
  'Moss Knight',
  'Zote rescued',
  'Grub Greenpath Moss Knight',
  'Greenpath stag',
  'Mothwing Cloak',
  'Grub Crossroads Spikes',
  'Gruz mother',
  'Shaman stone',
  'Sly rescued',
  'Mantis Claw',
  'Dashmaster',
  'Bretta rescued',
  'Shrumal Ogres Notch',
  'City Gate',
  'Enter Soul Sanctum',
  'Soul warrior',
  'Spell Twister',
  'Enter Soul Master',
  'Desolate Dive',
  'Grub Soul Sanctum',
  'Simple key',
  'City storerooms stag',
  'Grub crossroads wall',
  'Grub crossroads guarded',
  'Grub crystal peaks spikes',
  "Shopkeeper's key",
  'Crystal Heart',
  'Grub Crystal Heart Crystal heart',
  'Grub Crystal Peak Bottom Lever',
  'Grub Crystal Peak Mound',
  'Descending Dark',
  'Dream Nail',
  'Dreamshield',
  'Resting Grounds Stag',
  'Soul Eater',
  'Elegant Key',
  'Grub Crossroads Vengefly',
  'Grubsong',
  'Enter Brooding Mawlek',
  'Brooding Mawlek',
  'Glowing Womb',
  'Salubra 2 notch',
  'Shade Soul',
  'Grub city Below Sanctum',
  'Grub Waterways center',
  'Waterways Mask Shard',
  'Flukenest',
  'Dung Defender Idol',
  'Basin bench',
  'Simple key',
  'Broken Vessel',
  'Lost Kin essence',
  'Monarch Wings',
  'Grub Basin Wings',
  'Hidden Station Stag',
  'Cyclone Slash',
  'Gorb Essence',
  'Stag Nest Vessel Fragment',
  'Nightmare Lantern lit',
  'Grimmchild',
  'Grub Crystal Peaks Mimic',
  'Peak flame',
  'Crystal Guardian',
  'Enraged Guardian Mask Shard',
  'Grub Crystal Peaks Crown',
  'Crown Pale ore',
  'Grub Crystal Peak Crushers',
  'Deep focus',
  'Enter Failed Champion',
  'Failed Champion Essence',
  'Xero Essence',
  'Dream Gate',
  'Storerooms flame',
  'Storerooms Fragment',
  'Great Slash',
  'Thorns Of Agony',
  'Greenpath flame',
  'Grub Greenpath Hunter',
  'Grub Greenpath Cornifer',
  'Mega Moss Charger',
  'Grub Greenpath Vessel Fragment',
  'Greenpath Vessel Fragment',
  'Lumafly Lantern',
  'Grimmchild lvl 2',
  "King's pass Flame",
  'Howling Wraiths',
  'No Eyes Essence',
  'No Eyes Mask Shard',
  'Resting Grounds Flame',
  "King's Station Vessel Fragment",
  "King's Station Stag",
  "Isma's Tear",
  'Grub Waterways Isma',
  "Kingdom's Edge Flame",
  'Enter Hornet 2',
  "King's Brand",
  'Abyss Shriek',
  'Shade Cloak',
  'Enter Grimm',
  'Trouble Master Grimm',
  'Grubfather 2',
  'Leg Eater',
  'Elder Hu Essence',
  'Grub Fungal Bouncy',
  'Mantis Lords',
  'Mark Of Pride',
  'Fungal Core Mask Shard',
  'Fog Canyon Notch',
  'Teachers Archive',
  'Uumuu',
  'Monomon',
  "Queen's Station Mask Shard",
  "Queen's Gardens Entry",
  'Love Key',
  'Grub Fungal Spore Shroom',
  'Spore Shroom',
  'Grub Deepnest Mimics',
  "Grub Queen's Gardens Below Stag",
  'Marmu Essence',
  'Enter Beasts Den',
  'Herrah',
  "Grub Deepnest Beast's Den",
  'Brumm Flame',
  'Grub Deepnest Dark',
  'Weaversong',
  'Galien Essence',
  'Tram Pass',
  'Zote rescued 2',
  'Grub Deepnest Spikes',
  'Deepnest Spa',
  'Grub Deepnest Nosk',
  'Nosk Pale Ore',
  'Sharp Shadow',
  'Deepnest Vessel Fragment',
  'Grub Basin Dive',
  'Basin Pale Ore',
  'Grub Waterways Hwurmps',
  'Grub Hive External',
  "Grub Kingdom's Edge Center",
  'Markoth Essence',
  'Dash Slash',
  "Grub Kingdom's Edge Oro",
  'Quick Slash',
  'Enter Hive',
  'Grub Hive Internal',
  'Hive Mask Shard',
  'Enter Hive Knight',
  'Hiveblood',
  'Collector',
  'Grubs collector',
  'Grub Below Love Tower',
  'Grub City Guard House',
  'Grub City Spire',
  'Watchers',
  'Lurien',
  'Nail Upgrade 3',
  'Enter white defender',
  'White defender',
  'Begin colosseum trails',
  'Trail of the warrior',
  'Trail of the conqueror',
  'Trail of the fool',
  'Wayward Compass',
  'Grey Prince Zote Essence',
  'Bretta Mask Shard',
  'Baldur Shell',
  'Grub Cliffs Baldur Shell',
  'Banishment',
  "Joni's Blessing",
  'Shape Of Unn',
  'Seer Departs',
  'Grub Resting Grounds Crypts',
  'Grey Mourner',
  'Salubra 4 notch',
  'Crossroad Mask Shard',
  'Grub Crossroads Acid',
  'Grub Fog Canyon Archives',
  'Flower Quest',
  "Grub Queen's Gardens Upper",
  'Traitor Lord',
  "Grub Queen's Gardens White Lady",
  'Queen Fragment',
  'Grey Mourner Mask Shard',
  "Grubberfly's Elegy",
  "Nailmaster's Glory",
  'Sly Shop',
  'Carefree Melody',
  'White Palace Entry',
  'Kingsoul',
  'Basin vessel fragment',
  'Lifeblood core',
  'Voidheart',
  'Nail Upgrade 4',
  'God Tuner',
  'Enter pantheon 1',
  'Vengefly King',
  'Gruz Mother',
  'False Knight',
  'Massive Mosss Charger',
  'Hornet 1',
  'Gorb',
  'Dung Defender',
  'Soul warrior',
  'Brooding Mawlew',
  'Oro & Mato',
  'Xero',
  'Crystal Guardian',
  'Soul Master',
  'Oblobbles',
  'Mantis Lords',
  'Marmu',
  'Nosk',
  'Flukermarn',
  'Broken Vessel',
  'Sheo',
  'Hive Knight',
  'Elder Hu',
  'Collector',
  'God Tamer',
  'Trouple Master Grimm',
  'Galien',
  'Grey Prince Zote',
  'Uumuu',
  'Hornet 2',
  'Sly',
  'Enraged Guardian',
  'Lost Kin',
  'No Eyes',
  'Traitor Lord',
  'White Defender',
  'Failed Champion',
  'Markoth',
  'Watcher Knights',
  'Soul Tyrant',
  'Pure Vessel',
  'Vengefly King',
  'Gruz Mother',
  'False Knight',
  'Massive Mosss Charger',
  'Hornet 1',
  'Gorb',
  'Dung Defender',
  'Soul warrior',
  'Brooding Mawlew',
  'Oro & Mato',
  'Xero',
  'Crystal Guardian',
  'Soul Master',
  'Oblobbles',
  'Mantis Lords',
  'Marmu',
  'Flukermarn',
  'Broken Vessel',
  'Galien',
  'Sheo',
  'Hive Knight',
  'Elder Hu',
  'Collector',
  'God Tamer',
  'Trouple Master Grimm',
  'Watcher Knights',
  'Uumuu',
  'Winged Nosk',
  'Sly',
  'Hornet 2',
  'Enraged Guardian',
  'Lost Kin',
  'No Eyes',
  'Traitor Lord',
  'White Defender',
  'Soul Tyrant',
  'Markoth',
  'Grey Prince Zote',
  'Failed Champion',
  'Nightmare King Grimm',
  'Pure Vessel',
  'Absolute Radiance',
]

export const dataHits = [
  [
    0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1, 0, 0,
    2, 0, 1, 0, 0, 0, 4, 1, 5, 0, 0, 2, 1, 3, 0, 0, 0, 0, 0, 1, 0, 2, 2, 0, 4,
    0, 0, 1, 0, 2, 2, 1, 0, 4, 0, 3, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 9, 0, 1,
    2, 9, 0, 0, 1, 0, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 1, 2, 2, 2, 0,
    1, 0, 5, 1, 2, 0, 4, 0, 1, 1, 0, 4, 0, 1, 7, 0, 0, 0, 1, 0, 4, 0, 0, 0, 4,
    4, 2, 0, 0, 0, 0, 0, 2, 0, 3, 0, 2, 1, 2, 1, 23, 0, 0, 1, 2, 2, 0, 2, 1, 2,
    0, 3, 2, 0, 3, 5, 0, 0, 0, 1, 3, 0, 1, 0, 6, 1, 7, 23, 64, 0, 7, 0, 0, 0, 0,
    6, 0, 0, 0, 0, 0, 5, 7, 0, 0, 1, 6, 0, 0, 0, 2, 2, 0, 0, 0, 67, 0, 3, 7, 0,
    1, 0, 2, 0, 1, 2, 0, 0, 0, 0, 0, 5, 3, 0, 1, 6, 1, 1, 7, 0, 0, 1, 4, 1, 2,
    5, 6, 3, 8, 6, 1, 11, 1, 6, 6, 2, 8, 3, 4, 8, 9, 10, 5, 3, 1, 0, 1, 3, 3, 2,
    4, 5, 5, 0, 3, 6, 0, 5, 0, 0, 2, 6, 3, 0, 2, 4, 6, 4, 6, 10, 5, 5, 1, 5, 6,
    5, 4, 8, 13, 5, 3, 13, 8, 11,
  ],
  [
    0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 0, 1, 2, 3, 0, 5, 0,
    6, 1, 4, 0, 1, 0, 3, 1, 5, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 0, 0,
    0, 3, 1, 0, 0, 0, 0, 2, 7, 0, 3, 0, 0, 1, 1, 0, 0, 0, 3, 1, 2, 1, 4, 5, 2,
    2, 0, 0, 0, 1, 0, 5, 1, 1, 0, 0, 1, 0, 0, 0, 0, 2, 8, 1, 0, 1, 4, 1, 1, 0,
    0, 0, 5, 1, 3, 0, 8, 0, 0, 1, 0, 2, 0, 1, 6, 0, 1, 0, 1, 0, 5, 0, 1, 1, 3,
    3, 1, 0, 0, 1, 0, 0, 2, 1, 1, 0, 4, 1, 0, 0, 3, 2, 1, 1, 0, 1, 0, 1, 1, 4,
    1, 4, 2, 0, 3, 6, 0, 0, 1, 2, 3, 1, 0, 0, 5, 0, 8, 18, 35, 0, 4, 0, 1, 0, 1,
    1, 0, 0, 1, 0, 0, 5, 2, 3, 7, 12, 8, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 3, 2, 0,
    1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 2, 0, 2, 5, 0, 1, 4, 1, 1, 2, 1, 0, 0,
    2, 5, 5, 9, 5, 4, 8, 0, 4, 4, 3, 4, 2, 1, 1, 7, 5, 3, 3, 0, 0, 1, 2, 0, 1,
    2, 2, 1, 0, 1, 3, 3, 0, 1, 1, 0, 4, 2, 2, 0, 3, 4, 6, 9, 7, 3, 2, 0, 5, 4,
    1, 2, 6, 5, 6, 4, 9, 3, 18,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 2, 0, 1, 0,
    0, 0, 1, 2, 0, 0, 0, 1, 1, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0,
    0, 0, 3, 8, 0, 0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 1, 2, 1, 2, 0, 0,
    0, 3, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 3, 1, 0, 1, 1, 1, 1, 0,
    0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 1, 3, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 1, 3,
    1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0, 5, 0, 1, 0, 0, 1, 1, 0, 2, 3,
    0, 5, 3, 4, 6, 9, 0, 0, 0, 1, 4, 0, 0, 0, 4, 1, 3, 12, 28, 0, 6, 0, 1, 0, 0,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 7, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 2, 2, 0,
    1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 2, 1, 2, 9, 2, 0, 5, 6, 1, 0,
    3, 3, 2, 8, 3, 4, 5, 2, 6, 0, 3, 3, 1, 2, 1, 3, 4, 5, 4, 0, 0, 0, 1, 0, 0,
    0, 2, 3, 0, 1, 4, 1, 3, 0, 0, 5, 4, 2, 2, 2, 6, 2, 3, 6, 3, 5, 1, 0, 4, 3,
    1, 6, 2, 4, 1, 1, 9, 3, 16,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 0, 0,
    1, 0, 2, 1, 1, 1, 5, 2, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
    0, 0, 1, 7, 2, 2, 1, 2, 4, 0, 1, 0, 3, 0, 0, 1, 1, 0, 1, 0, 1, 2, 8, 0, 2,
    4, 4, 0, 0, 2, 0, 3, 0, 0, 1, 1, 0, 1, 2, 0, 0, 0, 1, 0, 0, 1, 2, 1, 0, 0,
    4, 0, 5, 0, 2, 0, 6, 0, 0, 0, 0, 5, 0, 0, 6, 2, 2, 0, 7, 0, 4, 1, 0, 0, 5,
    2, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 2, 1, 6, 2, 0, 0, 0, 1, 2, 4, 1, 4,
    2, 8, 1, 1, 3, 10, 0, 0, 0, 4, 2, 1, 0, 0, 5, 1, 4, 14, 30, 0, 4, 0, 1, 0,
    0, 7, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 2, 4,
    1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 2, 2, 4, 0, 0, 4, 1, 1, 5, 0, 0, 7, 3, 3,
    0, 4, 5, 2, 5, 1, 3, 6, 1, 5, 0, 1, 4, 1, 4, 3, 5, 6, 7, 1, 0, 0, 0, 4, 0,
    0, 0, 9, 3, 0, 1, 4, 2, 1, 0, 0, 3, 3, 1, 0, 3, 3, 2, 0, 6, 5, 6, 5, 1, 7,
    2, 0, 7, 5, 3, 7, 1, 15, 4, 23,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1,
    2, 1, 6, 0, 1, 0, 2, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 2, 0, 1, 1, 4, 3, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 4, 0, 1,
    0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 1, 2, 2, 0,
    0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 5, 0, 0, 0, 3,
    0, 0, 0, 0, 1, 0, 0, 2, 2, 1, 1, 0, 0, 6, 0, 3, 0, 0, 3, 0, 0, 0, 0, 1, 2,
    0, 6, 0, 0, 2, 4, 0, 0, 0, 2, 0, 0, 0, 0, 5, 0, 6, 6, 27, 0, 0, 0, 1, 0, 0,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 1, 6, 1,
    0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 1, 1, 0, 2, 5, 1, 1, 4, 2, 0, 1,
    4, 2, 3, 4, 1, 0, 6, 1, 5, 5, 1, 11, 0, 1, 3, 2, 3, 2, 1, 0, 0, 1, 2, 0, 0,
    1, 2, 4, 0, 0, 3, 4, 5, 0, 0, 1, 3, 3, 1, 0, 4, 2, 2, 4, 4, 3, 3, 1, 2, 5,
    2, 3, 0, 4, 3, 5, 15, 9, 22,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0,
    3, 0, 2, 0, 0, 0, 0, 3, 1, 0, 0, 4, 0, 1, 0, 0, 0, 0, 1, 2, 0, 2, 3, 0, 0,
    0, 1, 2, 8, 2, 1, 2, 1, 6, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 2, 1, 3, 1, 1, 0,
    0, 3, 2, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 7, 2, 1, 1, 3, 1, 0, 0,
    0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 3, 0, 0, 1, 0, 2, 0, 2, 0, 2, 0, 0, 0, 7,
    3, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 2, 1, 5, 1, 0, 2, 0, 1, 1, 1, 2, 2,
    1, 3, 3, 1, 5, 5, 0, 0, 1, 1, 4, 0, 0, 0, 2, 2, 2, 7, 25, 0, 4, 0, 0, 0, 0,
    5, 0, 0, 0, 0, 0, 2, 0, 4, 0, 11, 6, 0, 0, 0, 1, 2, 0, 0, 0, 28, 0, 0, 2, 0,
    1, 0, 1, 2, 1, 0, 0, 1, 2, 1, 2, 1, 0, 0, 4, 3, 1, 0, 3, 1, 0, 5, 3, 4, 3,
    4, 2, 4, 3, 1, 3, 6, 1, 2, 3, 1, 0, 0, 1, 2, 4, 4, 2, 2, 0, 0, 0, 3, 1, 1,
    3, 4, 5, 0, 1, 4, 0, 2, 0, 2, 3, 4, 2, 0, 1, 2, 5, 1, 3, 6, 3, 1, 0, 2, 2,
    2, 3, 3, 6, 4, 1, 11, 1, 11,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
    1, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1,
    0, 0, 2, 4, 0, 0, 1, 0, 5, 0, 0, 0, 0, 1, 4, 0, 0, 0, 4, 0, 0, 3, 6, 2, 0,
    0, 5, 1, 0, 2, 0, 3, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1, 0, 0,
    0, 0, 5, 0, 1, 0, 0, 0, 1, 0, 0, 6, 0, 0, 2, 3, 0, 0, 0, 0, 2, 0, 0, 0, 2,
    1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 7,
    2, 2, 0, 1, 7, 5, 0, 0, 0, 0, 2, 0, 0, 2, 3, 0, 3, 12, 15, 0, 1, 0, 2, 0, 0,
    4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 29, 0, 1, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 5, 0, 2, 2, 0, 0, 4, 3, 2, 1,
    0, 2, 2, 4, 0, 0, 3, 0, 3, 4, 0, 1, 2, 1, 0, 3, 4, 1, 4, 1, 0, 1, 1, 0, 1,
    2, 3, 0, 1, 0, 4, 3, 1, 0, 0, 0, 8, 3, 3, 2, 0, 1, 1, 8, 5, 4, 1, 1, 2, 6,
    1, 2, 4, 10, 6, 0, 7, 8, 14,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 2, 1, 0,
    3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 3, 2, 1, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 0, 1, 2, 1, 2,
    1, 1, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 1, 0, 1, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 1, 0, 5,
    4, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 3, 0, 1, 4,
    1, 1, 2, 0, 1, 14, 0, 0, 1, 1, 1, 0, 1, 0, 2, 0, 1, 7, 27, 0, 2, 0, 3, 0, 0,
    3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 1, 3, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 3, 1, 0, 1, 0, 1, 2, 1, 1, 0,
    1, 1, 2, 2, 1, 0, 2, 0, 1, 2, 1, 3, 1, 3, 2, 1, 5, 4, 4, 0, 0, 0, 1, 0, 0,
    1, 2, 6, 1, 0, 3, 3, 1, 0, 1, 1, 4, 2, 0, 0, 0, 0, 0, 1, 5, 4, 1, 0, 3, 7,
    1, 1, 1, 2, 6, 2, 8, 4, 8,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 1, 0, 0,
    1, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0,
    0, 0, 0, 0, 4, 0, 1, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 4, 0, 1, 0, 1, 0, 1,
    0, 9, 0, 0, 1, 1, 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 0, 1, 0,
    1, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 2, 2, 0, 1, 0, 4, 0, 0, 0, 2,
    0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 5, 0, 0, 0, 0, 1, 1, 1, 0, 2,
    0, 3, 1, 1, 3, 8, 0, 0, 1, 0, 1, 0, 0, 0, 5, 0, 3, 1, 28, 0, 5, 0, 0, 0, 0,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 8, 0, 0, 0, 1, 0, 0, 0, 0, 28, 0, 2, 3, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 2, 0, 4, 6, 0, 0, 2, 1, 0, 0,
    2, 1, 2, 4, 6, 2, 1, 0, 4, 2, 2, 2, 0, 2, 1, 2, 5, 2, 2, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 3, 0, 0, 2, 3, 4, 5, 3, 1, 1, 1, 1, 3, 0, 6, 3, 0, 0, 4, 5,
    0, 3, 5, 8, 3, 1, 10, 3, 9,
  ],
]