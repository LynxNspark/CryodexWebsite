if (typeof(Storage) != "undefined" && sessionStorage.getItem("displayForms")==undefined) {
    sessionStorage.setItem("displayForms",false);
    sessionStorage.setItem("showUnreleased",true);
    sessionStorage.setItem("showNumbers",true);
    sessionStorage.setItem("showShiny",false);
    sessionStorage.setItem("displayChecklist",false);
    sessionStorage.setItem("isShiny",false)
}
if (typeof(Storage) != "undefined" && localStorage.getItem("CaughtList")==undefined){
    localStorage.setItem("CaughtList",'hi hello')
}

var buttonRow = document.createElement("div");
document.body.appendChild(buttonRow);

if(sessionStorage.getItem("displayChecklist")=="false")
{
var button1 = document.createElement("button");
button1.innerHTML="Switch to Checklist";
button1.style.position="relative";
button1.style.left='75px'
buttonRow.appendChild(button1)
button1.addEventListener('click',() => {
    sessionStorage.setItem("displayChecklist",true);
    sessionStorage.setItem("showShiny",true);
    sessionStorage.setItem("displayForms",true);
    location.reload();
})

var toggleUnreleased = document.createElement("button");
toggleUnreleased.innerHTML = "Toggle Unreleased";
toggleUnreleased.style.position = "relative";
toggleUnreleased.style.left = '250px';
buttonRow.appendChild(toggleUnreleased);
toggleUnreleased.addEventListener('click', () => {
    toggle("showUnreleased");
    location.reload();
});

var toggleForms = document.createElement("button");
toggleForms.innerHTML="Toggle Forms";
toggleForms.style.position="relative";
toggleForms.style.left='450px'
buttonRow.appendChild(toggleForms)
toggleForms.addEventListener('click',() => {
    toggle("displayForms")
    location.reload();
})

var toggleShiny = document.createElement("button");
toggleShiny.innerHTML = "Toggle Shiny";
toggleShiny.style.position = "relative";
toggleShiny.style.left = '650px';
buttonRow.appendChild(toggleShiny);
toggleShiny.addEventListener('click', () => {
    toggle("showShiny");
    location.reload();
});

var toggleNumbers = document.createElement("button");
toggleNumbers.innerHTML = "Toggle Numbers";
toggleNumbers.style.position = "relative";
toggleNumbers.style.left = '850px';
buttonRow.appendChild(toggleNumbers);
toggleNumbers.addEventListener('click', () => {
    toggle("showNumbers");
    location.reload();
});



}

else{
var button2 = document.createElement("button");
button2.innerHTML="Back";
button2.style.position="relative";
button2.style.left='625px'
buttonRow.appendChild(button2)
button2.addEventListener('click',() => {
    sessionStorage.setItem("displayChecklist",false);
    sessionStorage.setItem("showShiny",false);
    sessionStorage.setItem("displayForms",false);
    location.reload();
})

var submit = document.createElement("button");
submit.innerHTML = "Save";
submit.style.position = "relative";
submit.style.left = '800px';
buttonRow.appendChild(submit);
submit.addEventListener('click', () => {
    countChecks();
});

}




function toggle(item){
    if(sessionStorage.getItem(item)=="true"){
        sessionStorage.setItem(item,false);
        location.reload();
    }
    else{
        sessionStorage.setItem(item,true);
        location.reload();
    }
}

if(localStorage.getItem("CaughtList")!=undefined){
var caughtMons=localStorage.getItem("CaughtList").split(' ');}

else{
    var caughtMons=['hi','hello']
}

function display(id,isShiny){
    var block = document.createElement("div");
    block.style.width = "100px";
    block.style.height = "100px";
    block.style.display="inline-block"
    document.body.appendChild(block) 
    if(id[2]!=0 && sessionStorage.getItem("displayForms")=="false"){
        block.remove();
    }
    if(isShiny && sessionStorage.getItem("showShiny")=="false"){
        block.remove();
    }
    var checkDiv = document.createElement("div");
    block.appendChild(checkDiv);  
    var img = document.createElement('img');
    let str = id[1].replace(/\s/g, '');
    if(isShiny==0){
        img.src="Icons/"+str+"Icon.png"; 
    }
    else{
        img.src="Icons/"+str+"IconS.png";
    }
    let exists=true;
    img.onerror=function(event){
        event.target.src="Icons/QuestionIcon.png"
        img.onerror=null
        exists=false;
        if(sessionStorage.getItem("showUnreleased")!="true" || sessionStorage.getItem("displayChecklist")=="true"){
            block.remove()
        }
    }
    img.style.left="15px";
    img.style.position="relative";
    img.style.top="15px";
    img.style.height ="75px";
    if(sessionStorage.getItem("displayChecklist")=='true'){
        if(id[2]==0){
        if(isShiny && !caughtMons.includes(String(id[0])+"S")){
        img.style.filter="brightness(0%)";}
        if(!isShiny && !caughtMons.includes(String(id[0]))){
            img.style.filter="brightness(0%)";
        }
    }
    else{
        if(!isShiny && !caughtMons.includes(String(id[0])+"-"+id[2])){
            img.style.filter="brightness(0%)";
        }
        if(isShiny && !caughtMons.includes(String(id[0])+"-"+id[2]+"S")){
            img.style.filter="brightness(0%)";
        }
    }
        
    }
    
    checkDiv.addEventListener('click', function(){
        if(exists==true){
        sessionStorage.setItem("chosenMon",id)
        window.open("EntryPage.html","_self")
        }
    })
    checkDiv.appendChild(img);
    const para = document.createElement("p");
    para.style.scale='75%'
    para.style.textAlign="center";
    para.style.position='relative';
    para.style.top='10px'
    if(sessionStorage.getItem("showNumbers")=="true"){
        if(id[2]==0){
        para.innerText = "#"+id[0]+" "+id[1];}
        else{
            para.innerText="#"+id[0]+"-"+id[2]+" "+id[1];
        }
    }
    else{
    para.innerText = id[1];
    }
    para.style.color = "white";
    para.style.textAlign="center";
    checkDiv.appendChild(para)
    
    if(sessionStorage.getItem("displayChecklist")=="true"){
        let checkbox = document.createElement('input');
        checkbox.type="checkbox";
        checkbox.style.position="relative";
        checkbox.style.left='38px'

        if(isShiny){
            if(id[2]==0){
                checkbox.id=id[0]+"S";
                }
                else{
                    checkbox.id=id[0]+"-"+id[2]+"S";
                }
        }
        else{
        if(id[2]==0){
        checkbox.id=id[0];
        }
        else{
            checkbox.id=id[0]+"-"+id[2]
        }
        }

        if(id[2]==0){
        if(caughtMons.includes(String(id[0])) && !isShiny){
        checkbox.checked='true';
        }
        if(isShiny && caughtMons.includes(String(id[0]+"S"))){
        checkbox.checked='true';
        }
    }
    else{
        if(caughtMons.includes(String(id[0]+"-"+id[2])) && !isShiny){
            checkbox.checked='true';
            }
            if(isShiny && caughtMons.includes(String(id[0]+"-"+id[2]+"S"))){
            checkbox.checked='true';
            }
    }
        
        block.appendChild(checkbox)
    }
    
    if(isShiny==0){
        if(isShiny==0){
            display(id,1);
        }
    }

}


