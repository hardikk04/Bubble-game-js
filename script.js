let playground = document.querySelector(".playground");

function makeBubble() {
  let clone = "";

  for (let i = 0; i < 152; i++) {
    let number = Math.floor(Math.random() * 10);
    clone += ` <div class="bubble"><h1>${number}</h1></div>`;
  }

  document.querySelector(".playground").innerHTML = clone;
}

let time = 10;
let timerNum = document.querySelector(".timer");

function runtimer() {
  let myInterval = setInterval(() => {
    if (time > 0) {
      time--;
      timerNum.textContent = time;
    } else {
      clone = "";
      playground.innerHTML = `<h1>your score is <span>${score}</span></h1>`;
      clearInterval(myInterval);
    }
    if (time === 10) {
      timerNum.style.color = "red";
    }
  }, 1000);
}

let hit = 0;
function changeHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = hit;
}

let score = 0;
function changeScore() {
  score += 10;
  document.querySelector(".score").textContent = score;
}

runtimer();
makeBubble();
changeHit();

playground.addEventListener("click", function (dets) {
  var number = Number(dets.target.textContent);
  if (number === hit) {
    makeBubble();
    changeHit();
    changeScore();
    document.querySelector(".check").style.backgroundColor = "blue";
  } else {
    document.querySelector(".check").style.backgroundColor = "red";
  }
});
