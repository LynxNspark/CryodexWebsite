var UpdateInfo = [
    ["MushroomUpdate",["Paras"," Parasect"," Shroomish"," Breloom"," Foongus"," Amoongus"," Amoongutt"," Morelull"," Shiinotic"," Toedscool"," Toedscruel"],23],
    ["WildCatUpdate",["Raikou"," Entei"," Suicune"," Shinx"," Luxio"," Luxray"," Litleo"," Pyroar"," Zeraora"],22],
    ["FireTypeUpdate",["Numel"," Camerupt"," Heatran"," Capsakid"," Scovillain"," Charcadet"," Armarouge"," Ceruledge"," Chi-Yu"],21],
    ["CrocUpdate",["Totodile"," Croconaw"," Feraligatr"," Sandile"," Krokorok"," Krookodile"," Fuecoco"," Crocalor"," Skeledirge"],20],
    ["FishUpdate",["Relicanth"," Finneon"," Lumineon"," Bruxish"," Dondozo"," Tatsugiri"],19],
    ["NormalTypeUpdate",["Wynaut"," Wobuffet"," Whismur"," Loudred"," Exploud","Audino"," Wyrdeer"," Farigiraf"],18],
    ["SpaceUpdate",["Cleffa"," Clefairy"," Clefable"," Deoxys"," Elgyem"," Beheeyem"],17],
    ["AquaticUpdate",["Horsea"," Seadra"," Kingdra"," Mantyke"," Mantine"," Skrelp"," Dragalge"," Wailmer"," Wailord"],16],
    ["FrogUpdate",["Croagunk"," Toxicroak"," Tympole"," Palpitoad"," Seismitoad"," Froakie"," Frogadier"," Greninja"],15],
    ["DogFormsUpdate",["Rockruff"," Lycanroc"," Furfrou"," Drifloon"," Drifblim"],14],
    ["FossilUpdate",["Lileep"," Cradily"," Shieldon"," Bastiodon"," Cranidos"," Rampardos"," Amaura"," Aurorus"," Combee"," Vespiquen"],13],
    ["MonkeyUpdate",["Aipom"," Ambipom"," Panpour"," Simipour"," Pansear"," Simisear"," Pansage"," Simisage"],12],
    ["MegaUpdate",["Larvitar"," Pupitar"," Tyranitar"," Aron"," Lairon"," Aggron"," Riolu"," Lucario"," Snover"," Abomasnow"],11],
    ["1.10Update",["Omanyte"," Omastar"," Sentret"," Furret"," Azurill"," Marill"," Azumarill"," Jangmo-o"," Hakamo-o"," Kommo-o"],10],
    ["1.9Update",["Sandshrew"," Sandslash"," Swinub"," Piloswine"," Mamoswine"," Stunky"," Skuntank"," Axew"," Fraxure"," Haxorus"],9],
    ["1.8Update",["Poliwag"," Poliwhirl"," Poliwrath"," Politoed"," Elekid"," Electabuzz"," Electivire"," Patrat"," Watchog"],8],
    ["1.7Update",["Geodude"," Graveler"," Golem"," Psyduck"," Golduck"," Blitzle"," Zebstrika"," Dedenne"," Drampa"],7],
    ["1.6Update",["Mankey"," Primeape"," Doduo"," Dodrio"," Kabuto"," Kabutops"," Ditto"," Tyrunt"," Tyrantrum"],6],
    ["1.5Update",["Girafarig"," Electrike"," Manectric"," Corphish"," Crawdaunt"],5],
    ["1.4Update",["Cherubi"," Cherrim"," Chespin"," Quilladin"," Chesnaught"," Cobalion"," Terrakion"," Virizion"],4],
    ["1.3Update",["Bouffalant"," Fomantis"," Lurantis"," Kecleon"," Heatmor"," Smeargle"," Durant"],3],
    ["DeerUpdate",["Deerling"," Sawsbuck"," Xerneas"," Keldeo"," Skiddo"," Gogoat"],2],
    ["PilotUpdate",["Joltik"," Galvantula"," Pachirisu"," Druddigon"],1]    
]

