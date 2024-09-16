import axios from "axios";

// Crear una instancia de axios con la URL de la guía de mango
const baseURL = axios.create({
  baseURL: "https://guia-mango.onrender.com/",
});

// Función que realiza la petición GET
export const getAllAnimes = () =>
  baseURL
    .get()
    .then((response) => {
      console.log(response.data); // Manejar la respuesta
    })
    .catch((error) => {
      console.error("Error al realizar la petición:", error);
    });

// Llamar la función cada 10 minutos (600,000 milisegundos)
setInterval(getAllAnimes, 600000); // 10 minutos = 600000 ms
