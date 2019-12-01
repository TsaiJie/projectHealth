class ParallelDataHelper {
	static initParallelData(baseData) {
		return getMeanData(baseData);
	}
}

function getMeanData(baseData) {
	let meanData = [];
	let ID = baseData[0].BH;
	console.log(baseData.length)
	for (let baseDataIndex in baseData) {
		let RXYLSum = 0,
				RYJLSum = 0,
				YDCSum = 0,
				KFXTZSum = 0,
				RXYLMean = 0,
				RYJLMean = 0,
				YDCMean = 0,
				KFXTZMean = 0;
		let  data = [];
		// console.log(baseData[i].BH)
		// if (baseDataIndex >=1) {
		// 	break;
		// }
		for (let subDataIndex in baseData[baseDataIndex].infor){
				// let RXYL = baseData[baseDataIndex].infor[subDataIndex].RXYL;
				// let RYJL = baseData[baseDataIndex].infor[subDataIndex].RYJL;
				// let YDC = baseData[baseDataIndex].infor[subDataIndex].YDC;
				// let KFXTZ = baseData[baseDataIndex].infor[subDataIndex].KFXTZ;
				RXYLSum += baseData[baseDataIndex].infor[subDataIndex].RXYL;
				RYJLSum += baseData[baseDataIndex].infor[subDataIndex].RYJL;
				YDCSum += baseData[baseDataIndex].infor[subDataIndex].YDC;
				KFXTZSum += baseData[baseDataIndex].infor[subDataIndex].KFXTZ;
		}
		RXYLMean = (RYJLSum / baseData[baseDataIndex].infor.length).toFixed(2);
		RYJLMean = (RYJLSum / baseData[baseDataIndex].infor.length).toFixed(2);
		YDCMean = (YDCSum / baseData[baseDataIndex].infor.length).toFixed(2);
		KFXTZMean = (KFXTZSum / baseData[baseDataIndex].infor.length).toFixed(2);
		// console.log(RXYLMean)
		// console.log(RYJLMean)
		// console.log(YDCMean)
		// console.log(KFXTZMean)
		data.push(Math.log2(RXYLMean))
		data.push(Math.log2(RYJLMean))
		data.push(Math.log2(YDCMean))
		data.push(Math.log2(KFXTZMean))
		// data.push((RXYLMean))
		// data.push((RYJLMean))
		// data.push((YDCMean))
		// data.push((KFXTZMean))
		meanData.push(data);
	}
	// console.log(meanData)
	return meanData;

}
function ParallelDataCalc(baseData) {

	let parallelData = [];
	for (let baseDataIndex in baseData) {
		// if (baseDataIndex > 1) {
		// 	break;
		// }


		for (let subDataIndex in baseData[baseDataIndex].infor) {
			let data = [];

			// data.push(baseData[baseDataIndex].BH);
			data.push(baseData[baseDataIndex].infor[subDataIndex].RXYL);
			data.push(baseData[baseDataIndex].infor[subDataIndex].RYJL);
			data.push(baseData[baseDataIndex].infor[subDataIndex].YDC);
			data.push(baseData[baseDataIndex].infor[subDataIndex].KFXTZ);
			// data.push(baseData[baseDataIndex].infor[subDataIndex].DA_ID);

			parallelData.push(data);
		}

	}
	return parallelData;
}



module.exports = ParallelDataHelper;