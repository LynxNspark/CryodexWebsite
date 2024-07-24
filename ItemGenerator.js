function display(group,id){
    let name=id[0].replace(/\s/g,'');
    var block = document.createElement("div");
    block.style.width = "166px";
    block.style.height = "166px";
    block.style.top="10px";
    block.style.display="inline-block"
    document.body.appendChild(block)    
    var img = document.createElement('img');
    img.src="Items/"+group+"/"+name+"Icon.png";
    img.style.left="40px";
    img.style.position="relative";
    img.style.top="0px";
    img.style.height ="80px";
    block.appendChild(img);
    const para = document.createElement("p");
    para.innerText = id;
    para.style.color = "white";
    para.style.textAlign="center";
    block.appendChild(para)
}

function makeTitle(name){
    const para = document.createElement("p");
    para.innerText = name+":";
    para.style.color = "white";
    para.style.position="relative";
    para.style.left="50px"
    para.style.maxWidth="500px"
    para.style.textDecoration="underline";
    para.style.fontSize="200%"
    document.body.appendChild(para)
}

function createSection(Name,list){
    let str= Name.replace(/\s/g, '');
    makeTitle(Name);
    for (var i = 0; i < list.length; i++) {
        display(str,list[i])
    }
}

var CryoBalls = [
    ["Red Cryoball"],
    ["Orange Cryoball"],
    ["Yellow Cryoball"],
    ["Lime Cryoball"],
    ["Green Cryoball"],
    ["Cyan Cryoball"],
    ["Sky Cryoball"],
    ["Blue Cryoball"],
    ["Navy Cryoball"],
    ["Purple Cryoball"],
    ["Violet Cryoball"],
    ["Pink Cryoball"],
    ["Magenta Cryoball"],
    ["Brown Cryoball"],
    ["Tan Cryoball"],
    ["White Cryoball"],
    ["Gray Cryoball"],
    ["Black Cryoball"]
  ];
  

var MegaStones = [
    ["Abomasite"],
    ["Aggronite"],
    ["Audinite"],
    ["Lucarionite"],
    ["Manectite"]
]

createSection("Cryoballs",CryoBalls)
createSection("Mega Stones",MegaStones)

