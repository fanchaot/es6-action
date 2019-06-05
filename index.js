// 第四步：
// ES Moudule 模块引入方式
// 原生浏览器不知道什么意思 webpack 知道
// webpack 模块打包工具 CommonJS CMD AMD

// import Header from './header.js'
// import Contant from './contant'
// import Sidebar from './sidebar'

// 第五步 CommonJS：
var Header = require('./header.js')
var Contant = require('./contant.js')
var Sidebar = require('./sidebar.js')

// 1. 第一种写法
// var dom = document.getElementById('root')
// var header = document.createElement('div')
// header.innerText = 'header'
// dom.append(header)

// var sidebar = document.createElement('div')
// sidebar.innerText = 'sidebar'
// dom.append(sidebar)

// var contant = document.createElement('div')
// contant.innerText = 'contant'
// dom.append(contant)
// 2. 第二种写法


new Header()
new Contant()
new Sidebar()