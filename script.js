function switchColor() {
    var body = document.body;                           //Changement de la couleur de fond et du texte
    body.classList.toggle("darkmodebg");
    body.classList.toggle("darkmodetext");

    var menu = document.querySelector("header");        //Changement de la couleur de fond du menu
    menu.classList.toggle("darkmodebgstatic");

    var piedDePage = document.querySelector("footer");  //Changement de la couleur de fond du pied de page
    piedDePage.classList.toggle("darkmodebgstatic");

    var liens = document.getElementsByTagName("a");     //Changement de la couleur des liens
    for(var i=0; i < liens.length; i++){
        liens[i].classList.toggle("darkmodeliens");
    }
}

//parallax

let titre1 = document.getElementsByClassName("title1");
let titre2 = document.getElementsByClassName("title2");

window.addEventListener('scroll',function(){

    var scrollPos = window.scrollY;

    if (typeof(titre2[0]) != "undefined") {
        titre2[0].style.top = (scrollPos/3-200) +'px';           //Animation de la position en fonction du scroll
        titre2[0].style.opacity = (scrollPos-200)*(1/8) +'%';    //(scrollPos-valeurDébut)*(1/((valeurFin-valeurDébut)/100))
    }

    if (typeof(titre1[0]) != "undefined") {
        titre1[0].style.top = (scrollPos/3)-600 +'px';
        titre1[0].style.opacity = (scrollPos-1300)*(1/6) +'%';
    }
    
    if (typeof(titre2[1]) != "undefined") {
        titre2[1].style.top = (scrollPos/2)-1200 +'px';
        titre2[1].style.opacity = (scrollPos-2080)*(1/7.2) +'%';
    }

});