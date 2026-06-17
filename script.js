function connexion(){

let email=document.getElementById("email").value;
let mdp=document.getElementById("mdp").value;

if(email==="directeur@ndm.fr" && mdp==="1234"){

document.getElementById("login").style.display="none";
document.getElementById("menu").style.display="block";

document.getElementById("bonjour").innerText="Bienvenue Directeur";

}else{

alert("Identifiants incorrects");

}

}

function ouvrir(page){

document.getElementById("menu").style.display="none";

document.querySelectorAll(".page").forEach(p=>p.style.display="none");

document.getElementById(page).style.display="block";

}

function retour(){

document.querySelectorAll(".page").forEach(p=>p.style.display="none");

document.getElementById("menu").style.display="block";

}
