let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

let sEtat = "intro";
//////// img

let oArrierePlan = new Image();
oArrierePlan.src = "assets/img/fonds/italie.png";

let oSable = new Image();
oSable.src = "assets/img/element_fond_animé/sable.PNG";

let oEau = new Image();
oEau.src = "assets/img/element_fond_animé/eau.PNG";

let oHerbe = new Image();
oHerbe.src = "assets/img/element_fond_animé/herbe.PNG";

let oPlumeriag = new Image();

let oPlumeriap = new Image();

let oPlumeria = new Image();
oPlumeria.src = "assets/img/element_fond_animé/plumeria.PNG";

let oHibiscus = new Image();
oHibiscus.src = "assets/img/element_fond_animé/hibiscus.PNG";

let oHibiscusg = new Image();

let oHibiscusp = new Image();

let oClown = new Image();

let oPoisson = new Image();

let oMeduse = new Image();

let nPosX = 0;
let nPosX2 = 0;
let nPosX3 = 0;
let nVitesse = 0.5;


let oStart = { x: nLargeurCanvas / 2 - 100, y: 650, largeur: 200, hauteur: 50, texte: "Jouer!", teinte: 0 };
///Pour les fleurs 
////img
let aAnimaux = [
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", Indice1: "" },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Béluga", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },
  { x: undefined, y: undefined, hauteur: 80, largeur: 55, nom: "Lynx", estVisible: false, description: "Lorem Ipsum", },

]

function initialiser() {
  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", clicCanvas);
}

function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);

  if (sEtat == "intro") {

    dessinerIntro();
  } else if (sEtat == "commandes") {

  } else if (sEtat == "selection") {

  } else if (sEtat == "jeu") {

  } else if (sEtat = "fin") {
  }
}

 function clicCanvas(evenement){
 let positionCurseurX = evenement.offsetX;
 let positionCurseurY = evenement.offsetY;

  if (sEtat == "intro" && detecterClicObjet(positionCurseurX, positionCurseurY, oStart) == true) {
        sEtat = "commandes";
    }
 }

function dessinerIntro() {
  paraElements();

}// Texte
function paraElements() {

  oPlumeriag.src = "assets/img/element_fond_animé/plumeriag.png";
  oPlumeriap.src = "assets/img/element_fond_animé/plumeriap.png";
  oHibiscusg.src = "assets/img/element_fond_animé/hibiscusg.PNG";
  oHibiscusp.src = "assets/img/element_fond_animé/hibiscusp.png";
  oClown.src = "assets/img/element_fond_animé/clown.PNG";
  oPoisson.src = "assets/img/element_fond_animé/poisson.PNG";
  oMeduse.src = "assets/img/element_fond_animé/meduse.PNG";


  oContexte.drawImage(oArrierePlan, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oSable, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oEau, 0, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.drawImage(oMeduse, nPosX - 500, 700);
  oContexte.drawImage(oHerbe,0, 0, nLargeurCanvas, nHauteurCanvas)
  nPosX += nVitesse;
  nPosX2 += nVitesse + 0.3;
  nPosX3 += nVitesse + 0.6;
  if (nPosX > nLargeurCanvas + 100) {
    nPosX = -200;
  }
  oContexte.drawImage(oPoisson, nPosX3 - 400, 300);
  oContexte.drawImage(oClown, nPosX2, 300);

  oContexte.drawImage(oHibiscusg, -0.1,720)
  oContexte.drawImage(oPlumeriag, 1, 800);
  oContexte.drawImage(oPlumeriap, 100, 800);

oContexte.drawImage(oHibiscusg, 1300,700)
  oContexte.drawImage(oPlumeriag, 1300, 740);
  oContexte.drawImage(oPlumeriap, 1400, 800);
  oContexte.fillStyle = "#082f5cff";
  oContexte.font = "140px Plante";
  oContexte.textAlign = "center";
  oContexte.fillText("Les", nLargeurCanvas / 2, 350); // Instructions

  oContexte.fillStyle = "#082f5cff";
  oContexte.font = "140px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Zanimaux", nLargeurCanvas / 2, 500); // 

  oContexte.fillStyle = "#082f5cff";
  oContexte.font = "60px Plante";
  oContexte.textAlign = "center";
  oContexte.fillText("de la faune!", nLargeurCanvas / 2, 600);
  
    oContexte.fillStyle = `#082f5cff`;
    oContexte.fillRect(oStart.x, oStart.y, oStart.largeur, oStart.hauteur);
   oContexte.fillStyle = "#fff";
    oContexte.font = "bold 24px Arial";
    oContexte.textAlign = "center";
    oContexte.fillText(oStart.texte, oStart.x + oStart.largeur / 2, oStart.y + oStart.hauteur / 2 + 8);


  oContexte.drawImage(oMeduse, nPosX - nLargeurCanvas, 700);
  
  oContexte.drawImage(oPoisson, nPosX3 - nLargeurCanvas, 300);
  oContexte.drawImage(oClown, nPosX2 - nLargeurCanvas,  300);
  

}

 function detecterClicObjet(positionCurseurX, positionCurseurY, objet) {
    if (positionCurseurX >= objet.x && positionCurseurX <= objet.x + objet.largeur && positionCurseurY >= objet.y && positionCurseurY <= objet.y + objet.hauteur) {
        return true;
    }
    return false;
}
window.addEventListener("load", initialiser);
