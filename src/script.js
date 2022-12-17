const jsdom = require('jsdom');
const { Calculator } = require('./calculator');

document = new jsdom.JSDOM().window.document;
window = new jsdom.JSDOM().window;

const ecranElt = document.querySelector("#ecran");

let precedent = 0;
let affichage = "";
let operation = null;
let calculator = new Calculator();

window.onload = () => {
    let touches = document.querySelectorAll("span");

    for(let touche of touches){
        touche.addEventListener("click", gererTouches);
    }
}

function gererTouches(event){
    let touche;

    const listeTouches = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "%", "Racine", "Puissance"];

    if(event.type === "keydown"){
        if(listeTouches.includes(event.key)){
            event.preventDefault();
            touche = event.key;
        }
    }else{
        touche = this.innerText;
    }

    if(parseFloat(touche) >= 0 || touche === "."){
        affichage = (affichage === "") ? touche.toString() : affichage + touche.toString();
        ecranElt.innerText = affichage;
    }else{
        switch(touche){
            case "C":
                precedent = 0;
                affichage = "";
                operation = null
                ecranElt.innerText = 0;
                break;

            // Calculs
            case "+":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculator.add(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;

            case "-":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculator.substraction(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;

            case "*":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculator.multiplication(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;

            case "/":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculator.pourcentage(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;

            case "%":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculator.pourcentage(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;

            case "Racine":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculator.racine(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;

            case "Puissance":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculator.puissance(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;

            case "=":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculator.result(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                affichage = precedent;
                precedent = 0;
                break;
            default:
                break;
        }
    }
}


