var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var portmysql = 3333;
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tracnghiemtinhcach',
    password: "123456",
    port: portmysql
});


db.connect();
router.use(bodyParser.json());


//lay danh sach  
router.get('/', function (req, res) {
    db.query('select * from question', function (err, rows, fields) {
        if (err) { db.end(); throw err; } else { res.json(rows); }
    });
});




//xoa  
// router.delete('/delete/:id', function (req, res) {

//     var id = req.params.id;
//     var sql = "delete from question where id = '" + id + "'";

//     db.query(sql, function (err, rows, fields) {
//         if (err) {
//             res.json(0);
//         }
//         else {
//             res.json(rows);
//         }
//     });

// });




//them  
let decode_url = "%3Fcm%3Dadd%26dt%3D%7Btrac_nghiem_tinh_cach%3A%7Bcode%3Acode%2C%20number%3Anumber%2Cquestion%3Aquestion%2Cstatus%3Astatus%7D%7D"
router.post(decode_url, function (req, res) {
    // let code = 
    var sql = 'insert into question(code,number,question,status) values ("' +
        req.body.code + '","' + req.body.number + '","' + req.body.question + '",1)';
    db.query(sql, function (err, rows, fields) {
        if (err) { db.end(); throw err; } else { res.json(rows); }
    });
});



//sua  
// router.put('/edit/:id', function (req, res) {
//     var id = req.params.id;
//     var sql = "update question set pro_code='" + req.body.pro_code + "', pro_name='" + req.body.pro_name + "', pro_description='" + req.body.pro_description + "', pro_status='" + req.body.pro_status + "' where id = '" + id + "'";

//     db.query(sql, function (err, rows, fields) {
//         if (err) {
//             db.end();
//             throw err;
//         }
//         else {
//             res.json(rows);
//         }
//     });

// });

module.exports = router;