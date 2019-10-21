export default class ParallelDataHelper {
	static initParallelData(baseData) {
		return ParallelDataCalc(baseData);
	}
}

function ParallelDataCalc(baseData) {
	let parallelData = [];
	for (let baseDataIndex in baseData) {
		for (let subDataIndex in baseData[baseDataIndex].infor) {
			let data = [];
			data.push(baseData[baseDataIndex].BH);
			data.push(baseData[baseDataIndex].infor[subDataIndex].RXYL);
			data.push(baseData[baseDataIndex].infor[subDataIndex].RYJL);
			data.push(baseData[baseDataIndex].infor[subDataIndex].YDC);
			data.push(baseData[baseDataIndex].infor[subDataIndex].KFXTZ);
			// data.push(baseData[baseDataIndex].infor[subDataIndex].DA_ID);
			parallelData.push(data);
		}

	}

	console.log(parallelData);
	return parallelData;
}