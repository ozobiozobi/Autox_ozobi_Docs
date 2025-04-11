"use strict";(self.webpackChunkrepress_demo=self.webpackChunkrepress_demo||[]).push([["7938"],{2130:function(e,n,s){s.r(n),s.d(n,{default:()=>a});var l=s(2676),c=s(453);function o(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong",br:"br"},(0,c.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"console",children:["Console",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#console",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,l.jsx)(n.div,{className:"rspress-directive-title",children:"稳定性: 稳定"}),(0,l.jsx)(n.div,{className:"rspress-directive-content",children:"\n"})]}),"\n",(0,l.jsx)(n.p,{children:"控制台模块提供了一个和 Web 浏览器中相似的用于调试的控制台。用于输出一些调试信息、中间结果等。\nconsole 模块中的一些函数也可以直接作为全局函数使用，例如 log, print 等。"}),"\n",(0,l.jsxs)(n.h2,{id:"consoleshowautohide",children:["console.show(autoHide)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoleshowautohide",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"autoHide"})," {boolean} 是否自动隐藏，默认 false 当程序结束的时候是否自动隐藏控制\n显示控制台。这会显示一个控制台的悬浮窗(需要悬浮窗权限)。"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.show(true); //程序结束自动 隐藏控制台\nconsole.show(); //结束不会自动隐藏控制台\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"consolehide",children:["console.hide()",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolehide",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"隐藏控制台悬浮窗。"}),"\n",(0,l.jsxs)(n.h2,{id:"consoleclear",children:["console.clear()",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoleclear",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"清空控制台。"}),"\n",(0,l.jsxs)(n.h2,{id:"consolelogdata-args",children:["console.log([data][, ...args])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolelogdata-args",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"})," {any}"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"...args"})," {any}"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["打印到控制台，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 ",(0,l.jsx)(n.a,{href:"http://man7.org/linux/man-pages/man3/printf.3.html",target:"_blank",rel:"noopener noreferrer",children:"printf(3)"})," 中的代替值（参数都会传给 util.format()）。"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const count = 5;\nconsole.log("count: %d", count);\n// 打印: count: 5 到 stdout\nconsole.log("count:", count);\n// 打印: count: 5 到 stdout\n'})}),"\n",(0,l.jsx)(n.p,{children:"详见 util.format()。"}),"\n",(0,l.jsx)(n.p,{children:"该函数也可以作为全局函数使用。"}),"\n",(0,l.jsxs)(n.h2,{id:"consoleverbosedata-args",children:["console.verbose([data][, ...args])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoleverbosedata-args",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"})," {any}"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"...args"})," {any}"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"与 console.log 类似，但输出结果以灰色字体显示。输出优先级低于 log，用于输出观察性质的信息。"}),"\n",(0,l.jsxs)(n.h2,{id:"consoleinfodata-args",children:["console.info([data][, ...args])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoleinfodata-args",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"})," {any}"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"...args"})," {any}"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"与 console.log 类似，但输出结果以绿色字体显示。输出优先级高于 log, 用于输出重要信息。"}),"\n",(0,l.jsxs)(n.h2,{id:"consolewarndata-args",children:["console.warn([data][, ...args])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolewarndata-args",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"})," {any}"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"...args"})," {any}"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"与 console.log 类似，但输出结果以蓝色字体显示。输出优先级高于 info, 用于输出警告信息。"}),"\n",(0,l.jsxs)(n.h2,{id:"consoleerrordata-args",children:["console.error([data][, ...args])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoleerrordata-args",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"})," {any}"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"...args"})," {any}"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"与 console.log 类似，但输出结果以红色字体显示。输出优先级高于 warn, 用于输出错误信息。"}),"\n",(0,l.jsxs)(n.h2,{id:"consoleassertvalue-message",children:["console.assert(value, message)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoleassertvalue-message",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"value"})," {any} 要断言的布尔值"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"message"})," {string} value 为 false 时要输出的信息"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"断言。如果 value 为 false 则输出错误信息 message 并停止脚本运行。"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'var a = 1 + 1;\nconsole.assert(a == 3, "加法出错啦");\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"consoletimelabel",children:["console.time([label])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoletimelabel",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v4.1.0 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"label"})," {String} 计时器标签，可省略"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["启动一个计时器，用以计算一个操作的持续时间。\n计时器由一个唯一的 ",(0,l.jsx)(n.code,{children:"label"})," 标识。\n若",(0,l.jsx)(n.code,{children:"label"}),"重复，则会覆盖上一个同名",(0,l.jsx)(n.code,{children:"label"}),"的计时器。\n以同名 ",(0,l.jsx)(n.code,{children:"label"}),"调用 ",(0,l.jsx)(n.code,{children:"console.timeEnd()"})," 来停止计时器，并以毫秒为单位将持续时间输出到控制台。"]}),"\n",(0,l.jsxs)(n.h2,{id:"consoletimeendlabel",children:["console.timeEnd(label)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoletimeendlabel",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v4.1.0 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"label"})," {String} 计时器标签"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["停止之前通过调用 ",(0,l.jsx)(n.code,{children:"console.time()"})," 启动的定时器，并打印结果到控制台。\n调用 ",(0,l.jsx)(n.code,{children:"console.timeEnd()"})," 后定时器会被删除。如果不存在标签指定的定时器则会打印 ",(0,l.jsx)(n.code,{children:"NaNms"}),"。"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'console.time("求和");\nvar sum = 0;\nfor (let i = 0; i < 100000; i++) {\n    sum += i;\n}\nconsole.timeEnd("求和");\n// 打印 求和: xxx ms\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"consoletracedata-args",children:["console.trace([data][, ...args])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoletracedata-args",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v4.1.0 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"})," {any}"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"...args"})," {any}"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"与 console.log 类似，同时会打印出调用这个函数所在的调用栈信息（即当前运行的文件、行数等信息）。"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'console.trace("Show me");\n// 打印: (堆栈跟踪会根据被调用的跟踪的位置而变化)\n// Show me\n//  at <test>:7\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"consoleinputdata-args",children:["console.input(data[, ...args])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consoleinputdata-args",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"})," {any}"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"...args"})," {any}"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["与",(0,l.jsx)(n.code,{children:"console.log"}),"一样输出信息，并在控制台显示输入框等待输入。按控制台的确认按钮后会将输入的字符串用",(0,l.jsx)(n.code,{children:"eval"}),"计算后返回。"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"部分机型可能会有控制台不显示输入框的情况，属于 bug。"})}),"\n",(0,l.jsx)(n.p,{children:"例如："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'var n = console.input("请输入一个数字:");\n//输入123之后：\ntoast(n + 1);\n//显示124\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"consolerawinputdata-args",children:["console.rawInput(data[, ...args])",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolerawinputdata-args",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"data"})," {any}"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"...args"})," {any}"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"与 console.log 一样输出信息，并在控制台显示输入框等待输入。按控制台的确认按钮后会将输入的字符串直接返回。"}),"\n",(0,l.jsx)(n.p,{children:"部分机型可能会有控制台不显示输入框的情况，属于 bug。"}),"\n",(0,l.jsx)(n.p,{children:"例如："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'var n = console.rawInput("请输入一个数字:");\n//输入123之后：\ntoast(n + 1);\n//显示1231\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"consolesetsizew-h",children:["console.setSize(w, h)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesetsizew-h",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"w"})," {number} 宽度"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"h"})," {number} 高度"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"设置控制台的大小，单位像素。"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.show();\n//设置控制台大小为屏幕的四分之一\nconsole.setSize(device.width / 2, device.height / 2);\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"consolesetpositionx-y",children:["console.setPosition(x, y)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesetpositionx-y",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"x"})," {number} 横坐标"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"y"})," {number} 纵坐标"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"设置控制台的位置，单位像素。"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.show();\nconsole.setPosition(100, 100);\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"consolesetgloballogconfigconfig",children:["console.setGlobalLogConfig(config)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesetgloballogconfigconfig",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v4.1.0 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"config"})," {Object} 日志配置，可选的项有：","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"file"})," {string} 日志文件路径，将会把日志写入该文件中"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"maxFileSize"})," {number} 最大文件大小，单位字节，默认为 512 * 1024 (512KB)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rootLevel"}),' {string} 写入的日志级别，默认为"ALL"（所有日志），可以为"OFF"(关闭), "DEBUG", "INFO", "WARN", "ERROR", "FATAL"等。']}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"maxBackupSize"})," {number} 日志备份文件最大数量，默认为 5"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"filePattern"})," {string} 日志写入格式，参见",(0,l.jsx)(n.a,{href:"http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/PatternLayout.html",target:"_blank",rel:"noopener noreferrer",children:"PatternLayout"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:'设置日志保存的路径和配置。例如把日志保存到"/sdcard/1.txt":'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'console.setGlobalLogConfig({\n    "file": "/sdcard/1.txt",\n});\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"printtext",children:["print(text)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#printtext",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"text {string} | {Object} 要打印到控制台的信息"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["相当于",(0,l.jsx)(n.code,{children:"log(text)"}),"。"]}),"\n",(0,l.jsxs)(n.h2,{id:"consolesettitletitlecolorsize",children:["console.setTitle(title,color,size)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesettitletitlecolorsize",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v4.2.5 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"title"})," {string} 标题"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"color"})," {string} 颜色值 #AARRGGBB"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"size"})," {number} 标题高度，字号会随高度变化，单位是 dp"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"设置标题名称，字体颜色，标题栏高度"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'console.setTitle("中文", "#ff11ee00", 30);\nconsole.setTitle("中文");\nconsole.setTitle("中文", "#ff11ee00");\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"consolesetlogsizesize",children:["console.setLogSize(size)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesetlogsizesize",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v4.2.5 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"size"})," {number} 字号大小，单位是 dp 或 sp 20 以内比较合适",(0,l.jsx)(n.br,{}),"\n","设置 log 字号大小"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"需要在显示控制台之后才能设置，否则空指针"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'function myrandom(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nthreads.start(function () {\n    console.show();\n    console.setTitle("中文", "#ff11ee00", 30);\n    console.setCanInput(false);\n    var i = 0;\n    do {\n        console.setLogSize(myrandom(4, 20));\n        console.setCanInput(i % 2 == 0);\n        i++;\n        console.log("i-----\x3e" + i);\n        sleep(3000);\n    } while (true);\n});\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"consolesetcaninputcan",children:["console.setCanInput(can)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesetcaninputcan",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v4.2.5 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"can"})," {boolean} true 或 false 可以输入或不可以输入"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"控制 console 是否可以输入文字"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.setCanInput(false);\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"consolesetbackgroudcolor",children:["console.setBackgroud(color)",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesetbackgroudcolor",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v4.2.5 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"color"})," {string} 颜色值 #AARRGGBB"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["设置 console 背景色,",(0,l.jsx)(n.strong,{children:"需要在显示控制台之后才能设置，否则空指针"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'console.setBackgroud("#33ef0000");\n'})}),"\n",(0,l.jsxs)(n.h2,{id:"consolesetmaxlinesmaxlines",children:["console.setMaxLines(maxLines);",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesetmaxlinesmaxlines",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"[v5.0.2 新增]"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"maxLines"})," {number} 最大行数 如 10 行\n设置 console 显示最大行数，默认-1，不限 ，超出行数系统会清空，从 0 开始显示\n不限制，显示列表过长，android 内存又不足，系统会回收 console 的引用，即 console 将不显示。"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.setMaxLines(500);\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"consolesetbackground",children:["console.setBackground()",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#consolesetbackground",children:"#"})]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}let a=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["v1%2F%E5%9F%BA%E7%A1%80%2Fconsole.md"]={toc:[{text:"console.show(autoHide)",id:"consoleshowautohide",depth:2},{text:"console.hide()",id:"consolehide",depth:2},{text:"console.clear()",id:"consoleclear",depth:2},{text:"console.log([data][, ...args])",id:"consolelogdata-args",depth:2},{text:"console.verbose([data][, ...args])",id:"consoleverbosedata-args",depth:2},{text:"console.info([data][, ...args])",id:"consoleinfodata-args",depth:2},{text:"console.warn([data][, ...args])",id:"consolewarndata-args",depth:2},{text:"console.error([data][, ...args])",id:"consoleerrordata-args",depth:2},{text:"console.assert(value, message)",id:"consoleassertvalue-message",depth:2},{text:"console.time([label])",id:"consoletimelabel",depth:2},{text:"console.timeEnd(label)",id:"consoletimeendlabel",depth:2},{text:"console.trace([data][, ...args])",id:"consoletracedata-args",depth:2},{text:"console.input(data[, ...args])",id:"consoleinputdata-args",depth:2},{text:"console.rawInput(data[, ...args])",id:"consolerawinputdata-args",depth:2},{text:"console.setSize(w, h)",id:"consolesetsizew-h",depth:2},{text:"console.setPosition(x, y)",id:"consolesetpositionx-y",depth:2},{text:"console.setGlobalLogConfig(config)",id:"consolesetgloballogconfigconfig",depth:2},{text:"print(text)",id:"printtext",depth:2},{text:"console.setTitle(title,color,size)",id:"consolesettitletitlecolorsize",depth:2},{text:"console.setLogSize(size)",id:"consolesetlogsizesize",depth:2},{text:"console.setCanInput(can)",id:"consolesetcaninputcan",depth:2},{text:"console.setBackgroud(color)",id:"consolesetbackgroudcolor",depth:2},{text:"console.setMaxLines(maxLines);",id:"consolesetmaxlinesmaxlines",depth:2},{text:"console.setBackground()",id:"consolesetbackground",depth:2}],title:"Console",headingTitle:"Console",frontmatter:{}}}}]);