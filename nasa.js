const apiKey = 'TSie5JP688RYQasztLQUjEWD9ScYE50cldEtTCoh'; 
// Clave API de la NASA utilizada para autenticar las solicitudes
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
// URL de la API de la NASA con la clave API incrustada para obtener la Imagen Astronómica del Día (APOD)

fetch(url) // Realiza una solicitud GET a la URL especificada
    
    .then(response => response.json()) // Convierte la respuesta de la API en formato JSON
    .then(data => { // Callback que se ejecuta cuando la respuesta JSON está lista
    
        const container = document.getElementById('apod-container'); // Obtiene el elemento del DOM con id 'apod-container' donde se mostrará el contenido
        const htmlContent = `

            <h2>${data.title}</h2> 

            <img src="${data.url}" alt="${data.title}"> 
           
            <p>${data.explanation}</p> 

            `;
        container.innerHTML = htmlContent; // Inserta el contenido HTML generado dentro del contenedor 'apod-container'
    })
    
    .catch(error => { // Captura cualquier error que ocurra durante la solicitud o el procesamiento de la respuesta
        console.error('Error al obtener la imagen del día:', error); // Imprime un mensaje de error detallado en la consola del navegador
    });

