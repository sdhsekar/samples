// include request module
var request = require("request");
 
// make a get request for the resource "http://www.go1411ogle.com"
request("http://www.go1411ogle.com",function(error,response,body)
{
    console.log(error);
});