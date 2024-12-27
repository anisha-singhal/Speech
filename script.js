const startBtn = document.getElementById('start-btn')
const outputText = document.getElementById('output-text')

if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support speech recognition. Please use Google Chrome.');
} 

else{
    //It allows web applications to recognize and process voice input by converting spoken words into text.
    const recognition = new  webkitSpeechRecognition()
    recognition.continuous = true; // Keeps listening until stopped manually
    recognition.interimResults = true;

    recognition.onstart = function(){
        outputText.textContent = "Listening... Speak now!"
    }

    recognition.onerror = function(event) {
        outputText.textContent = "Error occurred: " + event.error;
    }

    recognition.onresult = function(event) {
        let transcript = '';
        //event.results ek array hota hai jisme recognition results store hote hain.
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        outputText.textContent = transcript;
    }

    startBtn.addEventListener('click', function() {
        recognition.start();
    })

}