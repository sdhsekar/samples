var form = new formidable.IncomingForm();
form.parse(req, function (err, fields, files) {
    // oldpath : temporary folder to which file is saved to
    var oldpath = files.filetoupload.path;
    var newpath = upload_path + files.filetoupload.name;
    // copy the file to a new location
    fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        // you may respond with another html page
        res.write('File uploaded and moved!');
        res.end();
    });
});