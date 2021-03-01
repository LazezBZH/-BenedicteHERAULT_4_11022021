//VALIDATION DU FORMULAIRE
// variables
let validation = document.getElementById("btn-envoi");
let prenom = document.getElementById("first");
let erreurPrenom = document.getElementById("erreur-prenom");
let nom = document.getElementById("last");
let erreurNom = document.getElementById("erreur-nom");
let mail = document.getElementById("email");
let erreurMail = document.getElementById("erreur-mail");
let birthdate = document.getElementById("birthdate");
let erreurBirthdate = document.getElementById("erreur-birthdate");
let quantity = document.getElementById("quantity");
let erreurQuantity = document.getElementById("erreur-quantity");

//validation du prénom
validation.addEventListener("click", validerPrenom);

function validerPrenom(e) {
  if (prenom.validity.valueMissing) {
    e.preventDefault();
    erreurPrenom.textContent =
      "* Le prénom doit comporter au minimum 2 caractères.";
    erreurPrenom.style.color = "red";
    erreurPrenom.style.fontSize = ".85rem";
    prenom.style.border = " 0.8px solid red";
  } else if (prenom.value.length < 2) {
    e.preventDefault();
    erreurPrenom.textContent =
      "* Le prénom doit comporter au minimum 2 caractères.";
    erreurPrenom.style.color = "red";
    erreurPrenom.style.fontSize = ".85rem";
    prenom.style.border = " 0.8px solid red";
  } else {
    erreurPrenom.textContent = " ";
    prenom.style.border = " 0.8px solid white";
  }
}

//validation du nom
validation.addEventListener("click", validerNom);

function validerNom(e) {
  if (nom.validity.valueMissing) {
    e.preventDefault();
    erreurNom.textContent = "* Le nom doit comporter au minimum 2 caractères.";
    erreurNom.style.color = "red";
    erreurNom.style.fontSize = ".85rem";
    nom.style.border = " 0.8px solid red";
  } else if (nom.value.length < 2) {
    e.preventDefault();
    erreurNom.textContent = "* Le nom doit comporter au minimum 2 caractères.";
    erreurNom.style.color = "red";
    erreurNom.style.fontSize = ".85rem";
    nom.style.border = " 0.8px solid red";
  } else {
    erreurNom.textContent = " ";
    nom.style.border = " 0.8px solid white";
  }
}

//validation du mail
validation.addEventListener("click", validerMail);

function validerMail(e) {
  if (mail.validity.valueMissing) {
    e.preventDefault();
    erreurMail.textContent = "* Une adresse mail valide est requise.";
    erreurMail.style.color = "red";
    erreurMail.style.fontSize = ".85rem";
    mail.style.border = " 0.8px solid red";
  } else {
    erreurMail.textContent = " ";
    mail.style.border = " 0.8px solid white";
  }
}

//validation du birthdate
validation.addEventListener("click", validerBirthdate);

function validerBirthdate(e) {
  if (birthdate.validity.valueMissing) {
    e.preventDefault();
    erreurBirthdate.textContent =
      "* Merci de nous donner la date de votre arrivée sur Terre.";
    erreurBirthdate.style.color = "red";
    erreurBirthdate.style.fontSize = ".85rem";
    birthdate.style.border = " 0.8px solid red";
  } else {
    erreurBirthdate.textContent = " ";
    birthdate.style.border = " 0.8px solid white";
  }
}

//validation du nombre de tournois
validation.addEventListener("click", validerQuantity);

function validerQuantity(e) {
  if (quantity.validity.valueMissing) {
    e.preventDefault();
    erreurQuantity.textContent = "* Merci d'indiquer une valeur entre 0 et 99.";
    erreurQuantity.style.color = "red";
    erreurQuantity.style.fontSize = ".85rem";
    quantity.style.border = " 0.8px solid red";
  } else {
    erreurQuantity.textContent = " ";
    quantity.style.border = " 0.8px solid white";
  }
}