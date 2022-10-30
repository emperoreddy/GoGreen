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
    document.getElementById("trash-verde").style.marginLeft =
      x - CHARACTER_POSITION - 100 + "px";
  };
}}

const trash_verde = document.getElementById("trash-verde");

// function generateGunoi()
// {
//   var pozitie_sticla = 470;
//   var pozitie_random =  Math.floor(Math.random() * 620);
//   const sticla = document.createElement("sticla");
//   sticla.setAttribute("class","sticla");
//   sticla.appendChild(sticla);
//   function fallDownGunoi() {
//     console.log("test");
//     if(sticlaBottom < trash_verde){
//       alert("Bravo");
//     }
//     sticlaBottom -=10;
//     sticla.style.bottom = sticlaBottom + "px";
//   }
//   setInterval(fallDownGunoi, 20);
//   setTimeout(fallDownGunoi, 2000);
//   sticla.style.marginTop = sticlaBottom + "px";
//   sticla.style.left = sticlaLeft + "px";
// }

// generateGunoi();


function fallTrash() {
  let sticlaTop = document.getElementById("sticla").offsetTop;
  let trashTop= document.getElementById("trash-verde").offsetTop;
  const trashHeight= document.getElementById("trash-verde").offsetHeight;
  const trash = trashTop - trashHeight + 100;
  const sticlaY = document.getElementById("sticla").offsetLeft;
  // var pozitie_random =  Math.floor(Math.random() * 620);
  // const sticla = document.createElement("sticla");
  // sticla.setAttribute("class","sticla");
  // sticla.appendChild(sticla);
  // var sticlaBottom = 0;
  // var sticlaLeft = pozitie_random;
  console.log(sticlaY);
  
  function fallDownGunoi() {
    if(sticlaTop < trash){
      sticlaTop +=10;
      sticla.style.top = sticlaTop + "px";
      }
    }
    setInterval(fallDownGunoi, 20);
    setTimeout(fallDownGunoi, 2000);
  sticla.style.top = sticlaLeft + "px";
  
}


fallTrash();


function fall(){
  


}