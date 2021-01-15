const colours = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function () {
  // get random number between 0 - 3
  const randomNumber = 2;
  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
});
