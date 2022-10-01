// const express = require('express');
import express from 'express';  //agregar el type: module en el package.json
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json()) //Pasar a json los datos para interpretarlos y pasarlo a las rutas

//Las rutas
app.use(indexRoutes)  //Verificamos la conexion a la BBDD
app.use('/api',employeesRoutes)  

//Si no encuentra las rutas anteriores
app.use((req, res, next) =>{
  res.status(404).json({
    message: 'endpoint not found'
  })
})

export default app