var PokeInfo = [
    [1, 'Bulbasaur', 'Grass', 'Poison', ["Bulbasaur", "Ivysaur", "Venusaur"], []],
    [2, 'Ivysaur', 'Grass', 'Poison', ["Bulbasaur", "Ivysaur", "Venusaur"], []],
    [3, 'Venusaur', 'Grass', 'Poison', ["Bulbasaur", "Ivysaur", "Venusaur"], ["Mega", "Gmax"]],
    [4, 'Charmander', 'Fire', '', ["Charmander", "Charmeleon", "Charizard"], []],
    [5, 'Charmeleon', 'Fire', '', ["Charmander", "Charmeleon", "Charizard"], []],
    [6, 'Charizard', 'Fire', 'Flying', ["Charmander", "Charmeleon", "Charizard"], ["Mega Charizard X", "Mega Charizard Y", "Gmax Charizard"]],
    [7, 'Squirtle', 'Water', '', ["Squirtle", "Wartortle", "Blastoise"], []],
    [8, 'Wartortle', 'Water', '', ["Squirtle", "Wartortle", "Blastoise"], []],
    [9, 'Blastoise', 'Water', '', ["Squirtle", "Wartortle", "Blastoise"], ["Mega","Gmax"]],
    [10, 'Caterpie', 'Bug', '', ["Caterpie", "Metapod", "Butterfree"], []],
    [11, 'Metapod', 'Bug', '', ["Caterpie", "Metapod", "Butterfree"], []],
    [12, 'Butterfree', 'Bug', 'Flying', ["Caterpie", "Metapod", "Butterfree"], ["Gmax"]],
    [13, 'Weedle', 'Bug', 'Poison', ["Weedle", "Kakuna", "Beedrill"], []],
    [14, 'Kakuna', 'Bug', 'Poison', ["Weedle", "Kakuna", "Beedrill"], []],
    [15, 'Beedrill', 'Bug', 'Poison', ["Weedle", "Kakuna", "Beedrill"], ["Mega"]],
    [16, 'Pidgey', 'Normal', 'Flying', ["Pidgey", "Pidgeotto", "Pidgeot"], []],
    [17, 'Pidgeotto', 'Normal', 'Flying', ["Pidgey", "Pidgeotto", "Pidgeot"], []],
    [18, 'Pidgeot', 'Normal', 'Flying', ["Pidgey", "Pidgeotto", "Pidgeot"], ["Mega"]],
    [19, 'Rattata', 'Normal', '', ["Rattata", "Raticate"], ["Alolan Rattata"]],
    [20, 'Raticate', 'Normal', '', ["Rattata", "Raticate"], ["Alolan Raticate"]],
    [21, 'Spearow', 'Normal', 'Flying', ["Spearow", "Fearow"], []],
    [22, 'Fearow', 'Normal', 'Flying', ["Spearow", "Fearow"], []],
    [23, 'Ekans', 'Poison', '', ["Ekans", "Arbok"], []],
    [24, 'Arbok', 'Poison', '', ["Ekans", "Arbok"], []],
    [25, 'Pikachu', 'Electric', '', ["Pichu", "Pikachu", "Raichu"], ["Gmax Pikachu"]],
    [26, 'Raichu', 'Electric', '', ["Pichu", "Pikachu", "Raichu"], ["Alolan Raichu"]],
    [27, 'Sandshrew', 'Ground', '', ["Sandshrew", "Sandslash"], ["Alolan"]],
    [28, 'Sandslash', 'Ground', '', ["Sandshrew", "Sandslash"], ["Alolan"]],
    [29, 'NidoranF', 'Poison', '', ["NidoranF", "Nidorina", "Nidoqueen"], []],
    [30, 'Nidorina', 'Poison', '', ["NidoranF", "Nidorina", "Nidoqueen"], []],
    [31, 'Nidoqueen', 'Poison', 'Ground', ["NidoranF", "Nidorina", "Nidoqueen"], []],
    [32, 'NidoranF', 'Poison', '', ["Nidoran♂", "Nidorino", "Nidoking"], []],
    [33, 'Nidorino', 'Poison', '', ["Nidoran♂", "Nidorino", "Nidoking"], []],
    [34, 'Nidoking', 'Poison', 'Ground', ["Nidoran♂", "Nidorino", "Nidoking"], []],
    [35, 'Clefairy', 'Fairy', '', ["Cleffa", "Clefairy", "Clefable"], []],
    [36, 'Clefable', 'Fairy', '', ["Cleffa", "Clefairy", "Clefable"], []],
    [37, 'Vulpix', 'Fire', '', ["Vulpix", "Ninetales"], ["Alolan Vulpix"]],
    [38, 'Ninetales', 'Fire', '', ["Vulpix", "Ninetales"], ["Alolan Ninetales"]],
    [39, 'Jigglypuff', 'Normal', 'Fairy', ["Igglybuff", "Jigglypuff", "Wigglytuff"], []],
    [40, 'Wigglytuff', 'Normal', 'Fairy', ["Igglybuff", "Jigglypuff", "Wigglytuff"], []],
    [41, 'Zubat', 'Poison', 'Flying', ["Zubat", "Golbat", "Crobat"], []],
    [42, 'Golbat', 'Poison', 'Flying', ["Zubat", "Golbat", "Crobat"], []],
    [43, 'Oddish', 'Grass', 'Poison', ["Oddish", "Gloom", "Vileplume"], []],
    [44, 'Gloom', 'Grass', 'Poison', ["Oddish", "Gloom", "Vileplume"], []],
    [45, 'Vileplume', 'Grass', 'Poison', ["Oddish", "Gloom", "Vileplume"], []],
    [46, 'Paras', 'Bug', 'Grass', ["Paras", "Parasect"], []],
    [47, 'Parasect', 'Bug', 'Grass', ["Paras", "Parasect"], []],
    [48, 'Venonat', 'Bug', 'Poison', ["Venonat", "Venomoth"], []],
    [49, 'Venomoth', 'Bug', 'Poison', ["Venonat", "Venomoth"], []],
    [50, 'Diglett', 'Ground', '', ["Diglett", "Dugtrio"], ["Alolan Diglett"]],
    [51, 'Dugtrio', 'Ground', '', ["Diglett", "Dugtrio"], ["Alolan Dugtrio"]],
    [52, 'Meowth', 'Normal', '', ["Meowth", "Persian"], ["Alolan Meowth", "Galarian Meowth"]],
    [53, 'Persian', 'Normal', '', ["Meowth", "Persian"], ["Alolan Persian"]],
    [54, 'Psyduck', 'Water', '', ["Psyduck", "Golduck"], []],
    [55, 'Golduck', 'Water', '', ["Psyduck", "Golduck"], []],
    [56, 'Mankey', 'Fighting', '', ["Mankey", "Primeape"], []],
    [57, 'Primeape', 'Fighting', '', ["Mankey", "Primeape"], []],
    [58, 'Growlithe', 'Fire', '', ["Growlithe", "Arcanine"], ["Hisuian Growlithe"]],
    [59, 'Arcanine', 'Fire', '', ["Growlithe", "Arcanine"], ["Hisuian Arcanine"]],
    [60, 'Poliwag', 'Water', '', ["Poliwag", "Poliwhirl", "Poliwrath"], []],
    [61, 'Poliwhirl', 'Water', '', ["Poliwag", "Poliwhirl", "Poliwrath"], []],
    [62, 'Poliwrath', 'Water', 'Fighting', ["Poliwag", "Poliwhirl", "Poliwrath"], []],
    [63, 'Abra', 'Psychic', '', ["Abra", "Kadabra", "Alakazam"], []],
    [64, 'Kadabra', 'Psychic', '', ["Abra", "Kadabra", "Alakazam"], []],
    [65, 'Alakazam', 'Psychic', '', ["Abra", "Kadabra", "Alakazam"], ["Mega"]],
    [66, 'Machop', 'Fighting', '', ["Machop", "Machoke", "Machamp"], []],
    [67, 'Machoke', 'Fighting', '', ["Machop", "Machoke", "Machamp"], []],
    [68, 'Machamp', 'Fighting', '', ["Machop", "Machoke", "Machamp"], ["Gmax"]],
    [69, 'Bellsprout', 'Grass', 'Poison', ["Bellsprout", "Weepinbell", "Victreebel"], []],
    [70, 'Weepinbell', 'Grass', 'Poison', ["Bellsprout", "Weepinbell", "Victreebel"], []],
    [71, 'Victreebel', 'Grass', 'Poison', ["Bellsprout", "Weepinbell", "Victreebel"], []],
    [72, 'Tentacool', 'Water', 'Poison', ["Tentacool", "Tentacruel"], []],
    [73, 'Tentacruel', 'Water', 'Poison', ["Tentacool", "Tentacruel"], []],
    [74, 'Geodude', 'Rock', 'Ground', ["Geodude", "Graveler", "Golem"], ["Alolan"]],
    [75, 'Graveler', 'Rock', 'Ground', ["Geodude", "Graveler", "Golem"], ["Alolan"]],
    [76, 'Golem', 'Rock', 'Ground', ["Geodude", "Graveler", "Golem"], ["Alolan"]],
    [77, 'Ponyta', 'Fire', '', ["Ponyta", "Rapidash"], ["Galarian Ponyta"]],
    [78, 'Rapidash', 'Fire', '', ["Ponyta", "Rapidash"], ["Galarian Rapidash"]],
    [79, 'Slowpoke', 'Water', 'Psychic', ["Slowpoke", "Slowbro"], ["Galarian Slowpoke"]],
    [80, 'Slowbro', 'Water', 'Psychic', ["Slowpoke", "Slowbro"], ["Mega", "Galarian"]],
    [81, 'Magnemite', 'Electric', 'Steel', ["Magnemite", "Magneton", "Magnezone"], []],
    [82, 'Magneton', 'Electric', 'Steel', ["Magnemite", "Magneton", "Magnezone"], []],
    [83, 'Farfetch’d', 'Normal', 'Flying', ["Farfetch’d", "Sirfetch’d"], ["Galarian Farfetch’d"]],
    [84, 'Doduo', 'Normal', 'Flying', ["Doduo", "Dodrio"], []],
    [85, 'Dodrio', 'Normal', 'Flying', ["Doduo", "Dodrio"], []],
    [86, 'Seel', 'Water', '', ["Seel", "Dewgong"], []],
    [87, 'Dewgong', 'Water', 'Ice', ["Seel", "Dewgong"], []],
    [88, 'Grimer', 'Poison', '', ["Grimer", "Muk"], ["Alolan Grimer"]],
    [89, 'Muk', 'Poison', '', ["Grimer", "Muk"], ["Alolan Muk"]],
    [90, 'Shellder', 'Water', '', ["Shellder", "Cloyster"], []],
    [91, 'Cloyster', 'Water', 'Ice', ["Shellder", "Cloyster"], []],
    [92, 'Gastly', 'Ghost', 'Poison', ["Gastly", "Haunter", "Gengar"], []],
    [93, 'Haunter', 'Ghost', 'Poison', ["Gastly", "Haunter", "Gengar"], []],
    [94, 'Gengar', 'Ghost', 'Poison', ["Gastly", "Haunter", "Gengar"], ["Mega", "Gmax"]],
    [95, 'Onix', 'Rock', 'Ground', ["Onix", "Steelix"], []],
    [96, 'Drowzee', 'Psychic', '', ["Drowzee", "Hypno"], []],
    [97, 'Hypno', 'Psychic', '', ["Drowzee", "Hypno"], []],
    [98, 'Krabby', 'Water', '', ["Krabby", "Kingler"], ["Gmax Kingler"]],
    [99, 'Kingler', 'Water', '', ["Krabby", "Kingler"], ["Gmax Kingler"]],
    [100, 'Voltorb', 'Electric', '', ["Voltorb", "Electrode"], ["Hisuian Voltorb"]],
    [101, 'Electrode', 'Electric', '', ["Voltorb", "Electrode"], ["Hisuian Electrode"]],
    [102, 'Exeggcute', 'Grass', 'Psychic', ["Exeggcute", "Exeggutor"], []],
    [103, 'Exeggutor', 'Grass', 'Psychic', ["Exeggcute", "Exeggutor"], ["Alolan Exeggutor"]],
    [104, 'Cubone', 'Ground', '', ["Cubone", "Marowak"], []],
    [105, 'Marowak', 'Ground', '', ["Cubone", "Marowak"], ["Alolan Marowak"]],
    [106, 'Hitmonlee', 'Fighting', '', ["Tyrogue", "Hitmonlee"], []],
    [107, 'Hitmonchan', 'Fighting', '', ["Tyrogue", "Hitmonchan"], []],
    [108, 'Lickitung', 'Normal', '', ["Lickitung", "Lickilicky"], []],
    [109, 'Koffing', 'Poison', '', ["Koffing", "Weezing"], []],
    [110, 'Weezing', 'Poison', '', ["Koffing", "Weezing"], ["Galarian Weezing"]],
    [111, 'Rhyhorn', 'Ground', 'Rock', ["Rhyhorn", "Rhydon", "Rhyperior"], []],
    [112, 'Rhydon', 'Ground', 'Rock', ["Rhyhorn", "Rhydon", "Rhyperior"], []],
    [113, 'Chansey', 'Normal', '', ["Happiny", "Chansey", "Blissey"], []],
    [114, 'Tangela', 'Grass', '', ["Tangela", "Tangrowth"], []],
    [115, 'Kangaskhan', 'Normal', '', [], ["Mega"]],
    [116, 'Horsea', 'Water', '', ["Horsea", "Seadra", "Kingdra"], []],
    [117, 'Seadra', 'Water', '', ["Horsea", "Seadra", "Kingdra"], []],
    [118, 'Goldeen', 'Water', '', ["Goldeen", "Seaking"], []],
    [119, 'Seaking', 'Water', '', ["Goldeen", "Seaking"], []],
    [120, 'Staryu', 'Water', '', ["Staryu", "Starmie"], []],
    [121, 'Starmie', 'Water', 'Psychic', ["Staryu", "Starmie"], []],
    [122, 'Mr. Mime', 'Psychic', 'Fairy', ["Mime Jr.", "Mr. Mime"], ["Galarian Mr. Mime"]],
    [123, 'Scyther', 'Bug', 'Flying', ["Scyther", "Scizor"], []],
    [124, 'Jynx', 'Ice', 'Psychic', ["Smoochum", "Jynx"], []],
    [125, 'Electabuzz', 'Electric', '', ["Elekid", "Electabuzz", "Electivire"], []],
    [126, 'Magmar', 'Fire', '', ["Magby", "Magmar", "Magmortar"], []],
    [127, 'Pinsir', 'Bug', '', [], ["Mega"]],
    [128, 'Tauros', 'Normal', '', [], ["Combat Breed","Flame Breed","Aqua Breed"]],
    [129, 'Magikarp', 'Water', '', ["Magikarp", "Gyarados"], []],
    [130, 'Gyarados', 'Water', 'Flying', ["Magikarp", "Gyarados"], ["Mega"]],
    [131, 'Lapras', 'Water', 'Ice', [], ["Gmax Lapras"]],
    [132, 'Ditto', 'Normal', '', [], []],
    [133, 'Eevee', 'Normal', '', ["Eevee", "Vaporeon"], ["Gmax Eevee"]],
    [134, 'Vaporeon', 'Water', '', ["Eevee", "Vaporeon"], []],
    [135, 'Jolteon', 'Electric', '', ["Eevee", "Jolteon"], []],
    [136, 'Flareon', 'Fire', '', ["Eevee", "Flareon"], []],
    [137, 'Porygon', 'Normal', '', ["Porygon", "Porygon2", "Porygon-Z"], []],
    [138, 'Omanyte', 'Rock', 'Water', ["Omanyte", "Omastar"], []],
    [139, 'Omastar', 'Rock', 'Water', ["Omanyte", "Omastar"], []],
    [140, 'Kabuto', 'Rock', 'Water', ["Kabuto", "Kabutops"], []],
    [141, 'Kabutops', 'Rock', 'Water', ["Kabuto", "Kabutops"], []],
    [142, 'Aerodactyl', 'Rock', 'Flying', [], ["Mega"]],
    [143, 'Snorlax', 'Normal', '', ["Munchlax", "Snorlax"], ["Gmax Snorlax"]],
    [144, 'Articuno', 'Ice', 'Flying', [], ["Galarian Articuno"]],
    [145, 'Zapdos', 'Electric', 'Flying', [], ["Galarian Zapdos"]],
    [146, 'Moltres', 'Fire', 'Flying', [], ["Galarian Moltres"]],
    [147, 'Dratini', 'Dragon', '', ["Dratini", "Dragonair", "Dragonite"], []],
    [148, 'Dragonair', 'Dragon', '', ["Dratini", "Dragonair", "Dragonite"], []],
    [149, 'Dragonite', 'Dragon', 'Flying', ["Dratini", "Dragonair", "Dragonite"], []],
    [150, 'Mewtwo', 'Psychic', '', [], ["Mega Mewtwo X", "Mega Mewtwo Y"]],
    [151, 'Mew', 'Psychic', '', [], []],
    [152, 'Chikorita', 'Grass', '', ["Chikorita", "Bayleef", "Meganium"], []],
    [153, 'Bayleef', 'Grass', '', ["Chikorita", "Bayleef", "Meganium"], []],
    [154, 'Meganium', 'Grass', '', ["Chikorita", "Bayleef", "Meganium"], []],
    [155, 'Cyndaquil', 'Fire', '', ["Cyndaquil", "Quilava", "Typhlosion"], []],
    [156, 'Quilava', 'Fire', '', ["Cyndaquil", "Quilava", "Typhlosion"], []],
    [157, 'Typhlosion', 'Fire', '', ["Cyndaquil", "Quilava", "Typhlosion"], ["Hisuian Typhlosion"]],
    [158, 'Totodile', 'Water', '', ["Totodile", "Croconaw", "Feraligatr"], []],
    [159, 'Croconaw', 'Water', '', ["Totodile", "Croconaw", "Feraligatr"], []],
    [160, 'Feraligatr', 'Water', '', ["Totodile", "Croconaw", "Feraligatr"], []],
    [161, 'Sentret', 'Normal', '', ["Sentret", "Furret"], []],
    [162, 'Furret', 'Normal', '', ["Sentret", "Furret"], []],
    [163, 'Hoothoot', 'Normal', 'Flying', ["Hoothoot", "Noctowl"], []],
    [164, 'Noctowl', 'Normal', 'Flying', ["Hoothoot", "Noctowl"], []],
    [165, 'Ledyba', 'Bug', 'Flying', ["Ledyba", "Ledian"], []],
    [166, 'Ledian', 'Bug', 'Flying', ["Ledyba", "Ledian"], []],
    [167, 'Spinarak', 'Bug', 'Poison', ["Spinarak", "Ariados"], []],
    [168, 'Ariados', 'Bug', 'Poison', ["Spinarak", "Ariados"], []],
    [169, 'Crobat', 'Poison', 'Flying', ["Zubat", "Golbat", "Crobat"], []],
    [170, 'Chinchou', 'Water', 'Electric', ["Chinchou", "Lanturn"], []],
    [171, 'Lanturn', 'Water', 'Electric', ["Chinchou", "Lanturn"], []],
    [172, 'Pichu', 'Electric', '', ["Pichu", "Pikachu", "Raichu"], []],
    [173, 'Cleffa', 'Fairy', '', ["Cleffa", "Clefairy", "Clefable"], []],
    [174, 'Igglybuff', 'Normal', 'Fairy', ["Igglybuff", "Jigglypuff", "Wigglytuff"], []],
    [175, 'Togepi', 'Fairy', '', ["Togepi", "Togetic", "Togekiss"], []],
    [176, 'Togetic', 'Fairy', 'Flying', ["Togepi", "Togetic", "Togekiss"], []],
    [177, 'Natu', 'Psychic', 'Flying', ["Natu", "Xatu"], []],
    [178, 'Xatu', 'Psychic', 'Flying', ["Natu", "Xatu"], []],
    [179, 'Mareep', 'Electric', '', ["Mareep", "Flaaffy", "Ampharos"], []],
    [180, 'Flaaffy', 'Electric', '', ["Mareep", "Flaaffy", "Ampharos"], []],
    [181, 'Ampharos', 'Electric', '', ["Mareep", "Flaaffy", "Ampharos"], ["Mega"]],
    [182, 'Bellossom', 'Grass', '', ["Oddish", "Gloom", "Bellossom"], []],
    [183, 'Marill', 'Water', 'Fairy', ["Azurill", "Marill", "Azumarill"], []],
    [184, 'Azumarill', 'Water', 'Fairy', ["Azurill", "Marill", "Azumarill"], []],
    [185, 'Sudowoodo', 'Rock', '', ["Bonsly", "Sudowoodo"], []],
    [186, 'Politoed', 'Water', '', ["Poliwag", "Poliwhirl", "Politoed"], []],
    [187, 'Hoppip', 'Grass', 'Flying', ["Hoppip", "Skiploom", "Jumpluff"], []],
    [188, 'Skiploom', 'Grass', 'Flying', ["Hoppip", "Skiploom", "Jumpluff"], []],
    [189, 'Jumpluff', 'Grass', 'Flying', ["Hoppip", "Skiploom", "Jumpluff"], []],
    [190, 'Aipom', 'Normal', '', ["Aipom", "Ambipom"], []],
    [191, 'Sunkern', 'Grass', '', ["Sunkern", "Sunflora"], []],
    [192, 'Sunflora', 'Grass', '', ["Sunkern", "Sunflora"], []],
    [193, 'Yanma', 'Bug', 'Flying', ["Yanma", "Yanmega"], []],
    [194, 'Wooper', 'Water', 'Ground', ["Wooper", "Quagsire"], ["Paldean Wooper"]],
    [195, 'Quagsire', 'Water', 'Ground', ["Wooper", "Quagsire"], []],
    [196, 'Espeon', 'Psychic', '', ["Eevee", "Espeon"], []],
    [197, 'Umbreon', 'Dark', '', ["Eevee", "Umbreon"], []],
    [198, 'Murkrow', 'Dark', 'Flying', ["Murkrow", "Honchkrow"], []],
    [199, 'Slowking', 'Water', 'Psychic', ["Slowpoke", "Slowking"], ["Galarian Slowking"]],
    [200, 'Misdreavus', 'Ghost', '', ["Misdreavus", "Mismagius"], []],
    [201, 'Unown', 'Psychic', '', [], ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","?","!"]],
    [202, 'Wobbuffet', 'Psychic', '', ["Wynaut", "Wobbuffet"], []],
    [203, 'Girafarig', 'Normal', 'Psychic', ["Girafarig", "Farigiraf"], []],
    [204, 'Pineco', 'Bug', '', ["Pineco", "Forretress"], []],
    [205, 'Forretress', 'Bug', 'Steel', ["Pineco", "Forretress"], []],
    [206, 'Dunsparce', 'Normal', '', [], []],
    [207, 'Gligar', 'Ground', 'Flying', ["Gligar", "Gliscor"], []],
    [208, 'Steelix', 'Steel', 'Ground', ["Onix", "Steelix"], ["Mega"]],
    [209, 'Snubbull', 'Fairy', '', ["Snubbull", "Granbull"], []],
    [210, 'Granbull', 'Fairy', '', ["Snubbull", "Granbull"], []],
    [211, 'Qwilfish', 'Water', 'Poison', [], ["Hisuian Qwilfish"]],
    [212, 'Scizor', 'Bug', 'Steel', ["Scyther", "Scizor"], ["Mega"]],
    [213, 'Shuckle', 'Bug', 'Rock', [], []],
    [214, 'Heracross', 'Bug', 'Fighting', [], ["Mega"]],
    [215, 'Sneasel', 'Dark', 'Ice', ["Sneasel", "Weavile"], ["Hisuian"]],
    [216, 'Teddiursa', 'Normal', '', ["Teddiursa", "Ursaring"], []],
    [217, 'Ursaring', 'Normal', '', ["Teddiursa", "Ursaring"], ["Ursaluna"]],
    [218, 'Slugma', 'Fire', '', ["Slugma", "Magcargo"], []],
    [219, 'Magcargo', 'Fire', 'Rock', ["Slugma", "Magcargo"], []],
    [220, 'Swinub', 'Ice', 'Ground', ["Swinub", "Piloswine", "Mamoswine"], []],
    [221, 'Piloswine', 'Ice', 'Ground', ["Swinub", "Piloswine", "Mamoswine"], []],
    [222, 'Corsola', 'Water', 'Rock', [], ["Galarian Corsola"]],
    [223, 'Remoraid', 'Water', '', ["Remoraid", "Octillery"], []],
    [224, 'Octillery', 'Water', '', ["Remoraid", "Octillery"], []],
    [225, 'Delibird', 'Ice', 'Flying', [], []],
    [226, 'Mantine', 'Water', 'Flying', ["Mantyke", "Mantine"], []],
    [227, 'Skarmory', 'Steel', 'Flying', [], []],
    [228, 'Houndour', 'Dark', 'Fire', ["Houndour", "Houndoom"], []],
    [229, 'Houndoom', 'Dark', 'Fire', ["Houndour", "Houndoom"], ["Mega"]],
    [230, 'Kingdra', 'Water', 'Dragon', ["Horsea", "Seadra", "Kingdra"], []],
    [231, 'Phanpy', 'Ground', '', ["Phanpy", "Donphan"], []],
    [232, 'Donphan', 'Ground', '', ["Phanpy", "Donphan"], []],
    [233, 'Porygon2', 'Normal', '', ["Porygon", "Porygon2", "Porygon-Z"], []],
    [234, 'Stantler', 'Normal', '', ["Stantler", "Wyrdeer"], []],
    [235, 'Smeargle', 'Normal', '', [], []],
    [236, 'Tyrogue', 'Fighting', '', ["Tyrogue", "Hitmontop"], []],
    [237, 'Hitmontop', 'Fighting', '', ["Tyrogue", "Hitmontop"], []],
    [238, 'Smoochum', 'Ice', 'Psychic', ["Smoochum", "Jynx"], []],
    [239, 'Elekid', 'Electric', '', ["Elekid", "Electabuzz", "Electivire"], []],
    [240, 'Magby', 'Fire', '', ["Magby", "Magmar", "Magmortar"], []],
    [241, 'Miltank', 'Normal', '', [], []],
    [242, 'Blissey', 'Normal', '', ["Happiny", "Chansey", "Blissey"], []],
    [243, 'Raikou', 'Electric', '', [], []],
    [244, 'Entei', 'Fire', '', [], []],
    [245, 'Suicune', 'Water', '', [], []],
    [246, 'Larvitar', 'Rock', 'Ground', ["Larvitar", "Pupitar", "Tyranitar"], []],
    [247, 'Pupitar', 'Rock', 'Ground', ["Larvitar", "Pupitar", "Tyranitar"], []],
    [248, 'Tyranitar', 'Rock', 'Dark', ["Larvitar", "Pupitar", "Tyranitar"], ["Mega"]],
    [249, 'Lugia', 'Psychic', 'Flying', [], []],
    [250, 'Ho-Oh', 'Fire', 'Flying', [], []],
    [251, 'Celebi', 'Psychic', 'Grass', [], []],
    [252, 'Treecko', 'Grass', '', ["Treecko", "Grovyle", "Sceptile"], []],
    [253, 'Grovyle', 'Grass', '', ["Treecko", "Grovyle", "Sceptile"], []],
    [254, 'Sceptile', 'Grass', '', ["Treecko", "Grovyle", "Sceptile"], ["Mega"]],
    [255, 'Torchic', 'Fire', '', ["Torchic", "Combusken", "Blaziken"], []],
    [256, 'Combusken', 'Fire', 'Fighting', ["Torchic", "Combusken", "Blaziken"], []],
    [257, 'Blaziken', 'Fire', 'Fighting', ["Torchic", "Combusken", "Blaziken"], ["Mega"]],
    [258, 'Mudkip', 'Water', '', ["Mudkip", "Marshtomp", "Swampert"], []],
    [259, 'Marshtomp', 'Water', 'Ground', ["Mudkip", "Marshtomp", "Swampert"], []],
    [260, 'Swampert', 'Water', 'Ground', ["Mudkip", "Marshtomp", "Swampert"], ["Mega"]],
    [261, 'Poochyena', 'Dark', '', ["Poochyena", "Mightyena"], []],
    [262, 'Mightyena', 'Dark', '', ["Poochyena", "Mightyena"], []],
    [263, 'Zigzagoon', 'Normal', '', ["Zigzagoon", "Linoone"], ["Galarian Zigzagoon"]],
    [264, 'Linoone', 'Normal', '', ["Zigzagoon", "Linoone"], ["Galarian Linoone"]],
    [265, 'Wurmple', 'Bug', '', ["Wurmple", "Silcoon", "Beautifly"], []],
    [266, 'Silcoon', 'Bug', '', ["Wurmple", "Silcoon", "Beautifly"], []],
    [267, 'Beautifly', 'Bug', 'Flying', ["Wurmple", "Silcoon", "Beautifly"], []],
    [268, 'Cascoon', 'Bug', '', ["Wurmple", "Cascoon", "Dustox"], []],
    [269, 'Dustox', 'Bug', 'Poison', ["Wurmple", "Cascoon", "Dustox"], []],
    [270, 'Lotad', 'Water', 'Grass', ["Lotad", "Lombre", "Ludicolo"], []],
    [271, 'Lombre', 'Water', 'Grass', ["Lotad", "Lombre", "Ludicolo"], []],
    [272, 'Ludicolo', 'Water', 'Grass', ["Lotad", "Lombre", "Ludicolo"], []],
    [273, 'Seedot', 'Grass', '', ["Seedot", "Nuzleaf", "Shiftry"], []],
    [274, 'Nuzleaf', 'Grass', 'Dark', ["Seedot", "Nuzleaf", "Shiftry"], []],
    [275, 'Shiftry', 'Grass', 'Dark', ["Seedot", "Nuzleaf", "Shiftry"], []],
    [276, 'Taillow', 'Normal', 'Flying', ["Taillow", "Swellow"], []],
    [277, 'Swellow', 'Normal', 'Flying', ["Taillow", "Swellow"], []],
    [278, 'Wingull', 'Water', 'Flying', ["Wingull", "Pelipper"], []],
    [279, 'Pelipper', 'Water', 'Flying', ["Wingull", "Pelipper"], []],
    [280, 'Ralts', 'Psychic', 'Fairy', ["Ralts", "Kirlia", "Gardevoir"], []],
    [281, 'Kirlia', 'Psychic', 'Fairy', ["Ralts", "Kirlia", "Gardevoir"], []],
    [282, 'Gardevoir', 'Psychic', 'Fairy', ["Ralts", "Kirlia", "Gardevoir"], ["Mega"]],
    [283, 'Surskit', 'Bug', 'Water', ["Surskit", "Masquerain"], []],
    [284, 'Masquerain', 'Bug', 'Flying', ["Surskit", "Masquerain"], []],
    [285, 'Shroomish', 'Grass', '', ["Shroomish", "Breloom"], []],
    [286, 'Breloom', 'Grass', 'Fighting', ["Shroomish", "Breloom"], []],
    [287, 'Slakoth', 'Normal', '', ["Slakoth", "Vigoroth", "Slaking"], []],
    [288, 'Vigoroth', 'Normal', '', ["Slakoth", "Vigoroth", "Slaking"], []],
    [289, 'Slaking', 'Normal', '', ["Slakoth", "Vigoroth", "Slaking"], []],
    [290, 'Nincada', 'Bug', 'Ground', ["Nincada", "Ninjask", "Shedinja"], []],
    [291, 'Ninjask', 'Bug', 'Flying', ["Nincada", "Ninjask"], []],
    [292, 'Shedinja', 'Bug', 'Ghost', ["Nincada", "Shedinja"], []],
    [293, 'Whismur', 'Normal', '', ["Whismur", "Loudred", "Exploud"], []],
    [294, 'Loudred', 'Normal', '', ["Whismur", "Loudred", "Exploud"], []],
    [295, 'Exploud', 'Normal', '', ["Whismur", "Loudred", "Exploud"], []],
    [296, 'Makuhita', 'Fighting', '', ["Makuhita", "Hariyama"], []],
    [297, 'Hariyama', 'Fighting', '', ["Makuhita", "Hariyama"], []],
    [298, 'Azurill', 'Normal', 'Fairy', ["Azurill", "Marill", "Azumarill"], []],
    [299, 'Nosepass', 'Rock', '', ["Nosepass", "Probopass"], []],
    [300, 'Skitty', 'Normal', '', ["Skitty", "Delcatty"], []],
    [301, 'Delcatty', 'Normal', '', ["Skitty", "Delcatty"], []],
    [302, 'Sableye', 'Dark', 'Ghost', [], ["Mega"]],
    [303, 'Mawile', 'Steel', 'Fairy', [], ["Mega"]],
    [304, 'Aron', 'Steel', 'Rock', ["Aron", "Lairon", "Aggron"], []],
    [305, 'Lairon', 'Steel', 'Rock', ["Aron", "Lairon", "Aggron"], []],
    [306, 'Aggron', 'Steel', 'Rock', ["Aron", "Lairon", "Aggron"], ["Mega"]],
    [307, 'Meditite', 'Fighting', 'Psychic', ["Meditite", "Medicham"], []],
    [308, 'Medicham', 'Fighting', 'Psychic', ["Meditite", "Medicham"], ["Mega"]],
    [309, 'Electrike', 'Electric', '', ["Electrike", "Manectric"], []],
    [310, 'Manectric', 'Electric', '', ["Electrike", "Manectric"], ["Mega"]],
    [311, 'Plusle', 'Electric', '', [], []],
    [312, 'Minun', 'Electric', '', [], []],
    [313, 'Volbeat', 'Bug', '', [], []],
    [314, 'Illumise', 'Bug', '', [], []],
    [315, 'Roselia', 'Grass', 'Poison', ["Budew", "Roselia", "Roserade"], []],
    [316, 'Gulpin', 'Poison', '', ["Gulpin", "Swalot"], []],
    [317, 'Swalot', 'Poison', '', ["Gulpin", "Swalot"], []],
    [318, 'Carvanha', 'Water', 'Dark', ["Carvanha", "Sharpedo"], []],
    [319, 'Sharpedo', 'Water', 'Dark', ["Carvanha", "Sharpedo"], ["Mega"]],
    [320, 'Wailmer', 'Water', '', ["Wailmer", "Wailord"], []],
    [321, 'Wailord', 'Water', '', ["Wailmer", "Wailord"], []],
    [322, 'Numel', 'Fire', 'Ground', ["Numel", "Camerupt"], []],
    [323, 'Camerupt', 'Fire', 'Ground', ["Numel", "Camerupt"], ["Mega"]],
    [324, 'Torkoal', 'Fire', '', [], []],
    [325, 'Spoink', 'Psychic', '', ["Spoink", "Grumpig"], []],
    [326, 'Grumpig', 'Psychic', '', ["Spoink", "Grumpig"], []],
    [327, 'Spinda', 'Normal', '', [], []],
    [328, 'Trapinch', 'Ground', '', ["Trapinch", "Vibrava", "Flygon"], []],
    [329, 'Vibrava', 'Ground', 'Dragon', ["Trapinch", "Vibrava", "Flygon"], []],
    [330, 'Flygon', 'Ground', 'Dragon', ["Trapinch", "Vibrava", "Flygon"], []],
    [331, 'Cacnea', 'Grass', '', ["Cacnea", "Cacturne"], []],
    [332, 'Cacturne', 'Grass', 'Dark', ["Cacnea", "Cacturne"], []],
    [333, 'Swablu', 'Normal', 'Flying', ["Swablu", "Altaria"], []],
    [334, 'Altaria', 'Dragon', 'Flying', ["Swablu", "Altaria"], ["Mega"]],
    [335, 'Zangoose', 'Normal', '', [], []],
    [336, 'Seviper', 'Poison', '', [], []],
    [337, 'Lunatone', 'Rock', 'Psychic', [], []],
    [338, 'Solrock', 'Rock', 'Psychic', [], []],
    [339, 'Barboach', 'Water', 'Ground', ["Barboach", "Whiscash"], []],
    [340, 'Whiscash', 'Water', 'Ground', ["Barboach", "Whiscash"], []],
    [341, 'Corphish', 'Water', '', ["Corphish", "Crawdaunt"], []],
    [342, 'Crawdaunt', 'Water', 'Dark', ["Corphish", "Crawdaunt"], []],
    [343, 'Baltoy', 'Ground', 'Psychic', ["Baltoy", "Claydol"], []],
    [344, 'Claydol', 'Ground', 'Psychic', ["Baltoy", "Claydol"], []],
    [345, 'Lileep', 'Rock', 'Grass', ["Lileep", "Cradily"], []],
    [346, 'Cradily', 'Rock', 'Grass', ["Lileep", "Cradily"], []],
    [347, 'Anorith', 'Rock', 'Bug', ["Anorith", "Armaldo"], []],
    [348, 'Armaldo', 'Rock', 'Bug', ["Anorith", "Armaldo"], []],
    [349, 'Feebas', 'Water', '', ["Feebas", "Milotic"], []],
    [350, 'Milotic', 'Water', '', ["Feebas", "Milotic"], []],
    [351, 'Castform', 'Normal', '', [], ["Sunny Form", "Rainy Form", "Snowy Form"]],
    [352, 'Kecleon', 'Normal', '', [], []],
    [353, 'Shuppet', 'Ghost', '', ["Shuppet", "Banette"], []],
    [354, 'Banette', 'Ghost', '', ["Shuppet", "Banette"], ["Mega"]],
    [355, 'Duskull', 'Ghost', '', ["Duskull", "Dusclops", "Dusknoir"], []],
    [356, 'Dusclops', 'Ghost', '', ["Duskull", "Dusclops", "Dusknoir"], []],
    [357, 'Tropius', 'Grass', 'Flying', [], []],
    [358, 'Chimecho', 'Psychic', '', ["Chingling", "Chimecho"], []],
    [359, 'Absol', 'Dark', '', [], ["Mega"]],
    [360, 'Wynaut', 'Psychic', '', ["Wynaut", "Wobbuffet"], []],
    [361, 'Snorunt', 'Ice', '', ["Snorunt", "Glalie", "Froslass"], []],
    [362, 'Glalie', 'Ice', '', ["Snorunt", "Glalie"], ["Mega"]],
    [363, 'Spheal', 'Ice', 'Water', ["Spheal", "Sealeo", "Walrein"], []],
    [364, 'Sealeo', 'Ice', 'Water', ["Spheal", "Sealeo", "Walrein"], []],
    [365, 'Walrein', 'Ice', 'Water', ["Spheal", "Sealeo", "Walrein"], []],
    [366, 'Clamperl', 'Water', '', ["Clamperl", "Huntail", "Gorebyss"], []],
    [367, 'Huntail', 'Water', '', ["Clamperl", "Huntail"], []],
    [368, 'Gorebyss', 'Water', '', ["Clamperl", "Gorebyss"], []],
    [369, 'Relicanth', 'Water', 'Rock', [], []],
    [370, 'Luvdisc', 'Water', '', [], []],
    [371, 'Bagon', 'Dragon', '', ["Bagon", "Shelgon", "Salamence"], []],
    [372, 'Shelgon', 'Dragon', '', ["Bagon", "Shelgon", "Salamence"], []],
    [373, 'Salamence', 'Dragon', 'Flying', ["Bagon", "Shelgon", "Salamence"], ["Mega"]],
    [374, 'Beldum', 'Steel', 'Psychic', ["Beldum", "Metang", "Metagross"], []],
    [375, 'Metang', 'Steel', 'Psychic', ["Beldum", "Metang", "Metagross"], []],
    [376, 'Metagross', 'Steel', 'Psychic', ["Beldum", "Metang", "Metagross"], ["Mega"]],
    [377, 'Regirock', 'Rock', '', [], []],
    [378, 'Regice', 'Ice', '', [], []],
    [379, 'Registeel', 'Steel', '', [], []],
    [380, 'Latias', 'Dragon', 'Psychic', [], ["Mega"]],
    [381, 'Latios', 'Dragon', 'Psychic', [], ["Mega"]],
    [382, 'Kyogre', 'Water', '', [], ["Primal"]],
    [383, 'Groudon', 'Ground', '', [], ["Primal"]],
    [384, 'Rayquaza', 'Dragon', 'Flying', [], ["Mega"]],
    [385, 'Jirachi', 'Steel', 'Psychic', [], []],
    [386, 'Deoxys', 'Psychic', '', [], ["Attack", "Defense", "Speed"]],
    [387, 'Turtwig', 'Grass', '', ["Turtwig", "Grotle", "Torterra"], []],
    [388, 'Grotle', 'Grass', '', ["Turtwig", "Grotle", "Torterra"], []],
    [389, 'Torterra', 'Grass', 'Ground', ["Turtwig", "Grotle", "Torterra"], []],
    [390, 'Chimchar', 'Fire', '', ["Chimchar", "Monferno", "Infernape"], []],
    [391, 'Monferno', 'Fire', 'Fighting', ["Chimchar", "Monferno", "Infernape"], []],
    [392, 'Infernape', 'Fire', 'Fighting', ["Chimchar", "Monferno", "Infernape"], []],
    [393, 'Piplup', 'Water', '', ["Piplup", "Prinplup", "Empoleon"], []],
    [394, 'Prinplup', 'Water', '', ["Piplup", "Prinplup", "Empoleon"], []],
    [395, 'Empoleon', 'Water', 'Steel', ["Piplup", "Prinplup", "Empoleon"], []],
    [396, 'Starly', 'Normal', 'Flying', ["Starly", "Staravia", "Staraptor"], []],
    [397, 'Staravia', 'Normal', 'Flying', ["Starly", "Staravia", "Staraptor"], []],
    [398, 'Staraptor', 'Normal', 'Flying', ["Starly", "Staravia", "Staraptor"], []],
    [399, 'Bidoof', 'Normal', '', ["Bidoof", "Bibarel"], []],
    [400, 'Bibarel', 'Normal', 'Water', ["Bidoof", "Bibarel"], []],
    [401, 'Kricketot', 'Bug', '', ["Kricketot", "Kricketune"], []],
    [402, 'Kricketune', 'Bug', '', ["Kricketot", "Kricketune"], []],
    [403, 'Shinx', 'Electric', '', ["Shinx", "Luxio", "Luxray"], []],
    [404, 'Luxio', 'Electric', '', ["Shinx", "Luxio", "Luxray"], []],
    [405, 'Luxray', 'Electric', '', ["Shinx", "Luxio", "Luxray"], []],
    [406, 'Budew', 'Grass', 'Poison', ["Budew", "Roselia", "Roserade"], []],
    [407, 'Roserade', 'Grass', 'Poison', ["Budew", "Roselia", "Roserade"], []],
    [408, 'Cranidos', 'Rock', '', ["Cranidos", "Rampardos"], []],
    [409, 'Rampardos', 'Rock', '', ["Cranidos", "Rampardos"], []],
    [410, 'Shieldon', 'Rock', 'Steel', ["Shieldon", "Bastiodon"], []],
    [411, 'Bastiodon', 'Rock', 'Steel', ["Shieldon", "Bastiodon"], []],
    [412, 'Burmy', 'Bug', '', ["Burmy", "Wormadam", "Mothim"], ["Trash Cloak", "Sandy Cloak", "Plant Cloak"]],
    [413, 'Wormadam', 'Bug', 'Grass', ["Burmy", "Wormadam"], ["Trash Cloak", "Sandy Cloak", "Plant Cloak"]],
    [414, 'Mothim', 'Bug', 'Flying', ["Burmy", "Mothim"], []],
    [415, 'Combee', 'Bug', 'Flying', ["Combee", "Vespiquen"], []],
    [416, 'Vespiquen', 'Bug', 'Flying', ["Combee", "Vespiquen"], []],
    [417, 'Pachirisu', 'Electric', '', [], []],
    [418, 'Buizel', 'Water', '', ["Buizel", "Floatzel"], []],
    [419, 'Floatzel', 'Water', '', ["Buizel", "Floatzel"], []],
    [420, 'Cherubi', 'Grass', '', ["Cherubi", "Cherrim"], []],
    [421, 'Cherrim', 'Grass', '', ["Cherubi", "Cherrim"], ["Sunshine"]],
    [422, 'Shellos', 'Water', '', ["Shellos", "Gastrodon"], ["West Sea", "East Sea"]],
    [423, 'Gastrodon', 'Water', 'Ground', ["Shellos", "Gastrodon"], ["West Sea", "East Sea"]],
    [424, 'Ambipom', 'Normal', '', ["Aipom", "Ambipom"], []],
    [425, 'Drifloon', 'Ghost', 'Flying', ["Drifloon", "Drifblim"], []],
    [426, 'Drifblim', 'Ghost', 'Flying', ["Drifloon", "Drifblim"], []],
    [427, 'Buneary', 'Normal', '', ["Buneary", "Lopunny"], []],
    [428, 'Lopunny', 'Normal', '', ["Buneary", "Lopunny"], ["Mega"]],
    [429, 'Mismagius', 'Ghost', '', ["Misdreavus", "Mismagius"], []],
    [430, 'Honchkrow', 'Dark', 'Flying', ["Murkrow", "Honchkrow"], []],
    [431, 'Glameow', 'Normal', '', ["Glameow", "Purugly"], []],
    [432, 'Purugly', 'Normal', '', ["Glameow", "Purugly"], []],
    [433, 'Chingling', 'Psychic', '', ["Chingling", "Chimecho"], []],
    [434, 'Stunky', 'Poison', 'Dark', ["Stunky", "Skuntank"], []],
    [435, 'Skuntank', 'Poison', 'Dark', ["Stunky", "Skuntank"], []],
    [436, 'Bronzor', 'Steel', 'Psychic', ["Bronzor", "Bronzong"], []],
    [437, 'Bronzong', 'Steel', 'Psychic', ["Bronzor", "Bronzong"], []],
    [438, 'Bonsly', 'Rock', '', ["Bonsly", "Sudowoodo"], []],
    [439, 'Mime Jr.', 'Psychic', 'Fairy', ["Mime Jr.", "Mr. Mime"], []],
    [440, 'Happiny', 'Normal', '', ["Happiny", "Chansey", "Blissey"], []],
    [441, 'Chatot', 'Normal', 'Flying', [], []],
    [442, 'Spiritomb', 'Ghost', 'Dark', [], []],
    [443, 'Gible', 'Dragon', 'Ground', ["Gible", "Gabite", "Garchomp"], []],
    [444, 'Gabite', 'Dragon', 'Ground', ["Gible", "Gabite", "Garchomp"], []],
    [445, 'Garchomp', 'Dragon', 'Ground', ["Gible", "Gabite", "Garchomp"], ["Mega"]],
    [446, 'Munchlax', 'Normal', '', ["Munchlax", "Snorlax"], []],
    [447, 'Riolu', 'Fighting', '', ["Riolu", "Lucario"], []],
    [448, 'Lucario', 'Fighting', 'Steel', ["Riolu", "Lucario"], ["Mega"]],
    [449, 'Hippopotas', 'Ground', '', ["Hippopotas", "Hippowdon"], []],
    [450, 'Hippowdon', 'Ground', '', ["Hippopotas", "Hippowdon"], []],
    [451, 'Skorupi', 'Poison', 'Bug', ["Skorupi", "Drapion"], []],
    [452, 'Drapion', 'Poison', 'Dark', ["Skorupi", "Drapion"], []],
    [453, 'Croagunk', 'Poison', 'Fighting', ["Croagunk", "Toxicroak"], []],
    [454, 'Toxicroak', 'Poison', 'Fighting', ["Croagunk", "Toxicroak"], []],
    [455, 'Carnivine', 'Grass', '', [], []],
    [456, 'Finneon', 'Water', '', ["Finneon", "Lumineon"], []],
    [457, 'Lumineon', 'Water', '', ["Finneon", "Lumineon"], []],
    [458, 'Mantyke', 'Water', 'Flying', ["Mantyke", "Mantine"], []],
    [459, 'Snover', 'Grass', 'Ice', ["Snover", "Abomasnow"], []],
    [460, 'Abomasnow', 'Grass', 'Ice', ["Snover", "Abomasnow"], ["Mega"]],
    [461, 'Weavile', 'Dark', 'Ice', ["Sneasel", "Weavile"], []],
    [462, 'Magnezone', 'Electric', 'Steel', ["Magnemite", "Magneton", "Magnezone"], []],
    [463, 'Lickilicky', 'Normal', '', ["Lickitung", "Lickilicky"], []],
    [464, 'Rhyperior', 'Ground', 'Rock', ["Rhyhorn", "Rhydon", "Rhyperior"], []],
    [465, 'Tangrowth', 'Grass', '', ["Tangela", "Tangrowth"], []],
    [466, 'Electivire', 'Electric', '', ["Elekid", "Electabuzz", "Electivire"], []],
    [467, 'Magmortar', 'Fire', '', ["Magby", "Magmar", "Magmortar"], []],
    [468, 'Togekiss', 'Fairy', 'Flying', ["Togepi", "Togetic", "Togekiss"], []],
    [469, 'Yanmega', 'Bug', 'Flying', ["Yanma", "Yanmega"], []],
    [470, 'Leafeon', 'Grass', '', ["Eevee", "Leafeon"], []],
    [471, 'Glaceon', 'Ice', '', ["Eevee", "Glaceon"], []],
    [472, 'Gliscor', 'Ground', 'Flying', ["Gligar", "Gliscor"], []],
    [473, 'Mamoswine', 'Ice', 'Ground', ["Swinub", "Piloswine", "Mamoswine"], []],
    [474, 'Porygon-Z', 'Normal', '', ["Porygon", "Porygon2", "Porygon-Z"], []],
    [475, 'Gallade', 'Psychic', 'Fighting', ["Ralts", "Kirlia", "Gallade"], ["Mega"]],
    [476, 'Probopass', 'Rock', 'Steel', ["Nosepass", "Probopass"], []],
    [477, 'Dusknoir', 'Ghost', '', ["Duskull", "Dusclops", "Dusknoir"], []],
    [478, 'Froslass', 'Ice', 'Ghost', ["Snorunt", "Froslass"], []],
    [479, 'Rotom', 'Electric', 'Ghost', [], ["Heat Rotom", "Wash Rotom", "Frost Rotom", "Fan Rotom", "Mow Rotom"]],
    [480, 'Uxie', 'Psychic', '', [], []],
    [481, 'Mesprit', 'Psychic', '', [], []],
    [482, 'Azelf', 'Psychic', '', [], []],
    [483, 'Dialga', 'Steel', 'Dragon', [], ["Origin Forme"]],
    [484, 'Palkia', 'Water', 'Dragon', [], ["Origin Forme"]],
    [485, 'Heatran', 'Fire', 'Steel', [], []],
    [486, 'Regigigas', 'Normal', '', [], []],
    [487, 'Giratina', 'Ghost', 'Dragon', [], ["Origin Forme"]],
    [488, 'Cresselia', 'Psychic', '', [], []],
    [489, 'Phione', 'Water', '', [], []],
    [490, 'Manaphy', 'Water', '', [], []],
    [491, 'Darkrai', 'Dark', '', [], []],
    [492, 'Shaymin', 'Grass', '', [], ["Land Forme", "Sky Forme"]],
    [493, 'Arceus', 'Normal', '', [], ["Fire"]],
    [494, 'Victini', 'Psychic', 'Fire', [], []],
    [495, 'Snivy', 'Grass', '', ["Snivy", "Servine", "Serperior"], []],
    [496, 'Servine', 'Grass', '', ["Snivy", "Servine", "Serperior"], []],
    [497, 'Serperior', 'Grass', '', ["Snivy", "Servine", "Serperior"], []],
    [498, 'Tepig', 'Fire', '', ["Tepig", "Pignite", "Emboar"], []],
    [499, 'Pignite', 'Fire', 'Fighting', ["Tepig", "Pignite", "Emboar"], []],
    [500, 'Emboar', 'Fire', 'Fighting', ["Tepig", "Pignite", "Emboar"], []],
    [501, 'Oshawott', 'Water', '', ["Oshawott", "Dewott", "Samurott"], []],
    [502, 'Dewott', 'Water', '', ["Oshawott", "Dewott", "Samurott"], []],
    [503, 'Samurott', 'Water', '', ["Oshawott", "Dewott", "Samurott"], ["Hisuian Samurott"]],
    [504, 'Patrat', 'Normal', '', ["Patrat", "Watchog"], []],
    [505, 'Watchog', 'Normal', '', ["Patrat", "Watchog"], []],
    [506, 'Lillipup', 'Normal', '', ["Lillipup", "Herdier", "Stoutland"], []],
    [507, 'Herdier', 'Normal', '', ["Lillipup", "Herdier", "Stoutland"], []],
    [508, 'Stoutland', 'Normal', '', ["Lillipup", "Herdier", "Stoutland"], []],
    [509, 'Purrloin', 'Dark', '', ["Purrloin", "Liepard"], []],
    [510, 'Liepard', 'Dark', '', ["Purrloin", "Liepard"], []],
    [511, 'Pansage', 'Grass', '', ["Pansage", "Simisage"], []],
    [512, 'Simisage', 'Grass', '', ["Pansage", "Simisage"], []],
    [513, 'Pansear', 'Fire', '', ["Pansear", "Simisear"], []],
    [514, 'Simisear', 'Fire', '', ["Pansear", "Simisear"], []],
    [515, 'Panpour', 'Water', '', ["Panpour", "Simipour"], []],
    [516, 'Simipour', 'Water', '', ["Panpour", "Simipour"], []],
    [517, 'Munna', 'Psychic', '', ["Munna", "Musharna"], []],
    [518, 'Musharna', 'Psychic', '', ["Munna", "Musharna"], []],
    [519, 'Pidove', 'Normal', 'Flying', ["Pidove", "Tranquill", "Unfezant"], []],
    [520, 'Tranquill', 'Normal', 'Flying', ["Pidove", "Tranquill", "Unfezant"], []],
    [521, 'Unfezant', 'Normal', 'Flying', ["Pidove", "Tranquill", "Unfezant"], []],
    [522, 'Blitzle', 'Electric', '', ["Blitzle", "Zebstrika"], []],
    [523, 'Zebstrika', 'Electric', '', ["Blitzle", "Zebstrika"], []],
    [524, 'Roggenrola', 'Rock', '', ["Roggenrola", "Boldore", "Gigalith"], []],
    [525, 'Boldore', 'Rock', '', ["Roggenrola", "Boldore", "Gigalith"], []],
    [526, 'Gigalith', 'Rock', '', ["Roggenrola", "Boldore", "Gigalith"], []],
    [527, 'Woobat', 'Psychic', 'Flying', ["Woobat", "Swoobat"], []],
    [528, 'Swoobat', 'Psychic', 'Flying', ["Woobat", "Swoobat"], []],
    [529, 'Drilbur', 'Ground', '', ["Drilbur", "Excadrill"], []],
    [530, 'Excadrill', 'Ground', 'Steel', ["Drilbur", "Excadrill"], []],
    [531, 'Audino', 'Normal', '', [], ["Mega"]],
    [532, 'Timburr', 'Fighting', '', ["Timburr", "Gurdurr", "Conkeldurr"], []],
    [533, 'Gurdurr', 'Fighting', '', ["Timburr", "Gurdurr", "Conkeldurr"], []],
    [534, 'Conkeldurr', 'Fighting', '', ["Timburr", "Gurdurr", "Conkeldurr"], []],
    [535, 'Tympole', 'Water', '', ["Tympole", "Palpitoad", "Seismitoad"], []],
    [536, 'Palpitoad', 'Water', 'Ground', ["Tympole", "Palpitoad", "Seismitoad"], []],
    [537, 'Seismitoad', 'Water', 'Ground', ["Tympole", "Palpitoad", "Seismitoad"], []],
    [538, 'Throh', 'Fighting', '', [], []],
    [539, 'Sawk', 'Fighting', '', [], []],
    [540, 'Sewaddle', 'Bug', 'Grass', ["Sewaddle", "Swadloon", "Leavanny"], []],
    [541, 'Swadloon', 'Bug', 'Grass', ["Sewaddle", "Swadloon", "Leavanny"], []],
    [542, 'Leavanny', 'Bug', 'Grass', ["Sewaddle", "Swadloon", "Leavanny"], []],
    [543, 'Venipede', 'Bug', 'Poison', ["Venipede", "Whirlipede", "Scolipede"], []],
    [544, 'Whirlipede', 'Bug', 'Poison', ["Venipede", "Whirlipede", "Scolipede"], []],
    [545, 'Scolipede', 'Bug', 'Poison', ["Venipede", "Whirlipede", "Scolipede"], []],
    [546, 'Cottonee', 'Grass', 'Fairy', ["Cottonee", "Whimsicott"], []],
    [547, 'Whimsicott', 'Grass', 'Fairy', ["Cottonee", "Whimsicott"], []],
    [548, 'Petilil', 'Grass', '', ["Petilil", "Lilligant"], []],
    [549, 'Lilligant', 'Grass', '', ["Petilil", "Lilligant"], ["Hisuian Lilligant"]],
    [550, 'Basculin', 'Water', '', [], ["White-Striped Basculin"]],
    [551, 'Sandile', 'Ground', 'Dark', ["Sandile", "Krokorok", "Krookodile"], []],
    [552, 'Krokorok', 'Ground', 'Dark', ["Sandile", "Krokorok", "Krookodile"], []],
    [553, 'Krookodile', 'Ground', 'Dark', ["Sandile", "Krokorok", "Krookodile"], []],
    [554, 'Darumaka', 'Fire', '', ["Darumaka", "Darmanitan"], ["Galarian Darumaka"]],
    [555, 'Darmanitan', 'Fire', '', ["Darumaka", "Darmanitan"], ["Zen Mode", "Galarian", "Galarian Zen Mode"]],
    [556, 'Maractus', 'Grass', '', [], []],
    [557, 'Dwebble', 'Bug', 'Rock', ["Dwebble", "Crustle"], []],
    [558, 'Crustle', 'Bug', 'Rock', ["Dwebble", "Crustle"], []],
    [559, 'Scraggy', 'Dark', 'Fighting', ["Scraggy", "Scrafty"], []],
    [560, 'Scrafty', 'Dark', 'Fighting', ["Scraggy", "Scrafty"], []],
    [561, 'Sigilyph', 'Psychic', 'Flying', [], []],
    [562, 'Yamask', 'Ghost', '', ["Yamask", "Cofagrigus"], ["Galarian Yamask"]],
    [563, 'Cofagrigus', 'Ghost', '', ["Yamask", "Cofagrigus"], []],
    [564, 'Tirtouga', 'Water', 'Rock', ["Tirtouga", "Carracosta"], []],
    [565, 'Carracosta', 'Water', 'Rock', ["Tirtouga", "Carracosta"], []],
    [566, 'Archen', 'Rock', 'Flying', ["Archen", "Archeops"], []],
    [567, 'Archeops', 'Rock', 'Flying', ["Archen", "Archeops"], []],
    [568, 'Trubbish', 'Poison', '', ["Trubbish", "Garbodor"], []],
    [569, 'Garbodor', 'Poison', '', ["Trubbish", "Garbodor"], ["Gmax Garbodor"]],
    [570, 'Zorua', 'Dark', '', ["Zorua", "Zoroark"], ["Hisuian Zorua"]],
    [571, 'Zoroark', 'Dark', '', ["Zorua", "Zoroark"], ["Hisuian Zoroark"]],
    [572, 'Minccino', 'Normal', '', ["Minccino", "Cinccino"], []],
    [573, 'Cinccino', 'Normal', '', ["Minccino", "Cinccino"], []],
    [574, 'Gothita', 'Psychic', '', ["Gothita", "Gothorita", "Gothitelle"], []],
    [575, 'Gothorita', 'Psychic', '', ["Gothita", "Gothorita", "Gothitelle"], []],
    [576, 'Gothitelle', 'Psychic', '', ["Gothita", "Gothorita", "Gothitelle"], []],
    [577, 'Solosis', 'Psychic', '', ["Solosis", "Duosion", "Reuniclus"], []],
    [578, 'Duosion', 'Psychic', '', ["Solosis", "Duosion", "Reuniclus"], []],
    [579, 'Reuniclus', 'Psychic', '', ["Solosis", "Duosion", "Reuniclus"], []],
    [580, 'Ducklett', 'Water', 'Flying', ["Ducklett", "Swanna"], []],
    [581, 'Swanna', 'Water', 'Flying', ["Ducklett", "Swanna"], []],
    [582, 'Vanillite', 'Ice', '', ["Vanillite", "Vanillish", "Vanilluxe"], []],
    [583, 'Vanillish', 'Ice', '', ["Vanillite", "Vanillish", "Vanilluxe"], []],
    [584, 'Vanilluxe', 'Ice', '', ["Vanillite", "Vanillish", "Vanilluxe"], []],
    [585, 'Deerling', 'Normal', 'Grass', ["Deerling", "Sawsbuck"], ["Summer","Autumn","Winter"]],
    [586, 'Sawsbuck', 'Normal', 'Grass', ["Deerling", "Sawsbuck"], ["Summer","Autumn","Winter"]],
    [587, 'Emolga', 'Electric', 'Flying', [], []],
    [588, 'Karrablast', 'Bug', '', ["Karrablast", "Escavalier"], []],
    [589, 'Escavalier', 'Bug', 'Steel', ["Karrablast", "Escavalier"], []],
    [590, 'Foongus', 'Grass', 'Poison', ["Foongus", "Amoonguss"], []],
    [591, 'Amoonguss', 'Grass', 'Poison', ["Foongus", "Amoonguss"], []],
    [592, 'Frillish', 'Water', 'Ghost', ["Frillish", "Jellicent"], []],
    [593, 'Jellicent', 'Water', 'Ghost', ["Frillish", "Jellicent"], []],
    [594, 'Alomomola', 'Water', '', [], []],
    [595, 'Joltik', 'Bug', 'Electric', ["Joltik", "Galvantula"], []],
    [596, 'Galvantula', 'Bug', 'Electric', ["Joltik", "Galvantula"], []],
    [597, 'Ferroseed', 'Grass', 'Steel', ["Ferroseed", "Ferrothorn"], []],
    [598, 'Ferrothorn', 'Grass', 'Steel', ["Ferroseed", "Ferrothorn"], []],
    [599, 'Klink', 'Steel', '', ["Klink", "Klang", "Klinklang"], []],
    [600, 'Klang', 'Steel', '', ["Klink", "Klang", "Klinklang"], []],
    [601, 'Klinklang', 'Steel', '', ["Klink", "Klang", "Klinklang"], []],
    [602, 'Tynamo', 'Electric', '', ["Tynamo", "Eelektrik", "Eelektross"], []],
    [603, 'Eelektrik', 'Electric', '', ["Tynamo", "Eelektrik", "Eelektross"], []],
    [604, 'Eelektross', 'Electric', '', ["Tynamo", "Eelektrik", "Eelektross"], []],
    [605, 'Elgyem', 'Psychic', '', ["Elgyem", "Beheeyem"], []],
    [606, 'Beheeyem', 'Psychic', '', ["Elgyem", "Beheeyem"], []],
    [607, 'Litwick', 'Ghost', 'Fire', ["Litwick", "Lampent", "Chandelure"], []],
    [608, 'Lampent', 'Ghost', 'Fire', ["Litwick", "Lampent", "Chandelure"], []],
    [609, 'Chandelure', 'Ghost', 'Fire', ["Litwick", "Lampent", "Chandelure"], []],
    [610, 'Axew', 'Dragon', '', ["Axew", "Fraxure", "Haxorus"], []],
    [611, 'Fraxure', 'Dragon', '', ["Axew", "Fraxure", "Haxorus"], []],
    [612, 'Haxorus', 'Dragon', '', ["Axew", "Fraxure", "Haxorus"], []],
    [613, 'Cubchoo', 'Ice', '', ["Cubchoo", "Beartic"], []],
    [614, 'Beartic', 'Ice', '', ["Cubchoo", "Beartic"], []],
    [615, 'Cryogonal', 'Ice', '', [], []],
    [616, 'Shelmet', 'Bug', '', ["Shelmet", "Accelgor"], []],
    [617, 'Accelgor', 'Bug', '', ["Shelmet", "Accelgor"], []],
    [618, 'Stunfisk', 'Ground', 'Electric', [], ["Galarian Stunfisk"]],
    [619, 'Mienfoo', 'Fighting', '', ["Mienfoo", "Mienshao"], []],
    [620, 'Mienshao', 'Fighting', '', ["Mienfoo", "Mienshao"], []],
    [621, 'Druddigon', 'Dragon', '', [], []],
    [622, 'Golett', 'Ground', 'Ghost', ["Golett", "Golurk"], []],
    [623, 'Golurk', 'Ground', 'Ghost', ["Golett", "Golurk"], []],
    [624, 'Pawniard', 'Dark', 'Steel', ["Pawniard", "Bisharp"], []],
    [625, 'Bisharp', 'Dark', 'Steel', ["Pawniard", "Bisharp"], []],
    [626, 'Bouffalant', 'Normal', '', [], []],
    [627, 'Rufflet', 'Normal', 'Flying', ["Rufflet", "Braviary"], []],
    [628, 'Braviary', 'Normal', 'Flying', ["Rufflet", "Braviary"], []],
    [629, 'Vullaby', 'Dark', 'Flying', ["Vullaby", "Mandibuzz"], []],
    [630, 'Mandibuzz', 'Dark', 'Flying', ["Vullaby", "Mandibuzz"], []],
    [631, 'Heatmor', 'Fire', '', [], []],
    [632, 'Durant', 'Bug', 'Steel', [], []],
    [633, 'Deino', 'Dark', 'Dragon', ["Deino", "Zweilous", "Hydreigon"], []],
    [634, 'Zweilous', 'Dark', 'Dragon', ["Deino", "Zweilous", "Hydreigon"], []],
    [635, 'Hydreigon', 'Dark', 'Dragon', ["Deino", "Zweilous", "Hydreigon"], []],
    [636, 'Larvesta', 'Bug', 'Fire', ["Larvesta", "Volcarona"], []],
    [637, 'Volcarona', 'Bug', 'Fire', ["Larvesta", "Volcarona"], []],
    [638, 'Cobalion', 'Steel', 'Fighting', [], []],
    [639, 'Terrakion', 'Rock', 'Fighting', [], []],
    [640, 'Virizion', 'Grass', 'Fighting', [], []],
    [641, 'Tornadus', 'Flying', '', [], ["Therian Forme"]],
    [642, 'Thundurus', 'Electric', 'Flying', [], ["Therian Forme"]],
    [643, 'Reshiram', 'Dragon', 'Fire', [], []],
    [644, 'Zekrom', 'Dragon', 'Electric', [], []],
    [645, 'Landorus', 'Ground', 'Flying', [], ["Therian Forme"]],
    [646, 'Kyurem', 'Dragon', 'Ice', [], ["Black Kyurem", "White Kyurem"]],
    [647, 'Keldeo', 'Water', 'Fighting', [], ["Resolute"]],
    [648, 'Meloetta', 'Normal', 'Psychic', [], ["Pirouette Forme"]],
    [649, 'Genesect', 'Bug', 'Steel', [], ["Douse Drive", "Shock Drive", "Burn Drive", "Chill Drive"]],
    [650, 'Chespin', 'Grass', '', ["Chespin", "Quilladin", "Chesnaught"], []],
    [651, 'Quilladin', 'Grass', '', ["Chespin", "Quilladin", "Chesnaught"], []],
    [652, 'Chesnaught', 'Grass', 'Fighting', ["Chespin", "Quilladin", "Chesnaught"], []],
    [653, 'Fennekin', 'Fire', '', ["Fennekin", "Braixen", "Delphox"], []],
    [654, 'Braixen', 'Fire', '', ["Fennekin", "Braixen", "Delphox"], []],
    [655, 'Delphox', 'Fire', 'Psychic', ["Fennekin", "Braixen", "Delphox"], []],
    [656, 'Froakie', 'Water', '', ["Froakie", "Frogadier", "Greninja"], []],
    [657, 'Frogadier', 'Water', '', ["Froakie", "Frogadier", "Greninja"], []],
    [658, 'Greninja', 'Water', 'Dark', ["Froakie", "Frogadier", "Greninja"], ["Ash"]],
    [659, 'Bunnelby', 'Normal', '', ["Bunnelby", "Diggersby"], []],
    [660, 'Diggersby', 'Normal', 'Ground', ["Bunnelby", "Diggersby"], []],
    [661, 'Fletchling', 'Normal', 'Flying', ["Fletchling", "Fletchinder", "Talonflame"], []],
    [662, 'Fletchinder', 'Fire', 'Flying', ["Fletchling", "Fletchinder", "Talonflame"], []],
    [663, 'Talonflame', 'Fire', 'Flying', ["Fletchling", "Fletchinder", "Talonflame"], []],
    [664, 'Scatterbug', 'Bug', '', ["Scatterbug", "Spewpa", "Vivillon"], []],
    [665, 'Spewpa', 'Bug', '', ["Scatterbug", "Spewpa", "Vivillon"], []],
    [666, 'Vivillon', 'Bug', 'Flying', ["Scatterbug", "Spewpa", "Vivillon"], []],
    [667, 'Litleo', 'Fire', 'Normal', ["Litleo", "Pyroar"], []],
    [668, 'Pyroar', 'Fire', 'Normal', ["Litleo", "Pyroar"], []],
    [669, 'Flabébé', 'Fairy', '', ["Flabébé", "Floette", "Florges"], []],
    [670, 'Floette', 'Fairy', '', ["Flabébé", "Floette", "Florges"], []],
    [671, 'Florges', 'Fairy', '', ["Flabébé", "Floette", "Florges"], []],
    [672, 'Skiddo', 'Grass', '', ["Skiddo", "Gogoat"], []],
    [673, 'Gogoat', 'Grass', '', ["Skiddo", "Gogoat"], []],
    [674, 'Pancham', 'Fighting', '', ["Pancham", "Pangoro"], []],
    [675, 'Pangoro', 'Fighting', 'Dark', ["Pancham", "Pangoro"], []],
    [676, 'Furfrou', 'Normal', '', [], ["Dandy","Debutante","Diamond","Heart","Kabuki","La-Reine","Matron","Pharaoh","Star"]],
    [677, 'Espurr', 'Psychic', '', ["Espurr", "Meowstic"], []],
    [678, 'Meowstic', 'Psychic', '', ["Espurr", "Meowstic"], []],
    [679, 'Honedge', 'Steel', 'Ghost', ["Honedge", "Doublade", "Aegislash"], []],
    [680, 'Doublade', 'Steel', 'Ghost', ["Honedge", "Doublade", "Aegislash"], []],
    [681, 'Aegislash', 'Steel', 'Ghost', ["Honedge", "Doublade", "Aegislash"], []],
    [682, 'Spritzee', 'Fairy', '', ["Spritzee", "Aromatisse"], []],
    [683, 'Aromatisse', 'Fairy', '', ["Spritzee", "Aromatisse"], []],
    [684, 'Swirlix', 'Fairy', '', ["Swirlix", "Slurpuff"], []],
    [685, 'Slurpuff', 'Fairy', '', ["Swirlix", "Slurpuff"], []],
    [686, 'Inkay', 'Dark', 'Psychic', ["Inkay", "Malamar"], []],
    [687, 'Malamar', 'Dark', 'Psychic', ["Inkay", "Malamar"], []],
    [688, 'Binacle', 'Rock', 'Water', ["Binacle", "Barbaracle"], []],
    [689, 'Barbaracle', 'Rock', 'Water', ["Binacle", "Barbaracle"], []],
    [690, 'Skrelp', 'Poison', 'Water', ["Skrelp", "Dragalge"], []],
    [691, 'Dragalge', 'Poison', 'Dragon', ["Skrelp", "Dragalge"], []],
    [692, 'Clauncher', 'Water', '', ["Clauncher", "Clawitzer"], []],
    [693, 'Clawitzer', 'Water', '', ["Clauncher", "Clawitzer"], []],
    [694, 'Helioptile', 'Electric', 'Normal', ["Helioptile", "Heliolisk"], []],
    [695, 'Heliolisk', 'Electric', 'Normal', ["Helioptile", "Heliolisk"], []],
    [696, 'Tyrunt', 'Rock', 'Dragon', ["Tyrunt", "Tyrantrum"], []],
    [697, 'Tyrantrum', 'Rock', 'Dragon', ["Tyrunt", "Tyrantrum"], []],
    [698, 'Amaura', 'Rock', 'Ice', ["Amaura", "Aurorus"], []],
    [699, 'Aurorus', 'Rock', 'Ice', ["Amaura", "Aurorus"], []],
    [700, 'Sylveon', 'Fairy', [], [], []],
    [701, 'Hawlucha', 'Fighting', 'Flying', [], []],
    [702, 'Dedenne', 'Electric', 'Fairy', [], []],
    [703, 'Carbink', 'Rock', 'Fairy', [], []],
    [704, 'Goomy', 'Dragon', "",["Goomy", "Sliggoo", "Goodra"], []],
    [705, 'Sliggoo', 'Dragon',"", ["Goomy", "Sliggoo", "Goodra"], []],
    [706, 'Goodra', 'Dragon', "",["Goomy", "Sliggoo", "Goodra"], []],
    [707, 'Klefki', 'Steel', 'Fairy', [], []],
    [708, 'Phantump', 'Ghost', 'Grass', ["Phantump", "Trevenant"], []],
    [709, 'Trevenant', 'Ghost', 'Grass', ["Phantump", "Trevenant"], []],
    [710, 'Pumpkaboo', 'Ghost', 'Grass', ["Pumpkaboo", "Gourgeist"], []],
    [711, 'Gourgeist', 'Ghost', 'Grass', ["Pumpkaboo", "Gourgeist"], []],
    [712, 'Bergmite', 'Ice', ["Bergmite", "Avalugg"], []],
    [713, 'Avalugg', 'Ice', ["Bergmite", "Avalugg"], []],
    [714, 'Noibat', 'Flying', 'Dragon', ["Noibat", "Noivern"], []],
    [715, 'Noivern', 'Flying', 'Dragon', ["Noibat", "Noivern"], []],
    [716, 'Xerneas', 'Fairy', '', [], ["Neutral"]],
    [717, 'Yveltal', 'Dark', 'Flying', [], []],
    [718, 'Zygarde', 'Dragon', 'Ground', [], ["50% Forme", "10% Forme", "Complete Forme"]],
    [719, 'Diancie', 'Rock', 'Fairy', [], []],
    [720, 'Hoopa', 'Psychic', 'Ghost', [], ["Unbound Forme"]],
    [721, 'Volcanion', 'Fire', 'Water', [], []],
    [722, 'Rowlet', 'Grass', 'Flying', ["Rowlet", "Dartrix", "Decidueye"], []],
    [723, 'Dartrix', 'Grass', 'Flying', ["Rowlet", "Dartrix", "Decidueye"], []],
    [724, 'Decidueye', 'Grass', 'Ghost', ["Rowlet", "Dartrix", "Decidueye"], []],
    [725, 'Litten', 'Fire', ["Litten", "Torracat", "Incineroar"], []],
    [726, 'Torracat', 'Fire', ["Litten", "Torracat", "Incineroar"], []],
    [727, 'Incineroar', 'Fire', 'Dark', ["Litten", "Torracat", "Incineroar"], []],
    [728, 'Popplio', 'Water', ["Popplio", "Brionne", "Primarina"], []],
    [729, 'Brionne', 'Water', ["Popplio", "Brionne", "Primarina"], []],
    [730, 'Primarina', 'Water', 'Fairy', ["Popplio", "Brionne", "Primarina"], []],
    [731, 'Pikipek', 'Normal', 'Flying', ["Pikipek", "Trumbeak", "Toucannon"], []],
    [732, 'Trumbeak', 'Normal', 'Flying', ["Pikipek", "Trumbeak", "Toucannon"], []],
    [733, 'Toucannon', 'Normal', 'Flying', ["Pikipek", "Trumbeak", "Toucannon"], []],
    [734, 'Yungoos', 'Normal', ["Yungoos", "Gumshoos"], []],
    [735, 'Gumshoos', 'Normal', ["Yungoos", "Gumshoos"], []],
    [736, 'Grubbin', 'Bug', ["Grubbin", "Charjabug", "Vikavolt"], []],
    [737, 'Charjabug', 'Bug', 'Electric', ["Grubbin", "Charjabug", "Vikavolt"], []],
    [738, 'Vikavolt', 'Bug', 'Electric', ["Grubbin", "Charjabug", "Vikavolt"], []],
    [739, 'Crabrawler', 'Fighting', ["Crabrawler", "Crabominable"], []],
    [740, 'Crabominable', 'Fighting', 'Ice', ["Crabrawler", "Crabominable"], []],
    [741, 'Oricorio', 'Fire', 'Flying', [], ["Baile", "Pom-Pom", "Sensu", "Pa'u"]],
    [742, 'Cutiefly', 'Bug', 'Fairy', ["Cutiefly", "Ribombee"], []],
    [743, 'Ribombee', 'Bug', 'Fairy', ["Cutiefly", "Ribombee"], []],
    [744, 'Rockruff', 'Rock', "",["Rockruff", "Lycanroc"], []],
    [745, 'Lycanroc', 'Rock', '', ["Rockruff", "Lycanroc"], ["Midnight", "Dusk"]],
    [746, 'Wishiwashi', 'Water', ["Wishiwashi"], []],
    [747, 'Mareanie', 'Poison', 'Water', ["Mareanie", "Toxapex"], []],
    [748, 'Toxapex', 'Poison', 'Water', ["Mareanie", "Toxapex"], []],
    [749, 'Mudbray', 'Ground', ["Mudbray", "Mudsdale"], []],
    [750, 'Mudsdale', 'Ground', ["Mudbray", "Mudsdale"], []],
    [751, 'Dewpider', 'Water', 'Bug', ["Dewpider", "Araquanid"], []],
    [752, 'Araquanid', 'Water', 'Bug', ["Dewpider", "Araquanid"], []],
    [753, 'Fomantis', 'Grass', "",["Fomantis", "Lurantis"], []],
    [754, 'Lurantis', 'Grass', "",["Fomantis", "Lurantis"], []],
    [755, 'Morelull', 'Grass', 'Fairy', ["Morelull", "Shiinotic"], []],
    [756, 'Shiinotic', 'Grass', 'Fairy', ["Morelull", "Shiinotic"], []],
    [757, 'Salandit', 'Poison', 'Fire', ["Salandit", "Salazzle"], []],
    [758, 'Salazzle', 'Poison', 'Fire', ["Salandit", "Salazzle"], []],
    [759, 'Stufful', 'Normal', 'Fighting', ["Stufful", "Bewear"], []],
    [760, 'Bewear', 'Normal', 'Fighting', ["Stufful", "Bewear"], []],
    [761, 'Bounsweet', 'Grass', ["Bounsweet", "Steenee", "Tsareena"], []],
    [762, 'Steenee', 'Grass', ["Bounsweet", "Steenee", "Tsareena"], []],
    [763, 'Tsareena', 'Grass', ["Bounsweet", "Steenee", "Tsareena"], []],
    [764, 'Comfey', 'Fairy', [], []],
    [765, 'Oranguru', 'Normal', 'Psychic', [], []],
    [766, 'Passimian', 'Fighting', [], []],
    [767, 'Wimpod', 'Bug', 'Water', ["Wimpod", "Golisopod"], []],
    [768, 'Golisopod', 'Bug', 'Water', ["Wimpod", "Golisopod"], []],
    [769, 'Sandygast', 'Ghost', 'Ground', ["Sandygast", "Palossand"], []],
    [770, 'Palossand', 'Ghost', 'Ground', ["Sandygast", "Palossand"], []],
    [771, 'Pyukumuku', 'Water', [], []],
    [772, 'Type: Null', 'Normal', ["Type: Null", "Silvally"], []],
    [773, 'Silvally', 'Normal', ["Type: Null", "Silvally"], []],
    [774, 'Minior', 'Rock', 'Flying', [], []],
    [775, 'Komala', 'Normal', [], []],
    [776, 'Turtonator', 'Fire', 'Dragon', [], []],
    [777, 'Togedemaru', 'Electric', 'Steel', [], []],
    [778, 'Mimikyu', 'Ghost', 'Fairy', [], []],
    [779, 'Bruxish', 'Water', 'Psychic', [], []],
    [780, 'Drampa', 'Normal', 'Dragon', [], []],
    [781, 'Dhelmise', 'Ghost', 'Grass', [], []],
    [782, 'Jangmo-o', 'Dragon', ["Jangmo-o", "Hakamo-o", "Kommo-o"], []],
    [783, 'Hakamo-o', 'Dragon', 'Fighting', ["Jangmo-o", "Hakamo-o", "Kommo-o"], []],
    [784, 'Kommo-o', 'Dragon', 'Fighting', ["Jangmo-o", "Hakamo-o", "Kommo-o"], []],
    [785, 'Tapu Koko', 'Electric', 'Fairy', [], []],
    [786, 'Tapu Lele', 'Psychic', 'Fairy', [], []],
    [787, 'Tapu Bulu', 'Grass', 'Fairy', [], []],
    [788, 'Tapu Fini', 'Water', 'Fairy', [], []],
    [789, 'Cosmog', 'Psychic', ["Cosmog", "Cosmoem", "Solgaleo"], []],
    [790, 'Cosmoem', 'Psychic', ["Cosmog", "Cosmoem", "Solgaleo"], []],
    [791, 'Solgaleo', 'Psychic', 'Steel', ["Cosmog", "Cosmoem", "Solgaleo"], []],
    [792, 'Lunala', 'Psychic', 'Ghost', ["Cosmog", "Cosmoem", "Lunala"], []],
    [793, 'Nihilego', 'Rock', 'Poison', [], []],
    [794, 'Buzzwole', 'Bug', 'Fighting', [], []],
    [795, 'Pheromosa', 'Bug', 'Fighting', [], []],
    [796, 'Xurkitree', 'Electric', [], []],
    [797, 'Celesteela', 'Steel', 'Flying', [], []],
    [798, 'Kartana', 'Grass', 'Steel', [], []],
    [799, 'Guzzlord', 'Dark', 'Dragon', [], []],
    [800, 'Necrozma', 'Psychic', [], []],
    [801, 'Magearna', 'Steel', 'Fairy', [], []],
    [802, 'Marshadow', 'Fighting', 'Ghost', [], []],
    [803, 'Poipole', 'Poison', [], []],
    [804, 'Naganadel', 'Poison', 'Dragon', [], []],
    [805, 'Stakataka', 'Rock', 'Steel', [], []],
    [806, 'Blacephalon', 'Fire', 'Ghost', [], []],
    [807, 'Zeraora', 'Electric', '', [], []],
    [808, 'Meltan', 'Steel', '', ['Melmetal'], []],
    [809, 'Melmetal', 'Steel', '', ['Meltan'], []],
    [810, 'Grookey', 'Grass', '', ['Thwackey', 'Rillaboom'], []],
    [811, 'Thwackey', 'Grass', '', ['Grookey', 'Rillaboom'], []],
    [812, 'Rillaboom', 'Grass', '', ['Grookey', 'Thwackey'], []],
    [813, 'Scorbunny', 'Fire', '', ['Raboot', 'Cinderace'], []],
    [814, 'Raboot', 'Fire', '', ['Scorbunny', 'Cinderace'], []],
    [815, 'Cinderace', 'Fire', '', ['Scorbunny', 'Raboot'], []],
    [816, 'Sobble', 'Water', '', ['Drizzile', 'Inteleon'], []],
    [817, 'Drizzile', 'Water', '', ['Sobble', 'Inteleon'], []],
    [818, 'Inteleon', 'Water', '', ['Sobble', 'Drizzile'], []],
    [819, 'Skwovet', 'Normal', '', ['Greedent'], []],
    [820, 'Greedent', 'Normal', '', ['Skwovet'], []],
    [821, 'Rookidee', 'Flying', '', ['Corvisquire', 'Corviknight'], []],
    [822, 'Corvisquire', 'Flying', '', ['Rookidee', 'Corviknight'], []],
    [823, 'Corviknight', 'Flying', 'Steel', ['Rookidee', 'Corvisquire'], []],
    [824, 'Blipbug', 'Bug', '', ['Dottler', 'Orbeetle'], []],
    [825, 'Dottler', 'Bug', 'Psychic', ['Blipbug', 'Orbeetle'], []],
    [826, 'Orbeetle', 'Bug', 'Psychic', ['Blipbug', 'Dottler'], []],
    [827, 'Nickit', 'Dark', '', ['Thievul'], []],
    [828, 'Thievul', 'Dark', '', ['Nickit'], []],
    [829, 'Gossifleur', 'Grass', '', ['Eldegoss'], []],
    [830, 'Eldegoss', 'Grass', '', ['Gossifleur'], []],
    [831, 'Wooloo', 'Normal', '', ['Dubwool'], []],
    [832, 'Dubwool', 'Normal', '', ['Wooloo'], []],
    [833, 'Chewtle', 'Water', '', ['Drednaw'], []],
    [834, 'Drednaw', 'Water', 'Rock', ['Chewtle'], []],
    [835, 'Yamper', 'Electric', '', ['Boltund'], []],
    [836, 'Boltund', 'Electric', '', ['Yamper'], []],
    [837, 'Rolycoly', 'Rock', '', ['Carkol', 'Coalossal'], []],
    [838, 'Carkol', 'Rock', 'Fire', ['Rolycoly', 'Coalossal'], []],
    [839, 'Coalossal', 'Rock', 'Fire', ['Rolycoly', 'Carkol'], []],
    [840, 'Applin', 'Grass', 'Dragon', ['Flapple', 'Appletun'], []],
    [841, 'Flapple', 'Grass', 'Dragon', ['Applin', 'Appletun'], []],
    [842, 'Appletun', 'Grass', 'Dragon', ['Applin', 'Flapple'], []],
    [843, 'Silicobra', 'Ground', '', ['Sandaconda'], []],
    [844, 'Sandaconda', 'Ground', '', ['Silicobra'], []],
    [845, 'Cramorant', 'Flying', 'Water', [], []],
    [846, 'Arrokuda', 'Water', '', ['Barraskewda'], []],
    [847, 'Barraskewda', 'Water', '', ['Arrokuda'], []],
    [848, 'Toxel', 'Electric', 'Poison', ['Toxtricity'], []],
    [849, 'Toxtricity', 'Electric', 'Poison', ['Toxel'], []],
    [850, 'Sizzlipede', 'Fire', 'Bug', ['Centiskorch'], []],
    [851, 'Centiskorch', 'Fire', 'Bug', ['Sizzlipede'], []],
    [852, 'Clobbopus', 'Fighting', '', ['Grapploct'], []],
    [853, 'Grapploct', 'Fighting', '', ['Clobbopus'], []],
    [854, 'Sinistea', 'Ghost', '', ['Polteageist'], []],
    [855, 'Polteageist', 'Ghost', '', ['Sinistea'], []],
    [856, 'Hatenna', 'Psychic', '', ['Hattrem', 'Hatterene'], []],
    [857, 'Hattrem', 'Psychic', '', ['Hatenna', 'Hatterene'], []],
    [858, 'Hatterene', 'Psychic', 'Fairy', ['Hatenna', 'Hattrem'], []],
    [859, 'Impidimp', 'Dark', 'Fairy', ['Morgrem', 'Grimmsnarl'], []],
    [860, 'Morgrem', 'Dark', 'Fairy', ['Impidimp', 'Grimmsnarl'], []],
    [861, 'Grimmsnarl', 'Dark', 'Fairy', ['Impidimp', 'Morgrem'], []],
    [862, 'Obstagoon', 'Dark', 'Normal', ['Zygarde'], []],
    [863, 'Perrserker', 'Steel', '', ['Meowth'], []],
    [864, 'Cursola', 'Ghost', '', ['Galarian Corsola'], []],
    [865, 'Sirfetchd', 'Fighting', '', ['Farfetch\'d'], []],
    [866, 'Mr. Rime', 'Ice', 'Psychic', ['Rime'], []],
    [867, 'Runerigus', 'Ground', 'Ghost', ['Galarian Yamask'], []],
    [868, 'Milcery', 'Fairy', '', ['Alcremie'], []],
    [869, 'Alcremie', 'Fairy', '', ['Milcery'], []],
    [870, 'Falinks', 'Fighting', '', [], []],
    [871, 'Pincurchin', 'Electric', '', [], []],
    [872, 'Snom', 'Ice', 'Bug', ['Frosmoth'], []],
    [873, 'Frosmoth', 'Ice', 'Bug', ['Snom'], []],
    [874, 'Stonjourner', 'Rock', '', [], []],
    [875, 'Eiscue', 'Ice', '', [], []],
    [876, 'Indeedee', 'Psychic', 'Normal', [], []],
    [877, 'Morpeko', 'Electric', 'Dark', [], []],
    [878, 'Cufant', 'Steel', '', ['Copperajah'], []],
    [879, 'Copperajah', 'Steel', '', ['Cufant'], []],
    [880, 'Dracozolt', 'Electric', 'Dragon', [], []],
    [881, 'Arctozolt', 'Electric', 'Ice', [], []],
    [882, 'Dracovish', 'Water', 'Dragon', [], []],
    [883, 'Arctovish', 'Water', 'Ice', [], []],
    [884, 'Duraludon', 'Steel', 'Dragon', [], []],
    [885, 'Dreepy', 'Dragon', 'Ghost', ['Drakloak', 'Dragapult'], []],
    [886, 'Drakloak', 'Dragon', 'Ghost', ['Dreepy', 'Dragapult'], []],
    [887, 'Dragapult', 'Dragon', 'Ghost', ['Dreepy', 'Drakloak'], []],
    [888, 'Zacian', 'Fairy', '', [], []],
    [889, 'Zamazenta', 'Fighting', '', [], []],
    [890, 'Eternatus', 'Poison', 'Dragon', [], []],
    [891, 'Kubfu', 'Fighting', '', ['Urshifu'], []],
    [892, 'Urshifu', 'Fighting', 'Dark', ['Kubfu'], []],
    [893, 'Zarude', 'Dark', 'Grass', [], []],
    [894, 'Regieleki', 'Electric', '', [], []],
    [895, 'Regidrago', 'Dragon', '', [], []],
    [896, 'Glastrier', 'Ice', '', [], []],
    [897, 'Spectrier', 'Ghost', '', [], []],
    [898, 'Calyrex', 'Psychic', 'Grass', [], []],
    [899, 'Wyrdeer', 'Normal', 'Psychic', ["Stantler","Wyrdeer"], []],
    [900, 'Kleavor', 'Bug', 'Rock', [], []],
    [901, 'Ursaluna', 'Ground', 'Normal', [], []],
    [902, 'Basculegion', 'Water', 'Ghost', [], []],
    [903, 'Sneasler', 'Fighting', 'Poison', [], []],
    [904, 'Overqwil', 'Dark', 'Poison', [], []],
    [905, 'Enamorus', 'Fairy', 'Flying', [], []],
    [906, 'Sprigatito', 'Grass', '', ['Sprigatito','Floragato', 'Meowscarada'], []],
    [907, 'Floragato', 'Grass', '', ['Sprigatito','Floragato', 'Meowscarada'], []],
    [908, 'Meowscarada', 'Grass', 'Dark', ['Sprigatito','Floragato', 'Meowscarada'], []],
    [909, 'Fuecoco', 'Fire', '', ["Fuecoco",'Crocalor', 'Skeledirge'], []],
    [910, 'Crocalor', 'Fire', '', ["Fuecoco",'Crocalor', 'Skeledirge'], []],
    [911, 'Skeledirge', 'Fire', 'Ghost', ["Fuecoco",'Crocalor', 'Skeledirge'], []],
    [912, 'Quaxly', 'Water', '', ['Quaxly','Quaxwell', 'Quaquaval'], []],
    [913, 'Quaxwell', 'Water', '', ['Quaxly','Quaxwell', 'Quaquaval'], []],
    [914, 'Quaquaval', 'Water', 'Fighting', ['Quaxly','Quaxwell', 'Quaquaval'], []],
    [915, 'Lechonk', 'Normal', '', ['Lechonk','Oinkologne'], []],
    [916, 'Oinkologne', 'Normal', '', ['Lechonk','Oinkologne'], []],
    [917, 'Tarountula', 'Bug', '', ['Spidopos'], []],
    [918, 'Spidopos', 'Bug', '', ['Tarountula'], []],
    [919, 'Nymble', 'Bug', '', ['Lokix'], []],
    [920, 'Lokix', 'Bug', 'Dark', ['Nymble'], []],
    [921, 'Pawmi', 'Electric', '', ['Pawmo', 'Pawmot'], []],
    [922, 'Pawmo', 'Electric', 'Fighting', ['Pawmi', 'Pawmot'], []],
    [923, 'Pawmot', 'Electric', 'Fighting', ['Pawmi', 'Pawmo'], []],
    [924, 'Clodsire', 'Poison', 'Ground', [], []],
    [925, 'Tandemaus', 'Normal', '', ['Maushold'], []],
    [926, 'Maushold', 'Normal', '', ['Tandemaus'], []],
    [927, 'Fidough', 'Fairy', '', ['Dachsbun'], []],
    [928, 'Dachsbun', 'Fairy', '', ['Fidough'], []],
    [929, 'Smoliv', 'Grass', 'Normal', ['Dolliv', 'Arboliva'], []],
    [930, 'Dolliv', 'Grass', 'Normal', ['Smoliv', 'Arboliva'], []],
    [931, 'Arboliva', 'Grass', 'Normal', ['Smoliv', 'Dolliv'], []],
    [932, 'Squawkabilly', 'Normal', 'Flying', [], []],
    [933, 'Nacli', 'Rock', '', ['Naclstack', 'Garganacl'], []],
    [934, 'Naclstack', 'Rock', '', ['Nacli', 'Garganacl'], []],
    [935, 'Garganacl', 'Rock', '', ['Nacli', 'Naclstack'], []],
    [936, 'Annihilape', 'Fighting', 'Ghost', ['Primeape'], []],
    [937, 'Charcadet', 'Fire', '', ['Armarouge', 'Armarouge'], []],
    [938, 'Armarouge', 'Fire', 'Psychic', ['Charcadet', 'Armarouge'], []],
    [939, 'Ceruledge', 'Fire', 'Ghost', ['Charcadet','Ceruledge'], []],
    [940, 'Tadbulb', 'Electric', '', ['Bellibolt'], []],
    [941, 'Bellibolt', 'Electric', '', ['Tadbulb'], []],
    [942, 'Wattrel', 'Electric', 'Flying', ['Kilowattrel'], []],
    [943, 'Kilowattrel', 'Electric', 'Flying', ['Wattrel'], []],
    [944, 'Dudunsparce', 'Normal', '', [], []],
    [945, 'Farigiraf', 'Normal', 'Psychic', ['Girafarig',"Farigiraf"], []],
    [946, 'Maschiff', 'Dark', '', ['Mabosstiff'], []],
    [947, 'Mabosstiff', 'Dark', '', ['Maschiff'], []],
    [948, 'Shroodle', 'Poison', 'Normal', ['Grafaiai'], []],
    [949, 'Grafaiai', 'Poison', 'Normal', ['Shroodle'], []],
    [950, 'Bramblin', 'Grass', 'Ghost', ['Brambleghast'], []],
    [951, 'Brambleghast', 'Grass', 'Ghost', ['Bramblin'], []],
    [952, 'Toedscool', 'Ground', 'Grass', ['Toedscool','Toedscruel'], []],
    [953, 'Toedscruel', 'Ground', 'Grass', ['Toedscool','Toedscruel'], []],
    [954, 'Klawf', 'Rock', '', [], []],
    [955, 'Capsakid', 'Grass', '', ['Capsakid','Scovillain'], []],
    [956, 'Scovillain', 'Grass', 'Fire', ['Capsakid','Scovillain'], []],
    [957, 'Rellor', 'Bug', '', ['Rabsca'], []],
    [958, 'Rabsca', 'Bug', 'Psychic', ['Rellor'], []],
    [959, 'Flittle', 'Psychic', '', ['Espathra'], []],
    [960, 'Espathra', 'Psychic', '', ['Flittle'], []],
    [961, 'Tinkatink', 'Fairy', 'Steel', ['Tinkatuff', 'Tinkaton'], []],
    [962, 'Tinkatuff', 'Fairy', 'Steel', ['Tinkatink', 'Tinkaton'], []],
    [963, 'Tinkaton', 'Fairy', 'Steel', ['Tinkatink', 'Tinkatuff'], []],
    [964, 'Wiglett', 'Water', '', ['Wugtrio'], []],
    [965, 'Wugtrio', 'Water', '', ['Wiglett'], []],
    [966, 'Bombirdier', 'Flying', 'Dark', [], []],
    [967, 'Finizen', 'Water', '', ['Palafin'], []],
    [968, 'Palafin', 'Water', '', ['Finizen'], []],
    [969, 'Varoom', 'Steel', 'Poison', ['Revavroom'], []],
    [970, 'Revavroom', 'Steel', 'Poison', ['Varoom'], []],
    [971, 'Cyclizar', 'Dragon', 'Normal', [], []],
    [972, 'Orthworm', 'Steel', '', [], []],
    [973, 'Glimmet', 'Rock', 'Poison', ['Glimmora'], []],
    [974, 'Glimmora', 'Rock', 'Poison', ['Glimmet'], []],
    [975, 'Greavard', 'Ghost', '', ['Houndstone'], []],
    [976, 'Houndstone', 'Ghost', '', ['Greavard'], []],
    [977, 'Flamigo', 'Flying', 'Fighting', [], []],
    [978, 'Cetoddle', 'Ice', '', ['Cetoddle','Cetitan'], []],
    [979, 'Cetitan', 'Ice', '', ['Cetoddle',"Cetitan"], []],
    [980, 'Kingambit', 'Dark', 'Steel', ['Bisharp'], []],
    [981, 'Veluza', 'Water', 'Psychic', [], []],
    [982, 'Dondozo', 'Water', '', [], []],
    [983, 'Tatsugiri', 'Dragon', 'Water', [], ["Droopy","Stretchy"]],
    [984, 'Great Tusk', 'Ground', 'Fighting', [], []],
    [985, 'Scream Tail', 'Fairy', 'Psychic', [], []],
    [986, 'Brute Bonnet', 'Grass', 'Dark', [], []],
    [987, 'Flutter Mane', 'Ghost', 'Fairy', [], []],
    [988, 'Slither Wing', 'Bug', 'Fighting', [], []],
    [989, 'Sandy Shocks', 'Electric', 'Ground', [], []],
    [990, 'Iron Treads', 'Ground', 'Steel', [], []],
    [991, 'Iron Bundle', 'Ice', 'Water', [], []],
    [992, 'Iron Hands', 'Fighting', 'Electric', [], []],
    [993, 'Iron Jugulis', 'Dark', 'Flying', [], []],
    [994, 'Iron Moth', 'Fire', 'Poison', [], []],
    [995, 'Iron Thorns', 'Rock', 'Electric', [], []],
    [996, 'Frigibax', 'Dragon', 'Ice', ["Frigibax", "Artibax", "Baxcalibur"], []],
    [997, 'Artibax', 'Dragon', 'Ice', ["Frigibax", "Artibax", "Baxcalibur"], []],
    [998, 'Baxcalibur', 'Dragon', 'Ice', ["Frigibax", "Artibax", "Baxcalibur"], []],
    [999, 'Gimmighoul', 'Ghost', '', ["Gimmighoul", "Gholdengo"], []],
    [1000, 'Gholdengo', 'Ghost', 'Steel', ["Gimmighoul", "Gholdengo"], []],
    [1001, 'Wo-Chien', 'Dark', 'Grass', [], []],
    [1002, 'Chien-Pao', 'Dark', 'Ice', [], []],
    [1003, 'Ting-Lu', 'Dark', 'Ground', [], []],
    [1004, 'Chi-Yu', 'Dark', 'Fire', [], []],
    [1005, 'Roaring Moon', 'Dragon', 'Dark', [], []],
    [1006, 'Iron Valiant', 'Fighting', 'Fairy', [], []],
    [1007, 'Koraidon', 'Fighting', 'Dragon', [], []],
    [1008, 'Miraidon', 'Electric', 'Dragon', [], []],
    [1009, 'Walking Wake', 'Water', 'Dragon', [], []],
    [1010, 'Iron Leaves', 'Grass', 'Psychic', [], []],
    [1011, 'Dipplin', 'Grass', 'Dragon', [], []],
    [1012, 'Poltchageist', 'Grass', 'Ghost', ["Poltchageist", "Sinistcha"], []],
    [1013, 'Sinistcha', 'Grass', 'Ghost', ["Poltchageist", "Sinistcha"], []],
    [1014, 'Okidogi', 'Poison', 'Fighting', [], []],
    [1015, 'Munkidori', 'Poison', 'Psychic', [], []],
    [1016, 'Fezandipiti', 'Poison', 'Fairy', [], []],
    [1017, 'Ogerpon', 'Grass', '', [], []],
    [1018, 'Archaludon', 'Steel', 'Dragon', [], []],
    [1019, 'Hydrapple', 'Grass', 'Dragon', [], []],
    [1020, 'Gouging Fire', 'Fire', 'Dragon', [], []],
    [1021, 'Raging Bolt', 'Electric', 'Dragon', [], []],
    [1022, 'Iron Boulder', 'Rock', 'Psychic', [], []],
    [1023, 'Iron Crown', 'Steel', 'Psychic', [], []],
    [1024, 'Terapagos', 'Normal', '', [], []]
];

var BerryInfo = [
    ["PokeBean"],
    ["Cheri"],
    ["Chesto"],
    ["Pecha"],
    ["Rawst"],
    ["Aspear"],
    ["Leppa"],
    ["Oran"],
    ["Persim"],
    ["Lum"],
    ["Sitrus"],
    ["Figy"],
    ["Wiki"],
    ["Mago"],
    ["Aguav"],
    ["Iapapa"],
    ["Razz"],
    ["Bluk"],
    ["Nanab"],
    ["Wepear"],
    ["Pinap"],
    ["Pomeg"],
    ["Kelpsy"],
    ["Qualot"],
    ["Hondew"],
    ["Grepa"],
    ["Tamato"],
    ["Cornn"],
    ["Magost"],
    ["Rabuta"],
    ["Nomel"],
    ["Spelon"],
    ["Pamtre"],
    ["Watmel"],
    ["Durin"],
    ["Belue"],
    ["Occa"],
    ["Passho"],
    ["Wacan"],
    ["Rindo"],
    ["Yache"],
    ["Chople"],
    ["Kebia"],
    ["Shuca"],
    ["Coba"],
    ["Payapa"],
    ["Tanga"],
    ["Charti"],
    ["Kasib"],
    ["Haban"],
    ["Colbur"],
    ["Babiri"],
    ["Chilan"],
    ["Liechi"],
    ["Ganlon"],
    ["Salac"],
    ["Petaya"],
    ["Apicot"],
    ["Lansat"],
    ["Starf"],
    ["Enigma"],
    ["Micle"],
    ["Custap"],
    ["Jaboca"],
    ["Rowap"],
    ["Roseli"],
    ["Kee"],
    ["Maranga"],
    ["Hopo"],
    ["Pumkin"],
    ["Drash"],
    ["Eggant"],
    ["Strib"],
    ["Hozu"],
    ["Nutpea"],
    ["Ginema"],
    ["Kuo"],
    ["Yago"],
    ["Touga"],
    ["Niniku"],
    ["Topo"]
];



let id=sessionStorage.getItem("chosenMon").split(",");
let num=parseInt(id[0])-1
let name=PokeInfo[num][1];
let berryNum=num%80;
let berry=BerryInfo[berryNum+1]
let monotype=false;
if(PokeInfo[num][3]!=''){
    monotype=true;
}

var stamp = document.createElement("img");
stamp.src = "Stamp.png";
stamp.style.position = "absolute";
stamp.style.left = "75px";
stamp.style.top = "100px";
stamp.style.width = "350px";
document.body.appendChild(stamp);

var img = document.createElement('img');
img.src = "Icons/" + name + "Icon.png";
img.style.width = "300px";
img.style.position = "relative";
img.style.left = '95px';
img.style.top = '85px';
document.body.appendChild(img);

var berryDesc = document.createElement("p");
berryDesc.style.position = 'absolute';
berryDesc.style.scale = "200%";
berryDesc.style.left = '1050px';
berryDesc.style.top = '145px';
berryDesc.style.maxWidth = "300px";
berryDesc.style.color = "white";
berryDesc.innerHTML = "Favorite Berry: ";
document.body.appendChild(berryDesc);

var berryName = document.createElement("p");
berryName.style.position = 'absolute';
berryName.style.scale = "150%";
berryName.style.left = '1260px';
berryName.style.top = '245px';
berryName.style.maxWidth = "300px";
berryName.style.color = "white";
berryName.innerHTML = berry+" Berry";
document.body.appendChild(berryName);


var berryStamp = document.createElement("img");
berryStamp.src = "Stamp.png";
berryStamp.style.position = "absolute";
berryStamp.style.left = "1225px";
berryStamp.style.top = "100px";
berryStamp.style.width = "150px";
document.body.appendChild(berryStamp);

var berryImg = document.createElement('img');
berryImg.src = "Berries/" + berry + ".png";
berryImg.style.position = "absolute";
berryImg.style.left = '1250px';
berryImg.style.top = '125px';
berryImg.style.width = "100px";
berryImg.style.height = "100px";
document.body.appendChild(berryImg);

var typeDesc = document.createElement("p")
typeDesc.style.position = 'absolute';
typeDesc.style.scale = "200%";
typeDesc.style.left = '475px';
typeDesc.style.top = '145px';
typeDesc.style.maxWidth = "300px";
typeDesc.style.color = "white";
typeDesc.innerHTML = "Type: ";
document.body.appendChild(typeDesc);


var type1 = document.createElement('img');
type1.style.position = "absolute";
type1.src = "Types/" + PokeInfo[num][2] + "Icon.png";
type1.style.left = '550px';
type1.style.top = '150px';
document.body.appendChild(type1);

if (monotype == true) {
    var slash = document.createElement("p")
    slash.innerHTML="/";
    slash.style.position="absolute"
    slash.style.scale="500%"
    slash.style.color="white"
    slash.style.top="150px"
    slash.style.left="700px"
    document.body.appendChild(slash)

    var type2 = document.createElement('img');
    type2.style.position = "absolute";
    type2.src = "Types/" + PokeInfo[num][3] + "Icon.png";
    type2.style.left = '725px';
    type2.style.top = '150px';
    document.body.appendChild(type2);
}

var description = document.createElement("p");
description.style.position = 'relative';
description.style.scale = "200%";
description.style.left = '275px';
description.style.top = '175px';
description.style.maxWidth = "300px";
description.style.color="white"
description.innerHTML = "Name: "+name+"<br><br>Num: #"+(num+1);
document.body.appendChild(description);

var evolutionDiv = document.createElement("div")
evolutionDiv.style.position="absolute";
evolutionDiv.style.backgroundColor="white"
evolutionDiv.style.maxWidth="500px"
evolutionDiv.style.left = '275px';
evolutionDiv.style.top = '175px';
document.body.appendChild(evolutionDiv)

var evoDesc = document.createElement("p");
evoDesc.style.position = 'absolute';
evoDesc.style.scale = "200%";
evoDesc.style.left = '520px';
evoDesc.style.top = '250px';
evoDesc.style.maxWidth = "300px";
evoDesc.style.color = "white";
evoDesc.innerHTML = "Evolutionary Line: "; 
document.body.appendChild(evoDesc);


if(PokeInfo[num][4].length==0){
var stamp1 = document.createElement("img");
stamp1.src = "Stamp.png";
stamp1.style.position = "absolute";
stamp1.style.left = "800px";
stamp1.style.top = "300px";
stamp1.style.width = "150px";
stamp1.style.maxWidth="150px"
document.body.appendChild(stamp1);

var img1 = document.createElement("img");
img1.src = "Icons/"+name+"Icon.png";
img1.style.position = "absolute";
img1.style.left = "813px";
img1.style.top = "315px";
img1.style.width = "125px";
img1.style.maxWidth = "150px";
document.body.appendChild(img1);

var desc1 = document.createElement("p");
desc1.style.position = 'absolute';
desc1.style.scale = "150%";
desc1.style.left = '850px';
desc1.style.top = '450px';
desc1.style.maxWidth = "300px";
desc1.style.color = "white";
desc1.innerHTML = name; 
document.body.appendChild(desc1);
}

if(PokeInfo[num][4].length==2){
var stamp1 = document.createElement("img");
stamp1.src = "Stamp.png";
stamp1.style.position = "absolute";
stamp1.style.left = "650px";
stamp1.style.top = "300px";
stamp1.style.width = "150px";
stamp1.style.maxWidth="150px"
document.body.appendChild(stamp1);

var img1 = document.createElement("img");
img1.src = "Icons/"+PokeInfo[num][4][0]+"Icon.png";
img1.style.position = "absolute";
img1.style.left = "663px";
img1.style.top = "315px";
img1.style.width = "125px";
img1.style.maxWidth = "150px";
document.body.appendChild(img1);

var desc1 = document.createElement("p");
desc1.style.position = 'absolute';
desc1.style.scale = "150%";
desc1.style.left = '700px';
desc1.style.top = '450px';
desc1.style.maxWidth = "300px";
desc1.style.color = "white";
desc1.innerHTML = PokeInfo[num][4][0]; 
document.body.appendChild(desc1);

var arrow1 = document.createElement("p");
arrow1.style.position = 'absolute';
arrow1.style.scale = "500%";
arrow1.style.left = '925px';
arrow1.style.top = '350px';
arrow1.style.maxWidth = "300px";
arrow1.style.color = "white";
arrow1.innerHTML = "→"; 
document.body.appendChild(arrow1);


var stamp2 = document.createElement("img");
stamp2.src = "Stamp.png";
stamp2.style.position = "absolute";
stamp2.style.left = "1050px";
stamp2.style.top = "300px";
stamp2.style.width = "150px";
document.body.appendChild(stamp2);

var img2 = document.createElement("img");
img2.src = "Icons/" + PokeInfo[num][4][1] + "Icon.png";
img2.style.position = "absolute";
img2.style.left = "1063px";
img2.style.top = "315px";
img2.style.width = "125px";
img2.style.maxWidth = "150px";
document.body.appendChild(img2);

var desc2 = document.createElement("p");
desc2.style.position = 'absolute';
desc2.style.scale = "150%";
desc2.style.left = '1100px';
desc2.style.top = '450px';
desc2.style.maxWidth = "300px";
desc2.style.color = "white";
desc2.innerHTML = PokeInfo[num][4][1];
document.body.appendChild(desc2);
}

if (PokeInfo[num][4].length == 3) {
    var stamp1 = document.createElement("img");
    stamp1.src = "Stamp.png";
    stamp1.style.position = "absolute";
    stamp1.style.left = "500px"; // 650 - 150
    stamp1.style.top = "300px";
    stamp1.style.width = "150px";
    stamp1.style.maxWidth = "150px";
    document.body.appendChild(stamp1);

    var img1 = document.createElement("img");
    img1.src = "Icons/" + PokeInfo[num][4][0] + "Icon.png";
    img1.style.position = "absolute";
    img1.style.left = "513px"; // 663 - 150
    img1.style.top = "315px";
    img1.style.width = "125px";
    img1.style.maxWidth = "150px";
    document.body.appendChild(img1);

    var desc1 = document.createElement("p");
    desc1.style.position = 'absolute';
    desc1.style.scale = "150%";
    desc1.style.left = '550px'; // 700 - 150
    desc1.style.top = '450px';
    desc1.style.maxWidth = "300px";
    desc1.style.color = "white";
    desc1.innerHTML = PokeInfo[num][4][0];
    document.body.appendChild(desc1);

    var arrow1 = document.createElement("p");
    arrow1.style.position = 'absolute';
    arrow1.style.scale = "500%";
    arrow1.style.left = '775px'; // 925 - 150
    arrow1.style.top = '350px';
    arrow1.style.maxWidth = "300px";
    arrow1.style.color = "white";
    arrow1.innerHTML = "→";
    document.body.appendChild(arrow1);

    var stamp2 = document.createElement("img");
    stamp2.src = "Stamp.png";
    stamp2.style.position = "absolute";
    stamp2.style.left = "900px"; // 1050 - 150
    stamp2.style.top = "300px";
    stamp2.style.width = "150px";
    stamp2.style.maxWidth = "150px";
    document.body.appendChild(stamp2);

    var img2 = document.createElement("img");
    img2.src = "Icons/" + PokeInfo[num][4][1] + "Icon.png";
    img2.style.position = "absolute";
    img2.style.left = "913px"; // 1063 - 150
    img2.style.top = "315px";
    img2.style.width = "125px";
    img2.style.maxWidth = "150px";
    document.body.appendChild(img2);

    var desc2 = document.createElement("p");
    desc2.style.position = 'absolute';
    desc2.style.scale = "150%";
    desc2.style.left = '950px'; // 1100 - 150
    desc2.style.top = '450px';
    desc2.style.maxWidth = "300px";
    desc2.style.color = "white";
    desc2.innerHTML = PokeInfo[num][4][1];
    document.body.appendChild(desc2);

    var arrow2 = document.createElement("p");
    arrow2.style.position = 'absolute';
    arrow2.style.scale = "500%";
    arrow2.style.left = '1175px'; // 1275 - 150
    arrow2.style.top = '350px';
    arrow2.style.maxWidth = "300px";
    arrow2.style.color = "white";
    arrow2.innerHTML = "→";
    document.body.appendChild(arrow2);

    var stamp3 = document.createElement("img");
    stamp3.src = "Stamp.png";
    stamp3.style.position = "absolute";
    stamp3.style.left = "1325px"; // 1350 - 150
    stamp3.style.top = "300px";
    stamp3.style.width = "150px";
    stamp3.style.maxWidth = "150px";
    document.body.appendChild(stamp3);

    var img3 = document.createElement("img");
    img3.src = "Icons/" + PokeInfo[num][4][2] + "Icon.png";
    img3.style.position = "absolute";
    img3.style.left = "1338px"; // 1363 - 150
    img3.style.top = "315px";
    img3.style.width = "125px";
    img3.style.maxWidth = "150px";
    document.body.appendChild(img3);

    var desc3 = document.createElement("p");
    desc3.style.position = 'absolute';
    desc3.style.scale = "150%";
    desc3.style.left = '1375px'; // 1400 - 150
    desc3.style.top = '450px';
    desc3.style.maxWidth = "300px";
    desc3.style.color = "white";
    desc3.innerHTML = PokeInfo[num][4][2];
    document.body.appendChild(desc3);
}

var formDesc = document.createElement("p");
formDesc.style.position = 'absolute';
formDesc.style.scale = "200%";
formDesc.style.left = '480px';
formDesc.style.top = '475px';
formDesc.style.maxWidth = "300px";
formDesc.style.color = "white";
formDesc.innerHTML = "Forms: ";
document.body.appendChild(formDesc);

var formDiv = document.createElement("div")
formDiv.style.left="400px"
formDiv.style.maxWidth="1000px"
document.body.appendChild(formDiv)

if(PokeInfo[num][5].length==0){
var noForms = document.createElement("p");
noForms.style.position = 'absolute';
noForms.style.scale = "200%";
noForms.style.left = '490px';
noForms.style.top = '575px';
noForms.style.maxWidth = "300px";
noForms.style.color = "white";
noForms.innerHTML = "No Forms";
document.body.appendChild(noForms);

}

for(i=0;i<PokeInfo[num][5].length;i++){
var formStamp = document.createElement("img");
formStamp.src = "Stamp.png";
formStamp.style.position = "relative";
formStamp.style.left = "500px";
formStamp.style.paddingRight="100px"
formStamp.style.paddingBottom="75px"
formStamp.style.top = "100px";
formStamp.style.width = "150px";
formDiv.appendChild(formStamp);

let formLeft=510+((i%4)*250)+"px"
let formTop=550+(Math.floor(i/4)*230)+"px"

var form1 = document.createElement("img");
form1.src = "Icons/" + PokeInfo[num][5][i] + name + "Icon.png";
form1.style.position = "absolute";
form1.style.left = formLeft;
form1.style.top = formTop;
form1.style.width = "125px";
form1.style.maxWidth = "150px";
formDiv.appendChild(form1);

let descLeft=550+((i%4)*250)+"px"
let descTop=685+(Math.floor(i/4)*230)+"px"

var desc1 = document.createElement("p");
desc1.style.position = 'absolute';
desc1.style.scale = "150%";
desc1.style.left = descLeft;
desc1.style.top = descTop;
desc1.style.maxWidth = "300px";
desc1.style.color = "white";
desc1.innerHTML = PokeInfo[num][5][i];
document.body.appendChild(desc1);
}