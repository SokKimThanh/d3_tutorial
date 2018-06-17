var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var portmysql = 3306, password = "123456", database = 'tracnghiemtinhcach';
let getDefaultPort = (portmysql) => {
    let port = 0;
    if (portmysql !== 3333) {
        port = 3306; 
    } else {
        port = 3333;
    }
    return port;
}
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: database,
    password: password,
    port: getDefaultPort(portmysql)
});
db.connect();
router.use(bodyParser.json());

//lay het  
router.get('/', function (req, res) {
    db.query('select * from question', function (err, rows, fields) {
        if (err) { db.end(); throw err; } else { res.json(rows); }
    });
});
//lay 1  
router.get('/:id', function (req, res) {
    db.query('select * from question where id= ' + req.params.id, function (err, rows, fields) {
        if (err) { db.end(); throw err; } else { res.json(rows); }
    });
});

//xoa  
router.delete('/delete/:id', function (req, res) {
    var id = req.params.id;
    var sql = "delete from question where id = '" + id + "'";
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.json(0);
        }
        else {
            res.json(rows);
        }
    });
});

//them  
let decode_url = "/add/:3/"
router.post(decode_url, function (req, res) {
    let code = req.body.code;
    let number = req.body.number;
    let question = req.body.question;
    var sql = 'insert into question(code,number,question,status) values ("' + code + '","' + number + '","' + question + '",1)';
    db.query(sql, function (err, rows, fields) {
        if (err) { db.end(); throw err; } else { res.json(rows); }
    });
});

//sua
// router.put('/cm/edit/dt/question_id/:question_id', function (req, res) {
//     let question_id = req.params.question_id;
//     alert(question_id)
//     let code = req.body.code;
//     let number = req.body.number;
//     let question = req.body.question;
//     var sql = "update question set code='" + code + "', number='" + number + "', question='" + question + "', status='" + 1 + "' where id = '" + question_id + "'";

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