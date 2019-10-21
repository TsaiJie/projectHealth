const express = require('express');
const app = express();
const router = require('./router');

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Cache-Control");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	res.header("Content-Type", "application/json;charset=utf-8");
	res.header('Access-Control-Allow-Credentials', true);
	next();
});

app.use(router);

const server = app.listen(3000, '127.0.0.1', function () {
	const host = server.address().address;
	const port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port)
});