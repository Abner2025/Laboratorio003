function calcularDescuento() {
  const birthdate = document.getElementById("birthdate").value;
  const pedido = document.getElementById("pedido").value.toLowerCase();
  const discountField = document.getElementById("discount");

  let descuento = 0;

  if (birthdate) {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age >= 60) {
      descuento += 20;
    } else if (age >= 30) {
      descuento += 10;
    } else {
      descuento += 5;
    }
  }

  const coincidencias = pedido.match(/pizza/gi);
  const cantidadPizzas = coincidencias ? coincidencias.length : 0;

  if (cantidadPizzas >= 3) {
    descuento += 10;
  } else if (cantidadPizzas === 2) {
    descuento += 5;
  }

  discountField.value = `${descuento}%`;
}
