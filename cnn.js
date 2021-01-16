  const mysql      = require('mysql');
  const connection = mysql.createConnection({
    host     : 'us-cdbr-east-03.cleardb.com',
    user     : 'b1f0e9f49fd981',
    password : '54fdc415',
    database : 'heroku_85c73d477f92137'
  });  
  connection.connect();
  
 // mysql://b1f0e9f49fd981:54fdc415@us-cdbr-east-03.cleardb.com/heroku_85c73d477f92137?reconnect=true
  

 connection.query('SELECT * FROM publicidad', function (error, results, fields) {
    if (error){
        throw error;
    }
    results.forEach(result => {
        console.log(result);
    });
});  

//connection.end();
exports.connection=connection; 
