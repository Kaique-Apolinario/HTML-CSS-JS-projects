var aespa = document.querySelector(".AE")

aespa.addEventListener("mousemove", changeAE)
aespa.addEventListener("mouseout", outAE)

function changeAE() {
    document.getElementById("AE").textContent = "ӕspa";
}

function outAE() {
    document.getElementById("AE").textContent = "AESPA";

}


var hamburguer = document.querySelector(".hamburguer")
var background = document.createElement("div")
var sideNav = document.querySelector(".sideNav")
hamburguer.addEventListener("click", showHam)
background.addEventListener("click", hideHam)

function showHam() {
    document.getElementById('sideNav').style.visibility = 'visible';
    background.style.cssText = "width: 100vw ; height: 100vh ; background-color: rgba(0, 0, 0, 0.5); position: absolute; top: 0; right: 0;"
    document.querySelector("body").appendChild(background)
}

function hideHam() {
    document.getElementById('sideNav').style.visibility = 'hidden';
    background.style.display = "none"
}