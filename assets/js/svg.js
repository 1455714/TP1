
var formes = document.querySelectorAll("path");
var longueurs = new Array();
var extras = [500,900,1300]

for(var i=0;i<formes.length;i++){
    console.log(formes.length);
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
var classes = document.getElementsByClassName("parallax");
classes[0].addEventListener("scroll", maTrace);
for(var i=0;i<classes.length;i++){

}
	
    
//document.addEventListener("click", maTrace);

function maTrace() {
    console.log("trace");
    for(var i=0;i<formes.length;i++){
        https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
    var fractionDuScroll = (classes[0].scrollTop) / (classes[0].scrollHeight);

          var trace = longueurs[i] * fractionDuScroll;

          // tracé selon la fraction de «scroll»
            formes[i].style.strokeDashoffset = longueurs[i] - trace*3 +extras[i]-(classes[0].scrollTop/100) ;
        
        if(formes[i].style.strokeDashoffset<0){
        formes[i].style.strokeDashoffset=0;
        }
          

    }
}