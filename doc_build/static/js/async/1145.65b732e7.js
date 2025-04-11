"use strict";(self.webpackChunkrepress_demo=self.webpackChunkrepress_demo||[]).push([["1145"],{7109:function(e,n,t){t.r(n),t.d(n,{default:()=>c});var s=t(2676),i=t(453);function r(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",pre:"pre",code:"code",h2:"h2",ul:"ul",li:"li",strong:"strong"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"events",children:["Events",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#events",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"稳定性: 稳定"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:"\n"})]}),"\n",(0,s.jsx)(n.p,{children:"events 模块提供了监听手机通知、按键、触摸的接口。您可以用他配合自动操作函数完成自动化工作。"}),"\n",(0,s.jsxs)(n.p,{children:["events 本身是一个",(0,s.jsx)(n.a,{href:"#eventemitter",children:"EventEmiiter"}),", 但内置了一些事件、包括按键事件、通知事件、Toast 事件等。"]}),"\n",(0,s.jsx)(n.p,{children:"需要注意的是，事件的处理是单线程的，并且仍然在原线程执行，如果脚本主体或者其他事件处理中有耗时操作、轮询等，则事件将无法得到及时处理（会进入事件队列等待脚本主体或其他事件处理完成才执行）。例如:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'auto();\nevents.observeNotification();\nevents.on("toast", function (t) {\n    //这段代码将得不到执行\n    log(t);\n});\nwhile (true) {\n    //死循环\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventsemitter",children:["events.emitter()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsemitter",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["返回一个新的",(0,s.jsx)(n.a,{href:"#eventemitter",children:"EventEmitter"}),"。这个 EventEmitter 没有内置任何事件。"]}),"\n",(0,s.jsxs)(n.h2,{id:"eventsobservekey",children:["events.observeKey()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsobservekey",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"启用按键监听，例如音量键、Home 键。按键监听使用无障碍服务实现，如果无障碍服务未启用会抛出异常并提示开启。"}),"\n",(0,s.jsxs)(n.p,{children:["只有这个函数成功执行后, ",(0,s.jsx)(n.code,{children:"onKeyDown"}),", ",(0,s.jsx)(n.code,{children:"onKeyUp"}),"等按键事件的监听才有效。"]}),"\n",(0,s.jsx)(n.p,{children:"该函数在安卓 4.3 以上才能使用。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventsonkeydownkeyname-listener",children:["events.onKeyDown(keyName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsonkeydownkeyname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyName"})," {string} 要监听的按键名称"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 按键监听器。参数为一个",(0,s.jsx)(n.a,{href:"#keyevent",children:"KeyEvent"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["注册一个按键监听函数，当有 keyName 对应的按键被按下会调用该函数。可用的按键名称参见",(0,s.jsx)(n.a,{href:"#keys",children:"Keys"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"例如:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'//启用按键监听\nevents.observeKey();\n//监听音量上键按下\nevents.onKeyDown("volume_up", function (event) {\n    toast("音量上键被按下了");\n});\n//监听菜单键按下\nevents.onKeyDown("menu", function (event) {\n    toast("菜单键被按下了");\n    exit();\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventsonkeyupkeyname-listener",children:["events.onKeyUp(keyName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsonkeyupkeyname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyName"})," {string} 要监听的按键名称"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 按键监听器。参数为一个",(0,s.jsx)(n.a,{href:"#keyevent",children:"KeyEvent"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["注册一个按键监听函数，当有 keyName 对应的按键弹起会调用该函数。可用的按键名称参见",(0,s.jsx)(n.a,{href:"#keys",children:"Keys"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:'一次完整的按键动作包括了按键按下和弹起。按下事件会在手指按下一个按键的"瞬间"触发, 弹起事件则在手指放开这个按键时触发。'}),"\n",(0,s.jsx)(n.p,{children:"例如:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'//启用按键监听\nevents.observeKey();\n//监听音量下键弹起\nevents.onKeyDown("volume_down", function (event) {\n    toast("音量下键弹起");\n});\n//监听Home键弹起\nevents.onKeyDown("home", function (event) {\n    toast("Home键弹起");\n    exit();\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventsoncekeydownkeyname-listener",children:["events.onceKeyDown(keyName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsoncekeydownkeyname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyName"})," {string} 要监听的按键名称"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 按键监听器。参数为一个",(0,s.jsx)(n.a,{href:"#keyevent",children:"KeyEvent"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"注册一个按键监听函数，当有 keyName 对应的按键被按下时会调用该函数，之后会注销该按键监听器。"}),"\n",(0,s.jsx)(n.p,{children:"也就是 listener 只有在 onceKeyDown 调用后的第一次按键事件被调用一次。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventsoncekeyupkeyname-listener",children:["events.onceKeyUp(keyName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsoncekeyupkeyname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyName"})," {string} 要监听的按键名称"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 按键监听器。参数为一个",(0,s.jsx)(n.a,{href:"#keyevent",children:"KeyEvent"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"注册一个按键监听函数，当有 keyName 对应的按键弹起时会调用该函数，之后会注销该按键监听器。"}),"\n",(0,s.jsx)(n.p,{children:"也就是 listener 只有在 onceKeyUp 调用后的第一次按键事件被调用一次。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventsremoveallkeydownlistenerskeyname",children:["events.removeAllKeyDownListeners(keyName)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsremoveallkeydownlistenerskeyname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyName"})," {string} 按键名称"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"删除该按键的 KeyDown(按下)事件的所有监听。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventsremoveallkeyuplistenerskeyname",children:["events.removeAllKeyUpListeners(keyName)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsremoveallkeyuplistenerskeyname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyName"})," {string} 按键名称"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"删除该按键的 KeyUp(弹起)事件的所有监听。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventssetkeyinterceptionenabledkey-enabled",children:["events.setKeyInterceptionEnabled([key, ]enabled)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventssetkeyinterceptionenabledkey-enabled",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enabled"})," {boolean}"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," {string} 要屏蔽的按键"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"设置按键屏蔽是否启用。所谓按键屏蔽指的是，屏蔽原有按键的功能，例如使得音量键不再能调节音量，但此时仍然能通过按键事件监听按键。"}),"\n",(0,s.jsx)(n.p,{children:"如果不加参数 key 则会屏蔽所有按键。"}),"\n",(0,s.jsxs)(n.p,{children:["例如，调用",(0,s.jsx)(n.code,{children:"events.setKeyInterceptionEnabled(true)"}),"会使系统的音量、Home、返回等键不再具有调节音量、回到主页、返回的作用，但此时仍然能通过按键事件监听按键。"]}),"\n",(0,s.jsx)(n.p,{children:"该函数通常于按键监听结合，例如想监听音量键并使音量键按下时不弹出音量调节框则为："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'events.setKeyInterceptionEnabled("volume_up", true);\nevents.observeKey();\nevents.onKeyDown("volume_up", () => {\n    log("音量上键被按下");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"只要有一个脚本屏蔽了某个按键，该按键便会被屏蔽；当脚本退出时，会自动解除所有按键屏蔽。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventsobservetouch",children:["events.observeTouch()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsobservetouch",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"启用屏幕触摸监听。（需要 root 权限）"}),"\n",(0,s.jsx)(n.p,{children:"只有这个函数被成功执行后, 触摸事件的监听才有效。"}),"\n",(0,s.jsx)(n.p,{children:"没有 root 权限调用该函数则什么也不会发生。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventssettoucheventtimeouttimeout",children:["events.setTouchEventTimeout(timeout)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventssettoucheventtimeouttimeout",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timeout"})," {number} 两个触摸事件的最小间隔。单位毫秒。默认为 10 毫秒。如果 number 小于 0，视为 0 处理。"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"设置两个触摸事件分发的最小时间间隔。"}),"\n",(0,s.jsx)(n.p,{children:"例如间隔为 10 毫秒的话，前一个触摸事件发生并被注册的监听器处理后，至少要过 10 毫秒才能分发和处理下一个触摸事件，这 10 毫秒之间的触摸将会被忽略。"}),"\n",(0,s.jsx)(n.p,{children:"建议在满足需要的情况下尽量提高这个间隔。一个简单滑动动作可能会连续触发上百个触摸事件，如果 timeout 设置过低可能造成事件拥堵。强烈建议不要设置 timeout 为 0。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventsgettoucheventtimeout",children:["events.getTouchEventTimeout()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsgettoucheventtimeout",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"返回触摸事件的最小时间间隔。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventsontouchlistener",children:["events.onTouch(listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsontouchlistener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 参数为",(0,s.jsx)(n.a,{href:"/images.html#images_point",children:"Point"}),"的函数"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["注册一个触摸监听函数。相当于",(0,s.jsx)(n.code,{children:'on("touch", listener)'}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"例如:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'//启用触摸监听\nevents.observeTouch();\n//注册触摸监听器\nevents.onTouch(function (p) {\n    //触摸事件发生时, 打印出触摸的点的坐标\n    log(p.x + ", " + p.y);\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventsremovealltouchlisteners",children:["events.removeAllTouchListeners()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsremovealltouchlisteners",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"删除所有事件监听函数。"}),"\n",(0,s.jsxs)(n.h2,{id:"事件-key",children:["事件: 'key'",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#事件-key",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyCode"})," {number} 键值"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"event"})," {KeyEvent} 事件"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"当有按键被按下或弹起时会触发该事件。\n例如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'auto();\nevents.observeKey();\nevents.on("key", function (keyCode, event) {\n    //处理按键事件\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"其中监听器的参数 KeyCode 包括："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keys.home"})," 主页键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keys.back"})," 返回键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keys.menu"})," 菜单键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keys.volume_up"})," 音量上键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keys.volume_down"})," 音量下键"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"例如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'auto();\nevents.observeKey();\nevents.on("key", function (keyCode, event) {\n    if (keyCode == keys.menu && event.getAction() == event.ACTION_UP) {\n        toast("菜单键按下");\n    }\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"事件-key_down",children:["事件: 'key_down'",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#事件-key_down",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyCode"})," {number} 键值"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"event"})," {KeyEvent} 事件"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"当有按键被按下时会触发该事件。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'auto();\nevents.observeKey();\nevents.on("key_down", function (keyCode, event) {\n    //处理按键按下事件\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"事件-key_up",children:["事件: 'key_up'",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#事件-key_up",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyCode"})," {number} 键值"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"event"})," {KeyEvent} 事件"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"当有按键弹起时会触发该事件。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'auto();\nevents.observeKey();\nevents.on("key_up", function (keyCode, event) {\n    //处理按键弹起事件\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"事件-exit",children:["事件: 'exit`",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#事件-exit",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"当脚本正常或者异常退出时会触发该事件。事件处理中如果有异常抛出，则立即中止 exit 事件的处理（即使 exit 事件有多个处理函数）并在控制台和日志中打印该异常。"}),"\n",(0,s.jsx)(n.p,{children:"一个脚本停止运行时，会关闭该脚本的所有悬浮窗，触发 exit 事件，之后再回收资源。如果 exit 事件的处理中有死循环，则后续资源无法得到及时回收。\n此时脚本会停留在任务列表，如果在任务列表中关闭，则会强制结束 exit 事件的处理并回收后续资源。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'log("开始运行");\nevents.on("exit", function () {\n    log("结束运行");\n});\nlog("即将结束运行");\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventsobservenotification",children:["events.observeNotification()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsobservenotification",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"开启通知监听。例如 QQ 消息、微信消息、推送等通知。"}),"\n",(0,s.jsx)(n.p,{children:"通知监听依赖于通知服务，如果通知服务没有运行，会抛出异常并跳转到通知权限开启界面。（有时即使通知权限已经开启通知服务也没有运行，这时需要关闭权限再重新开启一次）"}),"\n",(0,s.jsx)(n.p,{children:"例如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"events.observeNotification();\nevents.onNotification(function (notification) {\n    log(notification.getText());\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"eventsobservetoast",children:["events.observeToast()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsobservetoast",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"开启 Toast 监听。"}),"\n",(0,s.jsx)(n.p,{children:"Toast 监听依赖于无障碍服务，因此此函数会确保无障碍服务运行。"}),"\n",(0,s.jsxs)(n.h2,{id:"事件-toast",children:["事件: 'toast'",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#事件-toast",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toast"})," {Object}","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getText()"})," 获取 Toast 的文本内容"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getPackageName()"})," 获取发出 Toast 的应用包名"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"当有应用发出 toast(气泡消息)时会触发该事件。但 Auto.js 软件本身的 toast 除外。"}),"\n",(0,s.jsx)(n.p,{children:"例如，要记录发出所有 toast 的应用："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'events.observeToast();\nevents.onToast(function (toast) {\n    log("Toast内容: " + toast.getText() + " 包名: " + toast.getPackageName());\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"事件-notification",children:["事件: 'notification'",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#事件-notification",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"notification"})," ",(0,s.jsx)(n.a,{href:"#notification",children:"Notification"})," 通知对象"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["当有应用发出通知时会触发该事件，参数为",(0,s.jsx)(n.a,{href:"#notification",children:"Notification"}),"。"]}),"\n",(0,s.jsx)(n.p,{children:"例如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'events.observeNotification();\nevents.on("notification", function (n) {\n    log("收到新通知:\\n 标题: %s, 内容: %s, \\n包名: %s", n.getTitle(), n.getText(), n.getPackageName());\n});\n'})}),"\n",(0,s.jsxs)(n.h1,{id:"notification",children:["Notification",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notification",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"通知对象，可以获取通知详情，包括通知标题、内容、发出通知的包名、时间等，也可以对通知进行操作，比如点击、删除。"}),"\n",(0,s.jsxs)(n.h2,{id:"notificationnumber",children:["Notification.number",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notificationnumber",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"{number}"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"通知数量。例如 QQ 连续收到两条消息时 number 为 2。"}),"\n",(0,s.jsxs)(n.h2,{id:"notificationwhen",children:["Notification.when",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notificationwhen",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"{number}"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["通知发出时间的时间戳，可以用于构造",(0,s.jsx)(n.code,{children:"Date"}),"对象。例如："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'events.observeNotification();\nevents.on("notification", function (n) {\n    log("通知时间为}" + new Date(n.when));\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"notificationgetpackagename",children:["Notification.getPackageName()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notificationgetpackagename",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"返回 {string}"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"获取发出通知的应用包名。"}),"\n",(0,s.jsxs)(n.h2,{id:"notificationgettitle",children:["Notification.getTitle()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notificationgettitle",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"返回 {string}"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"获取通知的标题。"}),"\n",(0,s.jsxs)(n.h2,{id:"notificationgettext",children:["Notification.getText()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notificationgettext",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"返回 {string}"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"获取通知的内容。"}),"\n",(0,s.jsxs)(n.h2,{id:"notificationclick",children:["Notification.click()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notificationclick",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"点击该通知。例如对于一条 QQ 消息，点击会进入具体的聊天界面。"}),"\n",(0,s.jsxs)(n.h2,{id:"notificationdelete",children:["Notification.delete()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notificationdelete",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"删除该通知。该通知将从通知栏中消失。"}),"\n",(0,s.jsxs)(n.h1,{id:"keyevent",children:["KeyEvent",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keyevent",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"稳定性: 稳定"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:"\n"})]}),"\n",(0,s.jsxs)(n.h2,{id:"keyeventgetaction",children:["KeyEvent.getAction()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keyeventgetaction",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"返回事件的动作。包括："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KeyEvent.ACTION_DOWN"})," 按下事件"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KeyEvent.ACTION_UP"})," 弹起事件"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"keyeventgetkeycode",children:["KeyEvent.getKeyCode()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keyeventgetkeycode",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"返回按键的键值。包括："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KeyEvent.KEYCODE_HOME"})," 主页键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KeyEvent.KEYCODE_BACK"})," 返回键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KeyEvent.KEYCODE_MENU"})," 菜单键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KeyEvent.KEYCODE_VOLUME_UP"})," 音量上键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KeyEvent.KEYCODE_VOLUME_DOWN"})," 音量下键"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"keyeventgeteventtime",children:["KeyEvent.getEventTime()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keyeventgeteventtime",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"返回 {number}"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"返回事件发生的时间戳。"}),"\n",(0,s.jsxs)(n.h2,{id:"keyeventgetdowntime",children:["KeyEvent.getDownTime()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keyeventgetdowntime",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["返回最近一次按下事件的时间戳。如果本身是按下事件，则与",(0,s.jsx)(n.code,{children:"getEventTime()"}),"相同。"]}),"\n",(0,s.jsxs)(n.h2,{id:"keyeventkeycodetostringkeycode",children:["KeyEvent.keyCodeToString(keyCode)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keyeventkeycodetostringkeycode",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:'把键值转换为字符串。例如 KEYCODE_HOME 转换为"KEYCODE_HOME"。'}),"\n",(0,s.jsxs)(n.h1,{id:"keys",children:["keys",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keys",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"稳定性: 稳定"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:"\n"})]}),"\n",(0,s.jsx)(n.p,{children:"按键事件中所有可用的按键名称为："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"volume_up"})," 音量上键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"volume_down"})," 音量下键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"home"})," 主屏幕键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"back"})," 返回键"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"menu"})," 菜单键"]}),"\n"]}),"\n",(0,s.jsxs)(n.h1,{id:"eventemitter",children:["EventEmitter",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitter",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"稳定性: 稳定"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:"\n"})]}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitterdefaultmaxlisteners",children:["EventEmitter.defaultMaxListeners",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitterdefaultmaxlisteners",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"每个事件默认可以注册最多 10 个监听器。 单个 EventEmitter 实例的限制可以使用 emitter.setMaxListeners(n) 方法改变。 所有 EventEmitter 实例的默认值可以使用 EventEmitter.defaultMaxListeners 属性改变。"}),"\n",(0,s.jsx)(n.p,{children:"设置 EventEmitter.defaultMaxListeners 要谨慎，因为会影响所有 EventEmitter 实例，包括之前创建的。 因而，调用 emitter.setMaxListeners(n) 优先于 EventEmitter.defaultMaxListeners。"}),"\n",(0,s.jsxs)(n.p,{children:["注意，与 Node.js 不同，",(0,s.jsx)(n.strong,{children:"这是一个硬性限制"}),"。 EventEmitter 实例不允许添加更多的监听器，监听器超过最大数量时会抛出 TooManyListenersException。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'emitter.setMaxListeners(emitter.getMaxListeners() + 1);\nemitter.once("event", () => {\n    // 做些操作\n    emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));\n});\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitteraddlistenereventname-listener",children:["EventEmitter.addListener(eventName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitteraddlistenereventname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {any}"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function}"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"emitter.on(eventName, listener) 的别名。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitteremiteventname-args",children:["EventEmitter.emit(eventName[, ...args])",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitteremiteventname-args",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {any}"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"})," {any}"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，并传入提供的参数。"}),"\n",(0,s.jsx)(n.p,{children:"如果事件有监听器，则返回 true ，否则返回 false。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventemittereventnames",children:["EventEmitter.eventNames()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemittereventnames",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"返回一个列出触发器已注册监听器的事件的数组。 数组中的值为字符串或符号。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const myEE = events.emitter();\nmyEE.on("foo", () => {});\nmyEE.on("bar", () => {});\n\nconst sym = Symbol("symbol");\nmyEE.on(sym, () => {});\n\nconsole.log(myEE.eventNames());\n// 打印: [ \'foo\', \'bar\', Symbol(symbol) ]\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventemittergetmaxlisteners",children:["EventEmitter.getMaxListeners()",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemittergetmaxlisteners",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"返回 EventEmitter 当前的最大监听器限制值，该值可以通过 emitter.setMaxListeners(n) 设置或默认为 EventEmitter.defaultMaxListeners。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitterlistenercounteventname",children:["EventEmitter.listenerCount(eventName)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitterlistenercounteventname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {string} 正在被监听的事件名"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"返回正在监听名为 eventName 的事件的监听器的数量。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitterlistenerseventname",children:["EventEmitter.listeners(eventName)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitterlistenerseventname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {string}"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"返回名为 eventName 的事件的监听器数组的副本。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'server.on("connection", (stream) => {\n    console.log("someone connected!");\n});\nconsole.log(util.inspect(server.listeners("connection")));\n// 打印: [ [Function] ]\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitteroneventname-listener",children:["EventEmitter.on(eventName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitteroneventname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {any} 事件名"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 回调函数"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"添加 listener 函数到名为 eventName 的事件的监听器数组的末尾。 不会检查 listener 是否已被添加。 多次调用并传入相同的 eventName 和 listener 会导致 listener 被添加与调用多次。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'server.on("connection", (stream) => {\n    console.log("有连接！");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"返回一个 EventEmitter 引用，可以链式调用。"}),"\n",(0,s.jsx)(n.p,{children:"默认情况下，事件监听器会按照添加的顺序依次调用。 emitter.prependListener() 方法可用于将事件监听器添加到监听器数组的开头。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const myEE = events.emitter();\nmyEE.on("foo", () => console.log("a"));\nmyEE.prependListener("foo", () => console.log("b"));\nmyEE.emit("foo");\n// 打印:\n//   b\n//   a\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitteronceeventname-listener",children:["EventEmitter.once(eventName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitteronceeventname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {any} 事件名"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 回调函数"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"添加一个单次 listener 函数到名为 eventName 的事件。 下次触发 eventName 事件时，监听器会被移除，然后调用。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'server.once("connection", (stream) => {\n    console.log("首次调用！");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"返回一个 EventEmitter 引用，可以链式调用。"}),"\n",(0,s.jsx)(n.p,{children:"默认情况下，事件监听器会按照添加的顺序依次调用。 emitter.prependOnceListener() 方法可用于将事件监听器添加到监听器数组的开头。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const myEE = events.emitter();\nmyEE.once("foo", () => console.log("a"));\nmyEE.prependOnceListener("foo", () => console.log("b"));\nmyEE.emit("foo");\n// 打印:\n//   b\n//   a\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitterprependlistenereventname-listener",children:["EventEmitter.prependListener(eventName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitterprependlistenereventname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {any} 事件名"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 回调函数"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"添加 listener 函数到名为 eventName 的事件的监听器数组的开头。 不会检查 listener 是否已被添加。 多次调用并传入相同的 eventName 和 listener 会导致 listener 被添加与调用多次。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'server.prependListener("connection", (stream) => {\n    console.log("有连接！");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"返回一个 EventEmitter 引用，可以链式调用。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitterprependoncelistenereventname-listener",children:["EventEmitter.prependOnceListener(eventName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitterprependoncelistenereventname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {any} 事件名"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function} 回调函数"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"添加一个单次 listener 函数到名为 eventName 的事件的监听器数组的开头。 下次触发 eventName 事件时，监听器会被移除，然后调用。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'server.prependOnceListener("connection", (stream) => {\n    console.log("首次调用！");\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"返回一个 EventEmitter 引用，可以链式调用。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitterremovealllistenerseventname",children:["EventEmitter.removeAllListeners([eventName])",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitterremovealllistenerseventname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {any}"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"移除全部或指定 eventName 的监听器。"}),"\n",(0,s.jsx)(n.p,{children:"注意，在代码中移除其他地方添加的监听器是一个不好的做法，尤其是当 EventEmitter 实例是其他组件或模块创建的。"}),"\n",(0,s.jsx)(n.p,{children:"返回一个 EventEmitter 引用，可以链式调用。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventemitterremovelistenereventname-listener",children:["EventEmitter.removeListener(eventName, listener)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitterremovelistenereventname-listener",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"eventName"})," {any}"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"listener"})," {Function}"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"从名为 eventName 的事件的监听器数组中移除指定的 listener。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const callback = (stream) => {\n    console.log("有连接！");\n};\nserver.on("connection", callback);\n// ...\nserver.removeListener("connection", callback);\n'})}),"\n",(0,s.jsx)(n.p,{children:"removeListener 最多只会从监听器数组里移除一个监听器实例。 如果任何单一的监听器被多次添加到指定 eventName 的监听器数组中，则必须多次调用 removeListener 才能移除每个实例。"}),"\n",(0,s.jsx)(n.p,{children:"注意，一旦一个事件被触发，所有绑定到它的监听器都会按顺序依次触发。 这意味着，在事件触发后、最后一个监听器完成执行前，任何 removeListener() 或 removeAllListeners() 调用都不会从 emit() 中移除它们。 随后的事件会像预期的那样发生。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const myEmitter = events.emitter();\n\nconst callbackA = () => {\n    console.log("A");\n    myEmitter.removeListener("event", callbackB);\n};\n\nconst callbackB = () => {\n    console.log("B");\n};\n\nmyEmitter.on("event", callbackA);\n\nmyEmitter.on("event", callbackB);\n\n// callbackA 移除了监听器 callbackB，但它依然会被调用。\n// 触发是内部的监听器数组为 [callbackA, callbackB]\nmyEmitter.emit("event");\n// 打印:\n//   A\n//   B\n\n// callbackB 被移除了。\n// 内部监听器数组为 [callbackA]\nmyEmitter.emit("event");\n// 打印:\n//   A\n'})}),"\n",(0,s.jsx)(n.p,{children:"因为监听器是使用内部数组进行管理的，所以调用它会改变在监听器被移除后注册的任何监听器的位置索引。 虽然这不会影响监听器的调用顺序，但意味着由 emitter.listeners() 方法返回的监听器数组副本需要被重新创建。"}),"\n",(0,s.jsx)(n.p,{children:"返回一个 EventEmitter 引用，可以链式调用。"}),"\n",(0,s.jsxs)(n.h2,{id:"eventemittersetmaxlistenersn",children:["EventEmitter.setMaxListeners(n)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemittersetmaxlistenersn",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"n"})," {number}"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"默认情况下，如果为特定事件添加了超过 10 个监听器，则 EventEmitter 会打印一个警告。 此限制有助于寻找内存泄露。 但是，并不是所有的事件都要被限为 10 个。 emitter.setMaxListeners() 方法允许修改指定的 EventEmitter 实例的限制。 值设为 Infinity（或 0）表明不限制监听器的数量。"}),"\n",(0,s.jsx)(n.p,{children:"返回一个 EventEmitter 引用，可以链式调用。"}),"\n",(0,s.jsxs)(n.h1,{id:"eventsbroadcast",children:["events.broadcast",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eventsbroadcast",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"脚本间广播"}),"\n",(0,s.jsxs)(n.p,{children:["脚本间通信除了使用 engines 模块提供的",(0,s.jsx)(n.code,{children:"ScriptEngine.emit()"}),"方法以外，也可以使用 events 模块提供的 broadcast 广播。"]}),"\n",(0,s.jsxs)(n.p,{children:["events.broadcast 本身是一个 EventEmitter，但它的事件是在脚本间共享的，所有脚本都能发送和监听这些事件；事件处理会在脚本主线程执行（后续可能加入函数",(0,s.jsx)(n.code,{children:"onThisThread(eventName, ...args)"}),"来提供在其他线程执行的能力）。"]}),"\n",(0,s.jsx)(n.p,{children:"例如在一个脚本发送一个广播 hello:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'events.broadcast.emit("hello", "小明");\n'})}),"\n",(0,s.jsx)(n.p,{children:"在其他脚本中监听并处理："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'events.broadcast.on("hello", function (name) {\n    toast("你好, " + name);\n});\n//保持脚本运行\nsetInterval(() => {}, 1000);\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["v1%2F%E9%AB%98%E7%BA%A7%2Fevents.md"]={toc:[{text:"events.emitter()",id:"eventsemitter",depth:2},{text:"events.observeKey()",id:"eventsobservekey",depth:2},{text:"events.onKeyDown(keyName, listener)",id:"eventsonkeydownkeyname-listener",depth:2},{text:"events.onKeyUp(keyName, listener)",id:"eventsonkeyupkeyname-listener",depth:2},{text:"events.onceKeyDown(keyName, listener)",id:"eventsoncekeydownkeyname-listener",depth:2},{text:"events.onceKeyUp(keyName, listener)",id:"eventsoncekeyupkeyname-listener",depth:2},{text:"events.removeAllKeyDownListeners(keyName)",id:"eventsremoveallkeydownlistenerskeyname",depth:2},{text:"events.removeAllKeyUpListeners(keyName)",id:"eventsremoveallkeyuplistenerskeyname",depth:2},{text:"events.setKeyInterceptionEnabled([key, ]enabled)",id:"eventssetkeyinterceptionenabledkey-enabled",depth:2},{text:"events.observeTouch()",id:"eventsobservetouch",depth:2},{text:"events.setTouchEventTimeout(timeout)",id:"eventssettoucheventtimeouttimeout",depth:2},{text:"events.getTouchEventTimeout()",id:"eventsgettoucheventtimeout",depth:2},{text:"events.onTouch(listener)",id:"eventsontouchlistener",depth:2},{text:"events.removeAllTouchListeners()",id:"eventsremovealltouchlisteners",depth:2},{text:"事件: 'key'",id:"事件-key",depth:2},{text:"事件: 'key_down'",id:"事件-key_down",depth:2},{text:"事件: 'key_up'",id:"事件-key_up",depth:2},{text:"事件: 'exit`",id:"事件-exit",depth:2},{text:"events.observeNotification()",id:"eventsobservenotification",depth:2},{text:"events.observeToast()",id:"eventsobservetoast",depth:2},{text:"事件: 'toast'",id:"事件-toast",depth:2},{text:"事件: 'notification'",id:"事件-notification",depth:2},{text:"Notification.number",id:"notificationnumber",depth:2},{text:"Notification.when",id:"notificationwhen",depth:2},{text:"Notification.getPackageName()",id:"notificationgetpackagename",depth:2},{text:"Notification.getTitle()",id:"notificationgettitle",depth:2},{text:"Notification.getText()",id:"notificationgettext",depth:2},{text:"Notification.click()",id:"notificationclick",depth:2},{text:"Notification.delete()",id:"notificationdelete",depth:2},{text:"KeyEvent.getAction()",id:"keyeventgetaction",depth:2},{text:"KeyEvent.getKeyCode()",id:"keyeventgetkeycode",depth:2},{text:"KeyEvent.getEventTime()",id:"keyeventgeteventtime",depth:2},{text:"KeyEvent.getDownTime()",id:"keyeventgetdowntime",depth:2},{text:"KeyEvent.keyCodeToString(keyCode)",id:"keyeventkeycodetostringkeycode",depth:2},{text:"EventEmitter.defaultMaxListeners",id:"eventemitterdefaultmaxlisteners",depth:2},{text:"EventEmitter.addListener(eventName, listener)",id:"eventemitteraddlistenereventname-listener",depth:2},{text:"EventEmitter.emit(eventName[, ...args])",id:"eventemitteremiteventname-args",depth:2},{text:"EventEmitter.eventNames()",id:"eventemittereventnames",depth:2},{text:"EventEmitter.getMaxListeners()",id:"eventemittergetmaxlisteners",depth:2},{text:"EventEmitter.listenerCount(eventName)",id:"eventemitterlistenercounteventname",depth:2},{text:"EventEmitter.listeners(eventName)",id:"eventemitterlistenerseventname",depth:2},{text:"EventEmitter.on(eventName, listener)",id:"eventemitteroneventname-listener",depth:2},{text:"EventEmitter.once(eventName, listener)",id:"eventemitteronceeventname-listener",depth:2},{text:"EventEmitter.prependListener(eventName, listener)",id:"eventemitterprependlistenereventname-listener",depth:2},{text:"EventEmitter.prependOnceListener(eventName, listener)",id:"eventemitterprependoncelistenereventname-listener",depth:2},{text:"EventEmitter.removeAllListeners([eventName])",id:"eventemitterremovealllistenerseventname",depth:2},{text:"EventEmitter.removeListener(eventName, listener)",id:"eventemitterremovelistenereventname-listener",depth:2},{text:"EventEmitter.setMaxListeners(n)",id:"eventemittersetmaxlistenersn",depth:2}],title:"events.broadcast",headingTitle:"events.broadcast",frontmatter:{}}}}]);