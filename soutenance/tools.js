/*
 * Affiche le contenu d'un tableau de type Array à la fin courante du document html.
 * Le résultat est présenté sous forme de table HTML dans d'un bloc de type "cartouche".
 * Paramètres: le tableau (type Array) à afficher. La fonction est prévue pour admettre un
 *  tableau à une dimension ne contenant que des éléments directement affichables (nombres, chaines) ;
 *  pour tout autre type d'élément, le comportement n'est pas garanti.
 * Retour :
 */


function displayArray (tab) {
    let newElement = document.getElementById ('result');
    if (newElement == null) {
        newElement = document.createElement("div");
        newElement.setAttribute("id", "result");
        document.body.appendChild(newElement);
    }
    let out = '<div class="card result">\n<table class="display">\n<tr>\n';
    tab.forEach ((item, index) => {
        out += '<td>' + item + '</td>\n';
    });
    out += '</tr>\n</table>\n</div>';
    newElement.innerHTML = out;
}





/*
 * Affiche un résultat à la fin courante du document html.
 * Le résultat est présenté dans d'un bloc de type "cartouche" sous forme d'un élément "message"
 * suivi d'un élément résultat. Par exemple : "Voici mon résultat : " + le résultat proprement dit.
 * Paramètres:
 *  - message : la chaine de caractères du message.
 *  - result : le résultat à concaténer ; ce paramètre peut être une chaine ou un nombre.
 * Retour :
 */

function displayOneResult (message, result) {
    let out = '<div class="card result">\n<table class="display">\n<tr>\n';
    out += (message + " " + result);
    out += '</tr>\n</table>\n</div>';
    document.writeln (out);
}


/*
 * Génère aléatoirement un nombre entier entre un minimum et un maximum.
 * Paramètres: 
 *  - min : le nombre entier minimum de la plage de génération
 *  - max : le nombre entier maximum de la plage de génération
 * Retour : un nombre entier entre le min et le max choisis.
 */

function randomIntFromInterval (min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
 * Génère aléatoirement une série de n nombres entiers entre un minimum et un maximum.
 * Paramètres: 
 *  - n : le nombre d'entiers à générer
 *  - min : le nombre entier minimum de la plage de génération
 *  - max : le nombre entier maximum de la plage de génération
 * Retour : un tableau (Array) de nombres entiers entre le min et le max choisis.
 */

function randomArrayOfIntFromInterval (n, min, max) { // min and max included 
    let tab = [];
    for (let i=0; i<n; i++) {
        tab.push(randomIntFromInterval (min, max));
    }
    return (tab);
}

