window.onload = function () {
  horlogeLive();
};
//lancer la fonction affichage heure toutes les 1000ms, soit toute les secondes
setInterval(horlogeLive, 1000);
function horlogeLive() {
  var time = new Date();
  //récuperer les heures :
  var h = time.getHours();
  //récuperer les minutes :
  var m = time.getMinutes();
  //récuperer les secondes :
  var s = time.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("h").innerHTML = h;
  document.getElementById("m").innerHTML = m;
  document.getElementById("s").innerHTML = s;
  var ampm = h < 12 ? "AM" : "PM";
  document.getElementById("ampm").innerHTML = ampm;
}

// fonction pour afficher la date du jour à l'instant T
var date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let dateFr = date.toLocaleDateString("fr", options);
document.getElementById("date").innerHTML = dateFr;
console.log(date.toLocaleDateString("fr", options));
