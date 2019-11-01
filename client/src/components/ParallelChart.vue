<template>
  <div >
<!--    <h3>数组为：{{parallelData}}</h3>-->
<!--    <h3 v-show="parallelData.length === 0">{{this.msg}}</h3>-->
    <div id="myChart"></div>
  </div>

</template>

<script>
	import * as d3 from 'd3'
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
			chartInit2(){
        if (this.parallelData.length === 0 ){
          return
        }
				console.log(this.parallelData);
        console.log(this.parallelData[0]);

				let margin = {top: 30, right: 10, bottom: 10, left: 0},
						width = 700 - margin.left - margin.right,
						height = 480 - margin.top - margin.bottom;
				let svg = d3.select("#myChart")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
				const dimensions = d3.keys(this.parallelData[0]);
        console.log(dimensions);
        const y = {};
        for (let i in dimensions) {
        	let name = dimensions[i];
        	y[name] = d3.scaleLinear()
                    .domain(d3.extent(this.parallelData, function(d) {return +d[name]; }))
                    .range([height, 0])
        }
				const x = d3.scalePoint()
                    .range([0, width])
                    .padding(1)
                    .domain(dimensions);

        function path(d) {
          return d3.line()(dimensions.map(function (p) {
          	console.log(p)
          	// console.log([x(p), y[p](d[p])]);
            return [x(p), y[p](d[p])];
					}));
				}

				svg
				.selectAll("myPath")
				.data(this.parallelData)
				.enter().append("path")
				.attr("d",  path)
				.style("fill", "none")
				.style("stroke", "#69b3a2")
				.style("opacity", 0.5);

				// Draw the axis:
				svg.selectAll("myAxis")
				// For each dimension of the dataset I add a 'g' element:
				.data(dimensions).enter()
				.append("g")
				// I translate this element to its right position on the x axis
				.attr("transform", function(d) { return "translate(" + x(d) + ")"; })
				// And I build the axis with the call function
				.each(function(d) { d3.select(this).call(d3.axisLeft().scale(y[d])); })
				// Add axis title
				.append("text")
				.style("text-anchor", "middle")
				.attr("y", -9)
				.text(function(d) { return d; })
				.style("fill", "black")
        .attr("font-size","12px")

      },

			chartInit(){
				// 基于准备好的dom，初始化echarts实例
        if (this.parallelData.length === 0 ){
        	return
        }
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
              color: "white"
						}
					]

				});
			}
		}
	}
</script>

<style scoped>
#myChart {
  width: 700px;
  height: 480px;
}
</style>