// ref : https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
// ref : https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API


// As mentioned earlier, Chrome currently supports speech recognition with prefixed properties, 
// therefore at the start of our code we include these lines to feed the right objects to Chrome, 
// and any future implementations that might support the features without a prefix:

//크롬에서 webspeech를 사용할 때는 webkitSpeechRecognition 처럼 webkit prefix가 붙은 속성이 필요

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();    

const startSTT = () => {   
    recognition.start();
    recognition.onresult = (event) => {
        const msg = event.results[0][0].transcript;
        inp.value = msg;
        addTodoData();
    }
}



