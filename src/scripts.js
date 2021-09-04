function load() {
    addCardsToHtml(9)
    
}

function addCardsToHtml(number) {
    mySection = document.getElementById("memory-game");
    
    for (let i = 0; i < number; i++) {

        mySection = document.getElementById("memory-game")
        mySection.style.width = '1000px'
        mySection.style.height = '100px'

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