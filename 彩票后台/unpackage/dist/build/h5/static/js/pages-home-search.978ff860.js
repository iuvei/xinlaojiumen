(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-search"],{"331e":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.zaiui-bar-search-title-box .cu-bar[data-v-34880a67]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-search-title-box .cu-bar .content[data-v-34880a67]{top:0;width:calc(100% - %?181.81?%)}.zaiui-bar-search-title-box .cu-bar .search-form [class*="cuIcon-"][data-v-34880a67]{margin:0 .8em 0 .8em}.zaiui-bar-search-title-box .cu-bar .search-form[data-v-34880a67]{margin-left:%?9.09?%}.zaiui-bar-search-title-box .cu-bar .search-form .close-icon[data-v-34880a67]{font-size:%?29.09?%}.zaiui-bar-search-title-box .cu-bar.fixed.no-shadow[data-v-34880a67]{box-shadow:inherit}.zaiui-bar-search-title-box .cu-bar.bg-white[data-v-34880a67]{color:#333}.zaiui-bar-search-title-box .zaiui-seat-height[data-v-34880a67]{width:100%;height:calc(0px + %?101?%)}.zaiui-search-list-view[data-v-34880a67]{position:relative;width:100%}.zaiui-search-list-view .search-list-view .search-bar-view[data-v-34880a67]{position:relative;margin-bottom:%?18.18?%;width:100%}.zaiui-search-list-view .search-list-view .search-bar-view .icon-right[data-v-34880a67]{position:absolute;right:0;top:%?5.45?%}.zaiui-search-list-view .search-list-view .search-bar-view .text-right[data-v-34880a67]{position:absolute;right:0;top:%?4?%}.zaiui-search-list-view .search-list-view .search-bar-view .text-right uni-text + uni-text[data-v-34880a67]{margin-left:%?27.27?%}.zaiui-search-list-view .search-list-view .btn-view[data-v-34880a67]{position:relative;padding-bottom:%?36.36?%;width:100%}.zaiui-search-list-view .search-list-view .btn-view .cu-btn[data-v-34880a67]{color:#333;height:%?54.54?%;font-size:%?23.63?%;margin-right:%?27.27?%;margin-bottom:%?18.18?%}.zaiui-search-list-view .search-list-view .btn-view .cu-btn .close-icon[data-v-34880a67]{top:0;color:#9c9797;right:%?-9.09?%;position:absolute;font-size:%?27.27?%}',""]),t.exports=i},"3d77":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e(a("56e9")),n={data:function(){return{search_close:!1,searchKey:"",deleteView:!1}},onLoad:function(){},onReady:function(){s.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{BackPage:function(){uni.navigateBack()},searchInput:function(t){var i=t.detail.value;this.searchKey=i,this.search_close=!!i},closeInput:function(){this.searchKey="",this.search_close=!1},deleteTap:function(){this.deleteView=!0},logTap:function(){this.deleteView=!1}}};i.default=n},"419c":function(t,i,a){"use strict";a.r(i);var e=a("3d77"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},"863c":function(t,i,a){var e=a("331e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("708fdd1a",e,!0,{sourceMap:!1,shadowMode:!1})},8733:function(t,i,a){"use strict";a.r(i);var e=a("dcae"),s=a("419c");for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("f306");var c,u=a("f0c5"),o=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"34880a67",null,!1,e["a"],c);i["default"]=o.exports},dcae:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"zaiui-bar-search-title-box"},[a("v-uni-view",{staticClass:"cu-bar search bg-white fixed no-shadow"},[a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1),a("v-uni-view",{staticClass:"search-form round"},[a("v-uni-text",{staticClass:"cuIcon-search"}),a("v-uni-input",{attrs:{value:t.searchKey,"adjust-position":!1,type:"text",placeholder:"苹果7","confirm-type":"search"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.searchInput.apply(void 0,arguments)}}}),t.search_close?a("v-uni-text",{staticClass:"cuIcon-close close-icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closeInput.apply(void 0,arguments)}}}):t._e()],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-red"},[t._v("搜索")])],1)],1),a("v-uni-view",{staticClass:"zaiui-seat-height"})],1),t.deleteView?t._e():a("v-uni-view",{staticClass:"padding zaiui-search-list-view"},[a("v-uni-view",{staticClass:"search-list-view"},[a("v-uni-view",{staticClass:"search-bar-view"},[a("v-uni-text",{staticClass:"text-black"},[t._v("历史搜索")]),a("v-uni-text",{staticClass:"cuIcon-delete text-gray icon-right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteTap.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"btn-view"},[a("v-uni-button",{staticClass:"cu-btn round"},[t._v("耳机")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("苹果手机")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("电动车")])],1)],1),a("v-uni-view",{staticClass:"search-list-view"},[a("v-uni-view",{staticClass:"search-bar-view"},[a("v-uni-text",{staticClass:"text-black"},[t._v("推荐搜索")])],1),a("v-uni-view",{staticClass:"btn-view"},[a("v-uni-button",{staticClass:"cu-btn round"},[t._v("耳机")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("苹果手机")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("电动车")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("笔记本")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("衣柜")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("平板电脑")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("华为手机")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("小米")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("三星")])],1)],1)],1),t.deleteView?a("v-uni-view",{staticClass:"padding zaiui-search-list-view"},[a("v-uni-view",{staticClass:"search-list-view"},[a("v-uni-view",{staticClass:"search-bar-view"},[a("v-uni-text",{staticClass:"text-black"},[t._v("历史搜索")]),a("v-uni-view",{staticClass:"text-sm text-right"},[a("v-uni-text",{staticClass:"text-gray"},[t._v("全部删除")]),a("v-uni-text",{staticClass:"text-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.logTap.apply(void 0,arguments)}}},[t._v("完成")])],1)],1),a("v-uni-view",{staticClass:"btn-view"},[a("v-uni-button",{staticClass:"cu-btn round"},[a("v-uni-text",[t._v("耳机")]),a("v-uni-text",{staticClass:"cuIcon-roundclosefill close-icon"})],1),a("v-uni-button",{staticClass:"cu-btn round"},[a("v-uni-text",[t._v("苹果手机")]),a("v-uni-text",{staticClass:"cuIcon-roundclosefill close-icon"})],1),a("v-uni-button",{staticClass:"cu-btn round"},[a("v-uni-text",[t._v("电动车")]),a("v-uni-text",{staticClass:"cuIcon-roundclosefill close-icon"})],1)],1)],1)],1):t._e()],1)},n=[]},f306:function(t,i,a){"use strict";var e=a("863c"),s=a.n(e);s.a}}]);