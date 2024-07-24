var block = document.createElement("div");
block.style.width = "166px";
block.style.height = "166px";
block.style.top="10px";
block.style.display="inline-block"
document.body.appendChild(block)    
var img = document.createElement('img');
img.src="Berries/"+"PokeBean"+".png";
img.style.left="40px";
img.style.position="relative";
img.style.top="0px";
img.style.height ="80px";
block.appendChild(img);
const para = document.createElement("p");
para.innerText = "Poke Bean";
para.style.color = "white";
para.style.textAlign="center";
block.appendChild(para)

function display(id){
    var block = document.createElement("div");
    block.style.width = "166px";
    block.style.height = "166px";
    block.style.top="10px";
    block.style.display="inline-block"
    document.body.appendChild(block)    
    var img = document.createElement('img');
    img.src="Berries/"+id[0]+".png";
    img.style.left="40px";
    img.style.position="relative";
    img.style.top="0px";
    img.style.height ="80px";
    block.appendChild(img);
    const para = document.createElement("p");
    para.innerText = id[0]+" Berry";
    para.style.color = "white";
    para.style.textAlign="center";
    block.appendChild(para)
}



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

for (var i = 1; i < BerryInfo.length; i++) {
    display(BerryInfo[i])
}