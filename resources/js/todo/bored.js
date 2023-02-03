
(async () => {   

    const synth = window.speechSynthesis;

    let loadVoices = async () => {
        let response = await fetch('http://www.boredapi.com/api/activity?minaccessibility=0&maxaccessibility=0.1')
        let recomanded = await response.json();        
        recomand.innerHTML = recomanded.activity;
        recomand.value = recomanded.activity;
    }   

    if ('onvoiceschanged' in synth) {
        synth.onvoiceschanged = loadVoices;
    } else {
        loadVoices();
    }

    recomand.addEventListener('click', ev => {
        let utterance = new SpeechSynthesisUtterance(recomand.value);
        speechSynthesis.speak(utterance);
        console.dir(synth)
    })

    
  

})();

