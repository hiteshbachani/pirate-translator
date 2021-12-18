var translateButton = document.querySelector("#translate-btn")
var textInput = document.querySelector("#txt-input")
var outputText = document.querySelector("#output")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured");
    alert("please try after some time");
}

function clickHandler() {
    var input = textInput.value; // this will take input


    // calling server for processing
    fetch(getTranslationURL(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
};


translateButton.addEventListener('click', clickHandler)