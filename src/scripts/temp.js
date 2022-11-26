"use strict";


// Initialisation après chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
    var oJauges = document.querySelectorAll('.progress-circle');
    var i, nb = oJauges.length;
    for (i = 0; i < nb; i += 1) {
        initJauge(oJauges[i]);
    }
    updateJauge("hunter",30);
});

//add a new style 'foo'
var textToPierre = [
    "Zarin et Pierre, les pro du marketing",
    "Felix et Guillaume adorent les chats",
    "Pierrick la machine",
    "Guillaume qui boit 40 cafés par minute",
]

setTimeout(()=>{speechToPierre(textToPierre[Math.floor(Math.random() * textToPierre.length)])}, 5000);


function speechToPierre(Text){
    var msg = new SpeechSynthesisUtterance(Text);
    window.speechSynthesis.speak(msg);
    setTimeout(()=>{speechToPierre(textToPierre[Math.floor(Math.random() * textToPierre.length)])}, 10000);
}

function createJauge(elem) {
    if (elem) {
        // on commence par un clear
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
        // création des éléments
        var oMask  = document.createElement('DIV');
        var oBarre = document.createElement('DIV');
        var oSup50 = document.createElement('DIV');
        // affectation des classes
        oMask.className  = 'progress-masque';
        oBarre.className = 'progress-barre';
        oSup50.className = 'progress-sup50';
        // construction de l'arbre
        oMask.appendChild(oBarre);
        oMask.appendChild(oSup50);
        elem.appendChild(oMask);
    }
    return elem;
}

function initJauge(elem) {
    var oBarre;
    var angle;
    var valeur;
    //
    createJauge( elem);
    oBarre = elem.querySelector('.progress-barre');
    valeur = elem.getAttribute('data-value');
    valeur = valeur ? valeur * 1 : 0;
    elem.setAttribute('data-value', valeur.toFixed(1));
    angle = 360 * valeur / 100;
    if (oBarre) {
        oBarre.style.transform = 'rotate(' + angle + 'deg)';
    }
}

/*
    * Mise à jour de la jauge, appeler updateJauge
    * elem = l'élément de la jauge
    * valeur = la valeur à afficher
 */
function updateJauge(elem, valeur) {
    var oBarre;
    var angle;
    var h = document.getElementById(elem);
    //
    valeur = valeur ? valeur * 1 : 0;
    h.setAttribute('data-value', valeur.toFixed(1));
    angle = 360 * valeur / 100;
    oBarre = h.querySelector('.progress-barre');
    if (oBarre) {
        oBarre.style.transform = 'rotate(' + angle + 'deg)';
    }
}