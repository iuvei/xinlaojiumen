(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-orderRecord"],{"08ce":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}};t.default=n},"0a5b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(e){return"1"==e["ret"]}}};t.default=n},"30a2":function(e,t,i){var n=i("361e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("563f3f8a",n,!0,{sourceMap:!1,shadowMode:!1})},3133:function(e,t,i){e.exports=i.p+"static/img/jczq.eacea4f2.png"},"32f3":function(e,t,i){e.exports=i.p+"static/img/bjdc.b529018a.png"},"361e":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".pages[data-v-3ed38f00]{margin-top:calc(0px + %?121?%)}.image_[data-v-3ed38f00]{width:%?60?%;height:%?60?%}",""]),e.exports=t},"41cb":function(e,t,i){e.exports=i.p+"static/img/pl3.d66cc098.png"},5061:function(e,t,i){"use strict";var n=i("30a2"),r=i.n(n);r.a},"5db0":function(e,t,i){"use strict";i.r(t);var n=i("8db4"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"610e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"gameImg",props:{width:null,height:null,type:null}};t.default=n},"68ec":function(e,t,i){"use strict";i.r(t);var n=i("9c96"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"6a00":function(e,t,i){e.exports=i.p+"static/img/jclq.8aac4248.png"},"7a54":function(e,t,i){"use strict";i.r(t);var n=i("0a5b"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"7d1e":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[0==e.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[e._v("开赛后可见")]),i("v-uni-view",[e._v("截止时间 "+e._s(e.orderdetail.stop_time))])],1):e._e(),e.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.chuan))])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("主队/客队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("赛果(全/半)")])],1),e._l(e.orderdetail.order_detail_,(function(t,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[e._v(e._s(t[0]["week"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["h_name"])+"("),t[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[e._v("+"+e._s(t[0]["p_goal"]))]):e._e(),t[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[e._v(e._s(t[0]["p_goal"]))]):e._e(),e._v(")")],1),i("v-uni-view",[e._v("vs")]),i("v-uni-view",[e._v(e._s(t[0]["a_name"]))])],1),i("v-uni-view",{staticStyle:{width:"25%"}},e._l(t,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{"text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:e.checkred(t)?"red":"black"}},[e._v(e._s(t.name))]),i("v-uni-view",[e._v("("+e._s(t.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["qcbf"]?t[0]["qcbf"]:"__/__"))]),i("v-uni-view",[e._v("半:"+e._s(t[0]["bcbf"]?t[0]["bcbf"]:"__/__"))])],1)],1)}))],2):e._e()],1)},a=[]},"870e":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[0==e.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[e._v("开赛后可见")]),i("v-uni-view",[e._v("截止时间 "+e._s(e.orderdetail.stop_time))])],1):e._e(),e.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[e._v(e._s(e.orderdetail.en_type))]),4!=e.orderdetail.mode?i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[e._v(e._s(e.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[e._v(e._s(e.orderdetail.chuan))])],1):e._e()],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("客队/主队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[e._v("赛果")])],1),e._l(e.orderdetail.order_detail_,(function(t,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[e._v(e._s(t[0]["week"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["a_name"]))]),i("v-uni-view",[e._v("vs")]),i("v-uni-view",[e._v(e._s(t[0]["h_name"])+"("),t[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[e._v("+"+e._s(t[0]["p_goal"]))]):e._e(),t[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[e._v(e._s(t[0]["p_goal"]))]):e._e(),e._v(")")],1)],1),i("v-uni-view",{staticStyle:{width:"25%"}},e._l(t,(function(n,r){return i("v-uni-view",{key:r,style:{"text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:e.checkred(n)?"red":"black"}},[e._v(e._s(n.name)),i("v-uni-text",{staticStyle:{color:"#007AFF"}},[e._v(e._s(3==n.met.substr(0,1)?"("+t[0]["dxf"]+")":""))])],1),i("v-uni-view",[e._v("("+e._s(n.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[e._v(e._s(t[0]["qcbf"]?t[0]["qcbf"]:"__/__"))])],1)],1)}))],2):e._e()],1)},a=[]},"8db4":function(e,t,i){"use strict";var n=i("4ea4");i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("8b08")),a=n(i("e883")),o=n(i("a963")),l={name:"orderRecord",components:{barTitle:r.default,orderdetail:a.default,gameImg:o.default},computed:{scrollH:function(){var e=uni.getSystemInfoSync(),t=e.windowWidth,i=750/t,n=parseInt(e.windowHeight*i);return n}},data:function(){return{maskClick:!1,range:[],emulator_Height:0,state:-1,dataList:[],orderdetail:{},uid:""}},methods:{change:function(e){var t=this;this.range=e;var i={uid:this.uid,range:this.range};this.$api.getOrderRecord(i).then((function(e){t.$refs.paging.complete(e.data)}))},open:function(e){this.orderdetail=e,this.orderdetail["flag"]=0,this.$refs.popup.open("bottom")},closeWindow:function(){this.$refs.popup.close("bottom")},barEditTap:function(){},getList:function(){},queryList:function(e,t){var i=this,n={pageNo:e,pageSize:t,uid:this.uid,range:this.range};this.$api.getOrderRecord(n).then((function(e){i.$refs.paging.complete(e.data)}))}},onLoad:function(e){this.uid=e.uid;var t=this;uni.getSystemInfo({success:function(e){t.emulator_Height=e.screenHeight*(750/e.windowWidth)}})}};t.default=l},9039:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",["foot"==e.type?n("v-uni-image",{style:{width:e.width+"rpx",height:e.height+"rpx"},attrs:{src:i("3133")}}):e._e(),"basket"==e.type?n("v-uni-image",{staticClass:"img",style:{width:e.width+"rpx",height:e.height+"rpx"},attrs:{src:i("6a00")}}):e._e(),"bd"==e.type?n("v-uni-image",{staticClass:"img",style:{width:e.width+"rpx",height:e.height+"rpx"},attrs:{src:i("32f3")}}):e._e(),"pl3"==e.type?n("v-uni-image",{staticClass:"img",style:{width:e.width+"rpx",height:e.height+"rpx"},attrs:{src:i("41cb")}}):e._e()],1)],1)},a=[]},"9c96":function(e,t,i){"use strict";var n=i("4ea4");i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("a4bd")),a=n(i("a5e5")),o=n(i("84ad")),l=n(i("8b08")),c={name:"orderdetail",components:{footdetail:r.default,basketdetail:a.default,barTitle:l.default},computed:{scrollH:function(){var e=uni.getSystemInfoSync(),t=e.windowWidth,i=750/t,n=parseInt(e.windowHeight*i);return n}},data:function(){return{order:{},config:"",pageHeight:0}},props:{orderdetail:null},created:function(){this.config=o.default},onLoad:function(e){},methods:{close:function(){this.$emit("closeWindow")},goBack:function(){uni.reLaunch({url:"/pages/app/index"})}}};t.default=c},a4bd:function(e,t,i){"use strict";i.r(t);var n=i("7d1e"),r=i("7a54");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"0a581963",null,!1,n["a"],o);t["default"]=c.exports},a5e5:function(e,t,i){"use strict";i.r(t);var n=i("870e"),r=i("bcd3");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"420ef20f",null,!1,n["a"],o);t["default"]=c.exports},a963:function(e,t,i){"use strict";i.r(t);var n=i("9039"),r=i("e283");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"d79d51aa",null,!1,n["a"],o);t["default"]=c.exports},bcd3:function(e,t,i){"use strict";i.r(t);var n=i("08ce"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},c49e:function(e,t,i){"use strict";i.r(t);var n=i("e071"),r=i("5db0");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("5061");var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,"3ed38f00",null,!1,n["a"],o);t["default"]=c.exports},e071:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniDatetimePicker:i("f201").default,zPaging:i("f305").default,uniPopup:i("70ad").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white"},on:{rightTap:function(t){arguments[0]=t=e.$handleEvent(t),e.barEditTap.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"content"},slot:"content"},[e._v("订单记录")])],2),i("v-uni-view",{staticClass:"example-body"},[i("uni-datetime-picker",{attrs:{type:"datetimerange"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change(t)},maskClick:function(t){arguments[0]=t=e.$handleEvent(t),e.maskClick.apply(void 0,arguments)}},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})],1),i("v-uni-view",{staticClass:"content"},[i("z-paging",{ref:"paging",staticClass:"pages",staticStyle:{"margin-top":"200rpx"},on:{query:function(t){arguments[0]=t=e.$handleEvent(t),e.queryList.apply(void 0,arguments)}},model:{value:e.dataList,callback:function(t){e.dataList=t},expression:"dataList"}},e._l(e.dataList,(function(t,n){return i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"item-title",staticStyle:{padding:"30rpx 20rpx","background-color":"white","margin-bottom":"20rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.open(t)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","margin-right":"20rpx"}},[i("game-img",{attrs:{width:60,height:60,type:t.type}}),i("v-uni-text",{staticStyle:{"font-size":"24rpx","margin-top":"10rpx",color:"#000000","font-weight":"bold"}},[e._v(e._s(t.en_type))])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"flex-start"}},[i("v-uni-view",{style:{color:2==t.state||3==t.state?"red":"#797374","font-weight":"bold"}},[e._v(e._s(t.en_state))]),i("v-uni-view",{staticStyle:{padding:"10rpx 0",color:"#515151"}},[e._v(e._s(t.order_time))]),i("v-uni-view",{staticStyle:{color:"#515151"}},[e._v("订单编号:"+e._s(t.order_no))])],1)],1),i("v-uni-view",{staticStyle:{color:"#515151"}},[e._v("订单"),i("v-uni-text",{staticStyle:{color:"red"}},[e._v(e._s(t.amount)+"元")])],1)],1)],1)],1)})),1),i("uni-popup",{ref:"popup",staticStyle:{"z-index":"999999"},attrs:{"mask-click":!1,type:"bottom",backgroundColor:"#FAFAFA"}},[i("v-uni-scroll-view",{style:{overflow:"scroll",height:e.scrollH+"rpx"},attrs:{"scroll-y":!0}},[i("orderdetail",{style:{overflow:"scroll"},attrs:{orderdetail:this.orderdetail},on:{closeWindow:function(t){arguments[0]=t=e.$handleEvent(t),e.closeWindow()}}})],1)],1)],1)],1)},a=[]},e283:function(e,t,i){"use strict";i.r(t);var n=i("610e"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},e883:function(e,t,i){"use strict";i.r(t);var n=i("ea3b"),r=i("68ec");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=c.exports},ea3b:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticStyle:{position:"relative",left:"0",right:"0",height:"400rpx","background-image":"linear-gradient(90deg, #6bb4f9, #f70af4)"}},[0==e.orderdetail.flag?i("v-uni-view",{staticClass:"cuIcon-close",staticStyle:{position:"absolute",left:"30rpx",top:"30rpx","font-size":"40rpx",color:"white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close()}}}):e._e(),1==e.orderdetail.flag?i("v-uni-view",{staticClass:"cuIcon-back",staticStyle:{position:"absolute",left:"30rpx",top:"30rpx","font-size":"40rpx",color:"white"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}}):e._e(),i("v-uni-view",{staticStyle:{"text-align":"center",padding:"30rpx 0","font-size":"35rpx",color:"white"}},[e._v("订单详情")]),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-around",width:"100%",color:"white"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.award_money>0?e.orderdetail.award_money:"暂无"))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("中奖金额")])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.en_state))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("订单状态")])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","line-height":"50rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e._v(e._s(e.orderdetail.amount))]),i("v-uni-view",{staticStyle:{"font-size":"28rpx"}},[e._v("投注金额")])],1)],1)],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","margin-top":"-150rpx","z-index":"999999999",position:"relative"}},[i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx"}},["foot"==e.orderdetail.type?i("footdetail",{attrs:{orderdetail:e.orderdetail}}):e._e(),"basket"==e.orderdetail.type?i("basketdetail",{attrs:{orderdetail:e.orderdetail}}):e._e()],1),i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx",color:"grey","line-height":"60rpx",margin:"30rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",{staticStyle:{color:"#000000","font-size":"32rpx"}},[e._v("订单信息")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("订单编号")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.order_no))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("付款时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.order_time))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("出票时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.tick_time))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",[e._v("截止时间")]),i("v-uni-view",{staticStyle:{color:"#323232"}},[e._v(e._s(e.orderdetail.stop_time))])],1)],1),i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx",width:"90%","border-radius":"20rpx",color:"grey","line-height":"60rpx",position:"relative","margin-bottom":"140rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",{staticStyle:{color:"#000000","font-size":"32rpx"}},[e._v("彩票照片")])],1),i("v-uni-view",[i("v-uni-image",{attrs:{src:e.config.config.url+e.orderdetail.order_pic}})],1)],1)],1)],1)},a=[]}}]);