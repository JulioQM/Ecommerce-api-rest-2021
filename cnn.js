const pgPromise = require("pg-promise")
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'e_comerce',
    password: '12345',
    port: 5432    
}

const pgp = pgPromise({})
const db = pgp(config)
//db.any("select*from publicidad").then(res => {console.log(res)})
exports.db=db; 




