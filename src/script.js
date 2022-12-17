const ecranElt = document.querySelector("#ecran");

let precedent = 0;

let affichage = "";

let operation = null;

window.onload = () => {
    let touches = document.querySelectorAll("span");

    for(let touche of touches){
        touche.addEventListener("click", gererTouches);
    }
}

function gererTouches(event){
    let touche;

    const listeTouches = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "%"];

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
            case "-":
            case "*":
            case "/":
            case "%":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                operation = touche;
                affichage = "";
                break;
            case "=":
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
                ecranElt.innerText = precedent;
                affichage = precedent;
                precedent = 0;
                break;
            default:
                break;
        }
    }
}

/**
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {string} operation 
 * @returns number
 */
function calculer(nb1, nb2, operation){
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    if(operation === "+") return nb1 + nb2;
    if(operation === "-") return nb1 - nb2;
    if(operation === "*") return nb1 * nb2;
    if(operation === "/") return nb1 / nb2;
    if(operation === "%") return nb1 / 100;
}