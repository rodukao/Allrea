function displaySection(section){
  var contentChilds = document.getElementById("content").querySelectorAll("section");
  var i;
  for (i = 0; i < contentChilds.length; i++) {
    contentChilds[i].style.display = "none";
  }
  document.getElementById(section).style.display = "block";
}

function calcCirc(valorPassado){
  pi = 3.14;
  var circunferenciaCirculo;
  var diametroCirculo;
  var raioCirculo;

  switch (valorPassado) {
    case "circC":
      circunferenciaCirculo = document.getElementById("circC").value;
      raioCirculo = circunferenciaCirculo / pi / 2;
      diametroCirculo = raioCirculo * 2;
      break;

    case "circD":
      diametroCirculo = document.getElementById("circD").value;
      raioCirculo = diametroCirculo / 2;
      circunferenciaCirculo = 2 * pi * raioCirculo;
      break

    case "circR":
      raioCirculo = document.getElementById("circR").value;
      circunferenciaCirculo = 2 * pi * raioCirculo;
      diametroCirculo = raioCirculo * 2;
      break
  }

  document.getElementById("circR").value = raioCirculo;
  document.getElementById("circD").value = diametroCirculo;
  document.getElementById("circC").value = circunferenciaCirculo;
}
