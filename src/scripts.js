function load() {
    addCardsToHtml(10)
    
}

function addCardsToHtml(number) {

    myBase = Math.sqrt(number);
    mySimpleBase = Math.floor(myBase);
    myWidth = mySimpleBase * 216;
    if (myBase = mySimpleBase) {
        myHeight = mySimpleBase * 214;
    } else {
        myHeight = (mySimpleBase + 1) * 214;
    }
    mySection = document.getElementById("memory-game");
    mySection.style.width = myWidth.toString() + 'px';
    mySection.style.height = myHeight.toString() + 'px';
    
    for (let i = 0; i < number; i++) {

        myDiv = document.createElement("div");
        myDiv.setAttribute("class", "memory-card");

        myImg = document.createElement("img");
        myImg.setAttribute("class", "front-face");
        myImg.setAttribute("src", "images/front-face.jpeg");
        myImg.setAttribute("alt", "React");

        myDiv.appendChild(myImg);

        mySection.appendChild(myDiv);
    }

}