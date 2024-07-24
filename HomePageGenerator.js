var collageDiv = document.createElement("div");
collageDiv.style.scale="100%"
collageDiv.style.backgroundImage="url('Updates/UpdateCollage.png')"
collageDiv.style.backgroundRepeat="no-repeat";
collageDiv.style.backgroundSize="1518px"
document.body.appendChild(collageDiv);

var title1=document.createElement("img")
title1.style.position='absolute'
title1.style.left="425px"
title1.style.top="25px"
title1.style.scale="75%"
title1.src="Welcome-to-the.png";
collageDiv.appendChild(title1)

var title2=document.createElement("img")
title2.style.position='absolute'
title2.style.top="100px"
title2.style.left="550px"
title2.style.scale="75%"
title2.src="Cryodex.png";
collageDiv.appendChild(title2)

var div1 = document.createElement("div")
document.body.appendChild(div1)

var changelog = document.createElement("img")
changelog.style.position='absolute'
changelog.style.top="275px"
changelog.style.left="100px"
changelog.style.scale="75%"
changelog.src="Changelog.png";
div1.appendChild(changelog)

div1.addEventListener('click', function(){
    window.open("CryodexChangelog.html","_self")
})

var changelogDesc = document.createElement("p")
changelogDesc.innerHTML="Use this page to view the pokemon <br> added to each update of the mod"
changelogDesc.style.position="absolute"
changelogDesc.style.top = "310px";
changelogDesc.style.left = "1000px";
changelogDesc.style.scale="250%"
changelogDesc.style.color="yellow"
changelogDesc.style.backgroundColor="black"
changelogDesc.style.paddingLeft = "10px";
changelogDesc.style.paddingRight = "10px";
changelogDesc.style.borderRadius = "10px";
div1.appendChild(changelogDesc)

var div2 = document.createElement("div");
document.body.appendChild(div2);

var entries = document.createElement("img");
entries.style.position = 'absolute';
entries.style.top = "450px";
entries.style.left = "110px";
entries.style.scale = "75%";
entries.src = "Entries.png";
div2.appendChild(entries);

var entriesDesc = document.createElement("p");
entriesDesc.innerHTML = "Use this page to view released pokemon <br> and track pokemon you've caught";
entriesDesc.style.position = "absolute";
entriesDesc.style.top = "485px";
entriesDesc.style.left = "1000px";
entriesDesc.style.scale = "250%";
entriesDesc.style.color = "green";
entriesDesc.style.backgroundColor = "black";
entriesDesc.style.paddingLeft = "10px";
entriesDesc.style.paddingRight = "10px";
entriesDesc.style.borderRadius = "10px";
div2.appendChild(entriesDesc);


div2.addEventListener('click', function() {
    window.open("CryodexEntries.html", "_self");
});

var div3 = document.createElement("div");
document.body.appendChild(div3);

var berries = document.createElement("img");
berries.style.position = 'absolute';
berries.style.top = "625px";
berries.style.left = "115px";
berries.style.scale = "75%";
berries.src = "Berries.png";
div3.appendChild(berries);

var berriesDesc = document.createElement("p");
berriesDesc.innerHTML = "Use this page to view the different <br> berries pokemon enjoy eating";
berriesDesc.style.position = "absolute";
berriesDesc.style.top = "660px";
berriesDesc.style.left = "1000px";
berriesDesc.style.scale = "250%";
berriesDesc.style.color = "red";
berriesDesc.style.backgroundColor = "black";
berriesDesc.style.paddingLeft="10px"
berriesDesc.style.paddingRight="10px"
berriesDesc.style.borderRadius="10px"
div3.appendChild(berriesDesc);


div3.addEventListener('click', function() {
    window.open("CryodexBerries.html", "_self");
});

var div4 = document.createElement("div");
document.body.appendChild(div4);

var items = document.createElement("img");
items.style.position = 'absolute';
items.style.top = "800px";
items.style.left = "125px";
items.style.scale = "75%";
items.src = "Items.png";
div4.appendChild(items);

var itemsDesc = document.createElement("p");
itemsDesc.innerHTML = "Use this page to view utility <br> and evolutionary items";
itemsDesc.style.position = "absolute";
itemsDesc.style.top = "835px";
itemsDesc.style.left = "1000px";
itemsDesc.style.scale = "250%";
itemsDesc.style.color = "purple";
itemsDesc.style.backgroundColor = "black";
itemsDesc.style.paddingLeft = "10px";
itemsDesc.style.paddingRight = "10px";
itemsDesc.style.borderRadius = "10px";
div4.appendChild(itemsDesc);


div4.addEventListener('click', function() {
    window.open("CryodexItems.html", "_self");
});



var collage = document.createElement("img");
collage.style.position='relative'
collage.src="Updates/Transparent.png";
collage.style.width="1517px"
collage.style.height="1000px"
collageDiv.appendChild(collage);

