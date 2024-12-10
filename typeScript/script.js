var ecran = document.querySelector('.ecran');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == '÷') {
            btntext = '/';
        }
        if (btntext == '×') {
            btntext = '*';
        }
        if (btntext == 'n!') {
            btntext = 'Cos()';
        }
        if (btntext == '×') {
            btntext = '*';
        }

        ecran.value += btntext;
    });
}

function egale() {
    ecran.value = eval(ecran.value);
}

function clear() {
    ecran.value = ecran.value.substr(0, ecran.value.length - 1);
}

function Cosinus() {
    if (ecran.value == 30) {
        ecran.value = Math.sqrt(3) / 2;
    }
    else if (ecran.value == 180) {
        ecran.value = -1;
    }
    else if (ecran.value == 60) {
        ecran.value = 0.5;
    }
    else if (ecran.value == 45) {
        ecran.value = Math.sqrt(2) / 2;
    }
    else if (ecran.value == 90) {
        ecran.value = 0;
    }
    else {
        ecran.value = Math.cos((ecran.value * Math.PI) / 180);
    }
}

function Sinus() {
    if (ecran.value == 30) {
        ecran.value = 0.5;
    }
    else if (ecran.value == 180) {
        ecran.value = 0;
    }
    else if (ecran.value == 60) {
        ecran.value = Math.sqrt(3) / 2;
    }
    else if (ecran.value == 45) {
        ecran.value = Math.sqrt(2) / 2;
    }
    else {
        ecran.value = Math.sin((ecran.value * Math.PI) / 180);
    }
}

function Tangente() {
    if (ecran.value == 30) {
        ecran.value = Math.sqrt(3) / 3;
    }
    else if (ecran.value == 180) {
        ecran.value = 0;
    }
    else if (ecran.value == 60) {
        ecran.value = Math.sqrt(3);
    }
    else if (ecran.value == 45) {
        ecran.value = 1;
    }
    else if (ecran.value == 90) {
        ecran.value = "Complex Infinity";
    }
    else {
        ecran.value = Math.tan((ecran.value * Math.PI) / 180);
    }
}

function Squart() {
    ecran.value = Math.sqrt(ecran.value);
}

function logarithme() {
    // ecran.value = "Ln(";
    ecran.value = Math.pow(ecran.value, 2);
}

function puissance() {
    ecran.value = Math.value(ecran.value, 2);
}

function factorielle() {

    var nombre, i, resultat;
    resultat = 1;
    nombre = ecran.value;
    for (i = 1; i <= nombre; i++) {
        resultat *= i;
    }
    i -= 1;
    ecran.value = nombre + "!" + "=" + " " + resultat;

}

function Exponentielle() {
    ecran.value = Math.exp(ecran.value);
}

function time() {
    var dateGlobale = new Date();
    var heure = dateGlobale.getHours();
    var minute = dateGlobale.getMinutes();
    var seconde = dateGlobale.getSeconds();
    heure = heure < 10 ? "0" + heure : heure;
    minute = minute < 10 ? "0" + minute : minute;
    seconde = seconde < 10 ? "0" + seconde : seconde;
    total = heure + ":" + minute + ":" + seconde;
    document.getElementById('heure').textContent = total;
    setTimeout(time, 1000);
}
time();

function backspace() {
    ecran.value = ecran.value.substr(0, ecran.value.length - 1);
}

function binaire() {
    n = ecran.value;
    if (!typeof n !== "number" || isNaN(n)) {
        throw new Error("veuillez fournir une valeur valide!")
    }
    ecran.value = n.toString(2);
}
function pi() {
    ecran.value = 3.14159265359;
}

function normal() {
    const mod = document.getElementsByClassName("mod");
    var mode = document.getElementsByClassName("touche").style.display = "block";

}




var btn = document.getElementById("mode");
var affichable = document.getElementsByClassName("simple");
var afficher = false;
btn.addEventListener('click', function () {
    if (!afficher) {
        affichable.style.display = 'block';
        btn.innerHTML = 'NORMAL';
        afficher = true;
    }
    else {
        affichable.style.display = 'none';
        btn.innerHTML = 'SCIENTIFIQUE';
        afficher = false;
    }
});