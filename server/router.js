// router模块
/**
 * router.js路由模块
 * 职责：
 *    处理路由，根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一
 */
const fs = require('fs');

const express = require('express');
//解析csv格式的数据
// const d3 = require('d3-dsv');
//创建路由容器
const router = express.Router();
//当服务器运行的时候 先读取文件数据
let AX_data = null,
		BC_data = null,
		FC_data = null,
		JY_data = null,
		PW_data = null,
		ST_data = null,
		YX_data = null,
		ZT_data = null;


fs.readFile('./data/TNB_AX.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	 AX_data = JSON.parse(data);
	// console.log(AX_data["510724"]);
});

fs.readFile('./data/TNB_BC.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	BC_data = JSON.parse(data);
	// console.log(BC_data ["510726"]);
});

fs.readFile('./data/TNB_FC.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	FC_data = JSON.parse(data);
	// console.log(FC_data["510703"]);
});

fs.readFile('./data/TNB_JY.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	JY_data = JSON.parse(data);
	// console.log(JY_data["510781"]);
});

fs.readFile('./data/TNB_PW.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	PW_data = JSON.parse(data);
	// console.log(PW_data["510727"]);
});

fs.readFile('./data/TNB_ST.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	ST_data = JSON.parse(data);
	// console.log(ST_data["510722"]);
});

fs.readFile('./data/TNB_YX.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	YX_data = JSON.parse(data);
	// console.log(YX_data["510704"]);
});

fs.readFile('./data/TNB_ZT.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	ZT_data = JSON.parse(data);
	// console.log(ZT_data["510725"]);
});

//把路由都挂载到router路由中
router.get('/TNBData', function (req, res) {
	if (AX_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	res.json(AX_data["510724"]);
});

router.get('/TNB_BC', function (req, res) {
	if (BC_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	// let subData = [];
	// for (let dataKey in BC_data["510726"]) {
	// 	if( dataKey >= 100){
	// 		break;
	// 	}
	// 	subData.push(BC_data["510726"][dataKey]);
	// 	// console.log(subData)
	// }
	res.status(200);
	// res.json(subData);
	res.json(BC_data["510726"])
});


//导出路由
 module.exports = router;