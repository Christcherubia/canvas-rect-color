//******* */ CANVAS JS ************
// Création de la fonction "draw" qui affiche à son lancement après le chargement de la page les canvas
const draw = () => {
  // On récupère l'id canvas avec la méthode "getElementById"
  const canvasA = document.getElementById("canva1");
  const canvasB = document.getElementById("canva2");
  const canvasC = document.getElementById("canva3");
  const canvasD = document.getElementById("canva4");
  const canvasE = document.getElementById("canva5");

  const ctxA = canvasA.getContext("2d");
  ctxA.fillStyle = "rgb(200, 0, 0)";
  ctxA.fillRect(50, 50, 50, 150); // Premier Number = Position sur axe Y ; second = Position sur axe X ;
  // Troisième = largeur (guauche et droite) ; Quatrième = Hauteur.

  ctxA.fillStyle = "rgba(0, 100, 200, 0.50)";
  ctxA.fillRect(30, 30, 100, 50);

  const ctxB = canvasB.getContext("2d");
  ctxB.fillStyle = "rgb(200, 0, 0)";
  ctxB.fillRect(50, 50, 50, 150); // Premier Number = Position sur axe Y ; second = Position sur axe X ;
  // Troisième = largeur (guauche et droite) ; Quatrième = Hauteur.

  ctxB.fillStyle = "rgba(0, 100, 200, 0.50)";
  ctxB.fillRect(30, 30, 100, 50);

  const ctxC = canvasC.getContext("2d");
  ctxC.fillStyle = "rgb(200, 0, 0)";
  ctxC.fillRect(50, 50, 50, 150); // Premier Number = Position sur axe Y ; second = Position sur axe X ;
  // Troisième = largeur (guauche et droite) ; Quatrième = Hauteur.

  ctxC.fillStyle = "rgba(0, 100, 200, 0.50)";
  ctxC.fillRect(30, 30, 100, 50);

  const ctxD = canvasD.getContext("2d");
  ctxD.fillStyle = "rgb(200, 0, 0)";
  ctxD.fillRect(50, 50, 50, 150); // Premier Number = Position sur axe Y ; second = Position sur axe X ;
  // Troisième = largeur (guauche et droite) ; Quatrième = Hauteur.

  ctxD.fillStyle = "rgba(0, 100, 200, 0.50)";
  ctxD.fillRect(30, 30, 100, 50);

  const ctxE = canvasE.getContext("2d");
  ctxE.fillStyle = "rgb(200, 0, 0)";
  ctxE.fillRect(50, 50, 50, 150); // Premier Number = Position sur axe Y ; second = Position sur axe X ;
  // Troisième = largeur (guauche et droite) ; Quatrième = Hauteur.

  ctxE.fillStyle = "rgba(0, 100, 200, 0.50)";
  ctxE.fillRect(30, 30, 100, 50);
};
// Appel de la fonction "draw".
window.addEventListener("load", draw);
