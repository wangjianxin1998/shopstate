(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c840eb5"],{"4e1c":function(e,t,n){"use strict";var r=n("6911"),i=n.n(r);i.a},6911:function(e,t,n){},bab7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"changeNickName"}},[n("van-nav-bar",{staticStyle:{height:"2.5rem"},attrs:{title:e.$t("mine.changeNickName"),fixed:!0,border:!1,"left-arrow":"","right-text":e.$t("mine.confirm")},on:{"click-left":e.onClickLeft,"click-right":e.onClickSave}}),n("div",{staticStyle:{"margin-top":"3rem"}},[n("van-cell-group",{attrs:{title:e.$t("mine.nickName")}},[n("van-field",{ref:"field",attrs:{clearable:""}})],1)],1)],1)},i=[],c=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("e7e5"),n("d399")),a=n("bd86"),o=(n("587d"),n("2f62"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={data:function(){return{nickName:this.$route.params.nickName}},mounted:function(){this.$refs.field.focus()},components:{},methods:f({},Object(o["d"])(["CHANGE_USER_NICK_NAME"]),{onClickLeft:function(){this.$router.back()},onClickSave:function(){if(this.nickName.length>0){var e=this.nickName;this.CHANGE_USER_NICK_NAME({nickName:e}),this.$router.back(),Object(c["a"])({message:this.$t("mine.personal"),duration:800})}else Object(c["a"])({message:this.$t("mine.message"),duration:800})}})},u=l,b=(n("4e1c"),n("2877")),m=Object(b["a"])(u,r,i,!1,null,"8695e37e",null);t["default"]=m.exports}}]);