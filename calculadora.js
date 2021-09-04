const crearTabla = () => {
  tabla = document.getElementById("tabla");
  if (tabla) {
    padre = tabla.parentNode;
    padre.removeChild(tabla);
  }

  const aleloInput1 = document.getElementById("alelo1");
  const aleloInput2 = document.getElementById("alelo2");
  alelo1 = aleloInput1.value;
  alelo2 = aleloInput2.value;

  const combinaciones = (alelo1 + alelo2).length;

  var crear = document.getElementById("crear");
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  tabla.setAttribute("id", "tabla");

  for (var i = 0; i < alelo1.length; i++) {
    var hilera = document.createElement("tr");
    for (var j = 0; j < alelo2.length; j++) {
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(alelo1[i] + alelo2[j]);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }
  crear.appendChild(tabla);
  tabla.appendChild(tblBody);
};

const limpiar = () => {
  const aleloInput1 = document.getElementById("alelo1");
  const aleloInput2 = document.getElementById("alelo2");
  aleloInput1.value = "";
  aleloInput2.value = "";
};
