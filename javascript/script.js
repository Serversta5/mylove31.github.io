// Contador de días juntos
function calcularDiasJuntos() {
  const fechaInicio = new Date("2025-06-01"); // <-- tu fecha real
  const hoy = new Date();

  // Resetear horas para evitar errores por husos
  fechaInicio.setHours(0, 0, 0, 0);
  hoy.setHours(0, 0, 0, 0);

  const diferencia = hoy - fechaInicio;
  const diasTotales = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  const contador = document.getElementById("contadorDias");

  if (diasTotales === 30) {
    contador.innerHTML = "¡Hoy cumplimos un mes, mi amor! ❤️";
  } else {
    const meses = Math.floor(diasTotales / 30);
    const dias = diasTotales % 30;
    let texto = "Llevamos juntos ";

    if (meses > 0) {
      texto += `${meses} mes${meses > 1 ? "es" : ""}`;
      if (dias > 0) texto += ` y ${dias} día${dias > 1 ? "s" : ""}`;
    } else {
      texto += `${diasTotales} día${diasTotales !== 1 ? "s" : ""}`;
    }

    texto += " 💖";
    contador.innerHTML = texto;
  }
}
calcularDiasJuntos();

// Reproducir música
document.getElementById("playMusic").addEventListener("click", () => {
  const audio = document.getElementById("audio");
  audio.play();
}); 