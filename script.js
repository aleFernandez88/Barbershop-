let precioInicial = parseInt(
  prompt("Por favor, ingrese el valor de su producto")
);
alert("El precio de su producto es " + precioInicial);

let cantidadCuotas = parseInt(
  prompt("Por favor indique cantidad de cuotas (3,6,9,12)")
);

alert(
  "Su precio inicial se dividira entre" +
    cuotas(precioInicial, cantidadCuotas) +
    "cuotas"
);

function cuotas(precioInicial, cantidadCuotas) {
  switch (cantidadCuotas) {
    case 3:
      console.log("3= ", parseInt(precioInicial / 3));
      return precioInicial / 3;
      break;
    case 6:
      return precioInicial / 6;
      break;
    case 9:
      return precioInicial / 9;
      break;
    case 12:
      return precioInicial / 12;
      break;
    default:
      return 0;
      break;
  }
}
