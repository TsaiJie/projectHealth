
// router模块
/**
 * router.js路由模块
 * 职责：
 *    处理路由，根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一
 */
const fs = require('fs');
const ParalledDataHper = require('./dataProvider/ParalledDataHper')
const express = require('express');
//解析csv格式的数据
// const d3 = require('d3-dsv');
//创建路由容器
const router = express.Router();
//当服务器运行的时候 先读取文件数据
let AX_data = {},
		BC_data = {},
		FC_data = {},
		JY_data = {},
		PW_data = {},
		ST_data = {},
		YX_data = {},
		ZT_data = {},
		YT_data = {};


fs.readFile('./data/TNB_AX.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	const rawData = JSON.parse(data);
	// AX_data = JSON.parse(data);
	AX_data.parallel = ParalledDataHper.initParallelData(rawData["510724"]);

});

fs.readFile('./data/TNB_BC.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	const rawData = JSON.parse(data);
	BC_data.parallel = ParalledDataHper.initParallelData(rawData["510726"]);
	// console.log(BC_data);

	// console.log(BC_data ["510726"]);
});

fs.readFile('./data/TNB_FC.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	const rawData = JSON.parse(data);
	FC_data.parallel = ParalledDataHper.initParallelData(rawData["510703"]);

});

fs.readFile('./data/TNB_JY.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	const rawData = JSON.parse(data);
	JY_data.parallel = ParalledDataHper.initParallelData(rawData["510781"]);

});

fs.readFile('./data/TNB_PW.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	const rawData = JSON.parse(data);
	PW_data.parallel = ParalledDataHper.initParallelData(rawData["510727"]);

});

fs.readFile('./data/TNB_ST.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	const rawData = JSON.parse(data);
	ST_data.parallel = ParalledDataHper.initParallelData(rawData["510722"]);

});

fs.readFile('./data/TNB_YX.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	const rawData = JSON.parse(data);
	YX_data.parallel = ParalledDataHper.initParallelData(rawData["510704"]);

});

fs.readFile('./data/TNB_ZT.json', 'utf8',function (err, data) {
	if (err) {
		throw res.status(500).send('Failed to get data');
	}
	const rawData = JSON.parse(data);
	ZT_data.parallel = ParalledDataHper.initParallelData(rawData["510725"]);

});

// fs.readFile('./data/TNB_YT.json', 'utf8',function (err, data) {
// 	if (err) {
// 		throw res.status(500).send('Failed to get data');
// 	}
// 	YT_data = JSON.parse(data);
// 	// console.log(ZT_data["510725"]);
// });


//把路由都挂载到router路由中
router.get('/TNB_AX', function (req, res) {
	if (AX_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	res.json(AX_data);
	// res.json(AX_data["510724"]);
});

router.get('/TNB_BC', function (req, res) {
	if (BC_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	// console.log(BC_data)
	res.json(BC_data);
	// res.json(BC_data["510726"])
});

router.get('/TNB_FC', function (req, res) {
	if (FC_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	res.json(FC_data);
});

router.get('/TNB_JY', function (req, res) {
	if (JY_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	res.json(JY_data);
});

router.get('/TNB_PW', function (req, res) {
	if (PW_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	res.json(PW_data);
});

router.get('/TNB_ST', function (req, res) {
	if (ST_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	res.json(ST_data);
});

router.get('/TNB_YX', function (req, res) {
	if (YX_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	res.json(YX_data);
});

router.get('/TNB_ZT', function (req, res) {
	if (ZT_data == null) {
		throw res.status(500).send('Failed to get data');
	}
	res.status(200);
	res.json(ZT_data);
});

// router.get('/TNB_YT', function (req, res) {
// 	if (YT_data == null) {
// 		throw res.status(500).send('Failed to get data');
// 	}
// 	res.status(200);
// 	res.json(YT_data["510723"]);
// });



//导出路由
 module.exports = router;