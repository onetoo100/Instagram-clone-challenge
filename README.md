# Instagram Challenge
Aplicación similar a instagram que permite crear y visualizar imagenes.
***
## Tabla de contenido
1. [Informacion general](#Informacion)
2. [Tecnologias](#Tecnologias)
3. [Instalacion](#Instalacion)
4. [FAQs](#faqs)

### Informacion general
***
* Aplicación responsiva similar a instagram que permite la creación y visualización de imágenes y videos.
* Al iniciarla por primera vez con una base de datos vacía, el sistema crea automáticamente una lista de 3 publicaciones que pueden ser visualizadas en forma vertical. Al hacer click en el logo de Instagram o en el icono "home", la página sube al inicio.
* Al agregar una nueva publicación, la misma aparece primero, arriba de las ya publicadas.
* Cada publicación tiene los mismos botones que aparecen en instagram, lo único que funciona es el de me gusta (♡), al presionarlo el símbolo cambia de color y luego se incrementa un contador que aparece debajo, ya que el sistema no cuenta con login y autenticación de usuario, se le agrega un me gusta y al presionarlo nuevamente, el contador vuelve a cero.
* En la parte superior de cada publicación hay un botón (...) que cuando presionado abre un modal que permite al usuario elegir la opción para editar la publicación (la edición solo permite el cambio de texto).
* En el menú superior hay una lista de iconos, el icono (+) permite abrir un modal donde el usuario puede crear sus publicaciones. Al abrirlo, el usuario puede arrastrar y soltar una imagen o video directamente, o hacer clic en el botón que aparece abajo y se abrirán sus archivos y el usuario puede elegir lo que desea. Luego, el modal muestra una vista previa de la imagen o video elegido y, al lado, tiene un campo de texto que le permite al usuario agregar un comentario (opcional) a su publicación. Arriba hay un botón (Share), que agrega la nueva publicación a la lista existente y al banco de datos.
* Cuando el usuario elige editar la publicación, se abre en el mismo modal de creación, pero ya cargado con las informaciones de la publicación que será o no editada y el botón (Share) cambia a (Done), al igual que en instagram.
* Además de la lista de publicaciones que se pueden ver en vertical, el sistema tiene una sección de historias en la parte superior y una lista de sugerencias en el lado derecho de la, similar a Instagram. Ambos traen imágenes aleatorias tomadas de una API externa pública y nombres aleatorios que provienen de una biblioteca externa. Lo mismo ocurre con la imagen y el nombre del perfil de usuario.


https://user-images.githubusercontent.com/81515650/189505626-6d469a27-94a6-4eba-baf7-fc100270a083.mp4


***
### Tecnologias
***
API - carpeta "Back"
* Node js
* Express 	- manejo de peticiones
* Cors 		- permite que nuestro dominio reciba solicitudes de otros dominios.
* Dotenv 	- manejo de las variables de entorno.
* Mongoose 	- para consultas en el banco de datos en Mongo.
* Multer 	- para el manejo de los archivos que son enviados al servidor.
***
Aplicacion React - carpeta "Front"
***
* React JS
* Axios			- Para las llamadas a nuestra API.
* React-Dropzone	- Para el arrastrar y soltar de nuestras imágenes.
* React-icons
* React-router-dom
* SASS			- Para los estilos
* Swiper		- Usado en la creación del swiper de historias.
***
### Instalacion
***
```
API
$ git clone https://github.com/onetoo100/Instagram-clone-challenge.git
$ cd Instagram-clone-challenge/Back
$ npm i
$ create .env file and add environment variable MONGODB=
$ create /public/uploads/
$ create /public/upload-videos/
$ npm run dev
$ variables de entorno: MONGODB=mongodb://[username[:password]@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database]][?options]

Aplicacion ReactJS		
$ git clone https://github.com/onetoo100/Instagram-clone-challenge.git
$ cd Instagram-clone-challenge/Front
$ npm i
$ create .env.development.local file and add environment variable REACT_APP_BACKEND_URL=
$ npm start
$ variables de entorno: REACT_APP_BACKEND_URL=http://localhost:[:port]
```
### FAQs
***
1. **Tipos de imagenes que son permitidas**
* jpeg
* pjpeg
* png
* gif
* Entre 50000 y 5242880 bytes

2. **Tipos de videos que son permitidos**
* mp4
