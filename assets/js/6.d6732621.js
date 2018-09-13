(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{289:function(t,e,r){"use strict";r.r(e);var a=r(1),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("p",[t._v("Color 를 알아가다보니  결국은 Image 로 와 버렸습니다.  Image 는 Color의 모음이죠.")]),r("p",[t._v("Color 가 할 수 있는 일들은 이미지에서도 할 수 있고 이미지만의 톡득한 상태를 만들어 낼 수 있습니다.")]),r("p",[t._v("그래서 색을 다룰 수 있다는 것은 곧 이미지를 다룰 수 있다는 말과 같다.")]),r("p",[t._v("이미지를 다룰 수 있는 몇가지 중에  먼저 필터에 대해서 알아보자.")]),t._m(1),r("p",[t._v("이미지 필터란  하나의 이미지에 특수한 연산을 해서 전혀 다른 이미지를 만들어 내는 것을 말한다.")]),t._m(2),r("image-filter",{attrs:{filter:["grayscale",100],filterValue1Text:"Adjust"}}),r("p",[t._v("회색톤으로 만들기, 명암만 남기기")]),t._m(3),r("image-filter",{attrs:{filter:["contrast",50],min:-100,max:100}}),r("p",[t._v("대비/강조")]),t._m(4),r("image-filter",{attrs:{filter:["saturation",30]}}),r("p",[t._v("채도")]),t._m(5),r("image-filter",{attrs:{filter:["brightness",50],description:"명도"}}),r("p",[t._v("명도")]),t._m(6),r("image-filter",{attrs:{filter:["noise",50],filterValue1Text:"Adjust",min:1}}),r("p",[t._v("노이즈")]),t._m(7),r("image-filter",{attrs:{filter:["tint",.1,.1,.1],filterValue1Text:"red",filterValue2Text:"green",filterValue3Text:"blue",max:1,min:0,step:.01}}),r("p",[t._v("틴트")]),t._m(8),r("image-filter",{attrs:{filter:["gradient","black,rgba(255, 255, 30, 0.5)",40],filterValue1Type:"input",filterValue1Text:"Color List",filterValue2Text:"Scale",min:10,max:1e3}}),r("p",[t._v("Gradient 형식으로 필터링 하기")]),r("p",[t._v("참고 "),r("router-link",{attrs:{to:"/ko/2/api.html#gradient-scale"}},[t._v("Gradient")])],1),t._m(9),r("image-filter",{attrs:{filter:["sepia",100],min:-100,max:100}}),r("p",[t._v("짙은 갈색의 수채화 물감.")]),t._m(10),r("image-filter",{attrs:{filter:["negative",50],min:0,max:100}}),t._m(11),r("image-filter",{attrs:{filter:["threshold",120,100],filterValue1Text:"Adjust",min:0,max:100}}),r("p",[t._v("특정 임계치를 갖는 색만 표시")]),t._m(12),r("image-filter",{attrs:{filter:["hue",120],filterValue1Text:"Hue Color",min:0,max:360}}),r("p",[t._v("색조")]),t._m(13),r("image-filter",{attrs:{filter:["shade",3,1,1],filterValue1Text:"Red",filterValue2Text:"Green",filterValue3Text:"Blue",title:"Shade",min:0,max:10,step:.1}}),r("p",[t._v("그늘")]),t._m(14),r("image-filter",{attrs:{filter:["invert"]}}),r("p",[t._v("색 뒤집기")]),t._m(15),r("image-filter",{attrs:{filter:["sharpen"]}}),r("p",[t._v("거칠게 표시")]),t._m(16),r("image-filter",{attrs:{filter:["emboss",20],max:50,step:.1}}),r("p",[t._v("엠보싱 효과")]),t._m(17),r("image-filter",{attrs:{filter:["blur",5],min:3,max:100}}),r("p",[t._v("흐리게 만들기, StackBlur 사용")]),t._m(18),r("image-filter",{attrs:{filter:["stack-blur",5],filterValue1Text:"Radius",min:3,max:100}}),r("p",[t._v("흐리게 만들기")]),t._m(19),r("image-filter",{attrs:{filter:["motion-blur",20]}}),r("p",[t._v("움직이는 것 처럼 보이게 하기")]),t._m(20),r("image-filter",{attrs:{filter:["laplacian",100]}}),r("p",[t._v("윤곽선 표시 하기")]),t._m(21),r("image-filter",{attrs:{filter:["sobel",100]}}),r("p",[t._v("윤곽선 표시 하기")]),t._m(22),r("p",[t._v("이미지의 현재 상태는 어떻게 보일까?")]),t._m(23),r("image-histogram",{attrs:{description:"왼쪽은 어두운, 오른쪽은 밝은",black:!0}}),t._m(24),r("image-histogram",{attrs:{description:"왼쪽은 어두운, 오른쪽은 밝은",red:!0}}),t._m(25),r("image-histogram",{attrs:{description:"왼쪽은 어두운, 오른쪽은 밝은",green:!0}}),t._m(26),r("image-histogram",{attrs:{description:"파란색 계통은 거의 없는",blue:!0}}),t._m(27),r("image-histogram",{attrs:{description:"파란색 계통은 거의 없는",blue:!0,red:!0,green:!0}}),t._m(28),r("p",[t._v("이미지에서 가장 많이 사용하는 색을 고를 수 있습니다.")]),r("image-palette",{attrs:{description:"가장 많이 쓰는 컬러를 뽑아보자.",count:10}}),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),r("p",[t._v("내부적으로 "),r("a",{attrs:{href:"http://norman3.github.io/prml/docs/chapter09/1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("K-means"),r("OutboundLink")],1),t._v(" 알고리즘을 사용하여 최종 색상을 뽑습니다.")]),r("p",[t._v("픽셀로 이루어진 이미지에서 색을 뽑아 낼 때 유용하게 사용할 수 있습니다.")])]),r("p",[t._v("이미지 출처 : pixabay.com")]),r("image-palette-item",{attrs:{src:"/codemirror-colorpicker/resources/image/palette/daylight.jpg",count:20}}),r("image-palette-item",{attrs:{src:"/codemirror-colorpicker/resources/image/palette/butterfly.jpg",count:20}}),r("image-palette-item",{attrs:{src:"/codemirror-colorpicker/resources/image/palette/dandelion.jpg",count:20}}),r("image-palette-item",{attrs:{src:"/codemirror-colorpicker/resources/image/palette/flower.jpg",count:20}}),r("image-palette-item",{attrs:{src:"/codemirror-colorpicker/resources/image/palette/spring.jpg",count:20}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[this._v("#")]),this._v(" Image")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[this._v("#")]),this._v(" Filter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"grayscale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grayscale","aria-hidden":"true"}},[this._v("#")]),this._v(" GrayScale")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"contrast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contrast","aria-hidden":"true"}},[this._v("#")]),this._v(" Contrast")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"saturation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#saturation","aria-hidden":"true"}},[this._v("#")]),this._v(" Saturation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"brightness"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#brightness","aria-hidden":"true"}},[this._v("#")]),this._v(" Brightness")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"noise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#noise","aria-hidden":"true"}},[this._v("#")]),this._v(" Noise")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tint","aria-hidden":"true"}},[this._v("#")]),this._v(" Tint")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"gradient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gradient","aria-hidden":"true"}},[this._v("#")]),this._v(" Gradient")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sepia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sepia","aria-hidden":"true"}},[this._v("#")]),this._v(" Sepia")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"negative"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#negative","aria-hidden":"true"}},[this._v("#")]),this._v(" Negative")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"threshold"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#threshold","aria-hidden":"true"}},[this._v("#")]),this._v(" Threshold")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"hue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hue","aria-hidden":"true"}},[this._v("#")]),this._v(" Hue")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"shade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shade","aria-hidden":"true"}},[this._v("#")]),this._v(" Shade")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"invert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invert","aria-hidden":"true"}},[this._v("#")]),this._v(" Invert")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sharpen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sharpen","aria-hidden":"true"}},[this._v("#")]),this._v(" Sharpen")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"emboss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emboss","aria-hidden":"true"}},[this._v("#")]),this._v(" Emboss")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"blur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blur","aria-hidden":"true"}},[this._v("#")]),this._v(" Blur")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"stack-blur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stack-blur","aria-hidden":"true"}},[this._v("#")]),this._v(" Stack Blur")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"motion-blur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motion-blur","aria-hidden":"true"}},[this._v("#")]),this._v(" Motion Blur")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"laplacian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laplacian","aria-hidden":"true"}},[this._v("#")]),this._v(" Laplacian")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sobel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sobel","aria-hidden":"true"}},[this._v("#")]),this._v(" Sobel")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"histogram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#histogram","aria-hidden":"true"}},[this._v("#")]),this._v(" Histogram")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"밝기-histogram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#밝기-histogram","aria-hidden":"true"}},[this._v("#")]),this._v(" 밝기 Histogram")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"red-histogram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#red-histogram","aria-hidden":"true"}},[this._v("#")]),this._v(" Red Histogram")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"green-histogram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#green-histogram","aria-hidden":"true"}},[this._v("#")]),this._v(" Green Histogram")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"blue-histogram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blue-histogram","aria-hidden":"true"}},[this._v("#")]),this._v(" Blue Histogram")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"all-histogram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-histogram","aria-hidden":"true"}},[this._v("#")]),this._v(" All Histogram")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"palette"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#palette","aria-hidden":"true"}},[this._v("#")]),this._v(" Palette")])}],!1,null,null,null);e.default=i.exports}}]);