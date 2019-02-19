//Setting variales for elements.
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
  'rgb(22, 160, 133)',
  'rgb(39, 174, 96)',
  'rgb(44, 62, 80)',
  'rgb(243, 156, 18)',
  'rgb(231, 76, 60)',
  'rgb(155, 89, 182)',
  'rgb(251, 105, 100)',
  'rgb(52, 34, 36)',
  'rgb(71, 46, 50)',
  'rgb(189, 187, 153)',
  'rgb(119, 177, 169)',
  'rgb(115, 168, 87)'
];

function random(list) {
  //This function takes a list and returns a random index place.

  return Math.floor(Math.random() * list.length);
}

function change() {
  //This function changes colors and text content of multiple elements.

  //set random color and index and check for duplicate.
  let color = colors[random(colors)];
  console.log(body.style.backgroundColor);
  while (color == body.style.backgroundColor) {
    console.log(true);
    color = colors[random(colors)];
  }
  let index = random(quotes);
  while (author.innerText == quotes[index][0]) {
    index = random(quotes);
  }

  //setting tweetQuote href including current quote/author.
  tweetQuote.href = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + quotes[index][1] + ' ' + quotes[index][0];

  //set text and author after 1 second
  setTimeout(function() {text.innerHTML = quotes[index][1];}, 500);
  setTimeout(function() {author.innerHTML = quotes[index][0];}, 500);

  //set css variable to random color.
  body.style.setProperty('--color1', color);
  text.style.setProperty('--color1', color);
  author.style.setProperty('--color1', color);  
  newQuote.style.setProperty('--color1', color);
  tweetQuote.style.setProperty('--color1', color);

  //add classes
  body.classList.add('anim1');
  newQuote.classList.add('anim1');
  tweetQuote.classList.add('anim1');
  text.classList.add('anim2');
  author.classList.add('anim2');

  //set style attributes when animation ends.
  body.addEventListener('animationend', () => {body.classList.remove('anim1'); body.style.backgroundColor = color;});
  text.addEventListener('animationend', () => {text.classList.remove('anim2'); text.style.color = color;});
  author.addEventListener('animationend', () => {author.classList.remove('anim2'); author.style.color = color;});
  newQuote.addEventListener('animationend', () => {newQuote.classList.remove('anim1'); newQuote.style.backgroundColor = color;});
  tweetQuote.addEventListener('animationend', () => {tweetQuote.classList.remove('anim1'); tweetQuote.style.backgroundColor = color;});

  /*
  //Alternate approach to allowing animation to repeat:

  //Remove class(if present) and trigger reflow(before adding class)
  body.classList.remove('anim1');
  newQuote.classList.remove('anim1');
  tweetQuote.classList.remove('anim1');
  text.classList.remove('anim2');
  author.classList.remove('anim2');
  body.offsetHeight; //trigger reflow
  */
}

//disabling event while callback function(animation) is running

let animating = false;
function inhibitor() {
  //This function checks if animating is false before setting animating to true and calling change().
  if (animating == false) {
    animating = true;
    change();
  }
}
//resets animating to false when the animation triggered within change() ends.
body.addEventListener('animationend', function() {animating = false});

//Adds event listeners to window(load) and newQuote button(click).
newQuote.addEventListener('click', inhibitor);
window.addEventListener('load', inhibitor);
