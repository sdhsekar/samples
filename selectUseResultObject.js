// Node.js MySQL Result Object Example
// include mysql module
var mysql = require('mysql');
  
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "arjun",    // user name to your mysql database
  password: "password",    // corresponding password
  database: "studentsDB" // use the specified database
});
  
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  con.query("SELECT * FROM students", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    // iterate for all the rows in result
    Object.keys(result).forEach(function(key) {
      var row = result[key];
      console.log(row.name)
    });
  });
});