let state = {};

let source = $('#stuff-template').html();
let template = Handlebars.compile(source);

console.log(source);

let btn = $('#clicker'); // getElementById('clicker')
let input = $('#wordsInput'); // getElementById('wordsInput')

btn.on('click', handleClick);
input.on('change', handleChange);

function handleChange(e) {
  state.words = $(this).val(); // e.target.value;
  console.log('__STATE__', state);
}

function handleClick(e) {
  e.preventDefault();
  state.words = state.words.split('').reverse().join('');
  render();
}

function render() {
  $('#stuff').html(template(state));
}

function init() {
  state.words = 'starter words';
  render();
}

init();