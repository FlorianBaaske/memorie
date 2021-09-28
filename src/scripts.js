var myGame = new Object();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function fileLoaded(e) {
    jsonConfig = JSON.parse(e.target.result);
    myPairsMap = new Map();
    for (let i = 0; i < jsonConfig.pairs.length; i++) {
        myPairsMap.set(i, {'img_a': jsonConfig.pairs[i].img_a, 'img_b': jsonConfig.pairs[i].img_b});
    };
    myGame.pairs = myPairsMap;
    myGame.numberOfPairs = jsonConfig.pairs.length * 2;

    addCardsToHtml();
}

function readFile() {
    if (document.querySelector("#file-input").isDefaultNamespace.length == 0) {
        alert('Error : No file selected');
        return;
    }
    let file = document.querySelector("#file-input").files[0];
    let reader = new FileReader();

    reader.addEventListener('load', fileLoaded);
    reader.addEventListener('error', function(){
        alert('Error : Failed to read file');
    });
    reader.readAsText(file);
}

function load() {
    document.querySelector("#read-button").addEventListener('click', readFile);
}

function flipCard() {
    this.classList.toggle('flip');
}

function addCardsToHtml() {
    number = myGame.numberOfPairs;
    myBase = Math.sqrt(number);
    mySimpleBase = Math.floor(myBase);
    myWidth = mySimpleBase * 218;
    if (myBase == mySimpleBase) {
        myHeight = mySimpleBase * 222;
    } else {
        myHeight = (mySimpleBase + 1) * 222;
    }
    mySection = document.getElementById("memory-game");
    mySection.style.width = myWidth.toString() + 'px';
    mySection.style.height = myHeight.toString() + 'px';

    myPairs = myGame.pairs;

    var myImageArray = [];

    for (const [key, value] of myPairs) {
        myImageArray.push([key, value.img_a]);
        myImageArray.push([key, value.img_b]);
    }
    
    for (let i = 0; i < number; i++) {

        myDiv = document.createElement("div");
        myDiv.setAttribute("class", "memory-card flip");
        myDiv.addEventListener('click', flipCard);

        randomNumber = getRndInteger(0, myImageArray.length);

        imageId = myImageArray[randomNumber][0];
        imageUrl = myImageArray[randomNumber][1];

        myImageArray.splice(randomNumber,1);

        myImg = document.createElement("img");
        myImg.setAttribute("class", "back-face");
        myImg.setAttribute("src", imageUrl);
        myImg.setAttribute("id", imageId);
        myImg.setAttribute("alt", "Memory-Card");

        myDiv.appendChild(myImg);

        myImg = document.createElement("img");
        myImg.setAttribute("class", "front-face");
        myImg.setAttribute("src", "images/front-face.jpeg");
        myImg.setAttribute("alt", "React");

        myDiv.appendChild(myImg);

        mySection.appendChild(myDiv);
    }

}