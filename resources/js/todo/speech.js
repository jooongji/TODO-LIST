const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
const recognition = new SpeechRecognition();

mic.addEventListener('click', ev=>{
    recognition.start();
})

recognition.onresult = (event) => {
    const msg = event.results[0][0].transcript;
    inp.value = msg;
    addTodoData();
}