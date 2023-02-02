//DEPENDENCIAS UTILIZADAS ESPECIFICAS DE TS:
//_typescript -> Librería de Typescript
//_@types/express -> Definiciones de tipado para Express
//_@types/node -> Definiciones de tipado para Node
//_concurrently -> Ejecuta varios comandos simultáneamente, en nuestro caso el compilado de TS y el arranque del servidor de dicha versión
//_nodemon -> Detecta cambios en los ficheros manteniendo la escucha del proyecto


//Importación de la librería express y sus interfaces:
import express, { Express, Request, Response } from 'express';
//Importación de dotenv para acceder a las variables de entorno:
const dotenv = require("dotenv");

//Configuración de dotenv para ejecutar su funcionalidad:
dotenv.config();

//Creación de app, el servidor express con su interfaz Express:
const app: Express = express();
//Almacenamos la variable de entorno PORT:
const port = process.env.PORT;

//Creación de la petición GET en "/" con sus argumentos tipados y la devolución de la respuesta:
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

//Escucha del servidor:
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
