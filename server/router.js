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

//把路由都挂载到router路由中
router.get('/TNBData', function (req, res) {
	fs.readFile('./tnb_data.json', 'utf8',function (err, data) {
		if (err) {
			throw res.status(500).send('Failed to get data');
		}

		let dataObj = JSON.parse(data);
		let subData = [];

		for (let dataKey in dataObj.data) {
			if( dataKey >= 100){
				break;
			}
			subData.push(dataObj.data[dataKey]);
		}

		res.status(200);
		res.json(subData);


	})
});

//导出路由
 module.exports = router;