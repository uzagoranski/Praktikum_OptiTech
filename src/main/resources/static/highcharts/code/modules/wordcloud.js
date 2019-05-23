/*
 highcharts JS v7.1.1 (2019-04-09)

 (c) 2016-2019 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/wordcloud",["highcharts"],function(l){a(l);a.Highcharts=l;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function l(g,t,a,n){g.hasOwnProperty(t)||(g[t]=n.apply(null,a))}a=a?a._modules:{};l(a,"mixins/draw-point.js",[],function(){var a=function(a){var g=this,n=g.graphic,t=a.animatableAttribs,u=a.onComplete,l=a.css,q=
a.renderer;if(g.shouldDraw())n||(g.graphic=n=q[a.shapeType](a.shapeArgs).add(a.group)),n.css(l).attr(a.attribs).animate(t,a.isNew?!1:void 0,u);else if(n){var A=function(){g.graphic=n=n.destroy();"function"===typeof u&&u()};Object.keys(t).length?n.animate(t,void 0,function(){A()}):A()}};return function(g){(g.attribs=g.attribs||{})["class"]=this.getClassName();a.call(this,g)}});l(a,"mixins/polygon.js",[a["parts/Globals.js"]],function(a){var g=a.deg2rad,l=a.find,n=a.isArray,J=a.isNumber,u=function(b,
c){c=J(c)?c:14;c=Math.pow(10,c);return Math.round(b*c)/c},H=function(b,c){var f=c[0]-b[0];b=c[1]-b[1];return[[-b,f],[b,-f]]},q=function(b,c){b=b.map(function(b){return b[0]*c[0]+b[1]*c[1]});return{min:Math.min.apply(this,b),max:Math.max.apply(this,b)}},A=function(b,c){var f=b[0];b=b[1];var a=g*-c;c=Math.cos(a);a=Math.sin(a);return[u(f*c-b*a),u(f*a+b*c)]},z=function(b,c,a){b=A([b[0]-c[0],b[1]-c[1]],a);return[b[0]+c[0],b[1]+c[1]]},B=function(b){var c,a=b.axes;n(a)||(a=[],c=c=b.concat([b[0]]),c.reduce(function(b,
c){var f=H(b,c)[0];l(a,function(b){return b[0]===f[0]&&b[1]===f[1]})||a.push(f);return c}),b.axes=a);return a},E=function(b,c){b=B(b);c=B(c);return b.concat(c)};return{getBoundingBoxFromPolygon:function(b){return b.reduce(function(b,a){var c=a[0];a=a[1];b.left=Math.min(c,b.left);b.right=Math.max(c,b.right);b.bottom=Math.max(a,b.bottom);b.top=Math.min(a,b.top);return b},{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPolygon:function(b,a,f,g,n){var c=
[b,a],y=b-f/2;b+=f/2;f=a-g/2;a+=g/2;return[[y,f],[b,f],[b,a],[y,a]].map(function(b){return z(b,c,-n)})},isPolygonsColliding:function(b,a){var c=E(b,a);return!l(c,function(c){var f=q(b,c);c=q(a,c);return!!(c.min>f.max||c.max<f.min)})},movePolygon:function(b,a,f){return f.map(function(c){return[c[0]+b,c[1]+a]})},rotate2DToOrigin:A,rotate2DToPoint:z}});l(a,"modules/wordcloud.src.js",[a["parts/Globals.js"],a["mixins/draw-point.js"],a["mixins/polygon.js"]],function(a,l,x){function g(e,d){var a=!1,b=e.rect,
c=e.polygon,h=e.lastCollidedWith,f=function(d){var a;a=d.rect;(a=!(a.left>b.right||a.right<b.left||a.top>b.bottom||a.bottom<b.top))&&(e.rotation%90||d.roation%90)&&(a=F(c,d.polygon));return a};h&&((a=f(h))||delete e.lastCollidedWith);a||(a=!!L(d,function(a){var d=f(a);d&&(e.lastCollidedWith=a);return d}));return a}function t(a){var d=4*a,e=Math.ceil((Math.sqrt(d)-1)/2),b=2*e+1,c=Math.pow(b,2),h=!1,b=b-1;1E4>=a&&("boolean"===typeof h&&d>=c-b&&(h={x:e-(c-d),y:-e}),c-=b,"boolean"===typeof h&&d>=c-b&&
(h={x:-e,y:-e+(c-d)}),c-=b,"boolean"===typeof h&&(h=d>=c-b?{x:-e+(c-d),y:e}:{x:e,y:e-(c-d-b)}),h.x*=5,h.y*=5);return h}function u(e,a,b){var d=2*Math.max(Math.abs(b.top),Math.abs(b.bottom));b=2*Math.max(Math.abs(b.left),Math.abs(b.right));return Math.min(0<b?1/b*e:1,0<d?1/d*a:1)}function H(e,a,b){b=b.reduce(function(a,b){b=b.dimensions;var e=Math.max(b.width,b.height);a.maxHeight=Math.max(a.maxHeight,b.height);a.maxWidth=Math.max(a.maxWidth,b.width);a.area+=e*e;return a},{maxHeight:0,maxWidth:0,area:0});
b=Math.max(b.maxHeight,b.maxWidth,.85*Math.sqrt(b.area));var d=e>a?e/a:1;e=a>e?a/e:1;return{width:b*d,height:b*e,ratioX:d,ratioY:e}}function q(a,b,c,I){var e=!1;f(a)&&f(b)&&f(c)&&f(I)&&-1<a&&-1<b&&I>c&&(e=c+b%a*((I-c)/(a-1)));return e}function A(a,b){var e,d=[];for(e=1;1E4>e;e++)d.push(a(e,b));return function(a){return 1E4>=a?d[a-1]:!1}}function z(a,b){var e=b.width/2,d=-(b.height/2),c=b.height/2;return!(-(b.width/2)<a.left&&e>a.right&&d<a.top&&c>a.bottom)}function B(a,d){var e=d.placed,c=d.field,
f=d.rectangle,h=d.polygon,l=d.spiral,n=1,r={x:0,y:0},p=a.rect=b({},f);a.polygon=h;for(a.rotation=d.rotation;!1!==r&&(g(a,e)||z(p,c));)r=l(n),y(r)&&(p.left=f.left+r.x,p.right=f.right+r.x,p.top=f.top+r.y,p.bottom=f.bottom+r.y,a.polygon=N(r.x,r.y,h)),n++;return r}function E(a,b){var e,d,c;y(a)&&y(b)&&(e=b.bottom-b.top,d=b.right-b.left,b=a.ratioX,c=a.ratioY,e=d*b>e*c?d:e,a=K(a,{width:a.width+e*b*2,height:a.height+e*c*2}));return a}var b=a.extend,c=a.isArray,f=a.isNumber,y=a.isObject,K=a.merge,D=a.noop,
L=a.find,M=x.getBoundingBoxFromPolygon,O=x.getPolygon,F=x.isPolygonsColliding,N=x.movePolygon,C=a.Series;a.seriesType("wordcloud","column",{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900"},tooltip:{followPointer:!0,pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.weight}\x3c/b\x3e\x3cbr/\x3e'}},
{animate:C.prototype.animate,animateDrilldown:D,animateDrillupFrom:D,bindAxes:function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};C.prototype.bindAxes.call(this);b(this.yAxis.options,a);b(this.xAxis.options,a)},pointAttribs:function(b,d){b=a.seriesTypes.column.prototype.pointAttribs.call(this,b,d);delete b.stroke;delete b["stroke-width"];return b},deriveFontSize:function(a,b,c){a=f(a)?a:0;b=f(b)?b:1;c=f(c)?c:1;return Math.floor(Math.max(c,
a*b))},drawPoints:function(){var a=this,c=a.hasRendered,k=a.xAxis,g=a.yAxis,l=a.group,h=a.options,n=h.animation,t=h.allowExtendPlayingField,r=a.chart.renderer,p=r.text().add(l),q=[],x=a.placementStrategy[h.placementStrategy],z,D=h.rotation,F=a.points.map(function(a){return a.weight}),C=Math.max.apply(null,F),G=a.points.sort(function(a,b){return b.weight-a.weight}),v;G.forEach(function(c){var d=a.deriveFontSize(1/C*c.weight,h.maxFontSize,h.minFontSize),d=b({fontSize:d+"px"},h.style);p.css(d).attr({x:0,
y:0,text:c.name});d=p.getBBox(!0);c.dimensions={height:d.height,width:d.width}});v=H(k.len,g.len,G);z=A(a.spirals[h.spiral],{field:v});G.forEach(function(d){var e=a.deriveFontSize(1/C*d.weight,h.maxFontSize,h.minFontSize),e=b({fontSize:e+"px"},h.style),k=x(d,{data:G,field:v,placed:q,rotation:D}),g=b(a.pointAttribs(d,d.selected&&"select"),{align:"center","alignment-baseline":"middle",x:k.x,y:k.y,text:d.name,rotation:k.rotation}),p=O(k.x,k.y,d.dimensions.width,d.dimensions.height,k.rotation),m=M(p),
w=B(d,{rectangle:m,polygon:p,field:v,placed:q,spiral:z,rotation:k.rotation}),u;!w&&t&&(v=E(v,m),w=B(d,{rectangle:m,polygon:p,field:v,placed:q,spiral:z,rotation:k.rotation}));if(y(w)){g.x+=w.x;g.y+=w.y;m.left+=w.x;m.right+=w.x;m.top+=w.y;m.bottom+=w.y;k=v;if(!f(k.left)||k.left>m.left)k.left=m.left;if(!f(k.right)||k.right<m.right)k.right=m.right;if(!f(k.top)||k.top>m.top)k.top=m.top;if(!f(k.bottom)||k.bottom<m.bottom)k.bottom=m.bottom;v=k;q.push(d);d.isNull=!1}else d.isNull=!0;n&&(u={x:g.x,y:g.y},c?
(delete g.x,delete g.y):(g.x=0,g.y=0));d.draw({animatableAttribs:u,attribs:g,css:e,group:l,renderer:r,shapeArgs:void 0,shapeType:"text"})});p=p.destroy();k=u(k.len,g.len,v);a.group.attr({scaleX:k,scaleY:k})},hasData:function(){return y(this)&&!0===this.visible&&c(this.points)&&0<this.points.length},placementStrategy:{random:function(a,b){var d=b.field;b=b.rotation;return{x:Math.round(d.width*(Math.random()+.5)/2)-d.width/2,y:Math.round(d.height*(Math.random()+.5)/2)-d.height/2,rotation:q(b.orientations,
a.index,b.from,b.to)}},center:function(a,b){b=b.rotation;return{x:0,y:0,rotation:q(b.orientations,a.index,b.from,b.to)}}},pointArrayMap:["weight"],spirals:{archimedean:function(a,b){var c=b.field;b=!1;var c=c.width*c.width+c.height*c.height,d=.8*a;1E4>=a&&(b={x:d*Math.cos(d),y:d*Math.sin(d)},Math.min(Math.abs(b.x),Math.abs(b.y))<c||(b=!1));return b},rectangular:function(a,b){a=t(a,b);b=b.field;a&&(a.x*=b.ratioX,a.y*=b.ratioY);return a},square:t},utils:{extendPlayingField:E,getRotation:q,isPolygonsColliding:F,
rotate2DToOrigin:x.rotate2DToOrigin,rotate2DToPoint:x.rotate2DToPoint},getPlotBox:function(){var a=this.chart,b=a.inverted,c=this[b?"yAxis":"xAxis"],b=this[b?"xAxis":"yAxis"];return{translateX:(c?c.left:a.plotLeft)+(c?c.len:a.plotWidth)/2,translateY:(b?b.top:a.plotTop)+(b?b.len:a.plotHeight)/2,scaleX:1,scaleY:1}}},{draw:l,shouldDraw:function(){return!this.isNull},isValid:function(){return!0},weight:1})});l(a,"masters/modules/wordcloud.src.js",[],function(){})});
//# sourceMappingURL=wordcloud.js.map
