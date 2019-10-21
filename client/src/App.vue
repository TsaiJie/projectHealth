<template>
  <div id="app">

    <div class="Row1">
      <div class="Row1box_1"></div>
      <div class="Row1box_1"></div>
      <div class="Row1box_2"></div>
    </div>

    <div class="Row2">
      <div class="Row2Box_1 "></div>
      <parallel-chart :parallelData="chartsData.parallelData.data" class="parallel_chart"></parallel-chart>
      <div class="Row2Box_2"></div>
    </div>

  </div>
</template>

<script>

	import DataProxy from "./dataProvider/DataProxy";
  import ParallelChart from "./components/ParallelChart";
  // import $ from "jQuery"
	export default {
		name: 'app',
		data() {
			return {
				chartsData: {
					baseData: {},
					parallelData: {
						data:[]
          }
				}
			}
		},
		components: {
			ParallelChart
		},
		created: async function() {
				await DataProxy.initChartsData(this.chartsData);
				console.log(this.$);
		},
	}
</script>

<style>
  .Row1 {
    position: relative;
    height: 470px;
    padding-top: 20px;
  }
  .Row2 {
    width: 100%;
    position: relative;
  }
  .parallel_chart {
    position: absolute;
    left:30%;
  }
  .Row1box_1 {
    position: absolute;
    width: 500px;
    height: 420px;
    left: 1%;
    /*border: 1px black solid;*/
    background-color: greenyellow;
  }
  .Row1box_2 {
    position: absolute;
    width: 500px;
    height: 420px;
    right: 1%;
    /*border: 1px black solid;*/
    background-color: yellowgreen;
  }
  .Row2Box_1 {
    position: absolute;
    left: 1%;
    width: 500px;
    height: 480px;
    /*border: 1px black solid;*/
    background-color: deepskyblue;
  }
  .Row2Box_2 {
    position: absolute;
    right: 1%;
    width: 500px;
    height: 480px;
    background-color: orangered;
  }
</style>
