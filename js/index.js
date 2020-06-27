'use strict';

function getQuote(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  randomNum = randomNum % 2 === 0 ? randomNum : randomNum - 1;
  return [arr[randomNum], arr[randomNum + 1]];
};

var getVideo = (array) => {
  var randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

/* Variables */
const quotesArray = ['Её не волнует умру ли я (прим. перев.)', 'Joji - Yeah Right', 'Они забирают моё сердце, я не знаю зачем', 'Joji - Demons'];
const staticLibraryVideo = ['https://www.youtube.com/embed/K3Qzzggn--s?controls=0', 'https://www.youtube.com/embed/jPan651rVMs?controls=0', 'https://www.youtube.com/embed/DycIg7y8oZg?controls=0', 'https://www.youtube.com/embed/-LWMU576gA4?controls=0'];

/* Get HTML tags */
/* Init */
function initVideo() {
document.getElementById('youtube-embed').src = getVideo(staticLibraryVideo);
}

function initQuote() {
var quote = getQuote(quotesArray);
document.querySelector('#quote').textContent = quote[0];
document.querySelector('#author').textContent = quote[1];
};
initVideo();
initQuote();