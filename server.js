
var request = require('request');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const upload = require('./upload-file');






app.use(cors());
app.use(express.static('./public'));

                    app.get('/test', function (req, res) {
                        res.sendFile(__dirname + '/public/uploads/xxx.png'); 
                    });

        app.get('/download/:file',(req, res) => {
            var file = req.params.file;
            var fileLocation = path.join(__dirname + '/public/uploads/',file);
            console.log(fileLocation);
            res.download(fileLocation, file); 
            
          });

//app.use(express.static(path.join(__dirname, 'public/uploads')));
app.use('/upload', upload);



request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
  
  console.log('body:', JSON.parse(body)[1]); // Print the HTML for the Google homepage.
});

app.listen(process.env.PORT,() => {
    console.log("Server Started!"); 
})