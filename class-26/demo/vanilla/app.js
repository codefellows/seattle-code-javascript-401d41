let state = {};

let button = document.getElementById('clicker');
button.addEventListener('click', handleClick);

let input = document.getElementById('wordsInput');
input.addEventListener('change', handleWords);

function handleWords(e) {
  state.words = e.target.value;
}

function handleClick(event) {
  event.preventDefault();
  state.words = state.words
    .split('')
    .reverse()
    .join('');

  render();
}

function init() {
  state.clicks = 0;
  state.words = 'nothing to see here';
  render();
}

function render() {
  document.getElementById('words').textContent = state.words;
}

init();
