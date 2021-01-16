//jshint esversion:6
alert("Connected!");
const playButton =  document.getElementById("play");
const pauseButton =  document.getElementById("pause");
const stopButton =  document.getElementById("stop");
const textInput =  document.getElementById("text");
const speedInput =  document.getElementById("speed");
let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
let currentCharacter;
stopButton.addEventListener('click',()=>{
  speechSynthesis.resume();
  speechSynthesis.cancel();
});

pauseButton.addEventListener('click',pause);

// stopButton.addEventListener('click',stop);

playButton.addEventListener('click',() => {
  // alert("Clicked");
  values = textInput.value;
  playText(values);
});

speedInput.addEventListener('input',()=>{
  speechSynthesis.resume();
  speechSynthesis.cancel();
  playText(utterance.text.substring(currentCharacter));
});

// const utterance =  new SpeechSynthesisUtterance();
utterance.addEventListener('end',()=>{
  textInput.disabled = false;
});
utterance.addEventListener('boundary',e=>{
  currentCharacter = e.charIndex;
});

function playText(text){
  if(speechSynthesis.paused && speechSynthesis.speaking){
    return speechSynthesis.resume();
  }
utterance.text = text;
utterance.rate= speedInput.value||1; //Set the speech speed to either user choice or to default 1
textInput.disabled = true;
speechSynthesis.speak(utterance);
}


function pause(){
  if(speechSynthesis.speaking)
   speechSynthesis.pause();
}
// function stop(){
//
// }
