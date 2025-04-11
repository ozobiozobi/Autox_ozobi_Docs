"use strict";(self.webpackChunkrepress_demo=self.webpackChunkrepress_demo||[]).push([["6534"],{8273:function(e,n,s){s.r(n),s.d(n,{default:()=>t});var r=s(2676),i=s(453);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",strong:"strong",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"全局变量与函数",children:["全局变量与函数",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#全局变量与函数",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["全局变量和函数在所有模块中均可使用。 但以下变量的作用域只在模块内，详见 ",(0,r.jsx)(n.a,{href:"/modules.html",children:"module"}),"："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"exports"}),"\n",(0,r.jsx)(n.li,{children:"module"}),"\n",(0,r.jsx)(n.li,{children:"require()\n以下的对象是特定于 Auto.js 的。 有些内置对象是 JavaScript 语言本身的一部分，它们也是全局的。"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"一些模块中的函数为了使用方便也可以直接全局使用，这些函数在此不再赘述。例如timers模块的setInterval, setTimeout等函数。"}),"\n",(0,r.jsxs)(n.h2,{id:"sleepn",children:["sleep(n)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sleepn",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"n"})," {number} 毫秒数"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["暂停运行n",(0,r.jsx)(n.strong,{children:"毫秒"}),"的时间。1秒等于1000毫秒。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"//暂停5秒\nsleep(5000);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"currentpackage",children:["currentPackage()",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#currentpackage",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"返回 {string}"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"返回最近一次监测到的正在运行的应用的包名，一般可以认为就是当前正在运行的应用的包名。"}),"\n",(0,r.jsx)(n.p,{children:"此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。"}),"\n",(0,r.jsxs)(n.h2,{id:"currentactivity",children:["currentActivity()",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#currentactivity",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"返回 {string}"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"返回最近一次监测到的正在运行的Activity的名称，一般可以认为就是当前正在运行的Activity的名称。"}),"\n",(0,r.jsx)(n.p,{children:"此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。"}),"\n",(0,r.jsxs)(n.h2,{id:"setcliptext",children:["setClip(text)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setcliptext",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"text"})," {string} 文本"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'设置剪贴板内容。此剪贴板即系统剪贴板，在一般应用的输入框中"粘贴"既可使用。'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'setClip("剪贴板文本");\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"getclip",children:["getClip()",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getclip",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"返回 {string}"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"返回系统剪贴板的内容。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'toast("剪贴板内容为:" + getClip());\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"toastmessage",children:["toast(message)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toastmessage",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"message {string} 要显示的信息"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"以气泡显示信息message几秒。(具体时间取决于安卓系统，一般都是2秒)"}),"\n",(0,r.jsx)(n.p,{children:'注意，信息的显示是"异步"执行的，并且，不会等待信息消失程序才继续执行。如果在循环中执行该命令，可能出现脚本停止运行后仍然有不断的气泡信息出现的情况。\n例如:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"for(var i = 0; i < 100; i++){\n  toast(i);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"运行这段程序以后，会很快执行完成，且不断弹出消息，在任务管理中关闭所有脚本也无法停止。\n要保证气泡消息才继续执行可以用："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"for(var i = 0; i < 100; i++){\n  toast(i);\n  sleep(2000);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"或者修改toast函数："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var _toast_ = toast;\ntoast = function(message){\n  _toast_(message);\n  sleep(2000);\n}\nfor(var i = 0; i < 100; i++){\n  toast(i);\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"toastlogmessage",children:["toastLog(message)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toastlogmessage",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"message {string} 要显示的信息"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["相当于",(0,r.jsx)(n.code,{children:"toast(message);log(message)"}),"。显示信息message并在控制台中输出。参见console.log。"]}),"\n",(0,r.jsxs)(n.h2,{id:"waitforactivityactivity-period--200",children:["waitForActivity(activity[, period = 200])",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#waitforactivityactivity-period--200",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"activity"})," Activity名称"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"period"})," 轮询等待间隔（毫秒）"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"等待指定的Activity出现，period为检查Activity的间隔。"}),"\n",(0,r.jsxs)(n.h2,{id:"waitforpackagepackage-period--200",children:["waitForPackage(package[, period = 200])",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#waitforpackagepackage-period--200",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"package"})," 包名"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"period"})," 轮询等待间隔（毫秒）"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["等待指定的应用出现。例如",(0,r.jsx)(n.code,{children:'waitForPackage("com.tencent.mm")'}),"为等待当前界面为微信。"]}),"\n",(0,r.jsxs)(n.h2,{id:"exit",children:["exit()",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exit",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"立即停止脚本运行。"}),"\n",(0,r.jsxs)(n.p,{children:["立即停止是通过抛出",(0,r.jsx)(n.code,{children:"ScriptInterrupttedException"}),"来实现的，因此如果用",(0,r.jsx)(n.code,{children:"try...catch"}),"把exit()函数的异常捕捉，则脚本不会立即停止，仍会运行几行后再停止。"]}),"\n",(0,r.jsxs)(n.h2,{id:"randommin-max",children:["random(min, max)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#randommin-max",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"min"})," {number} 随机数产生的区间下界"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"max"})," {number} 随机数产生的区间上界"]}),"\n",(0,r.jsx)(n.li,{children:"返回 {number}"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"返回一个在[min...max]之间的随机数。例如random(0, 2)可能产生0, 1, 2。"}),"\n",(0,r.jsxs)(n.h2,{id:"random",children:["random()",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#random",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"返回 {number}"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"返回在[0, 1)的随机浮点数。"}),"\n",(0,r.jsxs)(n.h2,{id:"requiresapiapi",children:["requiresApi(api)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#requiresapiapi",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api"})," Android版本号"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["表示此脚本需要Android API版本达到指定版本才能运行。例如",(0,r.jsx)(n.code,{children:"requiresApi(19)"}),"表示脚本需要在Android 4.4以及以上运行。"]}),"\n",(0,r.jsx)(n.p,{children:"调用该函数时会判断运行脚本的设备系统的版本号，如果没有达到要求则抛出异常。"}),"\n",(0,r.jsx)(n.p,{children:"可以参考以下Android API和版本的对照表:"}),"\n",(0,r.jsx)(n.p,{children:"平台版本：     API级别"}),"\n",(0,r.jsx)(n.p,{children:"Android 7.0：  24"}),"\n",(0,r.jsx)(n.p,{children:"Android 6.0：  23"}),"\n",(0,r.jsx)(n.p,{children:"Android 5.1：  22"}),"\n",(0,r.jsx)(n.p,{children:"Android 5.0：  21"}),"\n",(0,r.jsx)(n.p,{children:"Android 4.4W：  20"}),"\n",(0,r.jsx)(n.p,{children:"Android 4.4：  19"}),"\n",(0,r.jsx)(n.p,{children:"Android 4.3：  18"}),"\n",(0,r.jsxs)(n.h2,{id:"requiresautojsversionversion",children:["requiresAutojsVersion(version)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#requiresautojsversionversion",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"version"})," {string} | {number} Auto.js的版本或版本号"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["表示此脚本需要Auto.js版本达到指定版本才能运行。例如",(0,r.jsx)(n.code,{children:'requiresAutojsVersion("3.0.0 Beta")'}),"表示脚本需要在Auto.js 3.0.0 Beta以及以上运行。"]}),"\n",(0,r.jsx)(n.p,{children:"调用该函数时会判断运行脚本的Auto.js的版本号，如果没有达到要求则抛出异常。"}),"\n",(0,r.jsxs)(n.p,{children:["version参数可以是整数表示版本号，例如",(0,r.jsx)(n.code,{children:"requiresAutojsVersion(250)"}),'；也可以是字符串格式表示的版本，例如"3.0.0 Beta", "3.1.0 Alpha4", "3.2.0"等。']}),"\n",(0,r.jsxs)(n.p,{children:["可以通过",(0,r.jsx)(n.code,{children:"app.autojs.versionCode"}),"和",(0,r.jsx)(n.code,{children:"app.autojs.versionName"}),"获取当前的Auto.js版本号和版本。"]}),"\n",(0,r.jsxs)(n.h2,{id:"runtimerequestpermissionspermissions",children:["runtime.requestPermissions(permissions)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimerequestpermissionspermissions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"permissions"})," {Array} 权限的字符串数组"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"动态申请安卓的权限。例如："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'//请求GPS权限\nruntime.requestPermissions(["access_fine_location"]);\n'})}),"\n",(0,r.jsx)(n.p,{children:"尽管安卓有很多权限，但必须写入Manifest才能动态申请，为了防止权限的滥用，目前Auto.js只能额外申请两个权限："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"access_fine_location"})," GPS权限"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"record_audio"})," 录音权限"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"您可以通过APK编辑器来增加Auto.js以及Auto.js打包的应用的权限。"}),"\n",(0,r.jsxs)(n.p,{children:["安卓所有的权限列表参见",(0,r.jsx)(n.a,{href:"https://developer.android.com/guide/topics/permissions/overview",target:"_blank",rel:"noopener noreferrer",children:"Permissions Overview"}),"。（并没有用）"]}),"\n",(0,r.jsxs)(n.h2,{id:"runtimeloadjarpath",children:["runtime.loadJar(path)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimeloadjarpath",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," {string} jar文件路径"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"加载目标jar文件，加载成功后将可以使用该Jar文件的类。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// 加载jsoup.jar\nruntime.loadJar("./jsoup.jar");\n// 使用jsoup解析html\nimportClass(org.jsoup.Jsoup);\nlog(Jsoup.parse(files.read("./test.html")));\n'})}),"\n",(0,r.jsxs)(n.p,{children:["(jsoup是一个Java实现的解析Html DOM的库，可以在",(0,r.jsx)(n.a,{href:"https://jsoup.org/download",target:"_blank",rel:"noopener noreferrer",children:"Jsoup"}),"下载)"]}),"\n",(0,r.jsxs)(n.h2,{id:"runtimeloaddexpath",children:["runtime.loadDex(path)",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimeloaddexpath",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," {string} dex文件路径"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"加载目标dex文件，加载成功后将可以使用该dex文件的类。"}),"\n",(0,r.jsx)(n.p,{children:"因为加载jar实际上是把jar转换为dex再加载的，因此加载dex文件会比jar文件快得多。可以使用Android SDK的build tools的dx工具把jar转换为dex。"}),"\n",(0,r.jsxs)(n.h2,{id:"context",children:["context",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"全局变量。一个android.content.Context对象。"}),"\n",(0,r.jsx)(n.p,{children:"注意该对象为ApplicationContext，因此不能用于界面、对话框等的创建。"})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}let t=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["v1%2F%E5%9F%BA%E7%A1%80%2Fglobals.md"]={toc:[{text:"sleep(n)",id:"sleepn",depth:2},{text:"currentPackage()",id:"currentpackage",depth:2},{text:"currentActivity()",id:"currentactivity",depth:2},{text:"setClip(text)",id:"setcliptext",depth:2},{text:"getClip()",id:"getclip",depth:2},{text:"toast(message)",id:"toastmessage",depth:2},{text:"toastLog(message)",id:"toastlogmessage",depth:2},{text:"waitForActivity(activity[, period = 200])",id:"waitforactivityactivity-period--200",depth:2},{text:"waitForPackage(package[, period = 200])",id:"waitforpackagepackage-period--200",depth:2},{text:"exit()",id:"exit",depth:2},{text:"random(min, max)",id:"randommin-max",depth:2},{text:"random()",id:"random",depth:2},{text:"requiresApi(api)",id:"requiresapiapi",depth:2},{text:"requiresAutojsVersion(version)",id:"requiresautojsversionversion",depth:2},{text:"runtime.requestPermissions(permissions)",id:"runtimerequestpermissionspermissions",depth:2},{text:"runtime.loadJar(path)",id:"runtimeloadjarpath",depth:2},{text:"runtime.loadDex(path)",id:"runtimeloaddexpath",depth:2},{text:"context",id:"context",depth:2}],title:"全局变量与函数",headingTitle:"全局变量与函数",frontmatter:{}}}}]);