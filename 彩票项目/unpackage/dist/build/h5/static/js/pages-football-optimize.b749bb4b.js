(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-football-optimize"],{"20e1":function(t,e,i){var r=i("aea5");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("4b7d6e02",r,!0,{sourceMap:!1,shadowMode:!1})},"2bca":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};e.default=r},4439:function(t,e,i){"use strict";i.r(e);var r=i("f9b1"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"4a0e":function(t,e,i){"use strict";i.r(e);var r=i("2bca"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},5966:function(t,e,i){"use strict";var r=i("20e1"),n=i.n(r);n.a},"63e1":function(t,e,i){"use strict";i.r(e);var r=i("84a1"),n=i("897e");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"58897675",null,!1,r["a"],o);e["default"]=s.exports},"726d":function(t,e,i){var r=i("9d96");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("7a66cf70",r,!0,{sourceMap:!1,shadowMode:!1})},7903:function(t,e,i){"use strict";i("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"payorder",data:function(){return{arr:{foot:"竞彩足球",bd:"北京单场",basket:"竞彩篮球",pl3:"排列三",pl5:"排列五"}}},props:{expect_min_award:{type:String,default:"0"},expect_max_award:{type:String,default:"0"},is_open:{type:String,default:"0"},shop_money:null,amount:null,check_game:null,game_type:{type:String,default:"foot"},mode:null,bei:null,chuan_arr:null,num_arr:null,plan_desc:{type:String,default:"没有华丽的宣言,只有最稳的红单"}},methods:{goRecharge:function(){uni.navigateTo({url:"/pages/finace/recharge?money="+this.shop_money})},doorder:function(){var t=this.chuan_arr;for(var e in t=t.filter((function(t){return 1==t["checked"]})),this.check_game)Array.isArray(this.check_game[e])||(this.check_game[e]=[this.check_game[e]]);var i={type:this.game_type,num:this.check_game.length,checkGame:JSON.stringify(this.check_game),bei:this.bei,mode:this.mode,chuan:JSON.stringify(t),num_arr:JSON.stringify(this.num_arr),plan_desc:this.plan_desc,is_open:this.is_open,expect_min_award:this.expect_min_award,expect_max_award:this.expect_max_award};this.$api.doorder_(i).then((function(t){var e=encodeURIComponent(JSON.stringify(t.data));uni.navigateTo({url:"/pages/order/orderdetail?str="+e})}))},openorderpop:function(){this.$emit("closeopendoor")}}};e.default=r},"84a1":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uniPopup:i("70ad").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-popup",{ref:"orderpop",staticStyle:{"z-index":"9999",height:"600rpx"},attrs:{"mask-click":!0,type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticClass:"cuIcon-roundclose",staticStyle:{position:"absolute",top:"35rpx",right:"35rpx","font-size":"40rpx",color:"grey"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openorderpop()}}}),i("v-uni-view",{staticStyle:{"min-height":"300rpx",padding:"40rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",color:"grey","padding-bottom":"20rpx","border-bottom":"1px solid #EEEEEE"}},[i("v-uni-view",{staticStyle:{color:"#000000"}},[t._v("支付给店主")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"20rpx"}},[i("v-uni-view",[t._v(t._s(t.arr[t.game_type]))]),i("v-uni-view",[t._v(t._s(t.amount)+".00元")])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("v-uni-view",[t._v("店铺余额")]),i("v-uni-view",[t._v(t._s(this.shop_money>=t.amount?-1*t.amount+".00元":"预存不足"))])],1),this.shop_money<t.amount?i("v-uni-view",{staticStyle:{"background-color":"#007AFF",color:"white",padding:"15rpx 200rpx","text-align":"center","border-radius":"40rpx","margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRecharge()}}},[t._v("预存入口")]):t._e(),this.shop_money>=t.amount?i("v-uni-view",{staticStyle:{"background-color":"red",color:"white",padding:"15rpx 200rpx","text-align":"center","border-radius":"40rpx","margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doorder()}}},[t._v("立即支付")]):t._e()],1)],1)],1)},a=[]},"897e":function(t,e,i){"use strict";i.r(e);var r=i("7903"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"8b08":function(t,e,i){"use strict";i.r(e);var r=i("adf1"),n=i("4a0e");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("5966");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"1f1d0f19",null,!1,r["a"],o);e["default"]=s.exports},9604:function(t,e,i){"use strict";i.r(e);var r=i("eaab"),n=i("4439");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("cf6f");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"f56b7440",null,!1,r["a"],o);e["default"]=s.exports},"9d96":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"uni-page-body[data-v-f56b7440]{background:#fff;overflow-y:scroll}.is_red[data-v-f56b7440]{color:red}.default[data-v-f56b7440]{color:#004ade;border-right:1px solid #004ade;border-top:1px solid #004ade;border-bottom:1px solid #004ade;background-color:#fff;padding:%?10?% %?60?%}.checked[data-v-f56b7440]{background-color:#004ade;color:#fff}body.?%PAGE?%[data-v-f56b7440]{background:#fff}",""]),t.exports=e},adf1:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},a=[]},aea5:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=e},cf6f:function(t,e,i){"use strict";var r=i("726d"),n=i.n(r);n.a},eaab:function(t,e,i){"use strict";var r;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{"border-bottom":"1px solid #EEEEEE"}},[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("奖金优化")])],2)],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%","justify-content":"center","margin-top":"40rpx","margin-bottom":"40rpx"}},[i("v-uni-view",{class:["default",{checked:0==t.cur_index}],staticStyle:{"border-left":"1px solid #004ade"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.check(0)}}},[t._v("奖金平均")]),i("v-uni-view",{class:["default",{checked:1==t.cur_index}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.check(1)}}},[t._v("博热优化")]),i("v-uni-view",{class:["default",{checked:2==t.cur_index}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.check(2)}}},[t._v("博冷优化")])],1),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center",width:"680rpx"}},[i("v-uni-view",{staticStyle:{width:"110rpx","border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx"}},[t._v("过关")]),i("v-uni-view",{staticStyle:{width:"210rpx","border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx"}},[t._v("单注组合")]),i("v-uni-view",{staticStyle:{width:"210rpx","border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx"}},[t._v("注数分布")]),i("v-uni-view",{staticStyle:{width:"150rpx","text-align":"center",height:"60rpx","line-height":"60rpx"}},[t._v("预测奖金")])],1)],1),i("v-uni-view",{staticStyle:{width:"100%","text-align":"center",display:"flex","align-items":"center","flex-direction":"column","margin-bottom":"180rpx"}},[i("v-uni-view",{staticStyle:{width:"680rpx",border:"1px solid grey","border-top":"none","border-bottom":"none"}},t._l(this.games,(function(e,r){return i("v-uni-view",{key:r,staticStyle:{"border-bottom":"1px solid grey"}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticStyle:{width:"110rpx",height:"120rpx","line-height":"120rpx"}},[t._v(t._s(1!=e.length?e.length+"串1":"单关"))]),i("v-uni-view",{staticStyle:{width:"210rpx",height:"120rpx",display:"flex","flex-direction":"column","justify-content":"space-around","align-items":"center","border-left":"1px solid grey","border-right":"1px solid grey"}},[t._l(e,(function(e,r){return r<2?i("v-uni-view",{key:r,staticStyle:{"font-size":"22rpx"}},[t._v(t._s(e["h_name"])+"|"+t._s(e["name"])+"("+t._s(e["pl"])+")")]):t._e()})),i("v-uni-view",{staticClass:"cuIcon-unfold",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeDisplay(r)}}})],2),i("v-uni-view",{staticStyle:{width:"210rpx",height:"120rpx","line-height":"120rpx","border-right":"1px solid grey",display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{"background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","margin-left":"20rpx","line-height":"50rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subZhu(r)}}},[t._v("一")]),i("v-uni-input",{staticStyle:{background:"#EEEEEE",width:"50rpx",margin:"0 5rpx",height:"50rpx","text-align":"center"},attrs:{type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.starBlur_(r)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.starBlur(e,r)}},model:{value:t.arr[r]["zhu"],callback:function(e){t.$set(t.arr[r],"zhu",e)},expression:"arr[index]['zhu']"}}),i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{color:"#000000","background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","line-height":"50rpx","margin-right":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addZhu(r)}}})],1),i("v-uni-view",{class:[{is_red:t.arr[r]["zhu"]*t.arr[r]["one_award"]>t.money}],staticStyle:{width:"150rpx",height:"120rpx","line-height":"120rpx"}},[t._v(t._s((t.arr[r]["zhu"]*t.arr[r]["one_award"]).toFixed(2)))])],1),i("v-uni-view",{ref:r,refInFor:!0,staticStyle:{display:"none"}},[i("v-uni-view",{staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center","background-color":"#f4ede4","font-weight":"bold"}},[i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[t._v("场次")]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[t._v("主队")]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[t._v("客队")]),i("v-uni-view",{staticStyle:{"text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[t._v("投注内容")])],1),t._l(e,(function(e,r){return i("v-uni-view",{key:r,staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center","background-color":"#f4ede4"}},[i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[t._v(t._s(e["week"]))]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[t._v(t._s(e["h_name"]))]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[t._v(t._s(e["a_name"]))]),i("v-uni-view",{staticStyle:{"text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[t._v(t._s(e["name"])+"("+t._s(e["pl"])+")")])],1)}))],2)],1)})),1)],1),i("v-uni-view",{staticStyle:{position:"fixed","z-index":"999",left:"0",bottom:"0",right:"0","background-color":"#ffffff"}},[i("v-uni-view",{staticStyle:{"border-top":"1px solid #e8e8e8","border-bottom":"1px solid #e8e8e8","text-align":"center",padding:"10rpx 10rpx"}},[t._v("单注预测奖金:"),i("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(t.getExpectAward()))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",padding:"20rpx 20rpx"}},[i("v-uni-view",[t._v("方案共"),i("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(this.getMoney())+"元")])],1),i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"inline-block",background:"linear-gradient(to right,#97e2e2,#ffaaff)",padding:"10rpx 50rpx","border-radius":"0 16rpx 16rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openorderpop()}}},[t._v("提交")])],1)],1)],1),i("payorder",{ref:"orderpop_",attrs:{num_arr:t.arr,amount:this.money,shop_money:this.shop_money,bei:t.bei,check_game:t.games,mode:4,chuan_arr:t.chuan_arr,game_type:t.type},on:{closeopendoor:function(e){arguments[0]=e=t.$handleEvent(e),t.closeopendoor()}}})],1)},a=[]},f9b1:function(t,e,i){"use strict";var r=i("4ea4");i("4e82"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("8b08")),a=r(i("63e1")),o={name:"optimize",components:{barTitle:n.default,payorder:a.default},data:function(){return{bei:1,chuan_arr:[],arr:[],money:0,games:[],cur_index:0,type:"foot",shop_money:0,is_order_open:!1}},onLoad:function(t){var e=JSON.parse(decodeURIComponent(t.str));for(var i in e)Array.isArray(e[i])||(e[i]=[e[i]]);this.money=t.money,this.games=e,this.type=t.type,this.setPingJunArr()},methods:{closeopendoor:function(){this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1},openorderpop:function(){0==this.is_order_open?this.getUserInfo():(this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1)},getUserInfo:function(){var t=this,e={};this.$api.getUserInfo(e).then((function(e){var i=e.data.data;t.shop_money=i.total_money,t.$refs.orderpop_.$refs.orderpop.open("bottom"),t.is_order_open=!0;var r=t.clone(t.games);for(var n in r){var a=r[n].length,o="";o=1==a?"单关":a.toString(),t.chuan_arr.push({value:o,checked:!0})}}))},getMoney:function(){var t=0;for(var e in this.arr)t+=2*this.arr[e]["zhu"];return t},subZhu:function(t){this.arr[t]["zhu"]>1&&this.arr[t]["zhu"]--},addZhu:function(t){this.arr[t]["zhu"]++},starBlur_:function(t){this.arr[t]["zhu"]<1&&(this.arr[t]["zhu"]=1)},starBlur:function(t,e){t.detail.value<1&&(this.arr[e]["zhu"]=1)},getExpectAward:function(){var t=this.clone(this.arr),e=0,i=0,r=t.sort((function(t,e){return(t["one_award"]*t["zhu"]).toFixed(2)-(e["one_award"]*e["zhu"]).toFixed(2)}));return e=(r[0]["one_award"]*r[0]["zhu"]).toFixed(2),i=(r[t.length-1]["one_award"]*r[t.length-1]["zhu"]).toFixed(2),e+"~"+i},findMinIndex:function(t){var e=0,i=1e7;for(var r in t)t[r]["one_award"]*t[r]["zhu"]<i&&(i=t[r]["one_award"]*t[r]["zhu"],e=r);return e},clone:function(t){var e;if(t instanceof Array){e=[];var i=t.length;while(i--)e[i]=this.clone(t[i]);return e}if(t instanceof Object){for(var r in e={},t)e[r]=this.clone(t[r]);return e}return t},changeDisplay:function(t){this.$refs[t][0].$el.style.display="none"!=this.$refs[t][0].$el.style.display?"none":"block"},check:function(t){t!=this.cur_index&&(this.cur_index=t,0==t&&this.setPingJunArr(),1==t&&this.setBoReArr(),2==t&&this.setBoLengArr())},setPingJunArr:function(){var t=this.money/2-this.games.length,e=[];for(var i in this.games){var r=2;for(var n in this.games[i])r*=parseFloat(this.games[i][n]["pl"]);var a={zhu:1};a["one_award"]=r,e[i]=a}for(var o=this.clone(e),c=0;c<t;c++){var s=this.findMinIndex(o);e[s]["zhu"]=e[s]["zhu"]+1,o[s]["zhu"]=e[s]["zhu"]+1}this.arr=e},setBoReArr:function(){this.setPingJunArr();var t=1e6,e=0;for(var i in this.arr)this.arr[i]["one_award"]<t&&(t=this.arr[i]["one_award"],e=i);var r=0;for(var n in this.arr)if(n!=e)while(this.arr[n]["one_award"]*(this.arr[n]["zhu"]-1)>this.money)this.arr[n]["zhu"]=this.arr[n]["zhu"]-1,r++;this.arr[e]["zhu"]=this.arr[e]["zhu"]+r},setBoLengArr:function(){this.setPingJunArr();var t=0,e=0;for(var i in this.arr)this.arr[i]["one_award"]>t&&(t=this.arr[i]["one_award"],e=i);var r=0;for(var n in this.arr)if(n!=e)while(this.arr[n]["one_award"]*(this.arr[n]["zhu"]-1)>this.money)this.arr[n]["zhu"]=this.arr[n]["zhu"]-1,r++;this.arr[e]["zhu"]=this.arr[e]["zhu"]+r}}};e.default=o}}]);