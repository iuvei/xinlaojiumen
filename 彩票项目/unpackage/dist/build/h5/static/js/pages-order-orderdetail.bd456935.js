(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-orderdetail","components-zaiui-common-basics-orderdetail"],{"08ce":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}};t.default=n},"0a5b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}};t.default=n},"20e1":function(e,t,i){var n=i("aea5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("4b7d6e02",n,!0,{sourceMap:!1,shadowMode:!1})},"27ad":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("e883")),a={name:"orderdetail",components:{orderdetails:r.default},data:function(){return{detail:{}}},onLoad:function(e){var t=JSON.parse(decodeURIComponent(e.str));this.detail=t[0],this.detail["flag"]=1}};t.default=a},"2bca":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var e=getCurrentPages();e&&e.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};t.default=n},"4a0e":function(e,t,i){"use strict";i.r(t);var n=i("2bca"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"4e2e":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("orderdetails",{attrs:{orderdetail:e.detail}})},a=[]},5966:function(e,t,i){"use strict";var n=i("20e1"),r=i.n(n);r.a},"68ec":function(e,t,i){"use strict";i.r(t);var n=i("9c96"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"7a54":function(e,t,i){"use strict";i.r(t);var n=i("0a5b"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"7d1e":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[0==e.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[e._v("开赛后可见")]),i("v-uni-view",[e._v("截止时间 "+e._s(e.orderdetail.stop_time))])],1):e._e(),e.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.chuan))])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("主队/客队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("赛果(全/半)")])],1),e._l(e.orderdetail.order_detail_,(function(t,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[e._v(e._s(t[0]["week"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["h_name"])+"("),t[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[e._v("+"+e._s(t[0]["p_goal"]))]):e._e(),t[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[e._v(e._s(t[0]["p_goal"]))]):e._e(),e._v(")")],1),i("v-uni-view",[e._v("vs")]),i("v-uni-view",[e._v(e._s(t[0]["a_name"]))])],1),i("v-uni-view",{staticStyle:{width:"25%"}},e._l(t,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{"text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:e.checkred(t)?"red":"black"}},[e._v(e._s(t.name))]),i("v-uni-view",[e._v("("+e._s(t.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["qcbf"]?t[0]["qcbf"]:"__/__"))]),i("v-uni-view",[e._v("半:"+e._s(t[0]["bcbf"]?t[0]["bcbf"]:"__/__"))])],1)],1)}))],2):e._e()],1)},a=[]},"83ec":function(e,t,i){"use strict";i.r(t);var n=i("4e2e"),r=i("d230");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"1bc48032",null,!1,n["a"],o);t["default"]=c.exports},"870e":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[0==e.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[e._v("开赛后可见")]),i("v-uni-view",[e._v("截止时间 "+e._s(e.orderdetail.stop_time))])],1):e._e(),e.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),4!=e.orderdetail.mode?i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.chuan))])],1):e._e()],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("客队/主队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("赛果")])],1),e._l(e.orderdetail.order_detail_,(function(t,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[e._v(e._s(t[0]["week"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["a_name"]))]),i("v-uni-view",[e._v("vs")]),i("v-uni-view",[e._v(e._s(t[0]["h_name"])+"("),t[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[e._v("+"+e._s(t[0]["p_goal"]))]):e._e(),t[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[e._v(e._s(t[0]["p_goal"]))]):e._e(),e._v(")")],1)],1),i("v-uni-view",{staticStyle:{width:"25%"}},e._l(t,(function(n,r){return i("v-uni-view",{key:r,style:{"text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:e.checkred(n)?"red":"black"}},[e._v(e._s(n.name)),i("v-uni-text",{staticStyle:{color:"#007AFF"}},[e._v(e._s(3==n.met.substr(0,1)?"("+t[0]["dxf"]+")":""))])],1),i("v-uni-view",[e._v("("+e._s(n.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["qcbf"]?t[0]["qcbf"]:"__/__"))])],1)],1)}))],2):e._e()],1)},a=[]},"8b08":function(e,t,i){"use strict";i.r(t);var n=i("adf1"),r=i("4a0e");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("5966");var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"1f1d0f19",null,!1,n["a"],o);t["default"]=c.exports},"9c96":function(e,t,i){"use strict";var n=i("4ea4");i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("a4bd")),a=n(i("a5e5")),o=n(i("84ad")),l=n(i("8b08")),c={name:"orderdetail",components:{footdetail:r.default,basketdetail:a.default,barTitle:l.default},computed:{scrollH:function(){var e=uni.getSystemInfoSync(),t=e.windowWidth,i=750/t,n=parseInt(e.windowHeight*i);return n}},data:function(){return{order:{},config:"",pageHeight:0}},props:{orderdetail:null},created:function(){this.config=o.default},onLoad:function(e){},methods:{close:function(){this.$emit("closeWindow")},goBack:function(){uni.reLaunch({url:"/pages/app/index"})}}};t.default=c},a4bd:function(e,t,i){"use strict";i.r(t);var n=i("7d1e"),r=i("7a54");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"0a581963",null,!1,n["a"],o);t["default"]=c.exports},a5e5:function(e,t,i){"use strict";i.r(t);var n=i("870e"),r=i("bcd3");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"420ef20f",null,!1,n["a"],o);t["default"]=c.exports},adf1:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==e.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[e.fixed?"fixed":"",e.shadow?"":"no-shadow",e.bgColor]},[e.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[e._v(e._s(e.backText))])],1):e._e(),e.isBack?e._e():i("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.leftTap.apply(void 0,arguments)}}},[e._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.contentTap.apply(void 0,arguments)}}},[e._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.rightTap.apply(void 0,arguments)}}},[e._t("right")],2)],1),e.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):e._e()],1)},a=[]},aea5:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),e.exports=t},bcd3:function(e,t,i){"use strict";i.r(t);var n=i("08ce"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},d230:function(e,t,i){"use strict";i.r(t);var n=i("27ad"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},e883:function(e,t,i){"use strict";i.r(t);var n=i("ea3b"),r=i("68ec");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=c.exports},ea3b:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticStyle:{position:"relative",left:"0",right:"0",height:"400rpx","background-image":"linear-gradient(90deg, #6bb4f9, #f70af4)"}},[0==e.orderdetail.flag?i("v-uni-view",{staticClass:"cuIcon-close",staticStyle:{position:"absolute",left:"30rpx",top:"30rpx","font-size":"40rpx",color:"white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close()}}}):e._e(),1==e.orderdetail.flag?i("v-uni-view",{staticClass:"cuIcon-back",staticStyle:{position:"absolute",left:"30rpx",top:"30rpx","font-size":"40rpx",color:"white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}}):e._e(),i("v-uni-view",{staticStyle:{"text-align":"center",padding:"30rpx 0","font-size":"35rpx",color:"white"}},[e._v("订单详情")]),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-around",width:"100%",color:"white"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.award_money>0?e.orderdetail.award_money:"暂无"))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("中奖金额")])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.en_state))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("订单状态")])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.amount))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("投注金额")])],1)],1)],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","margin-top":"-150rpx","z-index":"999999999",position:"relative"}},[i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx"}},["foot"==e.orderdetail.type?i("footdetail",{attrs:{orderdetail:e.orderdetail}}):e._e(),"basket"==e.orderdetail.type?i("basketdetail",{attrs:{orderdetail:e.orderdetail}}):e._e()],1),i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx",color:"grey","line-height":"60rpx",margin:"30rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",{staticStyle:{color:"#000000","font-size":"32rpx"}},[e._v("订单信息")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("订单编号")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.order_no))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("付款时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.order_time))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("出票时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.tick_time))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("截止时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.stop_time))])],1)],1),i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx",color:"grey","line-height":"60rpx",position:"relative","margin-bottom":"140rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",{staticStyle:{color:"#000000","font-size":"32rpx"}},[e._v("彩票照片")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.config.config.url+e.orderdetail.order_pic}})],1)],1)],1)],1)},a=[]}}]);