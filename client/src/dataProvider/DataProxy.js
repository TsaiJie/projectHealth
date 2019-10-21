//从ServerDataProvider获取源数据，从APP获取数据对象，把对源数据进行处理之后绑定到数据对象上
import ServerDataProvider from "./ServerDataProvider";
import ParallelDataHelper from "./ParallelDataHelper";
export default class DataProxy {
	static async initChartsData (chartsData) {
			ServerDataProvider.getTNBJson().then(
					(response) => {
						chartsData.baseData = response.data;
						// //从源数据中抽取初平行坐标需要的数据
						chartsData.parallelData.data = ParallelDataHelper.initParallelData(chartsData.baseData);
						console.log(chartsData);
					},
					(error) => {
						console.log('unable to get group data from sever')
					}
			)


	}

	// static initParallelData(baseData) {
	// 	return ParallelDataHelper.initParallelData(baseData);
	// }
}

// function f(data) {
// 	// console.log(data)
// 	let a=[];
// 	for (let i=0;i<20000;i++){
// 		a.push(data.data[i])
// 	}
// 	return a
// }
