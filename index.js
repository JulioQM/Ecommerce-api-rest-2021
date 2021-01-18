//Paquetes
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors=require('cors')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//cors
app.use(cors())
//rutas
app.use(require("./Routes/index"))

app.get('/',(req, res) => {res.send("Welcome to E_COMMERCE API-REST")})
//ejecucion
app.listen(3000)
console.log("Server running in http://localhost:3000")
