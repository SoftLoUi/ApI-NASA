# API-NASA
Este proyecto utiliza la API de la NASA para obtener y mostrar la Imagen Astronómica del Día (APOD) junto con su título y explicación en una página web.

## Archivos incluidos
### index.html 
Contiene un contenedor principal (main) donde se insertará dinámicamente la imagen y la explicación obtenidas de la API de NASA utilizando JavaScript.
styles.css

### css
Establece el diseño y la apariencia de varios elementos como el cuerpo (body), el encabezado (header), el contenedor de la imagen astronómica (#apod-container), las imágenes (img) y los párrafos (p).

### nasa.js
Contiene el código necesario para interactuar con la API de la NASA.
Define la clave API de la NASA (apiKey) utilizada para autenticar las solicitudes.
Construye la URL de la API (url) para obtener la Imagen Astronómica del Día (APOD).
Utiliza fetch para realizar una solicitud GET a la URL de la API y obtener los datos en formato JSON.
Manipula el DOM para insertar dinámicamente el título, la imagen y la explicación de la APOD dentro del contenedor especificado (#apod-container).
