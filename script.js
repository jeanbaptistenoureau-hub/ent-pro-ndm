function connexion(){

let nom=document.getElementById("nom").value;
let role=document.getElementById("role").value;

document.getElementById("login").style.display="none";
document.getElementById("menu").style.display="block";

document.getElementById("bonjour").innerHTML=
"Bienvenue "+nom+" ("+role+")";

if(
role==="Élève" ||
role==="Parent"
){
document.getElementById("appelBtn").style.display="none";
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
