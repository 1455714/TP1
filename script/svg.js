
var formes = document.querySelectorAll("#monSVG path");
var longueurs = new Array();

for(var i=0;i<formes.length;i++){
// on cible l'élément « path » que l'on veut animer 
	var forme = formes[i];
	// la longueur du chemin «path»
	longueurs[i] = forme.getTotalLength();


	// La longueur du tracé
	// https://developer.mozilla.org/en/docs/Web/SVG/Attribute/stroke-dasharray

	forme.style.strokeDasharray = longueurs[i];

	// On fait disparaître le tracé en appliquant la propriété css strokeDashoffset sur toute la longueur du chemin
	forme.style.strokeDashoffset = longueurs[i];

	// extraire la fraction du déplacement de la barre de défilement et  ajusté le tracé
	
}
	window.addEventListener("scroll", maTrace);


function maTrace() {
    
    for(var i=0;i<formes.length;i++){
        https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
    var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

          var trace = longueurs[i] * fractionDuScroll;

          // tracé selon la fraction de «scroll»
          formes[i].style.strokeDashoffset = longueurs[i] - trace ;

    }
}