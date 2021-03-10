(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],l=0,m=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-093c5e52":"b5cf37f3","chunk-17469d69":"420a5a41","chunk-4949c3ae":"a856ff91","chunk-5a33512c":"5123e5ed","chunk-7cbb2dc7":"2b998f20","chunk-f6355cf8":"5ab820ae"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"238e":function(e,t,n){},2731:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-wrap"},[n("el-form",{ref:"ruleForm",staticClass:"login-form",attrs:{model:e.ruleForm,"label-position":"right",rules:e.rules,"status-icon":"","label-width":"100px"}},[n("h2",{staticStyle:{"text-align":"center"}},[e._v("管理员登录")]),n("el-form-item",{attrs:{label:"用户名:",prop:"username"}},[n("el-input",{attrs:{maxlength:"15",placeholder:"请输入用户名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("ruleForm")}},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),n("el-form-item",{attrs:{label:"密码:",prop:"pass"}},[n("el-input",{attrs:{maxlength:"16",placeholder:"请输入密码",type:"password",autocomplete:"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("ruleForm")}},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("登录")]),n("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},o=[],a=n("4328"),i={name:"login",data:function(){var e=this,t=function(t,n,r){if(""===n)return r(new Error("请输入用户名"));e.$refs.ruleForm.validateField("pass"),r()},n=function(e,t,n){""===t&&n(new Error("请输入密码")),n()};return{ruleForm:{username:"",pass:""},rules:{username:[{validator:t,trigger:"blur"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],pass:[{validator:n,trigger:"blur"}]}}},methods:{verify:function(){this.$store.dispatch("verify")},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){if("admin"!==t.ruleForm.username)return void t.$message.error("用户名或密码错误");t.$axios.post("user/checkLogin",{username:t.ruleForm.username,password:t.ruleForm.pass}).then((function(e){e.data?(t.$message.success("登录成功,欢迎"+t.ruleForm.username),t.$axios.post("auth/accredit",a.stringify({username:t.ruleForm.username,password:t.ruleForm.pass})).then((function(e){t.$store.dispatch("verify")})),t.$parent.changeShowRouterView(),t.$parent.changeShowLogin(),t.ruleForm.username="",t.ruleForm.pass=""):t.$message.error("用户名或密码错误")}))}}))},resetForm:function(e){this.$refs[e].resetFields()}}},u=i,s=(n("bab3"),n("2877")),c=Object(s["a"])(u,r,o,!1,null,"5f645367",null);t["default"]=c.exports},"3aff":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),a=n.n(o),i=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showLogin?n("login"):e._e(),e.showRouterView?n("router-view"):e._e()],1)}),u=[],s=n("6511"),c=n("2731"),l={name:"app",components:{home:s["default"],login:c["default"]},data:function(){return{showRouterView:!1,showLogin:!0}},methods:{changeShowRouterView:function(){this.showRouterView=!0},changeShowLogin:function(){this.showLogin=!1}},created:function(){var e=this;this.$axios.get("auth/verify").then((function(t){"admin"===t.data.username&&(e.changeShowRouterView(),e.changeShowLogin())}))}},f=l,m=(n("034f"),n("2877")),d=Object(m["a"])(f,i,u,!1,null,null,null),p=d.exports,h=n("bc3a"),v=n.n(h),g=(n("d3b7"),n("8c4f")),b=function(){return Promise.resolve().then(n.bind(null,"6511"))},y=function(){return n.e("chunk-7cbb2dc7").then(n.bind(null,"f810"))},w=function(){return n.e("chunk-5a33512c").then(n.bind(null,"2fee"))},k=function(){return n.e("chunk-093c5e52").then(n.bind(null,"0226"))},x=function(){return n.e("chunk-4949c3ae").then(n.bind(null,"86d7"))},F=function(){return n.e("chunk-17469d69").then(n.bind(null,"223d"))},_=function(){return n.e("chunk-f6355cf8").then(n.bind(null,"e5d6"))},$=function(){return Promise.resolve().then(n.bind(null,"2731"))};r["default"].use(g["a"]);var O=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:b,children:[{path:"/home/singlegame",name:"singlegame",component:y},{path:"/home/cartoon",name:"cartoon",component:w},{path:"/home/studygarden",name:"studygarden",component:k},{path:"/home/minivideo",name:"minivideo",component:x},{path:"/home/carouser",name:"carouser",component:F},{path:"/home/showinmainpage",name:"showinmainpage",component:_},{path:"/login",name:"login",component:$}]}],j=new g["a"]({mode:"history",base:"/",routes:O}),P=j,S=(n("3aff"),n("2f62"));v.a.defaults.baseURL="http://api.pilibili.cn/api",v.a.defaults.withCredentials=!0,r["default"].use(S["a"]);var C=new S["a"].Store({state:{id:"",username:""},mutations:{updateUserInfo:function(e,t){e.id=t.data.id,e.username=t.data.username},clearInfo:function(e){e.id="",e.username=""}},actions:{verify:function(e){v.a.get("auth/verify").then((function(t){e.commit("updateUserInfo",t),"您尚未登录"!==t.data&&v.a.post("user/findUserById/"+e.state.id).then((function(t){null!==t.data&&(e.state.avatar=t.data.avatar)}))}))},exit:function(e){v.a.delete("auth/exit")}}}),L=C;r["default"].use(a.a),v.a.defaults.baseURL="http://api.pilibili.cn/api",v.a.defaults.withCredentials=!0,r["default"].prototype.$axios=v.a,r["default"].config.productionTip=!1,new r["default"]({store:L,router:P,render:function(e){return e(p)}}).$mount("#app")},"63c7":function(e,t,n){"use strict";var r=n("c89b"),o=n.n(r);o.a},6511:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:4}},[n("h1",[e._v("葡萄管理界面")]),n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:"/home/carouser"}},[e._v("首页轮播图")])],1),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{attrs:{to:"/home/showinmainpage"}},[e._v("首页展示的candy")])],1),n("el-menu-item",{attrs:{index:"3"}},[n("router-link",{attrs:{to:"/home/singlegame"}},[e._v("单机游戏")])],1),n("el-menu-item",{attrs:{index:"4"}},[n("router-link",{attrs:{to:"/home/cartoon"}},[e._v("经典番剧")])],1),n("el-menu-item",{attrs:{index:"5"}},[n("router-link",{attrs:{to:"/home/studygarden"}},[e._v("学习园地")])],1),n("el-menu-item",{attrs:{index:"6"}},[n("router-link",{attrs:{to:"/home/minivideo"}},[e._v("泡面视频")])],1),n("el-menu-item",{attrs:{index:"7"}},[e._v(" 用户管理 ")]),n("el-button",{staticStyle:{"margin-left":"20px","font-size":"large"},attrs:{type:"text"},on:{click:e.exit}},[e._v("用户退出")])],1)],1),n("el-col",{attrs:{span:18}},[n("router-view")],1)],1)},o=[],a={name:"home",methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},exit:function(){var e=this;this.$confirm("确定要退出吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$store.dispatch("exit"),e.$store.commit("clearInfo"),e.$message({type:"success",message:"退出成功!"}),setTimeout((function(){e.reloadPage()}),500),setTimeout((function(){e.reloadPage()}),5e3)})).catch((function(){e.$message({type:"info",message:"已取消"})}))},reloadPage:function(){location.reload()}}},i=a,u=(n("63c7"),n("2877")),s=Object(u["a"])(i,r,o,!1,null,"3ce5368e",null);t["default"]=s.exports},"85ec":function(e,t,n){},bab3:function(e,t,n){"use strict";var r=n("238e"),o=n.n(r);o.a},c89b:function(e,t,n){}});
//# sourceMappingURL=app.1aa1ad5c.js.map