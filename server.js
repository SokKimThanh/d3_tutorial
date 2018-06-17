//import express
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 30;
//middleware
app.use(express.static(path.join(__dirname, 'html')));

app.listen(port, () => { console.log("d3-tutorial", port) });
app.use("/trac_nghiem_tinh_cach",require('./database/routes/tracnghiemtinhcach/tntc.api.js'));
app.use("/cung_hoang_dao",require('./database/routes/cung_hoang_dao/cung_hoang_dao.api.js'));