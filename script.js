//import {readFileSync, promises as fsPromises} from 'fs';

storyPts = 0
tScale = 1; //this increases with boosts
tPts = 0;
ptsProgress = 10;
idlePts = 0;
lineNo = 0;

buildingCount = 0; //keeps track of what all is unlocked

upgrades = ["x2", "Wallpaper", "friends"]; //list of upgrades
upgradePrice = [20, 40, 30];

fitten1Price = 10;
fitten2Price = 20;
willagePrice = 40;
stamps1Price = 60;
stamps2Price = 70;
ic1Price = 100;
ic2Price = 120;
ic3Price = 140;
exhHallPrice = 200;
sCenter1Price = 250;
sCenter2Price = 280;
cocPrice = 350;
klausPrice = 400;
rChandlerStadPrice = 420;
petersPrice = 500;
nAveDiningPrice = 600;
nAve1Price = 675;
nAve2Price = 750;
nAve3Price = 825;
bDoddStadPrice = 1000;
techTowerPrice = 1500;

//fitten hall gives you half a tPt every second - 1tpts/sec if you unlock lvl2

//list of buildings
buildings = ["Fitten Hall Lvl 1", "Fitten Hall Lvl 2", 
            "West Village", 
            "Stamps Health Services Lvl 1", "Stamps Health Services Lvl 2", 
            "Instructional Center Lvl 1", "Instructional Center Lvl2", "Instructional Center Lvl 3",
            "Exhibition Hall", 
            "Student Center Lvl 1", "Student Center Lvl 2", 
            "College of Computing",
            "Klaus Advanced College of Computing",
            "Russ Chandler Stadium", 
            "Peters Parking Deck",
            "North Avenue Dining",
            "North Avenue Apartments Lvl 1", "North Avenue Apartments Lvl 2", "North Avenue Apartments Lvl 3",
            "Bobby Dodd Stadium",
            "Tech Tower"];
//their prices
buildingPrice = [fitten1Price, fitten2Price, willagePrice, stamps1Price, stamps2Price, ic1Price, ic2Price, ic3Price, exhHallPrice,
                sCenter1Price, sCenter2Price, cocPrice, klausPrice, rChandlerStadPrice, petersPrice, nAveDiningPrice, nAve1Price, nAve2Price,
                nAve3Price, bDoddStadPrice, techTowerPrice];

buildingUpgrades = [0.5, 0.5, 1, 1.5, 1.5, 1.75, 1.75, 2, 2, 2.5, 2.5, 3, 3, 3, 3, 4, 4.25, 4.25, 4.5, 5, 10];

startMap = "All Maps/map 1.png";
fitten1Map = "All Maps/map 2.png";
fitten2Map = "All Maps/map 2.png";
willageMap = "All Maps/map 3.png";
stamps1Map = "All Maps/map 4.png";
stamps2Map = "All Maps/map 4.png";
ic1Map = "All Maps/map 5.png";
ic2Map = "All Maps/map 5.png";
ic3Map = "All Maps/map 5.png";
exHallMap = "All Maps/map 6.png";
sCenter1Map = "All Maps/map 7.png";
sCenter2Map = "All Maps/map 7.png";
cocMap = "All Maps/map 8.png"; //something wrong??
klausMap = "All Maps/map 9.png";
rChandlerStadMap = "All Maps/map 10.png";
petersMap = "All Maps/map 11.png";
nAveDiningMap = "All Maps/map 12.png";
nAve1Map = "All Maps/map 13.png";
nAve2Map = "All Maps/map 13.png";
nAve3Map = "All Maps/map 13.png";
bDoddStadMap = "All Maps/map 14.png";
techTowerMap = "All Maps/map 16.png";

maps = [fitten1Map, fitten2Map, willageMap, stamps1Map, stamps2Map, ic1Map, ic2Map, ic3Map, exHallMap, 
    sCenter1Map, sCenter2Map, cocMap, klausMap, rChandlerStadMap, petersMap, nAveDiningMap, nAve1Map, nAve2Map, nAve3Map, 
    bDoddStadMap, techTowerMap];


function save() {
    console.log("Saving...");
    localStorage.setItem("storyPts", storyPts);
    localStorage.setItem("tScale", tScale);
    localStorage.setItem("tPts", tPts);
    localStorage.setItem("ptsProgress", ptsProgress);
    localStorage.setItem("idlePts", idlePts);
    localStorage.setItem("buildingCount", buildingCount);

    for (i = 0; i < upgradePrice; i++) {
        localStorage.setItem("upgrades[" + i + "]", upgrades[i]);
        localStorage.setItem("upgradePrice[" + i + "]", upgradePrice[i]);
    }

    for (k = 0; k < buildings.length; k++) {
        localStorage.setItem("buildings[" + k + "]", buildings[k]);
        localStorage.setItem("buildingPrice[" + k + "]", buildingPrice[k]);
        localStorage.setItem("buildingUpgrades[" + k + "]", buildingUpgrades[k]);
    }
    console.log("Saved!");
}
setInterval(save(), 50);

function load() { //still problems with loading
    //one: tScale doesn't save
    //alerts go back to fitten hall lvl 1
    //^^ problem with buildingCount?
    storyPts = parseInt(localStorage.getItem("storyPts"));
    console.log("tScale: ", localStorage.getItem("tScale"));
    tScale = parseInt(localStorage.getItem("tScale"));
    console.log("Loaded tScale", tScale);
    tPts = parseInt(localStorage.getItem("tPts"));
    ptsProgress = parseInt(localStorage.getItem("ptsProgress"));
    idlePts = parseInt(localStorage.getItem("idlePts"));
    buildingCount = parseInt(localStorage.getItem("buildingCount"));

    for (i = 0; i < upgradePrice; i++) {
        upgrades[i] = localStorage.getItem("upgrades[" + i + "]");
        upgradePrice[i] = parseInt(localStorage.getItem("upgradePrice[" + i + "]"));
    }

    for (k = 0; k < buildings.length; k++) {
        buildings[k] = localStorage.getItem("buildings[" + k + "]");
        buildingPrice[k] = parseInt(localStorage.getItem("buildingPrice[" + k + "]"));
        buildingUpgrades[k] = parseFloat(localStorage.getItem("buildingUpgrades[" + k + "]"));
    }
}

