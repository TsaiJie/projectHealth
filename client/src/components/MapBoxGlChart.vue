<template>
    <div id="map"></div>
</template>

<script>
	import * as d3 from 'd3'
	export default {
		name: "MapBoxGlChart",
		mounted(){
			this.init();
		},
		methods: {
			init(){
        let width = 600,
            height = 600;
        let svg = d3.select("#map").append("svg")
                    .attr("width", width)
                    .attr("height", height);
      //  定义地图的投影
        let projection = d3.geo.mercator()
                          .center([105,30])
                          .scale(10000)
                          .translate([width/2, height/0.95]);
      //  定义地理路径生成器
        let path = d3.geo.path()
                      .projection(projection);//设定投影
      //  请求mianyang.json
        d3.json("../mianyang.json",  (error, geoRoot) => {
        	if (error) {
        		return console.log(error);
          }

        	let groups = svg.append("g");
        	//绘制地图
        	groups.selectAll("path")
                .data(geoRoot.features)
                .enter()
                .append("path")
                  .attr("class", "community")
                  .style("fill", function (d,i) {
                    return "#aaa";
                  })
                  .attr("stroke","black")
                  .attr("d", path)
                .on("click", function (d,i) {
                	let communities = d3.selectAll(".community")[0];
                	communities.forEach(function (element) {
                		element.style.fill = "#aaa";
									});
									d3.select(this).transition().duration(500).style("fill","#eee");
                });
        	//添加文字
        	svg.selectAll("text")
            .data(geoRoot.features)
            .enter()
            .append("text")
            .attr("transform", function (d,i) {
            	if (d.properties.id == "510726") {
								return "translate("+(path.centroid(d)[0]-40)+","+ (path.centroid(d)[1]+10)+")";
              }
							return "translate("+(path.centroid(d)[0]-20)+","+ (path.centroid(d)[1]+10)+")";
						})
            .text(function(d){
            	return d.properties.name;
            });

          console.log(this.$chartData);
				})



      },
		}
	}
</script>

<style lang="less">
  .community:hover {
    cursor: pointer;
  }
</style>