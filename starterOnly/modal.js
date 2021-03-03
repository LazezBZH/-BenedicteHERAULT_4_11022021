function editNav() {
  var x = document.getElementById("my-topnav"); //changement de myTopnav (id html) en my-topnav pour avoir un même style de notation des id
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".form-data"); //changement de tous les formData (classe html) en form-data pour avoir un même style de notation des classes

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  console.log("salut");
  modalbg.style.display = "block";
}

//consigne 1 fermer le formulaire au clic sur X (inverse de la fonction déjà créée pour l'ouverture)

const fermetureClicX = document.getElementsByClassName("close");

function FermerFormulaire() {
  modalbg.style.display = "none"; //enlève formulaire
}

fermetureClicX[0].addEventListener("click", FermerFormulaire); //élément ciblé=premier élément de class close, action au clic