function clicked() {
    storyPts += tScale; 
    tPts += tScale;
    document.getElementById("score").innerHTML = "T Points: " + tPts;
}

function storyTracker() {
    if (storyPts >= ptsProgress) {
        //update story
        //use a .txt file and just get the next line??
        //alert(readStory(lineNo));
        lineNo++;
        storyPts -= ptsProgress;
        ptsProgress *= 2;
    }
}
setInterval(storyTracker, 1000);

// function readStory(lineNo) {
//     storyLine = readFileSync("story.txt", 'utf-8');
//     storyLines = storyLine.split(/\r?\n/);

//     return storyLines[lineNo];

//     //alert(storyLines[lineNo]);
// }

function idleTimer() {
    tPts += idlePts;
    document.getElementById("score").innerHTML = "T Points: " + tPts;
}
setInterval(idleTimer, 1000);

function unlockBuilding() {
    if (buildingCount != buildings.length) {
        if (tPts >= buildingPrice[buildingCount]) {
            tPts -= buildingPrice[buildingCount];
            alert("You've just stolen " + buildings[buildingCount] + "!");
            idlePts += buildingUpgrades[buildingCount];
            if (story[buildingCount] != "") {
                alert(story[buildingCount]);
            }
            if (buildings[buildingCount] == "Tech Tower") {
                alert("You've won!!");
                //call function for last storyline
            }
            changeMap(buildingCount);
            
            buildingCount++;
            //document.getElementById("buildingType").innerHTML = "Unlock Building: " + buildings[buildingCount];
            document.getElementById("score").innerHTML = "T Points: " + tPts;
            document.getElementById("pointsNeeded").innerHTML = "Unlock " + buildings[buildingCount] +"! (" + buildingPrice[buildingCount] +")";

            
        }
    }
}

function changeMap(bCount) {
    console.log("Changing map...");
    console.log(bCount);
    console.log(maps[bCount]);
    //document.body.style.backgroundImage = maps[bCount];
    document.getElementById("map").src = maps[bCount];
    //document.style.backgroundRepeat = "no-repeat";
    //document.backgroundSize = "cover";
    console.log("Map changed!!");
}

function buyUpgrade(upgrade) {
    for (i = 0; i < upgrades.length; i++) {
        console.log("upgrades[i]: " + upgrades[i]);
        if (upgrades[i] == upgrade) {
            ind = i;
            break;
        }
    }

    if (tPts >= upgradePrice[ind]) {
        tPts -= upgradePrice[ind];
        document.getElementById("score").innerHTML = "T Points: " + tPts;

        console.log("upgrade bought");

        if (upgrade == "x2") {
            console.log("Points scaled");
            upgradePrice[ind] *= 4;
            document.getElementById("x2").innerHTML = "X2 MULTIPLIER (" + upgradePrice[ind] + ")";
            tScale *= 2;
        } else if (upgrade == "Wallpaper") {
            console.log("Changing wallpaper...")
            document.body.style.backgroundImage="url(assets/wallpaper0.png)";
            console.log("Wallpaper changed");
        } else if (upgrade == "friends") {
            idlePts *= 2;
            upgradePrice[ind] *= 4;
            console.log("Friends are bringing you more T points!");
            document.getElementById("friends").innerHTML = "MORE FRIENDS (" + upgradePrice[ind] + ")";
        }
    }
}

const story = [
    "", //"Fitten Hall Lvl 1"
    "Successful mission at Fi--en Hall! Now off to West Village!",
    "Way to go! Time to head up the hill to Stamps Health Services where 2 T's are waiting!",
    "", // Stamps Health Services Lvl 1
    "Score! Moving over to the Instructional Center (so many T's!)",
    "", // Instructional Center Lvl 1
    "", // Instructional Center Lvl 2
    "Incredible work at the Ins-ruc-ional Cen-er! Now across the way to the Exhibition Hall!",
    "Perfection. And on to the Student Center (maybe there's time to grab some food before tackling all those T's...)",
    "", // Student Center Lvl 1
    "Scrumptious! Time for the best building on campus, the College of Computing!",
    "Nice work! Next stop... Klaus!!", // Klaus
    "Wonderful as always! Let's go check out the Russ Chandler Stadium (maybe everyone will be distracted with baseball...)",
    "Easy peasy! Why not stop by Peters Parking Deck on the way.",
    "Fantastic! Let's take a quick break at North Avenue Dining (there might more of interest to us than just food there...)",
    "Yay! While we're in the area might as well hang out in the North Avenue Apartments, just to visit some friends, no other reason...",
    "", // North Avenue Apartments Lvl 1
    "", // North Avenue Apartments Lvl 2
    "Excellent work! Ooh let's see what's going on in Bobby Dodd Stadium, I'm sure Buzz would love to hear about our adventures.",
    "You've made it to the biggest challenge yet: stealing the T from Tech Tower. Good luck!",
    "Congratula-ions!!! You've gone where even George P. Burdell failed. You migh- no- be able to gradua-e wi-h a Georgia -ech degree now bu- you will always be an honorary T-Clicker."
]