"use strict";(self.webpackChunkrepress_demo=self.webpackChunkrepress_demo||[]).push([["1139"],{8943:function(e,s,n){n.r(s),n.d(s,{default:()=>l});var r=n(2676),t=n(453);function h(e){let s=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"matchingresult",children:["MatchingResult",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#matchingresult",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"[v4.1.0 新增]"})}),"\n",(0,r.jsxs)(s.h2,{id:"matches",children:["matches",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#matches",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"{Array} 匹配结果的数组。"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"数组的元素是一个 Match 对象："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"point"})," {Point} 匹配位置"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"similarity"})," {number} 相似度"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"例如:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'var result = images.matchTemplate(img, template, {\r\n    max: 100,\r\n});\r\nresult.matches.forEach((match) => {\r\n    log("point = " + match.point + ", similarity = " + match.similarity);\r\n});\n'})}),"\n",(0,r.jsxs)(s.h2,{id:"points",children:["points",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#points",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"{Array} 匹配位置的数组。"}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"first",children:["first()",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#first",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"返回 {Match}"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["第一个匹配结果。如果没有任何匹配，则返回",(0,r.jsx)(s.code,{children:"null"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"last",children:["last()",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#last",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"返回 {Match}"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["最后一个匹配结果。如果没有任何匹配，则返回",(0,r.jsx)(s.code,{children:"null"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"leftmost",children:["leftmost()",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#leftmost",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"返回 {Match}"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["位于大图片最左边的匹配结果。如果没有任何匹配，则返回",(0,r.jsx)(s.code,{children:"null"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"topmost",children:["topmost()",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#topmost",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"返回 {Match}"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["位于大图片最上边的匹配结果。如果没有任何匹配，则返回",(0,r.jsx)(s.code,{children:"null"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"rightmost",children:["rightmost()",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#rightmost",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"返回 {Match}"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["位于大图片最右边的匹配结果。如果没有任何匹配，则返回",(0,r.jsx)(s.code,{children:"null"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"bottommost",children:["bottommost()",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#bottommost",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"返回 {Match}"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["位于大图片最下边的匹配结果。如果没有任何匹配，则返回",(0,r.jsx)(s.code,{children:"null"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"best",children:["best()",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#best",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"返回 {Match}"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["相似度最高的匹配结果。如果没有任何匹配，则返回",(0,r.jsx)(s.code,{children:"null"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"worst",children:["worst()",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#worst",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"返回 {Match}"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["相似度最低的匹配结果。如果没有任何匹配，则返回",(0,r.jsx)(s.code,{children:"null"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"sortbycmp",children:["sortBy(cmp)",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#sortbycmp",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['cmp {Function}|{string} 比较函数，或者是一个字符串表示排序方向。例如"left"表示将匹配结果按匹配位置从左往右排序、"top"表示将匹配结果按匹配位置从上往下排序，"left-top"表示将匹配结果按匹配位置从左往右、从上往下排序。方向包括',(0,r.jsx)(s.code,{children:"left"}),"（左）, ",(0,r.jsx)(s.code,{children:"top"})," （上）, ",(0,r.jsx)(s.code,{children:"right"})," （右）, ",(0,r.jsx)(s.code,{children:"bottom"}),"（下）。"]}),"\n",(0,r.jsx)(s.li,{children:"{MatchingResult}"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"对匹配结果进行排序，并返回排序后的结果。"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'var result = images.matchTemplate(img, template, {\r\n    max: 100,\r\n});\r\nlog(result.sortBy("top-right"));\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}let l=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["v1%2F%E9%AB%98%E7%BA%A7%2Fimages%2FmatchingResult.md"]={toc:[{text:"matches",id:"matches",depth:2},{text:"points",id:"points",depth:2},{text:"first()",id:"first",depth:2},{text:"last()",id:"last",depth:2},{text:"leftmost()",id:"leftmost",depth:2},{text:"topmost()",id:"topmost",depth:2},{text:"rightmost()",id:"rightmost",depth:2},{text:"bottommost()",id:"bottommost",depth:2},{text:"best()",id:"best",depth:2},{text:"worst()",id:"worst",depth:2},{text:"sortBy(cmp)",id:"sortbycmp",depth:2}],title:"MatchingResult",headingTitle:"MatchingResult",frontmatter:{}}}}]);