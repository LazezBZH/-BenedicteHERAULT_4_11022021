function editNav() {
  var x = document.getElementById("my-topnav"); //changement de myTopnav (id html) en my-topnav pour avoir un même style de notation des id
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground"); //Maj à modalBg
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".form-data"); //changement de tous les formData (classe html) en form-data pour avoir un même style de notation des classes
const successBtn = document.getElementById("success-btn");
const validation = document.getElementById("btn-envoi");
const confirmation = document.getElementById("message-confirmation");
const fermetureClicX = document.getElementsByClassName("close");

// VARIABLES FORMULAIRE
let prenom = document.getElementById("first");
let nom = document.getElementById("last");
let mail = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let ville = document.getElementsByName("location");
let conditions = document.getElementById("checkbox1");
//VARIABLES MESSAGES ERREUR
let erreurPrenom = document.getElementById("erreur-prenom");
let erreurNom = document.getElementById("erreur-nom");
let erreurMail = document.getElementById("erreur-mail");
let erreurBirthdate = document.getElementById("erreur-birthdate");
let erreurQuantity = document.getElementById("erreur-quantity");
let erreurVille = document.getElementById("erreur-ville");
let erreurConditions = document.getElementById("erreur-conditions");

// REGEX
let mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regular expression mail source https://www.w3resource.com/

//EVENTS
fermetureClicX[0].addEventListener("click", fermerFormulaire); //élément ciblé=premier élément de close, action au clic

successBtn.addEventListener("click", fermerMessageValidation); //fermer message de validation

prenom.addEventListener("keyup", validerPrenom);
validation.addEventListener("click", validerPrenom);

nom.addEventListener("keyup", validerNom);
validation.addEventListener("click", validerNom);

mail.addEventListener("keyup", validerMail);
validation.addEventListener("click", validerMail);

validation.addEventListener("click", validerBirthdate);

validation.addEventListener("click", validerQuantity);

validation.addEventListener("click", validerVille);

validation.addEventListener("click", validerConditions);

validation.addEventListener("click", validerFormulaire);

// OUVERTURE ET FERMETURES fonctions

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  console.log("salut");
  modalBg.style.display = "block";
}

function fermerFormulaire() {
  modalBg.style.display = "none"; //enlève formulaire, consigne 1 fermer le formulaire au clic sur X (inverse de la fonction déjà créée pour l'ouverture)
}

function fermerMessageValidation() {
  modalBg.style.display = "none";
} //ferme message success

//VALIDATION DES ENTRÉES fonctions

//validation du prénom
function validerPrenom(e) {
  if (prenom.validity.valueMissing) {
    e.preventDefault();
    erreurPrenom.textContent =
      "* Le prénom doit comporter au minimum 2 caractères.";
    erreurPrenom.style.color = "red";
    erreurPrenom.style.fontSize = ".85rem";
    prenom.style.border = " 0.8px solid red";
    return false;
  } else if (prenom.value.length < 2) {
    e.preventDefault();
    erreurPrenom.textContent =
      "* Le prénom doit comporter au minimum 2 caractères.";
    erreurPrenom.style.color = "red";
    erreurPrenom.style.fontSize = ".85rem";
    prenom.style.border = " 0.8px solid red";
    return false;
  } else {
    erreurPrenom.textContent = " ";
    prenom.style.border = " 0.8px solid white";
    return true;
  }
}

//validation du nom
function validerNom(e) {
  if (nom.validity.valueMissing) {
    e.preventDefault();
    erreurNom.textContent = "* Le nom doit comporter au minimum 2 caractères.";
    erreurNom.style.color = "red";
    erreurNom.style.fontSize = ".85rem";
    nom.style.border = " 0.8px solid red";
    return false;
  } else if (nom.value.length < 2) {
    e.preventDefault();
    erreurNom.textContent = "* Le nom doit comporter au minimum 2 caractères.";
    erreurNom.style.color = "red";
    erreurNom.style.fontSize = ".85rem";
    nom.style.border = " 0.8px solid red";
    return false;
  } else {
    erreurNom.textContent = " ";
    nom.style.border = " 0.8px solid white";
    return true;
  }
}

//validation du mail
function validerMail(e) {
  if (mail.validity.valueMissing) {
    e.preventDefault();
    erreurMail.textContent = "* Veuillez renseigner votre adresse mail.";
    erreurMail.style.color = "red";
    erreurMail.style.fontSize = ".85rem";
    mail.style.border = " 0.8px solid red";
    return false;
  } else if (!mail.value.match(mailRegex)) {
    e.preventDefault();
    erreurMail.textContent =
      "* Le format de votre adresse mail ne semble pas valide.";
    erreurMail.style.color = "red";
    erreurMail.style.fontSize = ".85rem";
    mail.style.border = " 0.8px solid red";
    return false;
  } else {
    erreurMail.textContent = " ";
    mail.style.border = " 0.8px solid white";
    return true;
  }
}

//validation du birthdate
function validerBirthdate(e) {
  if (birthdate.validity.valueMissing) {
    e.preventDefault();
    erreurBirthdate.textContent =
      "* Merci de nous donner la date de votre arrivée sur Terre.";
    erreurBirthdate.style.color = "red";
    erreurBirthdate.style.fontSize = ".85rem";
    birthdate.style.border = " 0.8px solid red";
    return false;
  } else {
    erreurBirthdate.textContent = " ";
    birthdate.style.border = " 0.8px solid white";
    return true;
  }
}

//validation du nombre de tournois
function validerQuantity(e) {
  if (quantity.validity.valueMissing) {
    e.preventDefault();
    erreurQuantity.textContent = "* Merci d'indiquer une valeur entre 0 et 99.";
    erreurQuantity.style.color = "red";
    erreurQuantity.style.fontSize = ".85rem";
    quantity.style.border = " 0.8px solid red";
    return false;
  } else {
    erreurQuantity.textContent = " ";
    quantity.style.border = " 0.8px solid white";
    return true;
  }
}

//validation choix de ville d'inscription
function validerVille() {
  for (i = 0; i < ville.length; i++) {
    if (ville[i].checked) {
      erreurVille.textContent = " ";
      return true; // un bouton radio est sélectionné
    }
  }
  // aucun bouton radio n'est sélectionné
  erreurVille.textContent = "* Dans quelle ville souhaitez-vous vous inscrire?";
  erreurVille.style.color = "red";
  erreurVille.style.fontSize = ".85rem";
  return false;
}

//validation CGV
function validerConditions(e) {
  if (conditions.checked) {
    erreurConditions.textContent = " ";
    quantity.style.border = " 0.8px solid white";
    return true;
  } else {
    e.preventDefault();
    erreurConditions.textContent =
      "* Vous devez lire et accepter les conditions d'utilisation.";
    erreurConditions.style.color = "red";
    erreurConditions.style.fontSize = ".85rem";
    conditions.style.border = " 0.8px solid red";
    return false;
  }
}

//CONFIRMATION
//vérifications
function validerFormulaire(e) {
  e.preventDefault();

  let prenomValide = validerPrenom();
  let nomValide = validerNom();
  let mailValide = validerMail();
  let birthdateValide = validerBirthdate();
  let quantityValide = validerQuantity();
  let villeValide = validerVille();
  let conditionsValide = validerConditions();

  let formulaireValide =
    prenomValide &&
    nomValide &&
    mailValide &&
    birthdateValide &&
    quantityValide &&
    villeValide &&
    conditionsValide;

  if (formulaireValide) {
    afficherConfirmation();
  }
}
//affichage message de confirmation
function afficherConfirmation() {
  form.style.display = "none";

  confirmation.style.display = "block";
}
