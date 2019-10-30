<template>
  <div >
<!--    <h3>数组为：{{parallelData}}</h3>-->
<!--    <h3 v-show="parallelData.length === 0">{{this.msg}}</h3>-->
    <div id="myChart" :style="{width: '700px', height: '480px'}"></div>
  </div>

</template>

<script>
	export default {
		name: "ParallelChart",
		data () {
			return {
				msg: 'Welcome to ParallelChart'
			}
		},
    props:{
			parallelData:{
			  type: Array
      }
    },
    watch:{
			parallelData(val){
				this.chartInit();
      }
    },
		mounted(){
			this.chartInit();
		},
		methods: {
			chartInit(){
				// 基于准备好的dom，初始化echarts实例
        // alert("第一次进入时数组为：" + this.parallelData);
        if (this.parallelData.length === 0 ){
        	return
        }
        console.log(this.parallelData);
				let myChart = this.$echarts.init(document.getElementById('myChart'));
				let schema = [
					{name: 'BH', index: 0, text: '编号'},
					{name: 'RXYL', index: 1, text: '日吸烟量'},
					{name: 'RYJL', index: 2, text: '日饮酒量'},
					{name: 'YDC', index: 3, text: '运动（次）'},
					{name: 'KFXTZ', index: 4, text: '空腹血糖值'},
				];

				let lineStyle = {
					normal: {
						width: 1,
						opacity: 0.5
					}
				};
				// 绘制图表
				myChart.setOption({
					color: [
						 '#91c7ae',
					],
					parallelAxis: [
						{dim: 0, name: schema[0].text, type: 'category',axisLabel:"false"},
						{dim: 1, name: schema[1].text},
						{dim: 2, name: schema[2].text},
						{dim: 3, name: schema[3].text},
						{dim: 4, name: schema[4].text},
					],
					parallel: {
						left: '3%',
						right: '5%',
						bottom: '4%',
						top: '10%',
					},
					series: [
						{
							name: '个人信息',
							type: 'parallel',
							lineStyle: {
								width:1,
                opacity:0.2,
              },
							data: this.parallelData,
							smooth : 0.1,
						}

					]

				});
			}
		}
	}
</script>

<style scoped>
#myChart {

}
</style>