"use strict";(self.webpackChunkrepress_demo=self.webpackChunkrepress_demo||[]).push([["9922"],{2818:function(e,n,t){t.r(n),t.d(n,{default:()=>c});var a=t(2676),l=t(453);function r(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",br:"br",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"webview-与-html",children:["WebView 与 HTML",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webview-与-html",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"jsbridge",children:["*JsBridge",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jsbridge",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["v6.3.9新增",(0,a.jsx)(n.br,{}),"\n","html>>"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<html>\n  <body style="font: size 2em">\n    <div style="font-size: 100px">原内容</div>\n    \x3c!-- 导入依赖包，也可以不加，不过需要监听AutoxJsBridgeReady事件后才能使用$autox --\x3e\n    <script src="autox://sdk.v1.js"><\/script>\n    <script>\n      function addText(text) {\n        const div = document.createElement("div");\n        div.innerHTML = text;\n        document.body.appendChild(div);\n      }\n      //注册一个监听函数\n      $autox.registerHandler("jsTest", (data, callBack) => {\n        addText(`来自安卓调用，data=${data}`);\n        setTimeout(() => {\n          //回调安卓\n          callBack("web回调数据");\n        }, 1000);\n      });\n      //调用安卓端\n      $autox.callHandler("test", "web调用数据", (data) => {\n        addText("安卓回调, data:" + data);\n      });\n\n      document.addEventListener("AutoxJsBridgeReady", () => {\n        //$autox.\n      });\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,a.jsx)(n.p,{children:"js代码"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'"ui";\n\nui.layout(`\n    <vertical>\n        <webview id="web" h="*"/>\n    </vertical>`)\n\nui.web.loadUrl("file://" + files.path("./网页.html"))\n/*\n    注意：在web与安卓端传递的数据只能是字符串，其他数据需自行使用JSON序列化\n    在调用callHandler时传入了回调函数，但web端没有调用则会造成内存泄露。\n    jsBridge自动注入依赖于webViewClient，如设置了自定义webViewClient则需要在合适的时机（页面加载完成后）调用webview.injectionJsBridge()手动注入\n*/\n//注册一个监听函数\nui.web.jsBridge.registerHandler("test", (data, callBack) => {\n    toastLog("web调用安卓,data:" + data)\n    setTimeout(() => {\n        //回调web\n        callBack("1155")\n    }, 2000)\n})\n//定时器中等待web加载完成\nsetTimeout(() => {\n    ui.web.jsBridge.callHandler(\'jsTest\', \'数据\', (data) => {\n        toastLog(\'web回调,data:\' + data)\n    })\n}, 1000)\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"纯js实现",children:["纯js实现",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#纯js实现",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'"ui";\nui.layout(\n    <vertical>\n        <horizontal bg="#c7edcc" gravity="center" h="auto">\n            <button text="网络冲浪" id="surfInternetBtn" style="Widget.AppCompat.Button.Colored" w="auto" />\n            <button text="记忆翻牌" id="loadLocalHtmlBtn" style="Widget.AppCompat.Button.Colored" w="auto" />\n            <button text="控制台" id="consoleBtn" style="Widget.AppCompat.Button.Colored" w="auto" />\n        </horizontal>\n        <vertical h="*" w="*">\n            <webview id="webView" layout_below="title" w="*" h="*" />\n        </vertical>\n    </vertical>\n);\n\nfunction callJavaScript(webViewWidget, script, callback) {\n    try {\n        console.assert(webViewWidget != null, "webView控件为空");\n        //console.log(script.toString())\n        webViewWidget.evaluateJavascript("javascript:" + script, new JavaAdapter(android.webkit.ValueCallback, {\n            onReceiveValue: (val) => {\n                if (callback) {\n                    callback(val);\n                }\n            }\n        }));\n    } catch (e) {\n        console.error("执行JavaScript失败");\n        console.trace(e);\n    }\n}\n\nfunction AutoX() {\n    let getAutoXFrame = () => {\n        let bridgeFrame = document.getElementById("AutoXFrame");\n        if (!bridgeFrame) {\n            bridgeFrame = document.createElement(\'iframe\');\n            bridgeFrame.id = "AutoXFrame";\n            bridgeFrame.style = "display: none";\n            document.body.append(bridgeFrame);\n        }\n        return bridgeFrame;\n    };\n    const h5Callbackers = {};\n    let h5CallbackIndex = 1;\n    let setCallback = (callback) => {\n        let callId = h5CallbackIndex++;\n        h5Callbackers[callId] = {\n            "callback": callback\n        };\n        return callId;\n    };\n    let getCallback = (callId) => {\n        let callback = h5Callbackers[callId];\n        if (callback) {\n            delete h5Callbackers[callId];\n        }\n        return callback;\n    };\n\n    function invoke(cmd, params, callback) {\n        let callId = null;\n        try {\n            let paramsStr = JSON.stringify(params);\n            let AutoXFrame = getAutoXFrame();\n            callId = setCallback(callback);\n            AutoXFrame.src = "jsbridge://" + cmd + "/" + callId + "/" + encodeURIComponent(paramsStr);\n        } catch (e) {\n            if (callId) {\n                getCallback(callId);\n            }\n            console.trace(e);\n        }\n    };\n    let callback = (data) => {\n        let callId = data.callId;\n        let params = data.params;\n        let callbackFun = getCallback(callId);\n        if (callbackFun) {\n            callbackFun.callback(params);\n        }\n    };\n    return {\n        invoke: invoke,\n        callback: callback\n    };\n};\nfunction bridgeHandler_handle(cmd, params) {\n    console.log(\'bridgeHandler处理 cmd=%s, params=%s\', cmd, JSON.stringify(params));\n    let fun = this[cmd];\n    if (!fun) {\n        throw new Error("cmd= " + cmd + " 没有定义实现");\n    }\n    let ret = fun(params)\n    return ret;\n}\nfunction mFunction(params) {\n    toastLog(params.toString());\n    device.vibrate(120);\n    return files.isDir(\'/storage/emulated/0/Download\')//\'toast提示成功\';\n}\nfunction webViewExpand_init(webViewWidget) {\n    webViewWidget.webViewClient = new JavaAdapter(android.webkit.WebViewClient, {\n        onPageFinished: (webView, curUrl) => {\n            try {\n                // 注入 AutoX\n                callJavaScript(webView, AutoX.toString() + ";var auto0 = AutoX();auto0.invoke(\'mFunction\',\'This is AutoX!\',(data) => {console.log(\'接收到callback1:\' + JSON.stringify(data));});", null);\n            } catch (e) {\n                console.trace(e)\n            }\n        },\n        shouldOverrideUrlLoading: (webView, request) => {\n            let url = \'\';\n            try {\n                url = (request.a && request.a.a) || (request.url);\n                if (url instanceof android.net.Uri) {\n                    url = url.toString();\n                }\n                if (url.indexOf("jsbridge://") == 0) {\n                    let uris = url.split("/");\n                    let cmd = uris[2];\n                    let callId = uris[3];\n                    let params = java.net.URLDecoder.decode(uris[4], "UTF-8");\n                    console.log(\'AutoX处理JavaScript调用请求: callId=%s, cmd=%s, params=%s\', callId, cmd, params);\n                    let result = null;\n                    try {\n                        result = bridgeHandler_handle(cmd, JSON.parse(params));\n                    } catch (e) {\n                        console.trace(e);\n                        result = {\n                            message: e.message\n                        };\n                    }\n                    result = result || {};\n                    webView.loadUrl("javascript:auto0.callback({\'callId\':" + callId + ", \'params\': " + JSON.stringify(result) + "});");\n                } else if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("file://") || url.startsWith("ws://") || url.startsWith("wss://")) {\n                    webView.loadUrl(url);\n                } else {\n                }\n                return true;\n            } catch (e) {\n                if (e.javaException instanceof android.content.ActivityNotFoundException) {\n                    webView.loadUrl(url);\n                } else {\n                    toastLog(\'无法打开URL: \' + url);\n                }\n                console.trace(e);\n            }\n        },\n        onReceivedError: (webView, webResourceRequest, webResourceError) => {\n            let url = webResourceRequest.getUrl();\n            let errorCode = webResourceError.getErrorCode();\n            let description = webResourceError.getDescription();\n            console.trace(errorCode + " " + description + " " + url);\n        }\n    });\n    webViewWidget.webChromeClient = new JavaAdapter(android.webkit.WebChromeClient, {\n        onConsoleMessage: (msg) => {\n            console.log("[%s:%s]: %s", msg.sourceId(), msg.lineNumber(), msg.message());\n        }\n    });\n}\nwebViewExpand_init(ui.webView)\nui.webView.loadUrl("https://wht.im");\n\nui.surfInternetBtn.on("click", () => {\n    webViewExpand_init(ui.webView);\n    ui.webView.loadUrl("https://wht.im");\n});\nui.consoleBtn.on("click", () => {\n    app.startActivity("console");\n});\nui.loadLocalHtmlBtn.on(\'click\', () => {\n    webViewExpand_init(ui.webView);\n    let path = "file:" + files.path("game.html");\n    ui.webView.loadUrl(path);\n});\n\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}let c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["v1%2F%E9%AB%98%E7%BA%A7%2FwebViewAndHtml.md"]={toc:[{text:"*JsBridge",id:"jsbridge",depth:2},{text:"纯js实现",id:"纯js实现",depth:2}],title:"WebView 与 HTML",headingTitle:"WebView 与 HTML",frontmatter:{}}}}]);