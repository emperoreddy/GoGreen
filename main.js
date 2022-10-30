const CHARACTER_POSITION = 1200;

// var cos = document.querySelector("#sticla")
// var sticla = document.querySelector("#trash-verde");
// var cosLeft =  parseInt(window.getComputedStyle(cos).getPropertyValue("left"));
// var cosBottom = parseInt(window.getComputedStyle(cos.getPropertyValue("bottom"));

// function moveCos(){
//   cosLeft -= 15;
//   cos.style.left = cosLeft + "px";
// }
// CosLeft();

function click_to_start() {
  document.onmousemove = function (e) {
    var x = e.clientX;

    if (x > 400 && x < 2070) {
      var trashX = (document.getElementById("trash-verde").style.marginLeft =
        x - CHARACTER_POSITION - 100 + "px");
    }
    return trashX;
  };
}

const trash_verde = document.getElementById("trash-verde");


function fallTrash() {
  let sticlaTop = document.getElementById("sticla").offsetTop;
  let trashTop = document.getElementById("trash-verde").offsetTop;
  const trashHeight = document.getElementById("trash-verde").offsetHeight;
  const trash = trashTop - trashHeight + 200;
  const sticlaY = document.getElementById("sticla").offsetLeft;
  var pozitie_random = Math.floor(Math.random() * 1900 + 100);
  let score = document.getElementById("score");
  const trashWidth = document.getElementById("trash-verde").offsetWidth;
  
  
  let i = 1;
  function fallDownGunoi() {
    let positionTrash = (document.getElementById("trash-verde").getBoundingClientRect());

    let positionSticla = (document.getElementById("sticla").getBoundingClientRect());
    console.log(positionTrash.x);
    console.log(positionSticla.x);

    if (sticlaTop < trash) {
      sticlaTop += 20;
      sticlaTop += i;
      sticla.style.top = sticlaTop + "px";
      i += 0.02;

    } else if (((positionSticla.x <= positionTrash.x && positionSticla.x >= positionTrash.x - trashWidth) || (positionSticla.x >= positionTrash.x && positionSticla.x <= positionTrash.x + trashWidth) ) && (positionSticla.y <= positionTrash.y && positionSticla.y >= positionTrash.y - trashWidth) || (positionSticla.y >= positionTrash.y && positionSticla.y <= positionTrash.y + trashWidth)) {
      pozitie_random =  Math.floor(Math.random() * 1400 + 200);
      sticla.style.left = pozitie_random + "px";
      sticla.style.top = 20 + "px";
      sticlaTop = 20;
      sticla.style.top = sticlaTop + "px";
      score.innerHTML = parseInt(score.innerHTML) + 1;

      if (score.innerHTML == 51) {
        alert("You win!");
      } else if (score.innerHTML == 10) {
        (document.getElementById("copac1").src = "copac2.png");
        document.getElementById("copac1").style.height = "600px";
        document.getElementById("copac1").style.width = "600px";
        document.getElementById("copac1").style.top = "600px";
        
      } else if (score.innerHTML == 20) {
        (document.getElementById("copac1").src = "copac3.png");
      } else if (score.innerHTML == 30) {
        (document.getElementById("copac1").src = "copac4.png");
      } else if (score.innerHTML == 40) {
        (document.getElementById("copac1").src = "copac5.png");
      } else if (score.innerHTML == 50) {
        (document.getElementById("copac1").src = "copac6.png");
      }
    }
    else  {alert("You lose! Your score is " + score.innerHTML);
    sticlaTop = 20;
    score.innerHTML = 0;
  }
  }
  setInterval(fallDownGunoi, 20);
  setTimeout(fallDownGunoi, 2000);
}

fallTrash();

var timer;
var ele = document.getElementById('timer');

(function (){
  var sec = 0;
  timer = setInterval(()=>{
    ele.innerHTML = '00:'+sec;
    sec ++;
  }, 1000) 
})() 
