(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-pay"],{"00b0":function(t,a,i){"use strict";i.r(a);var e=i("d489"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"0424":function(t,a,i){"use strict";i.r(a);var e=i("33e3"),n=i("00b0");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("05bc");var s,c=i("f0c5"),u=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"0e12fdb9",null,!1,e["a"],s);a["default"]=u.exports},"05bc":function(t,a,i){"use strict";var e=i("c261"),n=i.n(e);n.a},1364:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-goods-details-box[data-v-0e12fdb9]{position:relative;padding:%?27.27?% %?18.18?%}.zaiui-goods-details-box .cu-avatar[data-v-0e12fdb9]{position:absolute;height:%?99.99?%;width:%?99.99?%;left:%?18.18?%}.zaiui-goods-details-box .goods-info-view[data-v-0e12fdb9]{position:relative;padding-left:%?127.27?%;height:%?99.99?%;line-height:1.4}.zaiui-goods-details-box .goods-info-view .text-price[data-v-0e12fdb9]{position:absolute;bottom:%?-9.09?%;right:0}.zaiui-pay-view[data-v-0e12fdb9]{position:relative}.zaiui-pay-view .zaiui-pay-bar[data-v-0e12fdb9]{position:relative;padding:%?18.18?%}.zaiui-pay-view .zaiui-pay-bar .cu-avatar[data-v-0e12fdb9]{background-color:#fff;position:absolute;width:%?36.36?%;height:%?36.36?%;top:%?25.45?%}.zaiui-pay-view .zaiui-pay-bar .content[data-v-0e12fdb9]{position:relative;left:%?50.9?%;width:calc(100% - %?127.27?%);line-height:1.8}.zaiui-pay-view .zaiui-pay-bar .content .cu-tag[data-v-0e12fdb9]{position:relative;top:%?-3.63?%}.zaiui-pay-view .zaiui-pay-bar .action[data-v-0e12fdb9]{position:absolute;right:%?21.81?%;top:%?40?%}.zaiui-pay-view .zaiui-pay-bar .action .zaiui-radio[data-v-0e12fdb9]{-webkit-transform:scale(.9);transform:scale(.9)}.zaiui-pay-view .zaiui-pay-bar + .zaiui-pay-bar[data-v-0e12fdb9]{border-top:%?2?% solid rgba(0,0,0,.1)}",""]),t.exports=a},"20d4":function(t,a,i){"use strict";i.r(a);var e=i("44ff"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"318f":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-d67b7c4c]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-d67b7c4c]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-d67b7c4c]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-d67b7c4c]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-d67b7c4c]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-d67b7c4c]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-d67b7c4c]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"33e3":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white"}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("立即支付")])],2),i("v-uni-view",{staticClass:"bg-white zaiui-goods-details-box"},[i("v-uni-view",{staticClass:"cu-avatar radius",style:[{backgroundImage:"url("+t.goods_img+")"}]}),i("v-uni-view",{staticClass:"goods-info-view"},[i("v-uni-view",{staticClass:"text-cut text-black"},[t._v("商品名称 99新 苹果 iPhoneX 256G 银色")]),i("v-uni-view",{staticClass:"text-sm text-gray"},[t._v("测试内容1")]),i("v-uni-view",{staticClass:"text-sm text-gray"},[t._v("测试内容2")]),i("v-uni-text",{staticClass:"text-price text-red text-lg"},[t._v("2999.00")])],1)],1),i("v-uni-view",{staticClass:"text-gray padding-sm"},[t._v("支付方式")]),i("v-uni-view",{staticClass:"bg-white zaiui-pay-view"},[i("v-uni-radio-group",{staticClass:"block",on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.RadioChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"zaiui-pay-bar",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.payTap("wechat")}}},[i("v-uni-view",{staticClass:"cu-avatar sm",staticStyle:{"background-image":"url(/static/zaiui/img/wechat.png)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-black"},[i("v-uni-text",{staticClass:"margin-right-sm"},[t._v("微信支付")]),i("v-uni-text",{staticClass:"cu-tag bg-red radius sm"},[t._v("推荐")])],1),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("亿万用户的选择，更快更安全")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-radio",{staticClass:"red zaiui-radio",class:"wechat"==t.radio?"checked":"",attrs:{checked:"wechat"==t.radio,value:"wechat"}})],1)],1),i("v-uni-view",{staticClass:"zaiui-pay-bar",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.payTap("alipay")}}},[i("v-uni-view",{staticClass:"cu-avatar sm",staticStyle:{"background-image":"url(/static/zaiui/img/alipay.png)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-black"},[i("v-uni-text",{staticClass:"margin-right-sm"},[t._v("支付宝支付")]),i("v-uni-text",{staticClass:"cu-tag line-red radius sm"},[t._v("HOT")])],1),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("数亿用户都在用，安全可托付")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-radio",{staticClass:"red zaiui-radio",class:"alipay"==t.radio?"checked":"",attrs:{checked:"alipay"==t.radio,value:"alipay"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"text-gray padding-sm text-sm"},[t._v("除平台自营外，应由卖方就所销售物品向买家出具发票等相关凭证。平台不代卖家承担任何责任。")]),i("v-uni-view",{staticClass:"bg-white zaiui-footer-fixed zaiui-foot-padding-bottom"},[i("v-uni-view",{staticClass:"padding-sm flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn radius bg-red",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.payBtnTap.apply(void 0,arguments)}}},[t._v("￥1 立即支付")])],1)],1)],1)},o=[]},"44ff":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},5676:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box"},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},5695:function(t,a,i){var e=i("318f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("33ee63e7",e,!0,{sourceMap:!1,shadowMode:!1})},ace3:function(t,a,i){"use strict";var e=i("5695"),n=i.n(e);n.a},c261:function(t,a,i){var e=i("1364");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("58ac8c39",e,!0,{sourceMap:!1,shadowMode:!1})},cba0:function(t,a,i){"use strict";i.r(a);var e=i("5676"),n=i("20d4");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("ace3");var s,c=i("f0c5"),u=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"d67b7c4c",null,!1,e["a"],s);a["default"]=u.exports},d489:function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("cba0")),o=e(i("56e9")),s={components:{barTitle:n.default},data:function(){return{goodsList:[],checkAll:!0,goods_img:"/static/images/home/goods/1.png",radio:"wechat"}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{RadioChange:function(t){this.radio=t.detail.value},payBtnTap:function(){uni.navigateTo({url:"/pages/status/pay_status"})},payTap:function(t){this.radio=t}}};a.default=s}}]);