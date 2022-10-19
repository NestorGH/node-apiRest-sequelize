//El archivo app tendra la configuacion de express para solo ser ejecutado en el index
import express from 'express';  //agregar el type: module en el package.json
import userRoutes from './routes/users.routes.js'
// import indexRoutes from './routes/index.routes.js'

const app = express();

//Middlewares
app.use(express.json()) //Pasar a json los datos para interpretarlos y pasarlo a las rutas

//Las rutas
app.use(userRoutes)  
// app.use(indexRoutes)  //Verificamos la conexion a la BBDD


// //Si no encuentra las rutas anteriores
// app.use((req, res, next) =>{
//   res.status(404).json({
//     message: 'endpoint not found'
//   })
// })

export default app;