var PokeInfo = [
    [1, 'Bulbasaur', 0, 0],
    [2, 'Ivysaur', 0, 0],
    [3, 'Venusaur', 0, 0],
    [4, 'Charmander', 0, 0],
    [5, 'Charmeleon', 0, 0],
    [6, 'Charizard', 0, 0],
    [7, 'Squirtle', 0, 0],
    [8, 'Wartortle', 0, 0],
    [9, 'Blastoise', 0, 0],
    [10, 'Caterpie', 0, 0],
    [11, 'Metapod', 0, 0],
    [12, 'Butterfree', 0, 0],
    [13, 'Weedle', 0, 0],
    [14, 'Kakuna', 0, 0],
    [15, 'Beedrill', 0, 0],
    [16, 'Pidgey', 0, 0],
    [17, 'Pidgeotto', 0, 0],
    [18, 'Pidgeot', 0, 0],
    [19, 'Rattata', 0, 0],
    [20, 'Raticate', 0, 0],
    [21, 'Spearow', 0, 0],
    [22, 'Fearow', 0, 0],
    [23, 'Ekans', 0, 0],
    [24, 'Arbok', 0, 0],
    [25, 'Pikachu', 0, 0],
    [26, 'Raichu', 0, 0],
    [27, 'Sandshrew', 0, 0],
    [27, 'Alolan Sandshrew', 1, 0],
    [28, 'Sandslash', 0, 0],
    [28, 'Alolan Sandslash', 1, 0],
    [29, 'Nidoran♀', 0, 0],
    [30, 'Nidorina', 0, 0],
    [31, 'Nidoqueen', 0, 0],
    [32, 'Nidoran♂', 0, 0],
    [33, 'Nidorino', 0, 0],
    [34, 'Nidoking', 0, 0],
    [35, 'Clefairy', 0, 0],
    [36, 'Clefable', 0, 0],
    [37, 'Vulpix', 0, 0],
    [38, 'Ninetales', 0, 0],
    [39, 'Jigglypuff', 0, 0],
    [40, 'Wigglytuff', 0, 0],
    [41, 'Zubat', 0, 0],
    [42, 'Golbat', 0, 0],
    [43, 'Oddish', 0, 0],
    [44, 'Gloom', 0, 0],
    [45, 'Vileplume', 0, 0],
    [46, 'Paras', 0, 0],
    [47, 'Parasect', 0, 0],
    [48, 'Venonat', 0, 0],
    [49, 'Venomoth', 0, 0],
    [50, 'Diglett', 0, 0],
    [51, 'Dugtrio', 0, 0],
    [52, 'Meowth', 0, 0],
    [53, 'Persian', 0, 0],
    [54, 'Psyduck', 0, 0],
    [55, 'Golduck', 0, 0],
    [56, 'Mankey', 0, 0],
    [57, 'Primeape', 0, 0],
    [58, 'Growlithe', 0, 0],
    [59, 'Arcanine', 0, 0],
    [60, 'Poliwag', 0, 0],
    [61, 'Poliwhirl', 0, 0],
    [62, 'Poliwrath', 0, 0],
    [63, 'Abra', 0, 0],
    [64, 'Kadabra', 0, 0],
    [65, 'Alakazam', 0, 0],
    [66, 'Machop', 0, 0],
    [67, 'Machoke', 0, 0],
    [68, 'Machamp', 0, 0],
    [69, 'Bellsprout', 0, 0],
    [70, 'Weepinbell', 0, 0],
    [71, 'Victreebel', 0, 0],
    [72, 'Tentacool', 0, 0],
    [73, 'Tentacruel', 0, 0],
    [74, 'Geodude', 0, 0],
    [74, 'Alolan Geodude', 1, 0],
    [75, 'Graveler', 0, 0],
    [75, 'Alolan Graveler', 1, 0],
    [76, 'Golem', 0, 0],
    [76, 'Alolan Golem', 1, 0],
    [77, 'Ponyta', 0, 0],
    [78, 'Rapidash', 0, 0],
    [79, 'Slowpoke', 0, 0],
    [80, 'Slowbro', 0, 0],
    [81, 'Magnemite', 0, 0],
    [82, 'Magneton', 0, 0],
    [83, 'Farfetch’d', 0, 0],
    [84, 'Doduo', 0, 0],
    [85, 'Dodrio', 0, 0],
    [86, 'Seel', 0, 0],
    [87, 'Dewgong', 0, 0],
    [88, 'Grimer', 0, 0],
    [89, 'Muk', 0, 0],
    [90, 'Shellder', 0, 0],
    [91, 'Cloyster', 0, 0],
    [92, 'Gastly', 0, 0],
    [93, 'Haunter', 0, 0],
    [94, 'Gengar', 0, 0],
    [95, 'Onix', 0, 0],
    [96, 'Drowzee', 0, 0],
    [97, 'Hypno', 0, 0],
    [98, 'Krabby', 0, 0],
    [99, 'Kingler', 0, 0],
    [100, 'Voltorb', 0, 0],
    [101, 'Electrode', 0, 0],
    [102, 'Exeggcute', 0, 0],
    [103, 'Exeggutor', 0, 0],
    [104, 'Cubone', 0, 0],
    [105, 'Marowak', 0, 0],
    [106, 'Hitmonlee', 0, 0],
    [107, 'Hitmonchan', 0, 0],
    [108, 'Lickitung', 0, 0],
    [109, 'Koffing', 0, 0],
    [110, 'Weezing', 0, 0],
    [111, 'Rhyhorn', 0, 0],
    [112, 'Rhydon', 0, 0],
    [113, 'Chansey', 0, 0],
    [114, 'Tangela', 0, 0],
    [115, 'Kangaskhan', 0, 0],
    [116, 'Horsea', 0, 0],
    [117, 'Seadra', 0, 0],
    [118, 'Goldeen', 0, 0],
    [119, 'Seaking', 0, 0],
    [120, 'Staryu', 0, 0],
    [121, 'Starmie', 0, 0],
    [122, 'Mr. Mime', 0, 0],
    [123, 'Scyther', 0, 0],
    [124, 'Jynx', 0, 0],
    [125, 'Electabuzz', 0, 0],
    [126, 'Magmar', 0, 0],
    [127, 'Pinsir', 0, 0],
    [128, 'Tauros', 0, 0],
    [129, 'Magikarp', 0, 0],
    [130, 'Gyarados', 0, 0],
    [131, 'Lapras', 0, 0],
    [132, 'Ditto', 0, 0],
    [133, 'Eevee', 0, 0],
    [134, 'Vaporeon', 0, 0],
    [135, 'Jolteon', 0, 0],
    [136, 'Flareon', 0, 0],
    [137, 'Porygon', 0, 0],
    [138, 'Omanyte', 0, 0],
    [139, 'Omastar', 0, 0],
    [140, 'Kabuto', 0, 0],
    [141, 'Kabutops', 0, 0],
    [142, 'Aerodactyl', 0, 0],
    [143, 'Snorlax', 0, 0],
    [144, 'Articuno', 0, 0],
    [145, 'Zapdos', 0, 0],
    [146, 'Moltres', 0, 0],
    [147, 'Dratini', 0, 0],
    [148, 'Dragonair', 0, 0],
    [149, 'Dragonite', 0, 0],
    [150, 'Mewtwo', 0, 0],
    [151, 'Mew', 0, 0],
    [152, 'Chikorita', 0, 0],
    [153, 'Bayleef', 0, 0],
    [154, 'Meganium', 0, 0],
    [155, 'Cyndaquil', 0, 0],
    [156, 'Quilava', 0, 0],
    [157, 'Typhlosion', 0, 0],
    [158, 'Totodile', 0, 0],
    [159, 'Croconaw', 0, 0],
    [160, 'Feraligatr', 0, 0],
    [161, 'Sentret', 0, 0],
    [162, 'Furret', 0, 0],
    [163, 'Hoothoot', 0, 0],
    [164, 'Noctowl', 0, 0],
    [165, 'Ledyba', 0, 0],
    [166, 'Ledian', 0, 0],
    [167, 'Spinarak', 0, 0],
    [168, 'Ariados', 0, 0],
    [169, 'Crobat', 0, 0],
    [170, 'Chinchou', 0, 0],
    [171, 'Lanturn', 0, 0],
    [172, 'Pichu', 0, 0],
    [173, 'Cleffa', 0, 0],
    [174, 'Igglybuff', 0, 0],
    [175, 'Togepi', 0, 0],
    [176, 'Togetic', 0, 0],
    [177, 'Natu', 0, 0],
    [178, 'Xatu', 0, 0],
    [179, 'Mareep', 0, 0],
    [180, 'Flaaffy', 0, 0],
    [181, 'Ampharos', 0, 0],
    [182, 'Bellossom', 0, 0],
    [183, 'Marill', 0, 0],
    [184, 'Azumarill', 0, 0],
    [185, 'Sudowoodo', 0, 0],
    [186, 'Politoed', 0, 0],
    [187, 'Hoppip', 0, 0],
    [188, 'Skiploom', 0, 0],
    [189, 'Jumpluff', 0, 0],
    [190, 'Aipom', 0, 0],
    [191, 'Sunkern', 0, 0],
    [192, 'Sunflora', 0, 0],
    [193, 'Yanma', 0, 0],
    [194, 'Wooper', 0, 0],
    [195, 'Quagsire', 0, 0],
    [196, 'Espeon', 0, 0],
    [197, 'Umbreon', 0, 0],
    [198, 'Murkrow', 0, 0],
    [199, 'Slowking', 0, 0],
    [200, 'Misdreavus', 0, 0],
    [201, 'Unown', 0, 0],
    [202, 'Wobbuffet', 0, 0],
    [203, 'Girafarig', 0, 0],
    [204, 'Pineco', 0, 0],
    [205, 'Forretress', 0, 0],
    [206, 'Dunsparce', 0, 0],
    [207, 'Gligar', 0, 0],
    [208, 'Steelix', 0, 0],
    [209, 'Snubbull', 0, 0],
    [210, 'Granbull', 0, 0],
    [211, 'Qwilfish', 0, 0],
    [212, 'Scizor', 0, 0],
    [213, 'Shuckle', 0, 0],
    [214, 'Heracross', 0, 0],
    [215, 'Sneasel', 0, 0],
    [216, 'Teddiursa', 0, 0],
    [217, 'Ursaring', 0, 0],
    [218, 'Slugma', 0, 0],
    [219, 'Magcargo', 0, 0],
    [220, 'Swinub', 0, 0],
    [221, 'Piloswine', 0, 0],
    [222, 'Corsola', 0, 0],
    [223, 'Remoraid', 0, 0],
    [224, 'Octillery', 0, 0],
    [225, 'Delibird', 0, 0],
    [226, 'Mantine', 0, 0],
    [227, 'Skarmory', 0, 0],
    [228, 'Houndour', 0, 0],
    [229, 'Houndoom', 0, 0],
    [230, 'Kingdra', 0, 0],
    [231, 'Phanpy', 0, 0],
    [232, 'Donphan', 0, 0],
    [233, 'Porygon2', 0, 0],
    [234, 'Stantler', 0, 0],
    [235, 'Smeargle', 0, 0],
    [236, 'Tyrogue', 0, 0],
    [237, 'Hitmontop', 0, 0],
    [238, 'Smoochum', 0, 0],
    [239, 'Elekid', 0, 0],
    [240, 'Magby', 0, 0],
    [241, 'Miltank', 0, 0],
    [242, 'Blissey', 0, 0],
    [243, 'Raikou', 0, 0],
    [244, 'Entei', 0, 0],
    [245, 'Suicune', 0, 0],
    [246, 'Larvitar', 0, 0],
    [247, 'Pupitar', 0, 0],
    [248, 'Tyranitar', 0, 0],
    [248, 'Mega Tyranitar', 1, 0],
    [249, 'Lugia', 0, 0],
    [250, 'Ho-Oh', 0, 0],
    [251, 'Celebi', 0, 0],
    [252, 'Treecko', 0, 0],
    [253, 'Grovyle', 0, 0],
    [254, 'Sceptile', 0, 0],
    [255, 'Torchic', 0, 0],
    [256, 'Combusken', 0, 0],
    [257, 'Blaziken', 0, 0],
    [258, 'Mudkip', 0, 0],
    [259, 'Marshtomp', 0, 0],
    [260, 'Swampert', 0, 0],
    [261, 'Poochyena', 0, 0],
    [262, 'Mightyena', 0, 0],
    [263, 'Zigzagoon', 0, 0],
    [264, 'Linoone', 0, 0],
    [265, 'Wurmple', 0, 0],
    [266, 'Silcoon', 0, 0],
    [267, 'Beautifly', 0, 0],
    [268, 'Cascoon', 0, 0],
    [269, 'Dustox', 0, 0],
    [270, 'Lotad', 0, 0],
    [271, 'Lombre', 0, 0],
    [272, 'Ludicolo', 0, 0],
    [273, 'Seedot', 0, 0],
    [274, 'Nuzleaf', 0, 0],
    [275, 'Shiftry', 0, 0],
    [276, 'Taillow', 0, 0],
    [277, 'Swellow', 0, 0],
    [278, 'Wingull', 0, 0],
    [279, 'Pelipper', 0, 0],
    [280, 'Ralts', 0, 0],
    [281, 'Kirlia', 0, 0],
    [282, 'Gardevoir', 0, 0],
    [283, 'Surskit', 0, 0],
    [284, 'Masquerain', 0, 0],
    [285, 'Shroomish', 0, 0],
    [286, 'Breloom', 0, 0],
    [287, 'Slakoth', 0, 0],
    [288, 'Vigoroth', 0, 0],
    [289, 'Slaking', 0, 0],
    [290, 'Nincada', 0, 0],
    [291, 'Ninjask', 0, 0],
    [292, 'Shedinja', 0, 0],
    [293, 'Whismur', 0, 0],
    [294, 'Loudred', 0, 0],
    [295, 'Exploud', 0, 0],
    [296, 'Makuhita', 0, 0],
    [297, 'Hariyama', 0, 0],
    [298, 'Azurill', 0, 0],
    [299, 'Nosepass', 0, 0],
    [300, 'Skitty', 0, 0],
    [301, 'Delcatty', 0, 0],
    [302, 'Sableye', 0, 0],
    [303, 'Mawile', 0, 0],
    [304, 'Aron', 0, 0],
    [305, 'Lairon', 0, 0],
    [306, 'Aggron', 0, 0],
    [306, 'Mega Aggron', 1, 0],
    [307, 'Meditite', 0, 0],
    [308, 'Medicham', 0, 0],
    [309, 'Electrike', 0, 0],
    [310, 'Manectric', 0, 0],
    [310, 'Mega Manectric', 1, 0],
    [311, 'Plusle', 0, 0],
    [312, 'Minun', 0, 0],
    [313, 'Volbeat', 0, 0],
    [314, 'Illumise', 0, 0],
    [315, 'Roselia', 0, 0],
    [316, 'Gulpin', 0, 0],
    [317, 'Swalot', 0, 0],
    [318, 'Carvanha', 0, 0],
    [319, 'Sharpedo', 0, 0],
    [320, 'Wailmer', 0, 0],
    [321, 'Wailord', 0, 0],
    [322, 'Numel', 0, 0],
    [323, 'Camerupt', 0, 0],
    [323, 'Mega Camerupt', 1, 0],
    [324, 'Torkoal', 0, 0],
    [325, 'Spoink', 0, 0],
    [326, 'Grumpig', 0, 0],
    [327, 'Spinda', 0, 0],
    [328, 'Trapinch', 0, 0],
    [329, 'Vibrava', 0, 0],
    [330, 'Flygon', 0, 0],
    [331, 'Cacnea', 0, 0],
    [332, 'Cacturne', 0, 0],
    [333, 'Swablu', 0, 0],
    [334, 'Altaria', 0, 0],
    [335, 'Zangoose', 0, 0],
    [336, 'Seviper', 0, 0],
    [337, 'Lunatone', 0, 0],
    [338, 'Solrock', 0, 0],
    [339, 'Barboach', 0, 0],
    [340, 'Whiscash', 0, 0],
    [341, 'Corphish', 0, 0],
    [342, 'Crawdaunt', 0, 0],
    [343, 'Baltoy', 0, 0],
    [344, 'Claydol', 0, 0],
    [345, 'Lileep', 0, 0],
    [346, 'Cradily', 0, 0],
    [347, 'Anorith', 0, 0],
    [348, 'Armaldo', 0, 0],
    [349, 'Feebas', 0, 0],
    [350, 'Milotic', 0, 0],
    [351, 'Castform', 0, 0],
    [352, 'Kecleon', 0, 0],
    [353, 'Shuppet', 0, 0],
    [354, 'Banette', 0, 0],
    [355, 'Duskull', 0, 0],
    [356, 'Dusclops', 0, 0],
    [357, 'Tropius', 0, 0],
    [358, 'Chimecho', 0, 0],
    [359, 'Absol', 0, 0],
    [360, 'Wynaut', 0, 0],
    [361, 'Snorunt', 0, 0],
    [362, 'Glalie', 0, 0],
    [363, 'Spheal', 0, 0],
    [364, 'Sealeo', 0, 0],
    [365, 'Walrein', 0, 0],
    [366, 'Clamperl', 0, 0],
    [367, 'Huntail', 0, 0],
    [368, 'Gorebyss', 0, 0],
    [369, 'Relicanth', 0, 0],
    [370, 'Luvdisc', 0, 0],
    [371, 'Bagon', 0, 0],
    [372, 'Shelgon', 0, 0],
    [373, 'Salamence', 0, 0],
    [374, 'Beldum', 0, 0],
    [375, 'Metang', 0, 0],
    [376, 'Metagross', 0, 0],
    [377, 'Regirock', 0, 0],
    [378, 'Regice', 0, 0],
    [379, 'Registeel', 0, 0],
    [380, 'Latias', 0, 0],
    [381, 'Latios', 0, 0],
    [382, 'Kyogre', 0, 0],
    [383, 'Groudon', 0, 0],
    [384, 'Rayquaza', 0, 0],
    [385, 'Jirachi', 0, 0],
    [386, 'Deoxys', 0, 0],
    [386, 'Attack Deoxys', 1, 0],
    [386, 'Defense Deoxys', 2, 0],
    [386, 'Speed Deoxys', 3, 0],
    [387, 'Turtwig', 0, 0],
    [388, 'Grotle', 0, 0],
    [389, 'Torterra', 0, 0],
    [390, 'Chimchar', 0, 0],
    [391, 'Monferno', 0, 0],
    [392, 'Infernape', 0, 0],
    [393, 'Piplup', 0, 0],
    [394, 'Prinplup', 0, 0],
    [395, 'Empoleon', 0, 0],
    [396, 'Starly', 0, 0],
    [397, 'Staravia', 0, 0],
    [398, 'Staraptor', 0, 0],
    [399, 'Bidoof', 0, 0],
    [400, 'Bibarel', 0, 0],
    [401, 'Kricketot', 0, 0],
    [402, 'Kricketune', 0, 0],
    [403, 'Shinx', 0, 0],
    [404, 'Luxio', 0, 0],
    [405, 'Luxray', 0, 0],
    [406, 'Budew', 0, 0],
    [407, 'Roserade', 0, 0],
    [408, 'Cranidos', 0, 0],
    [409, 'Rampardos', 0, 0],
    [410, 'Shieldon', 0, 0],
    [411, 'Bastiodon', 0, 0],
    [412, 'Burmy', 0, 0],
    [413, 'Wormadam', 0, 0],
    [414, 'Mothim', 0, 0],
    [415, 'Combee', 0, 0],
    [416, 'Vespiquen', 0, 0],
    [417, 'Pachirisu', 0, 0],
    [418, 'Buizel', 0, 0],
    [419, 'Floatzel', 0, 0],
    [420, 'Cherubi', 0, 0],
    [421, 'Cherrim', 0, 0],
    [421, 'Sunshine Cherrim', 1, 0],
    [422, 'Shellos', 0, 0],
    [423, 'Gastrodon', 0, 0],
    [424, 'Ambipom', 0, 0],
    [425, 'Drifloon', 0, 0],
    [426, 'Drifblim', 0, 0],
    [427, 'Buneary', 0, 0],
    [428, 'Lopunny', 0, 0],
    [429, 'Mismagius', 0, 0],
    [430, 'Honchkrow', 0, 0],
    [431, 'Glameow', 0, 0],
    [432, 'Purugly', 0, 0],
    [433, 'Chingling', 0, 0],
    [434, 'Stunky', 0, 0],
    [435, 'Skuntank', 0, 0],
    [436, 'Bronzor', 0, 0],
    [437, 'Bronzong', 0, 0],
    [438, 'Bonsly', 0, 0],
    [439, 'Mime Jr.', 0, 0],
    [440, 'Happiny', 0, 0],
    [441, 'Chatot', 0, 0],
    [442, 'Spiritomb', 0, 0],
    [443, 'Gible', 0, 0],
    [444, 'Gabite', 0, 0],
    [445, 'Garchomp', 0, 0],
    [446, 'Munchlax', 0, 0],
    [447, 'Riolu', 0, 0],
    [448, 'Lucario', 0, 0],
    [448, 'Mega Lucario', 1, 0],
    [449, 'Hippopotas', 0, 0],
    [450, 'Hippowdon', 0, 0],
    [451, 'Skorupi', 0, 0],
    [452, 'Drapion', 0, 0],
    [453, 'Croagunk', 0, 0],
    [454, 'Toxicroak', 0, 0],
    [455, 'Carnivine', 0, 0],
    [456, 'Finneon', 0, 0],
    [457, 'Lumineon', 0, 0],
    [458, 'Mantyke', 0, 0],
    [459, 'Snover', 0, 0],
    [460, 'Abomasnow', 0, 0],
    [460, 'Mega Abomasnow', 1, 0],
    [461, 'Weavile', 0, 0],
    [462, 'Magnezone', 0, 0],
    [463, 'Lickilicky', 0, 0],
    [464, 'Rhyperior', 0, 0],
    [465, 'Tangrowth', 0, 0],
    [466, 'Electivire', 0, 0],
    [467, 'Magmortar', 0, 0],
    [468, 'Togekiss', 0, 0],
    [469, 'Yanmega', 0, 0],
    [470, 'Leafeon', 0, 0],
    [471, 'Glaceon', 0, 0],
    [472, 'Gliscor', 0, 0],
    [473, 'Mamoswine', 0, 0],
    [474, 'Porygon-Z', 0, 0],
    [475, 'Gallade', 0, 0],
    [476, 'Probopass', 0, 0],
    [477, 'Dusknoir', 0, 0],
    [478, 'Froslass', 0, 0],
    [479, 'Rotom', 0, 0],
    [480, 'Uxie', 0, 0],
    [481, 'Mesprit', 0, 0],
    [482, 'Azelf', 0, 0],
    [483, 'Dialga', 0, 0],
    [484, 'Palkia', 0, 0],
    [485, 'Heatran', 0, 0],
    [486, 'Regigigas', 0, 0],
    [487, 'Giratina', 0, 0],
    [488, 'Cresselia', 0, 0],
    [489, 'Phione', 0, 0],
    [490, 'Manaphy', 0, 0],
    [491, 'Darkrai', 0, 0],
    [492, 'Shaymin', 0, 0],
    [493, 'Arceus', 0, 0],
    [494, 'Victini', 0, 0],
    [495, 'Snivy', 0, 0],
    [496, 'Servine', 0, 0],
    [497, 'Serperior', 0, 0],
    [498, 'Tepig', 0, 0],
    [499, 'Pignite', 0, 0],
    [500, 'Emboar', 0, 0],
    [501, 'Oshawott', 0, 0],
    [502, 'Dewott', 0, 0],
    [503, 'Samurott', 0, 0],
    [504, 'Patrat', 0, 0],
    [505, 'Watchog', 0, 0],
    [506, 'Lillipup', 0, 0],
    [507, 'Herdier', 0, 0],
    [508, 'Stoutland', 0, 0],
    [509, 'Purrloin', 0, 0],
    [510, 'Liepard', 0, 0],
    [511, 'Pansage', 0, 0],
    [512, 'Simisage', 0, 0],
    [513, 'Pansear', 0, 0],
    [514, 'Simisear', 0, 0],
    [515, 'Panpour', 0, 0],
    [516, 'Simipour', 0, 0],
    [517, 'Munna', 0, 0],
    [518, 'Musharna', 0, 0],
    [519, 'Pidove', 0, 0],
    [520, 'Tranquill', 0, 0],
    [521, 'Unfezant', 0, 0],
    [522, 'Blitzle', 0, 0],
    [523, 'Zebstrika', 0, 0],
    [524, 'Roggenrola', 0, 0],
    [525, 'Boldore', 0, 0],
    [526, 'Gigalith', 0, 0],
    [527, 'Woobat', 0, 0],
    [528, 'Swoobat', 0, 0],
    [529, 'Drilbur', 0, 0],
    [530, 'Excadrill', 0, 0],
    [531, 'Audino', 0, 0],
    [531, 'Mega Audino', 1, 0],
    [532, 'Timburr', 0, 0],
    [533, 'Gurdurr', 0, 0],
    [534, 'Conkeldurr', 0, 0],
    [535, 'Tympole', 0, 0],
    [536, 'Palpitoad', 0, 0],
    [537, 'Seismitoad', 0, 0],
    [538, 'Throh', 0, 0],
    [539, 'Sawk', 0, 0],
    [540, 'Sewaddle', 0, 0],
    [541, 'Swadloon', 0, 0],
    [542, 'Leavanny', 0, 0],
    [543, 'Venipede', 0, 0],
    [544, 'Whirlipede', 0, 0],
    [545, 'Scolipede', 0, 0],
    [546, 'Cottonee', 0, 0],
    [547, 'Whimsicott', 0, 0],
    [548, 'Petilil', 0, 0],
    [549, 'Lilligant', 0, 0],
    [550, 'Basculin', 0, 0],
    [551, 'Sandile', 0, 0],
    [552, 'Krokorok', 0, 0],
    [553, 'Krookodile', 0, 0],
    [554, 'Darumaka', 0, 0],
    [555, 'Darmanitan', 0, 0],
    [556, 'Maractus', 0, 0],
    [557, 'Dwebble', 0, 0],
    [558, 'Crustle', 0, 0],
    [559, 'Scraggy', 0, 0],
    [560, 'Scrafty', 0, 0],
    [561, 'Sigilyph', 0, 0],
    [562, 'Yamask', 0, 0],
    [563, 'Cofagrigus', 0, 0],
    [564, 'Tirtouga', 0, 0],
    [565, 'Carracosta', 0, 0],
    [566, 'Archen', 0, 0],
    [567, 'Archeops', 0, 0],
    [568, 'Trubbish', 0, 0],
    [569, 'Garbodor', 0, 0],
    [570, 'Zorua', 0, 0],
    [571, 'Zoroark', 0, 0],
    [572, 'Minccino', 0, 0],
    [573, 'Cinccino', 0, 0],
    [574, 'Gothita', 0, 0],
    [575, 'Gothorita', 0, 0],
    [576, 'Gothitelle', 0, 0],
    [577, 'Solosis', 0, 0],
    [578, 'Duosion', 0, 0],
    [579, 'Reuniclus', 0, 0],
    [580, 'Ducklett', 0, 0],
    [581, 'Swanna', 0, 0],
    [582, 'Vanillite', 0, 0],
    [583, 'Vanillish', 0, 0],
    [584, 'Vanilluxe', 0, 0],
    [585, 'Deerling', 0, 0],
    [586, 'Sawsbuck', 0, 0],
    [587, 'Emolga', 0, 0],
    [588, 'Karrablast', 0, 0],
    [589, 'Escavalier', 0, 0],
    [590, 'Foongus', 0, 0],
    [591, 'Amoonguss', 0, 0],
    [592, 'Frillish', 0, 0],
    [593, 'Jellicent', 0, 0],
    [594, 'Alomomola', 0, 0],
    [595, 'Joltik', 0, 0],
    [596, 'Galvantula', 0, 0],
    [597, 'Ferroseed', 0, 0],
    [598, 'Ferrothorn', 0, 0],
    [599, 'Klink', 0, 0],
    [600, 'Klang', 0, 0],
    [601, 'Klinklang', 0, 0],
    [602, 'Tynamo', 0, 0],
    [603, 'Eelektrik', 0, 0],
    [604, 'Eelektross', 0, 0],
    [605, 'Elgyem', 0, 0],
    [606, 'Beheeyem', 0, 0],
    [607, 'Litwick', 0, 0],
    [608, 'Lampent', 0, 0],
    [609, 'Chandelure', 0, 0],
    [610, 'Axew', 0, 0],
    [611, 'Fraxure', 0, 0],
    [612, 'Haxorus', 0, 0],
    [613, 'Cubchoo', 0, 0],
    [614, 'Beartic', 0, 0],
    [615, 'Cryogonal', 0, 0],
    [616, 'Shelmet', 0, 0],
    [617, 'Accelgor', 0, 0],
    [618, 'Stunfisk', 0, 0],
    [619, 'Mienfoo', 0, 0],
    [620, 'Mienshao', 0, 0],
    [621, 'Druddigon', 0, 0],
    [622, 'Golett', 0, 0],
    [623, 'Golurk', 0, 0],
    [624, 'Pawniard', 0, 0],
    [625, 'Bisharp', 0, 0],
    [626, 'Bouffalant', 0, 0],
    [627, 'Rufflet', 0, 0],
    [628, 'Braviary', 0, 0],
    [629, 'Vullaby', 0, 0],
    [630, 'Mandibuzz', 0, 0],
    [631, 'Heatmor', 0, 0],
    [632, 'Durant', 0, 0],
    [633, 'Deino', 0, 0],
    [634, 'Zweilous', 0, 0],
    [635, 'Hydreigon', 0, 0],
    [636, 'Larvesta', 0, 0],
    [637, 'Volcarona', 0, 0],
    [638, 'Cobalion', 0, 0],
    [639, 'Terrakion', 0, 0],
    [640, 'Virizion', 0, 0],
    [641, 'Tornadus', 0, 0],
    [642, 'Thundurus', 0, 0],
    [643, 'Reshiram', 0, 0],
    [644, 'Zekrom', 0, 0],
    [645, 'Landorus', 0, 0],
    [646, 'Kyurem', 0, 0],
    [647, 'Keldeo', 0, 0],
    [647, 'Resolute Keldeo', 1, 0],
    [648, 'Meloetta', 0, 0],
    [649, 'Genesect', 0, 0],
    [650, 'Chespin', 0, 0],
    [651, 'Quilladin', 0, 0],
    [652, 'Chesnaught', 0, 0],
    [653, 'Fennekin', 0, 0],
    [654, 'Braixen', 0, 0],
    [655, 'Delphox', 0, 0],
    [656, 'Froakie', 0, 0],
    [657, 'Frogadier', 0, 0],
    [658, 'Greninja', 0, 0],
    [658, 'Ash Greninja', 1, 0],
    [659, 'Bunnelby', 0, 0],
    [660, 'Diggersby', 0, 0],
    [661, 'Fletchling', 0, 0],
    [662, 'Fletchinder', 0, 0],
    [663, 'Talonflame', 0, 0],
    [664, 'Scatterbug', 0, 0],
    [665, 'Spewpa', 0, 0],
    [666, 'Vivillon', 0, 0],
    [667, 'Litleo', 0, 0],
    [668, 'Pyroar', 0, 0],
    [669, 'Flabébé', 0, 0],
    [670, 'Floette', 0, 0],
    [671, 'Florges', 0, 0],
    [672, 'Skiddo', 0, 0],
    [673, 'Gogoat', 0, 0],
    [674, 'Pancham', 0, 0],
    [675, 'Pangoro', 0, 0],
    [676, 'Furfrou', 0, 0],
    [676, 'Dandy Furfrou', 1, 0],
    [676, 'Debutante Furfrou', 2, 0],
    [676, 'Diamond Furfrou', 3, 0],
    [676, 'Heart Furfrou', 4, 0],
    [676, 'Kabuki Furfrou', 5, 0],
    [676, 'La-Reine Furfrou', 6, 0],
    [676, 'Matron Furfrou', 7, 0],
    [676, 'Pharaoh Furfrou', 8, 0],
    [676, 'Star Furfrou', 9, 0],
    [677, 'Espurr', 0, 0],
    [678, 'Meowstic', 0, 0],
    [679, 'Honedge', 0, 0],
    [680, 'Doublade', 0, 0],
    [681, 'Aegislash', 0, 0],
    [682, 'Spritzee', 0, 0],
    [683, 'Aromatisse', 0, 0],
    [684, 'Swirlix', 0, 0],
    [685, 'Slurpuff', 0, 0],
    [686, 'Inkay', 0, 0],
    [687, 'Malamar', 0, 0],
    [688, 'Binacle', 0, 0],
    [689, 'Barbaracle', 0, 0],
    [690, 'Skrelp', 0, 0],
    [691, 'Dragalge', 0, 0],
    [692, 'Clauncher', 0, 0],
    [693, 'Clawitzer', 0, 0],
    [694, 'Helioptile', 0, 0],
    [695, 'Heliolisk', 0, 0],
    [696, 'Tyrunt', 0, 0],
    [697, 'Tyrantrum', 0, 0],
    [698, 'Amaura', 0, 0],
    [699, 'Aurorus', 0, 0],
    [700, 'Sylveon', 0, 0],
    [701, 'Hawlucha', 0, 0],
    [702, 'Dedenne', 0, 0],
    [703, 'Carbink', 0, 0],
    [704, 'Goomy', 0, 0],
    [705, 'Sliggoo', 0, 0],
    [706, 'Goodra', 0, 0],
    [707, 'Klefki', 0, 0],
    [708, 'Phantump', 0, 0],
    [709, 'Trevenant', 0, 0],
    [710, 'Pumpkaboo', 0, 0],
    [711, 'Gourgeist', 0, 0],
    [712, 'Bergmite', 0, 0],
    [713, 'Avalugg', 0, 0],
    [714, 'Noibat', 0, 0],
    [715, 'Noivern', 0, 0],
    [716, 'Xerneas', 0, 0],
    [716, 'Neutral Xerneas', 1, 0],
    [717, 'Yveltal', 0, 0],
    [718, 'Zygarde', 0, 0],
    [719, 'Diancie', 0, 0],
    [720, 'Hoopa', 0, 0],
    [721, 'Volcanion', 0, 0],
    [722, 'Rowlet', 0, 0],
    [723, 'Dartrix', 0, 0],
    [724, 'Decidueye', 0, 0],
    [725, 'Litten', 0, 0],
    [726, 'Torracat', 0, 0],
    [727, 'Incineroar', 0, 0],
    [728, 'Popplio', 0, 0],
    [729, 'Brionne', 0, 0],
    [730, 'Primarina', 0, 0],
    [731, 'Pikipek', 0, 0],
    [732, 'Trumbeak', 0, 0],
    [733, 'Toucannon', 0, 0],
    [734, 'Yungoos', 0, 0],
    [735, 'Gumshoos', 0, 0],
    [736, 'Grubbin', 0, 0],
    [737, 'Charjabug', 0, 0],
    [738, 'Vikavolt', 0, 0],
    [739, 'Crabrawler', 0, 0],
    [740, 'Crabominable', 0, 0],
    [741, 'Oricorio', 0, 0],
    [742, 'Cutiefly', 0, 0],
    [743, 'Ribombee', 0, 0],
    [744, 'Rockruff', 0, 0],
    [745, 'Lycanroc', 0, 0],
    [745, 'Midnight Lycanroc', 1, 0],
    [745, 'Dusk Lycanroc', 2, 0],
    [746, 'Wishiwashi', 0, 0],
    [747, 'Mareanie', 0, 0],
    [748, 'Toxapex', 0, 0],
    [749, 'Mudbray', 0, 0],
    [750, 'Mudsdale', 0, 0],
    [751, 'Dewpider', 0, 0],
    [752, 'Araquanid', 0, 0],
    [753, 'Fomantis', 0, 0],
    [754, 'Lurantis', 0, 0],
    [755, 'Morelull', 0, 0],
    [756, 'Shiinotic', 0, 0],
    [757, 'Salandit', 0, 0],
    [758, 'Salazzle', 0, 0],
    [759, 'Stufful', 0, 0],
    [760, 'Bewear', 0, 0],
    [761, 'Bounsweet', 0, 0],
    [762, 'Steenee', 0, 0],
    [763, 'Tsareena', 0, 0],
    [764, 'Comfey', 0, 0],
    [765, 'Oranguru', 0, 0],
    [766, 'Passimian', 0, 0],
    [767, 'Wimpod', 0, 0],
    [768, 'Golisopod', 0, 0],
    [769, 'Sandygast', 0, 0],
    [770, 'Palossand', 0, 0],
    [771, 'Pyukumuku', 0, 0],
    [772, 'Type: Null', 0, 0],
    [773, 'Silvally', 0, 0],
    [774, 'Minior', 0, 0],
    [775, 'Komala', 0, 0],
    [776, 'Turtonator', 0, 0],
    [777, 'Togedemaru', 0, 0],
    [778, 'Mimikyu', 0, 0],
    [779, 'Bruxish', 0, 0],
    [780, 'Drampa', 0, 0],
    [781, 'Dhelmise', 0, 0],
    [782, 'Jangmo-o', 0, 0],
    [783, 'Hakamo-o', 0, 0],
    [784, 'Kommo-o', 0, 0],
    [785, 'Tapu Koko', 0, 0],
    [786, 'Tapu Lele', 0, 0],
    [787, 'Tapu Bulu', 0, 0],
    [788, 'Tapu Fini', 0, 0],
    [789, 'Cosmog', 0, 0],
    [790, 'Cosmoem', 0, 0],
    [791, 'Solgaleo', 0, 0],
    [792, 'Lunala', 0, 0],
    [793, 'Nihilego', 0, 0],
    [794, 'Buzzwole', 0, 0],
    [795, 'Pheromosa', 0, 0],
    [796, 'Xurkitree', 0, 0],
    [797, 'Celesteela', 0, 0],
    [798, 'Kartana', 0, 0],
    [799, 'Guzzlord', 0, 0],
    [800, 'Necrozma', 0, 0],
    [801, 'Magearna', 0, 0],
    [802, 'Marshadow', 0, 0],
    [803, 'Poipole', 0, 0],
    [804, 'Naganadel', 0, 0],
    [805, 'Stakataka', 0, 0],
    [806, 'Blacephalon', 0, 0],
    [807, 'Zeraora', 0, 0],
    [808, 'Meltan', 0, 0],
    [809, 'Melmetal', 0, 0],
    [810, 'Grookey', 0, 0],
    [811, 'Thwackey', 0, 0],
    [812, 'Rillaboom', 0, 0],
    [813, 'Scorbunny', 0, 0],
    [814, 'Raboot', 0, 0],
    [815, 'Cinderace', 0, 0],
    [816, 'Sobble', 0, 0],
    [817, 'Drizzile', 0, 0],
    [818, 'Inteleon', 0, 0],
    [819, 'Skwovet', 0, 0],
    [820, 'Greedent', 0, 0],
    [821, 'Rookidee', 0, 0],
    [822, 'Corvisquire', 0, 0],
    [823, 'Corviknight', 0, 0],
    [824, 'Blipbug', 0, 0],
    [825, 'Dottler', 0, 0],
    [826, 'Orbeetle', 0, 0],
    [827, 'Nickit', 0, 0],
    [828, 'Thievul', 0, 0],
    [829, 'Gossifleur', 0, 0],
    [830, 'Eldegoss', 0, 0],
    [831, 'Wooloo', 0, 0],
    [832, 'Dubwool', 0, 0],
    [833, 'Chewtle', 0, 0],
    [834, 'Drednaw', 0, 0],
    [835, 'Yamper', 0, 0],
    [836, 'Boltund', 0, 0],
    [837, 'Rolycoly', 0, 0],
    [838, 'Carkol', 0, 0],
    [839, 'Coalossal', 0, 0],
    [840, 'Applin', 0, 0],
    [841, 'Flapple', 0, 0],
    [842, 'Appletun', 0, 0],
    [843, 'Silicobra', 0, 0],
    [844, 'Sandaconda', 0, 0],
    [845, 'Cramorant', 0, 0],
    [846, 'Arrokuda', 0, 0],
    [847, 'Barraskewda', 0, 0],
    [848, 'Toxel', 0, 0],
    [849, 'Toxtricity', 0, 0],
    [850, 'Sizzlipede', 0, 0],
    [851, 'Centiskorch', 0, 0],
    [852, 'Clobbopus', 0, 0],
    [853, 'Grapploct', 0, 0],
    [854, 'Sinistea', 0, 0],
    [855, 'Polteageist', 0, 0],
    [856, 'Hatenna', 0, 0],
    [857, 'Hattrem', 0, 0],
    [858, 'Hatterene', 0, 0],
    [859, 'Impidimp', 0, 0],
    [860, 'Morgrem', 0, 0],
    [861, 'Grimmsnarl', 0, 0],
    [862, 'Obstagoon', 0, 0],
    [863, 'Perrserker', 0, 0],
    [864, 'Cursola', 0, 0],
    [865, 'Sirfetch’d', 0, 0],
    [866, 'Mr. Rime', 0, 0],
    [867, 'Runerigus', 0, 0],
    [868, 'Milcery', 0, 0],
    [869, 'Alcremie', 0, 0],
    [870, 'Falinks', 0, 0],
    [871, 'Pincurchin', 0, 0],
    [872, 'Snom', 0, 0],
    [873, 'Frosmoth', 0, 0],
    [874, 'Stonjourner', 0, 0],
    [875, 'Eiscue', 0, 0],
    [876, 'Indeedee', 0, 0],
    [877, 'Morpeko', 0, 0],
    [878, 'Cufant', 0, 0],
    [879, 'Copperajah', 0, 0],
    [880, 'Dracozolt', 0, 0],
    [881, 'Arctozolt', 0, 0],
    [882, 'Dracovish', 0, 0],
    [883, 'Arctovish', 0, 0],
    [884, 'Duraludon', 0, 0],
    [885, 'Dreepy', 0, 0],
    [886, 'Drakloak', 0, 0],
    [887, 'Dragapult', 0, 0],
    [888, 'Zacian', 0, 0],
    [889, 'Zamazenta', 0, 0],
    [890, 'Eternatus', 0, 0],
    [891, 'Kubfu', 0, 0],
    [892, 'Urshifu', 0, 0],
    [893, 'Zarude', 0, 0],
    [894, 'Regieleki', 0, 0],
    [895, 'Regidrago', 0, 0],
    [896, 'Glastrier', 0, 0],
    [897, 'Spectrier', 0, 0],
    [898, 'Calyrex', 0, 0],
    [899, 'Wyrdeer', 0, 0],
    [900, 'Kleavor', 0, 0],
    [901, 'Ursaluna', 0, 0],
    [902, 'Basculegion', 0, 0],
    [903, 'Sneasler', 0, 0],
    [904, 'Overqwil', 0, 0],
    [905, 'Enamorus', 0, 0],
    [906, 'Sprigatito', 0, 0],
    [907, 'Floragato', 0, 0],
    [908, 'Meowscarada', 0, 0],
    [909, 'Fuecoco', 0, 0],
    [910, 'Crocalor', 0, 0],
    [911, 'Skeledirge', 0, 0],
    [912, 'Quaxly', 0, 0],
    [913, 'Quaxwell', 0, 0],
    [914, 'Quaquaval', 0, 0],
    [915, 'Lechonk', 0, 0],
    [916, 'Oinkologne', 0, 0],
    [917, 'Tarountula', 0, 0],
    [918, 'Spidopos', 0, 0],
    [919, 'Nymble', 0, 0],
    [920, 'Lokix', 0, 0],
    [921, 'Pawmi', 0, 0],
    [922, 'Pawmo', 0, 0],
    [923, 'Pawmot', 0, 0],
    [924, 'Clodsire', 0, 0],
    [925, 'Tandemaus', 0, 0],
    [926, 'Maushold', 0, 0],
    [927, 'Fidough', 0, 0],
    [928, 'Dachsbun', 0, 0],
    [929, 'Smoliv', 0, 0],
    [930, 'Dolliv', 0, 0],
    [931, 'Arboliva', 0, 0],
    [932, 'Squawkabilly', 0, 0],
    [933, 'Nacli', 0, 0],
    [934, 'Naclstack', 0, 0],
    [935, 'Garganacl', 0, 0],
    [936, 'Annihilape', 0, 0],
    [937, 'Charcadet', 0, 0],
    [938, 'Armarouge', 0, 0],
    [939, 'Ceruledge', 0, 0],
    [940, 'Tadbulb', 0, 0],
    [941, 'Bellibolt', 0, 0],
    [942, 'Wattrel', 0, 0],
    [943, 'Kilowattrel', 0, 0],
    [944, 'Dudunsparce', 0, 0],
    [945, 'Farigiraf', 0, 0],
    [946, 'Maschiff', 0, 0],
    [947, 'Mabosstiff', 0, 0],
    [948, 'Shroodle', 0, 0],
    [949, 'Grafaiai', 0, 0],
    [950, 'Bramblin', 0, 0],
    [951, 'Brambleghast', 0, 0],
    [952, 'Toedscool', 0, 0],
    [953, 'Toedscruel', 0, 0],
    [954, 'Klawf', 0, 0],
    [955, 'Capsakid', 0, 0],
    [956, 'Scovillain', 0, 0],
    [957, 'Rellor', 0, 0],
    [958, 'Rabsca', 0, 0],
    [959, 'Flittle', 0, 0],
    [960, 'Espathra', 0, 0],
    [961, 'Tinkatink', 0, 0],
    [962, 'Tinkatuff', 0, 0],
    [963, 'Tinkaton', 0, 0],
    [964, 'Wiglett', 0, 0],
    [965, 'Wugtrio', 0, 0],
    [966, 'Bombirdier', 0, 0],
    [967, 'Finizen', 0, 0],
    [968, 'Palafin', 0, 0],
    [969, 'Varoom', 0, 0],
    [970, 'Revavroom', 0, 0],
    [971, 'Cyclizar', 0, 0],
    [972, 'Orthworm', 0, 0],
    [973, 'Glimmet', 0, 0],
    [974, 'Glimmora', 0, 0],
    [975, 'Greavard', 0, 0],
    [976, 'Houndstone', 0, 0],
    [977, 'Flamigo', 0, 0],
    [978, 'Cetoddle', 0, 0],
    [979, 'Cetitan', 0, 0],
    [980, 'Kingambit', 0, 0],
    [981, 'Veluza', 0, 0],
    [982, 'Dondozo', 0, 0],
    [983, 'Tatsugiri', 0, 0],
    [984, 'Great Tusk', 0, 0],
    [985, 'Scream Tail', 0, 0],
    [986, 'Amoongutt', 0, 0],
    [987, 'Flutter Mane', 0, 0],
    [988, 'Slither Wing', 0, 0],
    [989, 'Sandy Shocks', 0, 0],
    [990, 'Iron Treads', 0, 0],
    [991, 'Iron Bundle', 0, 0],
    [992, 'Iron Hands', 0, 0],
    [993, 'Iron Jugulis', 0, 0],
    [994, 'Iron Moth', 0, 0],
    [995, 'Iron Thorns', 0, 0],
    [996, 'Frigibax', 0, 0],
    [997, 'Artibax', 0, 0],
    [998, 'Baxcalibur', 0, 0],
    [999, 'Gimmighoul', 0, 0],
    [1000, 'Gholdengo', 0, 0],
    [1001, 'Wo-Chien', 0, 0],
    [1002, 'Chien-Pao', 0, 0],
    [1003, 'Ting-Lu', 0, 0],
    [1004, 'Chi-Yu', 0, 0],
    [1005, 'Roaring Moon', 0, 0],
    [1006, 'Iron Valiant', 0, 0],
    [1007, 'Koraidon', 0, 0],
    [1008, 'Miraidon', 0, 0],
    [1009, 'Walking Wake', 0, 0],
    [1010, 'Iron Leaves', 0, 0],
    [1011, 'Dipplin', 0, 0],
    [1012, 'Poltchageist', 0, 0],
    [1013, 'Sinistcha', 0, 0],
    [1014, 'Okidogi', 0, 0],
    [1015, 'Munkidori', 0, 0],
    [1016, 'Fezandipiti', 0, 0],
    [1017, 'Ogerpon', 0, 0],
    [1018, 'Archaludon', 0, 0],
    [1019, 'Hydrapple', 0, 0],
    [1020, 'Gouging Fire', 0, 0],
    [1021, 'Raging Bolt', 0, 0],
    [1022, 'Iron Boulder', 0, 0],
    [1023, 'Iron Crown', 0, 0],
    [1024, 'Terapagos', 0, 0]
];

for (var i = 0; i < PokeInfo.length; i++) {
    display(PokeInfo[i],PokeInfo[i][3])
}


function countChecks(){
var caughtString=''
for(var i=0; i<PokeInfo.length;i++){
    if(document.getElementById(PokeInfo[i][0])!=null){
        if(PokeInfo[i][2]==0){
            if(document.getElementById(PokeInfo[i][0]).checked()){
                caughtString=caughtString+PokeInfo[i][0]+' ';
            }
            if(document.getElementById(PokeInfo[i][0]+"S").checked()){
                caughtString=caughtString+PokeInfo[i][0]+'S ';
            }
        }
        else{
            if(document.getElementById(PokeInfo[i][0]+"-"+PokeInfo[i][2]).checked()){
                caughtString=caughtString+PokeInfo[i][0]+'-'+PokeInfo[i][2]+" ";
            }
            if(document.getElementById(PokeInfo[i][0]+"-"+PokeInfo[i][2]+"S").checked()){
                caughtString=caughtString+PokeInfo[i][0]+'-'+PokeInfo[i][2]+"S ";
            }
        }
    }
}
localStorage.setItem("CaughtList",caughtString);
location.reload();
}