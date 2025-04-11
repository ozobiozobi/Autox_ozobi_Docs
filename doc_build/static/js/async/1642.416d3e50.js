"use strict";(self.webpackChunkrepress_demo=self.webpackChunkrepress_demo||[]).push([["1642"],{5091:function(e,s,n){n.r(s),n.d(s,{default:()=>t});var r=n(2676),c=n(453);function i(e){let s=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"基于坐标的触摸模拟",children:["基于坐标的触摸模拟",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#基于坐标的触摸模拟",children:"#"})]}),"\n",(0,r.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,r.jsx)(s.div,{className:"rspress-directive-title",children:"稳定性: 稳定"}),(0,r.jsx)(s.div,{className:"rspress-directive-content",children:"\n"})]}),"\n",(0,r.jsx)(s.p,{children:"本章节介绍了一些使用坐标进行点击、滑动的函数。这些函数有的需要安卓 7.0 以上，有的需要 root 权限。"}),"\n",(0,r.jsx)(s.p,{children:'要获取要点击的位置的坐标，可以在开发者选项中开启"指针位置"。'}),"\n",(0,r.jsxs)(s.p,{children:["基于坐标的脚本通常会有分辨率的问题，这时可以通过",(0,r.jsx)(s.code,{children:"setScreenMetrics()"}),"函数来进行自动坐标放缩。这个函数会影响本章节的所有点击、长按、滑动等函数。通过设定脚本设计时的分辨率，使得脚本在其他分辨率下自动放缩坐标。"]}),"\n",(0,r.jsxs)(s.p,{children:["控件和坐标也可以相互结合。一些控件是无法点击的(clickable 为 false), 无法通过",(0,r.jsx)(s.code,{children:".click()"}),"函数来点击，这时如果安卓版本在 7.0 以上或者有 root 权限，就可以通过以下方式来点击："]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'//获取这个控件\r\nvar widget = id("xxx").findOne();\r\n//获取其中心位置并点击\r\nclick(widget.bounds().centerX(), widget.bounds().centerY());\r\n//如果用root权限则用Tap\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["v1%2F%E5%9F%BA%E7%A1%80%2FcoordinatesBasedAutomation%2Fabout.md"]={toc:[],title:"基于坐标的触摸模拟",headingTitle:"基于坐标的触摸模拟",frontmatter:{}}}}]);