/* 
Escribe un programa que pida una frase y escriba las vocales que aparecen
*/

/* const inputPhrase = document.getElementById('input-phrase');
const btnClick = document.getElementById('btn-click');

btnClick.onclick = () => {
    app();
} */

function app()
{
    let phrase = getPhrase(inputPhrase.value);
    let vocalsInPhrase = searchVocals(phrase);
    let vocals = getVocals(vocalsInPhrase);
    render(vocals);
}

export function getPhrase(phrase)
{
    return phrase;
}

export function searchVocals(phrase)
{
    const regex = /[\a\e\i\o\u]/g;
    let listOfVocalsInPhrase = phrase.match(regex);

    listOfVocalsInPhrase = deleteDuplicity(listOfVocalsInPhrase);

    return listOfVocalsInPhrase;
}

export function deleteDuplicity(list)
{
    const resultVocalsList = [];

    list.forEach(vocal => {
        if(resultVocalsList.includes(vocal)) {
            return;
        }
        resultVocalsList.push(vocal);
    });

    return resultVocalsList;
}

export function getVocals(vocals)
{
    vocals = vocals.join(',');
    return vocals;
}

export function render(vocals)
{
    let vocalsInPhrase = document.getElementById('vocals-in-phrase');
    vocalsInPhrase.innerHTML = vocals;
}