class ParallelDataHelper {
	static initParallelData(baseData) {
		return ParallelDataCalc(baseData);
	}
}

function ParallelDataCalc(baseData) {
	// console.log(baseData);
	let parallelData = [];
	for (let baseDataIndex in baseData) {
		// if (baseDataIndex > 300) {
		// 	break;
		// }
		for (let subDataIndex in baseData[baseDataIndex].infor) {
			let data = [];
			// data["编号"] = baseData[baseDataIndex].BH;
			// data["日吸烟量"] = baseData[baseDataIndex].infor[subDataIndex].RXYL;
			// data["日饮酒量"] = baseData[baseDataIndex].infor[subDataIndex].RYJL;
			// data["运动量"] = baseData[baseDataIndex].infor[subDataIndex].YDC;
			// data["空腹血糖值"] = baseData[baseDataIndex].infor[subDataIndex].KFXTZ;

			data.push(baseData[baseDataIndex].BH);
			data.push(baseData[baseDataIndex].infor[subDataIndex].RXYL);
			data.push(baseData[baseDataIndex].infor[subDataIndex].RYJL);
			data.push(baseData[baseDataIndex].infor[subDataIndex].YDC);
			data.push(baseData[baseDataIndex].infor[subDataIndex].KFXTZ);
			// data.push(baseData[baseDataIndex].infor[subDataIndex].DA_ID);

			parallelData.push(data);
		}

	}
	// console.log(parallelData);
	return parallelData;
}



module.exports = ParallelDataHelper;