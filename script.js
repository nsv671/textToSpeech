// const textToSpeechBtn = document.querySelector('#textToSpeech');
// const textareaText = document.querySelector('#textareaText');
// const audio = document.querySelector('#audio');

// const url =
//   'https://voicerss-text-to-speech.p.rapidapi.com/?key=299794f0bc654e3e83e5ffe86035e7ac';
// const options = {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': 'b11a613c40msh3c100f8ff46e2c9p1026dajsn97c9b0bd2bb8',
//     'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com',
//   },
//   body: new URLSearchParams({
//     src: 'Hello, world!',
//     hl: 'en-us',
//     r: '0',
//     c: 'mp3',
//     f: '8khz_8bit_mono',
//   }),
// };

// const url =
//   'http://api.voicerss.org/?key=299794f0bc654e3e83e5ffe86035e7ac&hl=en-us&src=Hello, world!';

// textToSpeechBtn.addEventListener('click', async function (e) {
//   const string = textareaText.value;
//   options.body.src = string;
//   console.log(options.body.src);
//   console.log('clicked');
//   console.log(audio);
//   audio.src =
//   ('https://music.youtube.com/watch?v=8BiLurrzFRw&si=g77rpCSYClYp0VZf');

//   try {
//     console.log(url);
//     const response = await fetch(url);
//     console.log(response);
//     const result = await response.text();
//     console.log(result);
//     audio.src = `${result}`;
//     audio.style.display = 'block';
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// });
