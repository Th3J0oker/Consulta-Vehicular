function filtrarPases() {
  const input = document.getElementById("busquedaPase");
  const filtro = input.value.toLowerCase();
  const tabla = document.getElementById("tablaPases");
  const filas = tabla.getElementsByTagName("tr");

  for (let i = 0; i < filas.length; i++) {
    const celdas = filas[i].getElementsByTagName("td");
    let coincide = false;

    // Verificamos todas las celdas de la fila
    for (let j = 0; j < celdas.length; j++) {
      const texto = celdas[j].textContent || celdas[j].innerText;
      if (texto.toLowerCase().indexOf(filtro) > -1) {
        coincide = true;
        break;
      }
    }

    // Mostramos u ocultamos la fila según si coincide
    filas[i].style.display = coincide ? "" : "none";
  }
}
