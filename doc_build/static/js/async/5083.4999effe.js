"use strict";(self.webpackChunkrepress_demo=self.webpackChunkrepress_demo||[]).push([["5083"],{9801:function(e,n,r){r.r(n),r.d(n,{default:()=>d});var a=r(2676),i=r(453);function s(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"q--a",children:["Q & A",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q--a",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"如何定时运行脚本",children:["如何定时运行脚本",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何定时运行脚本",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["点击脚本右边的菜单按钮->更多->定时任务即可定时运行脚本，但是必须保持Auto.js后台运行(自启动白名单、电源管理白名单等)。同时，可以在脚本的开头使用",(0,a.jsx)(n.code,{children:"device.wakeUp()"}),"来唤醒屏幕；但是，Auto.js没有解锁屏幕的功能，因此难以在有锁屏密码的设备上达到效果。"]}),"\n",(0,a.jsxs)(n.h2,{id:"定时任务如何获取外部参数",children:["定时任务如何获取外部参数",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#定时任务如何获取外部参数",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:['如果一个脚本是用intent"启动"的，比如定时任务中的特定事件（网络状态变化等）触发而启动的，则可以通过',(0,a.jsx)(n.code,{children:"engines.myEngine().execArgv.intent"}),"获取启动的intent，从而获取外部参数。"]}),"\n",(0,a.jsxs)(n.h2,{id:"如何把图片和脚本一起打包或者打包多个脚本",children:["如何把图片和脚本一起打包，或者打包多个脚本",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何把图片和脚本一起打包或者打包多个脚本",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"如果除了单脚本以外还有其他脚本、图片、音乐等资源一起打包，则需要使用项目功能。"}),"\n",(0,a.jsx)(n.p,{children:'点击Auto.js的"+"号，选择项目，填写项目名称、包名等信息以后，点击"√"即可新建一个项目。可以在项目中放多个脚本、模块、资源文件，点击项目工具栏的apk打包图标即可打包一个项目，点击工具栏可以重新配置项目。'}),"\n",(0,a.jsxs)(n.p,{children:["例如，主脚本要读取同一文件夹下的图片1.png，再执行找图，则可以通过",(0,a.jsx)(n.code,{children:'images.read("./1.png")'}),'来读取，其中"./1.png"表示同一目录1.png图片；ui中的图片控件要引用同一文件夹的2.png图片则为',(0,a.jsx)(n.code,{children:'<img src="file://2.png"/>'}),"。Auto.js内置的函数和模块都支持相对路径，但是，其他情况则需要使用",(0,a.jsx)(n.code,{children:"files.path()"}),"函数来把相对路径转换为绝对路径。"]}),"\n",(0,a.jsxs)(n.h2,{id:"如何使打包的应用不显示主界面",children:["如何使打包的应用不显示主界面",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何使打包的应用不显示主界面",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["需要使用项目功能。新建项目后，修改项目下的",(0,a.jsx)(n.code,{children:"project.json"}),"文件，增加以下条目："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"launchConfig": {\n    "hideLogs": true\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"例如："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "name": "项目名称",\n  "versionName": "1.0.0",\n  "versionCode": 1,\n  "packageName": "org.autojs.example",\n  "main": "main.js",\n  "launchConfig": {\n      "hideLogs": true\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:'"launchConfig"表示启动配置，"hideLogs"表示隐藏日志。'}),"\n",(0,a.jsx)(n.p,{children:"参见项目与项目配置。"}),"\n",(0,a.jsxs)(n.h2,{id:"autojs自带的模块和函数中没有的功能如何实现",children:["Auto.js自带的模块和函数中没有的功能如何实现",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#autojs自带的模块和函数中没有的功能如何实现",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"由于Auto.js支持直接调用Android的API，对于Auto.js没有内置的函数，可以直接通过修改Android代码为JavaScript代码实现。例如旋转图片的Android代码为："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import android.graphics.Bitmap;\nimport android.graphics.Matrix;\n\npublic static Bitmap rotate(final Bitmap src,\n                            final int degrees,\n                            final float px,\n                            final float py) {\n    if (degrees == 0) return src;\n    Matrix matrix = new Matrix();\n    matrix.setRotate(degrees, px, py);\n    Bitmap ret = Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), matrix, true);\n    return ret;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"转换为JavaScript的代码后为："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"importClass(android.graphics.Bitmap);\nimportClass(android.graphics.Matrix);\n\nfunction rotate(src, degrees, px, py){\n    if (degrees == 0) return src;\n    var matrix = new Matrix();\n    matrix.setRotate(degrees, px, py);\n    var ret = Bitmap.createBitmap(src, 0, 0, src.getWidth(), src.getHeight(), matrix, true);\n    return ret;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["有关调用 Android 和 Java 的 API 的更多信息，参见 ",(0,a.jsx)(n.a,{href:"/workWithJava",children:"Work with Java"}),"。"]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}let d=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["v1%2Fqa.md"]={toc:[{text:"如何定时运行脚本",id:"如何定时运行脚本",depth:2},{text:"定时任务如何获取外部参数",id:"定时任务如何获取外部参数",depth:2},{text:"如何把图片和脚本一起打包，或者打包多个脚本",id:"如何把图片和脚本一起打包或者打包多个脚本",depth:2},{text:"如何使打包的应用不显示主界面",id:"如何使打包的应用不显示主界面",depth:2},{text:"Auto.js自带的模块和函数中没有的功能如何实现",id:"autojs自带的模块和函数中没有的功能如何实现",depth:2}],title:"Q & A",headingTitle:"Q & A",frontmatter:{}}}}]);