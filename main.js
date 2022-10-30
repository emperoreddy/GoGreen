// var dragValue;

//     function move(id){
//         var element = document.getElementById("trash-verde");
//         element.style.position = "absolute";
//         element.onmousedown =  function(){
//             dragValue = element;
//         }
//     }

//     document.onmousemove =  function(e){
//         var x= e.pageX;
//         var y= e.pageY;

//         dragValue.style.left = x + "px";
//         dragValue.style.top = y + "px";
//     }



const CHARACTER_POSITION = 1000;

function click_to_start() {
  document.onmousemove = function (e) {
    var x = e.clientX;
    document.getElementById("character").style.marginLeft =
      x - CHARACTER_POSITION - 45 + "px";
  };
}
