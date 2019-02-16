let body = document.body;
let box = document.getElementById('quote-box');
let text = document.getElementById('text');
let author = document.getElementById('author');
let newQuote = document.getElementById('new-quote');
let tweetQuote = document.getElementById('tweet-quote');
const quotes = [
  ['-The Godfather', '"I\'m going to make him an offer he can\'t refuse.'],
  ['-The Wizard of Oz', '"Toto, I\'ve got a feeling we\'re not in Kansas anymore.'],
  ['-Jerry Macquire', '"Show me the money!'],
  ['-A Few Good Men', '"You can\t handle the truth!'],
  ['-Forrest Gump', '"Mama always said life was like a box of chocolates. You never know what you\'re gonna get.'],
  ['-The Shawshank Redemption', '"Get busy livin\', or get busy dyin\''],
  ['-Rocky', '"He doesn\'t know it\'s a show, he thinks it\'s a fight!'],
  ['-Braveheart', '"You have bled with Wallace, now bleed with me.']
];
const colors = [
  'red',
  'green',
  'blue',
  'orange',
  'brown'
]
function random(list) {
  return Math.floor(Math.random() * list.length);
}
function randomQuote() {
  text.innerHTML = '';
  author.innerHTML = '';
  let index = random(quotes);
  text.appendChild(document.createTextNode(quotes[index][1]));
  author.appendChild(document.createTextNode(quotes[index][0]));
}
function colorChange() {
  //Remove class(if present), trigger reflow, and add class.
  body.classList.remove('anim1');
  text.classList.remove('anim2');
  author.classList.remove('anim2');
  newQuote.classList.remove('anim1');
  tweetQuote.classList.remove('anim1');
  body.offsetHeight; //trigger reflow
  body.classList.add('anim1');
  text.classList.add('anim2');
  author.classList.add('anim2');
  newQuote.classList.add('anim1');
  tweetQuote.classList.add('anim1');
  /*
  //Adding a class and adding an event listener for animationend to remove the class.
  body.classList.add('anim1');
  body.addEventListener('animationend', function() {document.body.classList.remove('anim1')});
  
  //Adding a class, setting animation to none, and setting animation to '' after a timer' 
  body.classList.add('anim1');
  body.style.animation = 'none';
  setTimeout(function () {body.style.animation = '';}, 10);

  //Another method would be to clone and replace the element.
  
  //Old logic for color change
  let color = colors[random(colors)];
  body.style.backgroundColor = color;
  text.style.color = color;
  author.style.color = color;
  newQuote.style.backgroundColor = color;
  tweetQuote.style.backgroundColor = color;
  */
}

newQuote.addEventListener('click', randomQuote, false);
newQuote.addEventListener('click', colorChange, false);
window.addEventListener('load', randomQuote);
window.addEventListener('load', colorChange);


//REPLICATE RANDOM COLORS WITH CSS VARIABLES AND FADING TEXT
