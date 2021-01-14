//Paquetes
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//rutas
app.use(require("./routes/index"))

app.get('/',(req, res) => {res.send("Welcome to E_COMMERCE API-REST")})
//ejecucion
app.listen(3000)
console.log("Server running in http://localhost:3000")
