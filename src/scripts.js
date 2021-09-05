function fileLoaded(e) {
    jsonConfig = JSON.parse(e.target.result);
    alert(jsonConfig);
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

function addCardsToHtml(number) {

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
    
    for (let i = 0; i < number; i++) {

        myDiv = document.createElement("div");
        myDiv.setAttribute("class", "memory-card");
        myDiv.addEventListener('click', flipCard);

        myImg = document.createElement("img");
        myImg.setAttribute("class", "front-face");
        myImg.setAttribute("src", "images/front-face.jpeg");
        myImg.setAttribute("alt", "React");

        myDiv.appendChild(myImg);

        mySection.appendChild(myDiv);
    }

}