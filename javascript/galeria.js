// Lista de medios (imagen o video)
const medios = [
  { tipo: "imagen", src: "imagenes/ga1.jpg" },
  { tipo: "video",  src: "videos/vid1.mp4" },
  { tipo: "imagen", src: "imagenes/ga2.jpg" },
  { tipo: "video",  src: "videos/vid2.mp4" },
  { tipo: "imagen", src: "imagenes/ga3.jpg" },
  { tipo: "video",  src: "videos/vid3.mp4" }
];

// Contenedor
const galeria = document.getElementById("galeria");

// Insertar medios
medios.forEach(m => {
  let elemento;
  if (m.tipo === "imagen") {
    elemento = document.createElement("img");
    elemento.src = m.src;
    elemento.alt = "Foto especial";
  } else if (m.tipo === "video") {
    elemento = document.createElement("video");
    elemento.src = m.src;
    elemento.controls = true;
  }

  galeria.appendChild(elemento);
});