// const express = require('express');
import express from 'express';  //agregar el type: module en el package.json
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(indexRoutes)
app.use(employeesRoutes)

app.listen(3000);
console.log('Server running on port 3000 xd');