if (typeof(Storage) != "undefined" && sessionStorage.getItem("logPage")==undefined) {
    sessionStorage.setItem("logPage",0);
}


var num=Number(sessionStorage.getItem("logPage"));
let chosenUpdate = UpdateInfo[num];
let Update1=undefined;
let Update2=undefined;
let Update3=undefined;
let Update4=undefined;
let Update5=undefined;



if(num==0){
    Update1 = num;
    Update2 = num+1
    Update3 = num+2;
    Update4 = num+3;
    Update5 = num+4;
}
else if(num==1){
    Update1 = num-1;
    Update2 = num;
    Update3 = num+1;
    Update4 = num+2;
    Update5 = num+3;
}
else if(num==UpdateInfo.length-1){
    Update1 = num-4;
    Update2 = num-3;
    Update3 = num-2;
    Update4 = num-1;
    Update5 = num;
}
else if(num==UpdateInfo.length-2){
    Update1 = num-3;
    Update2 = num-2;
    Update3 = num-1;
    Update4 = num;
    Update5 = num+1;
}
else{
    Update1= num-2;
    Update2= num-1;
    Update3 = num;
    Update4 = num+1;
    Update5 = num+2;
}


var logPicker = document.createElement("div")
document.body.appendChild(logPicker);

var button1 = document.createElement("button");
button1.innerHTML="1."+UpdateInfo[Update1][2];
button1.style.position="relative";
button1.style.left='675px'
logPicker.appendChild(button1)
button1.addEventListener('click',() => {

    sessionStorage.setItem("logPage",Update1);
    location.reload();
})

var button2 = document.createElement("button");
button2.innerHTML="1."+UpdateInfo[Update2][2];
button2.style.position="relative";
button2.style.left='675px'
logPicker.appendChild(button2)
button2.addEventListener('click',() => {
    sessionStorage.setItem("logPage",Update2);
    location.reload();
})

var button3 = document.createElement("button");
button3.innerHTML="1."+UpdateInfo[Update3][2];
button3.style.position="relative";
button3.style.left='675px'
logPicker.appendChild(button3)
button3.addEventListener('click',() => {
    sessionStorage.setItem("logPage",Update3);
    location.reload();
})

var button4 = document.createElement("button");
button4.innerHTML="1."+UpdateInfo[Update4][2];
button4.style.position="relative";
button4.style.left='675px'
logPicker.appendChild(button4)
button4.addEventListener('click',() => {
    sessionStorage.setItem("logPage",Update4);
    location.reload();
})

var button5 = document.createElement("button");
button5.innerHTML="1."+UpdateInfo[Update5][2];
button5.style.position="relative";
button5.style.left='675px'
logPicker.appendChild(button5)
button5.addEventListener('click',() => {
    sessionStorage.setItem("logPage",Update5);
    location.reload();
})

var space = document.createElement("div")
document.body.appendChild(space);
space.style.minHeight="25px"
var spaceText = document.createElement("p")
space.appendChild(spaceText)



var logPicture = document.createElement("img")
logPicture.src = "Updates/" +chosenUpdate[0]+ ".png";
logPicture.style.width="750px";
logPicture.style.maxHeight="500px"
logPicture.style.position="relative"
document.body.appendChild(logPicture);

var division = document.createElement("div")
division.style.width='200px'
division.style.display="inline-block"
document.body.appendChild(division)

var versionNumber = document.createElement("p")
versionNumber.innerHTML="Update 1."+chosenUpdate[2]+":"
versionNumber.style.color='white'; 
versionNumber.style.position="relative"
versionNumber.style.scale="200%"
versionNumber.style.maxHeight="50px"
versionNumber.style.maxWidth="200px"
versionNumber.style.top="-450px"
versionNumber.style.left="900px";
document.body.appendChild(versionNumber)

var logInfo = document.createElement("p");
logInfo.innerHTML=chosenUpdate[1];
logInfo.style.position="relative"
logInfo.style.top="-435px"
logInfo.style.maxWidth="50px"
logInfo.style.maxHeight="50px"
logInfo.style.left="800px";
logInfo.style.color='white';    
document.body.appendChild(logInfo);