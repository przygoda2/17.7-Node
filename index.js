var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Lista plików przed zapisem'.green);
    console.log(files);
    fs.writeFile('./listFiles.txt', files, function(err){
        if (err) throw err;
        console.log('Zapisano!'.green);
        fs.readFile('./list.txt', 'utf-8', function(err, data) {
            console.log('Lista plików po zapisie'.green);
            console.log(data);
        });
    });
}); 