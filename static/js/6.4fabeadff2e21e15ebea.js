webpackJsonp([6],{S2NW:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={name:"Register",data:function(){return{userName:"",password:""}},methods:{register:function(){var e=this,r=this.userName,t=this.password;this.$http.post("/api/user/addUser",{username:r,password:t},{}).then(function(r){"-1"==r.body&&alert("用户名已经存在"),"1"==r.body&&(alert("注册成功"),e.$router.push("/logoin"))})}}},a={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e._v("\n请注册您的账号\n"),t("form",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",name:"username"},domProps:{value:e.userName},on:{input:function(r){r.target.composing||(e.userName=r.target.value)}}}),e._v(" "),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),e._v(" "),t("br"),e._v(" "),t("a",{attrs:{href:"javascript:;"},on:{click:e.register}},[e._v("注册")]),e._v(" "),t("p",[e._v("我已有账号"),t("router-link",{attrs:{to:"logoin"}},[e._v("立即登陆")])],1)])])},staticRenderFns:[]};var n=t("VU/8")(s,a,!1,function(e){t("TIT1")},null,null);r.default=n.exports},TIT1:function(e,r){}});
//# sourceMappingURL=6.4fabeadff2e21e15ebea.js.map