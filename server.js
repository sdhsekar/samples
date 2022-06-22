http.createServer(function (req, res) {
    if (req.url == '/uploadform') {
        // if request URL contains '/uploadform'
        // fill the response with the HTML file containing upload form
    } else if (req.url == '/fileupload') {
        // if request URL contains '/fileupload'
        // using formiddable module,
        // read the form data (which includes uploaded file)
        // and save the file to a location.
    } 
}).listen(8086);