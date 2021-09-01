function load() {
    addCardsToHtml(9)
    
}

function addCardsToHtml(number) {
    mySection = document.getElementById("memory-game");
    
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