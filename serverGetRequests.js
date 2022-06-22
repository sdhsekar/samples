// Example to Handle Get Requests using request Node.js module
// include request module
var request = require("request");
 
// make a get request for the resource "http://www.google.com"
request("http://www.google.com",function(error,response,body)
{
    console.log(response);
});