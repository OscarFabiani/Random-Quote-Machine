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
  ['-A Few Good Men', '"You can\'t handle the truth!'],
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
  //TRY TO MIGRATE TEXT/AUTHOR COLOR CHANGE AND INCORPORATE TEXT/AUTHOR FADE OUT/IN
  let index = random(quotes);
  //checking if current quote/author is the same as the replacement and re-randomizes replacement if so.
  while (author.innerText == quotes[index][0]) {
    index = random(quotes);
  }
  //sets repacement quote/author.
  text.innerHTML = quotes[index][1];
  author.innerHTML = quotes[index][0];
}
function colorChange() {
  //Remove class(if present), trigger reflow, and add class.
  let color = colors[random(colors)];
  while (color == body.style.backgroundColor) {
    color = colors[random(colors)];
  }
  body.style.setProperty('--color1', color);
  text.style.setProperty('--color1', color);
  author.style.setProperty('--color1', color);  
  newQuote.style.setProperty('--color1', color);
  tweetQuote.style.setProperty('--color1', color);
  body.classList.remove('anim1');
  text.classList.remove('anim2');
  //text.classList.remove('anim3'); //trying to incorporate text fade out/in
  author.classList.remove('anim2');
  newQuote.classList.remove('anim1');
  tweetQuote.classList.remove('anim1');
  body.offsetHeight; //trigger reflow
  body.classList.add('anim1');
  text.classList.add('anim2');
  //text.classList.add('anim3'); //trying to incorporate text fade out/in
  author.classList.add('anim2');
  newQuote.classList.add('anim1');
  tweetQuote.classList.add('anim1');
  body.addEventListener('animationend', function() {body.style.backgroundColor = color;});
  text.addEventListener('animationend', function() {text.style.color = color;});
  author.addEventListener('animationend', function() {author.style.color = color;});
  newQuote.addEventListener('animationend', function() {newQuote.style.backgroundColor = color;});
  tweetQuote.addEventListener('animationend', function() {tweetQuote.style.backgroundColor = color;});

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

//disabling event while callback function(animation) is running
let animating = false;
function inhibitor() {
  if (animating == false) {
    animating = true;
    colorChange();
    randomQuote();
  }
}
body.addEventListener('animationend', function() {animating = false});

newQuote.addEventListener('click', inhibitor);
newQuote.addEventListener('click', inhibitor);
window.addEventListener('load', randomQuote);
window.addEventListener('load', colorChange);


//REPLICATE RANDOM COLORS WITH CSS VARIABLES AND FADING TEXT
