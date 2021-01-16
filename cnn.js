  const mysql      = require('mysql');
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'e_comerce'
  });  
  connection.connect();
  

  

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
