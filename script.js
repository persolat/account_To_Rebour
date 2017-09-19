// Deux variables globales
var secondsRemaining;
var intervalHandle;

function resetPage() {
    document.getElementById("inputArea").style.display = "block";
}

function tick() {
    // Repérer le titre h1
    var timeDisplay = document.getElementById("time");
    
    // Transformer les secondes en minutes et secondes (mm:ss)
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    // Préfixer par un zéro (en tant que chaîne de caractères) si moins de 10 secondes
    if (sec < 10) {
        sec = "0" + sec;
    }
    // Concaténer avec ":"
    var message = min + ":" + sec;
    // et modifier l'affichage
    timeDisplay.innerHTML = message;
    
    // Arrêter le compte à rebours quand on atteint zéro
    if (secondsRemaining === 0) {
        alert("Fini !");
        clearInterval(intervalHandle);
        resetPage();
    }
    // Enlever une seconde
    secondsRemaining--;
}

function startCountdown() {
    // Obtenir le contenu du champ "minutes"
    var minutes = document.getElementById("minutes").value;
    // Vérifier si ce n'est pas un nombre
    if (isNaN(minutes)) {
        alert("SVP, entrez un nombre !");
        return;
    }
    // Combien de secondes ?
    secondsRemaining =  minutes * 60;
    // Appeler la fonction "tick" à chaque seconde
    intervalHandle = setInterval(tick, 1000);
    // Cacher le formulaire
    document.getElementById("inputArea").style.display = "none";
}

function stopSecond (){
    clearInterval(intervalHandle);
}

function restartTime (){
    intervalHandle = setInterval(tick, 1000);
}

// Dès que la page est chargée
window.onload =  function () {
    // Créer un champ input et lui donner l'id "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
    // Créer un bouton
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Démarrer le compte à rebours");
    startButton.onclick = function () {
        startCountdown();
    };
    // Ajouter les éléments créés au DOM comme enfants de "inputArea"
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
};