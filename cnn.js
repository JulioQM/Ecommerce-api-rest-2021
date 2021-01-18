const pgPromise = require("pg-promise")
const config = {
  // configuracion para la base de datos posgres en heroku
    user: 'ofarsfiltxkyqf',
    host: 'ec2-3-216-181-219.compute-1.amazonaws.com',
    database: 'den1rm3it6t51s',
    password: 'ab9a039d02f8e0820f0dd4bf3bb173017b820c61cedca8c88b92c3510b51bab7',
    ssl:true      
}
const pgp = pgPromise({})
const db = pgp(config)
exports.db=db;  