// Función para actualizar la fecha y la hora
function actualizarFechaHora() {
  const ahora = new Date();

  // Formatear fecha y hora
  const fechaFormateada = ahora.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const horaFormateada = ahora.toLocaleTimeString();

  // Actualizar contenido en los elementos del DOM
  document.getElementById("fecha").textContent = fechaFormateada;
  document.getElementById("hora").textContent = horaFormateada;
}

// Función para obtener la ubicación actual
function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        const { latitude, longitude } = posicion.coords;
        document.getElementById(
          "ubicacion"
        ).textContent = `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(
          2
        )}`;
      },
      () => {
        document.getElementById("ubicacion").textContent =
          "Acceso a la ubicación denegado.";
      }
    );
  } else {
    document.getElementById("ubicacion").textContent =
      "Geolocalización no soportada por este navegador.";
  }
}

// Inicializar funciones al cargar la página
actualizarFechaHora();
obtenerUbicacion();
setInterval(actualizarFechaHora, 1000);
