var inputTxt = document.querySelector("#input-Text") 
var translateButton = document.querySelector("#translate-btn")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/pirate.json"



// this is a GET request
function getTranslationURL(text) {
    return serverURL + '?' + 'text=' + text
}


function clickHandler() {
    
    var input = inputTxt.value;

    // call server for processing
fetch(getTranslationURL(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)

};

function errorHandler(error) {
    alert("Something wrong with the server; please try again after some time")
}

translateButton.addEventListener('click', clickHandler)