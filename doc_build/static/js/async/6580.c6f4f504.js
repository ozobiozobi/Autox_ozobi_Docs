"use strict";(self.webpackChunkrepress_demo=self.webpackChunkrepress_demo||[]).push([["6580"],{7661:function(r,o,e){e.r(o),e.d(o,{default:()=>s});var n=e(2676),d=e(453);function t(r){let o=Object.assign({h1:"h1",a:"a",div:"div",p:"p",pre:"pre",code:"code",strong:"strong",h2:"h2",ul:"ul",li:"li"},(0,d.ah)(),r.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.h1,{id:"rootautomator",children:["RootAutomator",(0,n.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#rootautomator",children:"#"})]}),"\n",(0,n.jsxs)(o.div,{className:"rspress-directive tip",children:[(0,n.jsx)(o.div,{className:"rspress-directive-title",children:"稳定性: 稳定"}),(0,n.jsx)(o.div,{className:"rspress-directive-content",children:"\n"})]}),"\n",(0,n.jsx)(o.p,{children:"RootAutomator 是一个使用 root 权限来模拟触摸的对象，用它可以完成触摸与多点触摸，并且这些动作的执行没有延迟。"}),"\n",(0,n.jsx)(o.p,{children:"一个脚本中最好只存在一个 RootAutomator，并且保证脚本结束退出他。可以在 exit 事件中退出 RootAutomator，例如："}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:"var ra = new RootAutomator();\r\nevents.on('exit', function(){\r\n  ra.exit();\r\n});\r\n//执行一些点击操作\r\n...\r\n\n"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"注意以下命令需要 root 权限"})}),"\n",(0,n.jsxs)(o.h2,{id:"rootautomatortapx-y-id",children:["RootAutomator.tap(x, y[, id])",(0,n.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#rootautomatortapx-y-id",children:"#"})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"x"})," {number} 横坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"y"})," {number} 纵坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"id"})," {number} 多点触摸 id，可选，默认为 1，可以通过 setDefaultId 指定。"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:'点击位置(x, y)。其中 id 是一个整数值，用于区分多点触摸，不同的 id 表示不同的"手指"，例如：'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:'var ra = new RootAutomator();\r\n//让"手指1"点击位置(100, 100)\r\nra.tap(100, 100, 1);\r\n//让"手指2"点击位置(200, 200);\r\nra.tap(200, 200, 2);\r\nra.exit();\n'})}),"\n",(0,n.jsx)(o.p,{children:"如果不需要多点触摸，则不需要 id 这个参数。\r\n多点触摸通常用于手势或游戏操作，例如模拟双指捏合、双指上滑等。"}),"\n",(0,n.jsxs)(o.p,{children:["某些情况下可能存在 tap 点击无反应的情况，这时可以用",(0,n.jsx)(o.code,{children:"RootAutomator.press()"}),"函数代替。"]}),"\n",(0,n.jsxs)(o.h2,{id:"rootautomatorswipex1-x2-y1-y2-duration-id",children:["RootAutomator.swipe(x1, x2, y1, y2[, duration, id])",(0,n.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#rootautomatorswipex1-x2-y1-y2-duration-id",children:"#"})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"x1"})," {number} 滑动起点横坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"y1"})," {number} 滑动起点纵坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"x2"})," {number} 滑动终点横坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"y2"})," {number} 滑动终点纵坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"duration"})," {number} 滑动时长，单位毫秒，默认值为 300"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"id"})," {number} 多点触摸 id，可选，默认为 1"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"模拟一次从(x1, y1)到(x2, y2)的时间为 duration 毫秒的滑动。"}),"\n",(0,n.jsxs)(o.h2,{id:"rootautomatorpressx-y-duration-id",children:["RootAutomator.press(x, y, duration[, id])",(0,n.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#rootautomatorpressx-y-duration-id",children:"#"})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"x"})," {number} 横坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"y"})," {number} 纵坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"duration"})," {number} 按下时长"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"id"})," {number} 多点触摸 id，可选，默认为 1"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"模拟按下位置(x, y)，时长为 duration 毫秒。"}),"\n",(0,n.jsxs)(o.h2,{id:"rootautomatorlongpressx-y-id",children:["RootAutomator.longPress(x, y[, id])",(0,n.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#rootautomatorlongpressx-y-id",children:"#"})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"x"})," {number} 横坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"y"})," {number} 纵坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"duration"})," {number} 按下时长"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"id"})," {number} 多点触摸 id，可选，默认为 1"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"模拟长按位置(x, y)。"}),"\n",(0,n.jsx)(o.p,{children:"以上为简单模拟触摸操作的函数。如果要模拟一些复杂的手势，需要更底层的函数。"}),"\n",(0,n.jsxs)(o.h2,{id:"rootautomatortouchdownx-y-id",children:["RootAutomator.touchDown(x, y[, id])",(0,n.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#rootautomatortouchdownx-y-id",children:"#"})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"x"})," {number} 横坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"y"})," {number} 纵坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"id"})," {number} 多点触摸 id，可选，默认为 1"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"模拟手指按下位置(x, y)。"}),"\n",(0,n.jsxs)(o.h2,{id:"rootautomatortouchmovex-y-id",children:["RootAutomator.touchMove(x, y[, id])",(0,n.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#rootautomatortouchmovex-y-id",children:"#"})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"x"})," {number} 横坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"y"})," {number} 纵坐标"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"id"})," {number} 多点触摸 id，可选，默认为 1"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"模拟移动手指到位置(x, y)。"}),"\n",(0,n.jsxs)(o.h2,{id:"rootautomatortouchupid",children:["RootAutomator.touchUp([id])",(0,n.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#rootautomatortouchupid",children:"#"})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"id"})," {number} 多点触摸 id，可选，默认为 1"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"模拟手指弹起。"})]})}function i(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,d.ah)(),r.components);return o?(0,n.jsx)(o,{...r,children:(0,n.jsx)(t,{...r})}):t(r)}let s=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["v1%2F%E5%9F%BA%E7%A1%80%2FcoordinatesBasedAutomation%2FrootAutomator.md"]={toc:[{text:"RootAutomator.tap(x, y[, id])",id:"rootautomatortapx-y-id",depth:2},{text:"RootAutomator.swipe(x1, x2, y1, y2[, duration, id])",id:"rootautomatorswipex1-x2-y1-y2-duration-id",depth:2},{text:"RootAutomator.press(x, y, duration[, id])",id:"rootautomatorpressx-y-duration-id",depth:2},{text:"RootAutomator.longPress(x, y[, id])",id:"rootautomatorlongpressx-y-id",depth:2},{text:"RootAutomator.touchDown(x, y[, id])",id:"rootautomatortouchdownx-y-id",depth:2},{text:"RootAutomator.touchMove(x, y[, id])",id:"rootautomatortouchmovex-y-id",depth:2},{text:"RootAutomator.touchUp([id])",id:"rootautomatortouchupid",depth:2}],title:"RootAutomator",headingTitle:"RootAutomator",frontmatter:{}}}}]);