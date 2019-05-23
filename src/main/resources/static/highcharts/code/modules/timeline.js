/*
  highcharts JS v7.1.1 (2019-04-09)

 Timeline series

 (c) 2010-2019 Highsoft AS
 Author: Daniel Studencki

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/timeline",["highcharts"],function(f){c(f);c.Highcharts=f;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function f(e,c,f,n){e.hasOwnProperty(c)||(e[c]=n.apply(null,f))}c=c?c._modules:{};f(c,"modules/timeline.src.js",[c["parts/Globals.js"]],function(e){var c=e.addEvent,f=e.defined,n=e.merge,r=e.isNumber,p=e.pick,t=e.Point,
k=e.Series,u=e.seriesType,q=e.seriesTypes;u("timeline","line",{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 10px"\x3e {point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,connectorWidth:1,backgroundColor:"#ffffff",formatter:function(){var a;a=this.series.chart.styledMode?
"\x3cspan\x3e\u25cf \x3c/span\x3e":'\x3cspan style\x3d"color:'+this.point.color+'"\x3e\u25cf \x3c/span\x3e';return a+='\x3cspan class\x3d"highcharts-strong"\x3e'+(this.key||"")+"\x3c/span\x3e\x3cbr/\x3e"+(this.point.label||"")},borderWidth:1,borderColor:"#999999",borderRadius:3,distance:100,alternate:!0,verticalAlign:"middle",color:"#333333",style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1},
{trackerGroups:["markerGroup","dataLabelsGroup"],drawLegendSymbol:e.LegendSymbolMixin.drawRectangle,drawTracker:e.TrackerMixin.drawTrackerPoint,init:function(){var a=this;k.prototype.init.apply(a,arguments);c(a,"afterTranslate",function(){var b,d=Number.MAX_VALUE;a.points.forEach(function(a){(a.isInside=a.visible)&&!a.isNull&&(f(b)&&(d=Math.min(d,Math.abs(a.plotX-b))),b=a.plotX)});a.closestPointRangePx=d});c(a,"drawDataLabels",function(){a.distributeDL()});c(a,"afterDrawDataLabels",function(){var b;
a.points.forEach(function(a){if(b=a.dataLabel)return b.animate=function(a){this.targetPosition&&(this.targetPosition=a);return e.SVGElement.prototype.animate.apply(this,arguments)},b.targetPosition||(b.targetPosition={}),a.connector?a.alignConnector():a.drawConnector()})})},alignDataLabel:function(a,b){var d=this.chart.inverted,l=this.visibilityMap.filter(function(a){return a}),h=this.visiblePointsCount,c=l.indexOf(a),l=this.options.dataLabels,g=a.userDLOptions||{},c=l.alternate?c&&c!==h-1?2:1.5:
1,e,h=Math.floor(this.xAxis.len/h),f=b.padding;a.visible&&(e=Math.abs(g.x||a.options.dataLabels.x),d?(d=2*(e-f)-a.itemHeight/2,d={width:d,textOverflow:b.width/d*b.height/2>h*c?"ellipsis":"none"}):d={width:g.width||l.width||h*c-2*f},b.css(d),this.chart.styledMode||b.shadow(l.shadow));k.prototype.alignDataLabel.apply(this,arguments)},processData:function(){var a=0,b;this.visibilityMap=this.getVisibilityMap();this.visibilityMap.forEach(function(b){b&&a++});this.visiblePointsCount=a;for(b=0;b<this.xData.length;b++)this.yData[b]=
1;k.prototype.processData.call(this,arguments)},getXExtremes:function(a){var b=this;a=a.filter(function(a,c){return b.points[c].isValid()&&b.points[c].visible});return{min:e.arrayMin(a),max:e.arrayMax(a)}},generatePoints:function(){var a=this;k.prototype.generatePoints.apply(a);a.points.forEach(function(b,d){b.applyOptions({x:a.xData[d]},a.xData[d])})},getVisibilityMap:function(){return(this.data.length?this.data:this.userOptions.data).map(function(a){return a&&!1!==a.visible&&!a.isNull?a:!1})},distributeDL:function(){var a=
this,b=a.options.dataLabels,d,c,h={},e=1,g=b.distance;a.points.forEach(function(l){l.visible&&!l.isNull&&(d=l.options,c=l.options.dataLabels,a.hasRendered||(l.userDLOptions=n({},c)),h[a.chart.inverted?"x":"y"]=b.alternate&&e%2?-g:g,d.dataLabels=n(h,l.userDLOptions),e++)})},markerAttribs:function(a,b){var d=this.options.marker,c=a.marker||{},e=c.symbol||d.symbol,f=p(c.width,d.width,this.closestPointRangePx),g=p(c.height,d.height),m=0;if(this.xAxis.isDatetimeAxis)return q.line.prototype.markerAttribs.call(this,
a,b);b&&(d=d.states[b]||{},b=c.states&&c.states[b]||{},m=p(b.radius,d.radius,m+(d.radiusPlus||0)));a.hasImage=e&&0===e.indexOf("url");return{x:Math.floor(a.plotX)-f/2-m/2,y:a.plotY-g/2-m/2,width:f+m,height:g+m}},bindAxes:function(){var a=this;k.prototype.bindAxes.call(a);["xAxis","yAxis"].forEach(function(b){"xAxis"!==b||a[b].userOptions.type||(a[b].categories=a[b].hasNames=!0)})}},{init:function(){var a=t.prototype.init.apply(this,arguments);a.name=p(a.name,"Event");a.y=1;return a},isValid:function(){return null!==
this.options.y},setVisible:function(a,b){var d=this.series;b=p(b,d.options.ignoreHiddenPoint);q.pie.prototype.pointClass.prototype.setVisible.call(this,a,!1);d.processData();b&&d.chart.redraw()},setState:function(){var a=k.prototype.pointClass.prototype.setState;this.isNull||a.apply(this,arguments)},getConnectorPath:function(){var a=this.series.chart,b=this.series.xAxis.len,d=a.inverted,c=d?"x2":"y2",h=this.dataLabel,f=h.targetPosition,g={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:r(f.y)?f.y:h.y},
m=h.alignAttr[c[0]]<this.series.yAxis.len/2;d&&(g={x1:this.plotY,y1:b-this.plotX,x2:f.x||h.x,y2:b-this.plotX});m&&(g[c]+=h[d?"width":"height"]);e.objectEach(g,function(a,b){g[b]-=h.alignAttr[b[0]]});return a.renderer.crispLine(["M",g.x1,g.y1,"L",g.x2,g.y2],h.options.connectorWidth)},drawConnector:function(){this.connector=this.series.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel);this.alignConnector()},alignConnector:function(){var a=this.series,b=this.connector,
c=this.dataLabel,e=this.dataLabel.options=n(a.options.dataLabels,this.options.dataLabels),f=this.series.chart,k=b.getBBox(),g=k.x+c.translateX,k=k.y+c.translateY;f.inverted?k-=c.options.connectorWidth/2:g+=c.options.connectorWidth/2;c=f.isInsidePlot(g,k);b[c?"animate":"attr"]({d:this.getConnectorPath()});a.chart.styledMode||b.attr({stroke:e.connectorColor||this.color,"stroke-width":e.connectorWidth,opacity:this.dataLabel.opacity})}})});f(c,"masters/modules/timeline.src.js",[],function(){})});
//# sourceMappingURL=timeline.js.map
