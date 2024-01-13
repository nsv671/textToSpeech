{
  /* <script src="https://code.responsivevoice.org/responsivevoice.js?key=5IMvO9Qu"></script>; */
}

// import https://code.responsivevoice.org/responsivevoice.js?key=5IMvO9Qu as responsiveVoice;

const textToSpeechBtn = document.querySelector('#textToSpeech');
const textareaText = document.querySelector('#textareaText');
const audio = document.querySelector('#audio');

textToSpeechBtn.addEventListener('click', (e) => {
  console.log('click');
  var voicelist = responsiveVoice.getVoices();
  console.log(voicelist);

  responsiveVoice.speak(textareaText.value);
});

var voicelist = responsiveVoice.getVoices();
console.log(voicelist);
