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
//app.listen(3000)
app.listen(process.env.PORT || 5050)
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
console.log("Server running in http://localhost:5050")
