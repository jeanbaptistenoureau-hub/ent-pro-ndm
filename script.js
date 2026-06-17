function connexion(){

let ecole=document.getElementById("ecole").value;
let identifiant=document.getElementById("identifiant").value;
let mdp=document.getElementById("mdp").value;

if(
ecole==="NDM-DEMO" &&
identifiant==="directeur" &&
mdp==="directeur123"
){

document.getElementById("login").style.display="none";
document.getElementById("menu").style.display="block";

document.getElementById("bonjour").innerHTML=
"Bienvenue Directeur";

}else{

alert("Code école ou mot de passe incorrect");

}

}

function ouvrir(page){

document.getElementById("menu").style.display="none";

document.querySelectorAll(".page").forEach(
p=>p.style.display="none"
);

document.getElementById(page).style.display="block";

}

function retour(){

document.querySelectorAll(".page").forEach(
p=>p.style.display="none"
);

document.getElementById("menu").style.display="block";

}
