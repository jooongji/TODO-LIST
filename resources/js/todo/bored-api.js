const synth = window.speechSynthesis; 

const callBoredAPI = async () => {
    let response = await fetch('http://www.boredapi.com/api/activity?minaccessibility=0&maxaccessibility=0.1')
    let recomanded = await response.json();        
    recommandTxt.innerHTML = recomanded.activity;
    return recomanded.activity;
}

recomand.addEventListener('click', async ev => {    
    let text = await callBoredAPI();
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
})     


