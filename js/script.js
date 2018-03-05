var ball = document.querySelector('.ballon');


// function disappear() {
//   for(i = 0; i < ballon.length; i++) {
//    ballon.style.background = 'none'
//    ballon.innerText = 'POP!';
//    }
  // }
var bal1 = document.getElementById('ballon-1');
var bal2 = document.getElementById('ballon-2');
var bal3 = document.getElementById('ballon-3');
var bal4 = document.getElementById('ballon-4');
var bal5 = document.getElementById('ballon-5');
var bal6 = document.getElementById('ballon-6');
var bal7 = document.getElementById('ballon-7');
var bal8 = document.getElementById('ballon-8');
var bal9 = document.getElementById('ballon-9');
var bal10 = document.getElementById('ballon-10');
var bal11 = document.getElementById('ballon-11');
var bal12 = document.getElementById('ballon-12');
var bal13 = document.getElementById('ballon-13');
var bal14 = document.getElementById('ballon-14');
var bal15 = document.getElementById('ballon-15');
var bal16 = document.getElementById('ballon-16');

var result = document.getElementById('yay');
function ballPopper(ballVar) {
  ballVar.addEventListener('mouseover', popballon);

  function popballon() {
    if(ballVar.style.background === 'none') {
      ballVar.innerText ='';
    } else {
      ballVar.innerText = 'POP!';
      ballVar.style.background = 'none';
    }
  }
  ballVar.addEventListener('mouseout', popIsOver, false);

  function popIsOver() {
    ballVar.innerText = '';
  }
}

ballPopper(bal1);
ballPopper(bal2);
ballPopper(bal3);
ballPopper(bal4);
ballPopper(bal5);
ballPopper(bal6);
ballPopper(bal7);
ballPopper(bal8);
ballPopper(bal9);
ballPopper(bal10);
ballPopper(bal11);
ballPopper(bal12);
ballPopper(bal13);
ballPopper(bal14);
ballPopper(bal15);
ballPopper(bal16);

document.addEventListener('mouseover', noBalloons, false);
function noBalloons() {
  for(i = 0; i < ball.length; i++){
    if (balls[i].style.background === 'none')  {
      yay.style.display = 'block';
      window.scrollTo(0, 0);
  }
  }
}
