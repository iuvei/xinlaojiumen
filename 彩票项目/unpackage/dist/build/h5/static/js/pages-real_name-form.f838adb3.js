(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-real_name-form"],{"20e1":function(t,a,i){var e=i("aea5");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("4b7d6e02",e,!0,{sourceMap:!1,shadowMode:!1})},"2a87":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("8b08")),o=e(i("eeab")),c={components:{barTitle:n.default},data:function(){return{name:"",card:"",is_sm:!1}},onLoad:function(){this.getInfo()},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{getInfo:function(){var t=this;this.$api.getRealAuthentication().then((function(a){null!=a.data?(t.name=a.data.real_name,t.card=a.data.id_card,t.is_sm=!0):t.is_sm=!1}))},verify:function(){var t=this,a={name:this.name,card:this.card};this.$api.RealNameAuthentication(a).then((function(a){t.getInfo()}))}}};a.default=c},"2bca":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},"4a0e":function(t,a,i){"use strict";i.r(a);var e=i("2bca"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},5966:function(t,a,i){"use strict";var e=i("20e1"),n=i.n(e);n.a},7561:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-c2fb0270]{background:#fff}.zaiui-title-view[data-v-c2fb0270]{position:relative;padding:%?18.18?%}.zaiui-content-view[data-v-c2fb0270]{position:relative;padding:0 %?18.18?%}.cu-form-view[data-v-c2fb0270]{position:relative;margin:0 %?27.27?%;padding:%?18.18?% 0;border-bottom:%?2?% solid rgba(0,0,0,.1)}.cu-form-view.margin-top-lg[data-v-c2fb0270]{margin-top:%?40?%}.zaiui-btn-view[data-v-c2fb0270]{position:fixed;width:100%;bottom:0}.zaiui-btn-view .flex[data-v-c2fb0270]{padding:%?18.18?%}body.?%PAGE?%[data-v-c2fb0270]{background:#fff}",""]),t.exports=a},"8b08":function(t,a,i){"use strict";i.r(a);var e=i("adf1"),n=i("4a0e");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("5966");var c,u=i("f0c5"),r=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"1f1d0f19",null,!1,e["a"],c);a["default"]=r.exports},a59b:function(t,a,i){"use strict";i.r(a);var e=i("bc44"),n=i("c191");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("e7dd");var c,u=i("f0c5"),r=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"c2fb0270",null,!1,e["a"],c);a["default"]=r.exports},adf1:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},aea5:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},bc44:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("实人认证")])],2),i("v-uni-view",{staticClass:"text-black text-xl zaiui-title-view"},[t._v("为提升交易可靠性，请进行实人认证")]),i("v-uni-view",{staticClass:"cu-form-view margin-top-lg"},[i("v-uni-input",{attrs:{placeholder:"请输入真实姓名"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),i("v-uni-view",{staticClass:"cu-form-view"},[i("v-uni-input",{attrs:{placeholder:"请输入18位身份证号"},model:{value:t.card,callback:function(a){t.card=a},expression:"card"}})],1),i("v-uni-view",{staticClass:"bg-white zaiui-btn-view zaiui-foot-padding-bottom"},[i("v-uni-view",{staticClass:"flex flex-direction"},[0==t.is_sm?i("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.verify()}}},[t._v("开始验证")]):t._e(),1==t.is_sm?i("v-uni-button",{staticClass:"cu-btn bg-red",attrs:{disabled:!0}},[t._v("已通过实名")]):t._e()],1)],1)],1)},o=[]},c191:function(t,a,i){"use strict";i.r(a);var e=i("2a87"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},e7dd:function(t,a,i){"use strict";var e=i("f9fb"),n=i.n(e);n.a},f9fb:function(t,a,i){var e=i("7561");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("1a1e6ece",e,!0,{sourceMap:!1,shadowMode:!1})}}]);