const CHARACTER_POSITION = 1200;

function click_to_start() {
  document.onmousemove = function (e) {
    var x = e.clientX;

    if (x > 350 && x < 1450) {
    document.getElementById("trash-verde").style.marginLeft =
      x - CHARACTER_POSITION - 100 + "px";
  };
}}

function generateGunoi()
{
  var gunoi = 470;
  var
  var gunoi = document.createElement("div");
  gunoi.setAttribute("class","gunoi");
  gunoi.append.Child(gunoi);
}

generateGunoi();