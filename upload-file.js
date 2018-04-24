const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + new Date().getTime() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5},
    fileFilter: (req, file, cb) => {
        imgFilter(file, cb);
    }
}).single('xxx');

function imgFilter(file, cb){
    const patt = /jpg|png|jpeg|pdf/;
    const result1 = patt.test(path.extname(file.originalname).toLowerCase());
    const result2 = patt.test(file.mimetype);

    if(result1 && result2){
        return cb(null, true);
    }
    else {
        return cb('this file is not allowed');
    }
}

router.post('/', (req, res, next) => {
    //console.log('fullaly5');
    upload(req, res, err => {
        if(err){
            res.send(err);
            //console.log(err);
        }
        else {
            // console.log(req.file);
            // console.log('____________');
            //res.send('tamam');
            res.json({success: 'tamam'});
            
        }
    });
});

module.exports = router;