const pgPromise = require("pg-promise")
const config = {
  // configuracion para la base de datos posgres en heroku
    user: 'eckggwhmbnmqhu',
    host: 'ec2-52-22-135-159.compute-1.amazonaws.com',
    database: 'dapc4jhauuask4',
    password: '6cc0513392ea38bed0cae0430f026bc4a18c79c291a370385790aa048a271336',
    ssl:true      
}
const pgp = pgPromise({})
const db = pgp(config)
exports.db=db;  