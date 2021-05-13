(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{539:function(a,t,v){"use strict";v.r(t);var s=v(21),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h2",{attrs:{id:"vue原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue原理"}},[a._v("#")]),a._v(" Vue原理")]),a._v(" "),v("h3",{attrs:{id:"实例化过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实例化过程"}},[a._v("#")]),a._v(" 实例化过程")]),a._v(" "),v("p",[a._v("初始化生命周期，初始化事件，初始化渲染，触发执行beforeCreate生命周期方法，初始化data/props数据监听，触发执行created生命周期方法。")]),a._v(" "),v("p",[a._v("对应到生命周期示例图，created方法执行结束，接下来判断是否传入挂载的el节点，如果传入的话此时就会通过"),v("code",[a._v("$mount")]),a._v("函数把组件挂载到DOM上面，整个vue构造函数就执行完成了。以上是vue对象创建的基本流程。")]),a._v(" "),v("h3",{attrs:{id:"模板编译过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模板编译过程"}},[a._v("#")]),a._v(" 模板编译过程")]),a._v(" "),v("p",[a._v("挂载的"),v("code",[a._v("$mount")]),a._v("函数，此函数的实现与运行环境有关，在此只看web中的实现。")]),a._v(" "),v("p",[a._v("实现只有简单的两行，")]),a._v(" "),v("p",[a._v("1、判断运行环境为浏览器，")]),a._v(" "),v("p",[a._v("2、调用工具方法查找到el对应的DOM节点，")]),a._v(" "),v("p",[a._v("3、mountComponent方法来实现挂载，")]),a._v(" "),v("p",[a._v("这里就涉及到了挂载之前的处理问题。")]),a._v(" "),v("p",[a._v("1、对于拥有render(JSX)函数的情况，组件可以直接挂载，")]),a._v(" "),v("p",[a._v("2、如果使用的是template，需要从中提取AST渲染方法（注意如果使用构建工具，最终会为我们编译成render(JSX)形式，所以无需担心性能问题），AST即抽象语法树，它是对真实DOM结构的映射，可执行，可编译，能够把每个节点部分都编译成vnode，组成一个有对应层次结构的vnode对象。")]),a._v(" "),v("p",[a._v("有了渲染方法，下一步就是更新DOM，注意并不是直接更新，而是通过vnode，于是涉及到了一个非常重要的概念。")]),a._v(" "),v("h3",{attrs:{id:"虚拟dom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[a._v("#")]),a._v(" 虚拟DOM")]),a._v(" "),v("p",[a._v("虚拟DOM技术是一个很流行的东西，现代前端开发框架vue和react都是基于虚拟DOM来实现的。")]),a._v(" "),v("p",[a._v("虚拟DOM技术是为了解决一个很重要的问题："),v("strong",[a._v("浏览器进行DOM操作会带来较大的开销。")])]),a._v(" "),v("p",[a._v("1、要知道js本身运行速度是很快的，")]),a._v(" "),v("p",[a._v("2、而js对象又可以很准确地描述出类似DOM的树形结构，")]),a._v(" "),v("blockquote",[v("p",[a._v("通过使用js描述出一个假的DOM结构，每次数据变化时候，在假的DOM上分析数据变化前后结构差别，找出这个最小差别并且在真实DOM上只更新这个最小的变化内容，这样就极大程度上降低了对DOM的操作带来的性能开销。")])]),a._v(" "),v("p",[a._v("上面的假的DOM结构就是"),v("strong",[a._v("虚拟DOM，比对的算法成为diff算法，这是实现虚拟DOM技术的关键。")])]),a._v(" "),v("p",[a._v("1、在vue初始化时，首先用JS对象描述出DOM树的结构，")]),a._v(" "),v("p",[a._v("2、用这个描述树去构建真实DOM，并实际展现到页面中，")]),a._v(" "),v("p",[a._v("3、一旦有数据状态变更，需要重新构建一个新的JS的DOM树，")]),a._v(" "),v("p",[a._v("4、对比两棵树差别，找出最小更新内容，")]),a._v(" "),v("p",[a._v("5、并将最小差异内容更新到真实DOM上。")]),a._v(" "),v("p",[a._v("有了虚拟DOM，下面一个问题就是，什么时候会触发更新，接下来要介绍的，就是vue中最具特色的功能--数据响应系统及实现。")]),a._v(" "),v("h3",{attrs:{id:"数据绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据绑定"}},[a._v("#")]),a._v(" 数据绑定")]),a._v(" "),v("p",[a._v("vue.js的作者尤雨溪老师在知乎上一个回答中提到过自己创作vue的过程，最初就是尝试实现一个类似angular1的东西，发现里面对于数据处理非常不优雅，于是创造性的尝试利用ES5中的Object.defineProperty来实现数据绑定，于是就有了最初的vue。vue中响应式的数据处理方式是一项很有价值的东西。")]),a._v(" "),v("p",[a._v("vue官网上面其实有具体介绍，下面是一张官方图片：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/22/726ea901b5c2e.png",alt:"vue响应"}})]),a._v(" "),v("p",[a._v("响应实现的基本原理：")]),a._v(" "),v("p",[a._v("1、vue会遍历此data中对象所有的属性，")]),a._v(" "),v("p",[a._v("2、并使用Object.defineProperty把这些属性全部转为getter/setter，")]),a._v(" "),v("p",[a._v("3、而每个组件实例都有watcher对象，")]),a._v(" "),v("p",[a._v("4、它会在组件渲染的过程中把属性记录为依赖，")]),a._v(" "),v("p",[a._v("5、之后当依赖项的 setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。")]),a._v(" "),v("p",[v("strong",[a._v("为什么vue不能在IE8以下运行？")])]),a._v(" "),v("p",[a._v("因为IE8不支持ES5，所以用不了Object.defineProperty方法，又因为Object.defineProperty无法shim，所以vue不支持IE8及以下不支持ES5的浏览器。")]),a._v(" "),v("h2",{attrs:{id:"什么是回调函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是回调函数"}},[a._v("#")]),a._v(" 什么是回调函数")]),a._v(" "),v("p",[v("a",{attrs:{href:"https://www.zhihu.com/question/19801131",target:"_blank",rel:"noopener noreferrer"}},[a._v("回调函数（callback）是什么？ - 知乎 (zhihu.com)"),v("OutboundLink")],1)]),a._v(" "),v("p",[a._v("引用stack overflow 上大神的描述 其实callback 很简单也很纯粹\n"),v("strong",[a._v('A "callback" is any function that is called by another function which takes the first function as a parameter. （在一个函数中调用另外一个函数就是callback）')])]),a._v(" "),v("div",{staticClass:"language-c line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[a._v("function "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("callback")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("alert")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[a._v('"I am in the callback!"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\nfunction "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("work")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("func"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("alert")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[a._v('"I am calling the callback!"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("func")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("work")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("callback"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br"),v("span",{staticClass:"line-number"},[a._v("2")]),v("br"),v("span",{staticClass:"line-number"},[a._v("3")]),v("br"),v("span",{staticClass:"line-number"},[a._v("4")]),v("br"),v("span",{staticClass:"line-number"},[a._v("5")]),v("br"),v("span",{staticClass:"line-number"},[a._v("6")]),v("br"),v("span",{staticClass:"line-number"},[a._v("7")]),v("br"),v("span",{staticClass:"line-number"},[a._v("8")]),v("br"),v("span",{staticClass:"line-number"},[a._v("9")]),v("br"),v("span",{staticClass:"line-number"},[a._v("10")]),v("br")])]),v("p",[a._v("然后来说一下callback 经常的使用场景")]),a._v(" "),v("p",[v("strong",[a._v('A lot of the time, a "callback" is a function that is called when *something* happens. That *something* can be called an "event" in programmer-speak.（很多时候 callback 都是用来执行事件驱动的任务 比如有货了通知我 |')]),a._v(" "),v("strong",[a._v("你到家了再叫我做饭 等等之类的 ）")])]),a._v(" "),v("h2",{attrs:{id:"主键-外键-索引-唯一索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主键-外键-索引-唯一索引"}},[a._v("#")]),a._v(" 主键，外键，索引，唯一索引")]),a._v(" "),v("p",[a._v("主键(primary key) 能够唯一标识表中某一行的属性或属性组。一个表只能有一个主键，但可以有多个候选索引。主键常常与外键构成参照完整性约束，防止出现数据不一致。主键可以保证记录的唯一和主键域非空,数据库管理系统对于主键自动生成唯一索引，所以主键也是一个特殊的索引。")]),a._v(" "),v("p",[a._v("外键（foreign key） 是用于建立和加强两个表数据之间的链接的一列或多列。外键约束主要用来维护两个表之间数据的一致性。简言之，表的外键就是另一表的主键，外键将两表联系起来。一般情况下，要删除一张表中的主键必须首先要确保其它表中的没有相同外键（即该表中的主键没有一个外键和它相关联）。")]),a._v(" "),v("p",[a._v("索引(index) 是用来快速地寻找那些具有特定值的记录。主要是为了检索的方便，是为了加快访问速度， 按一定的规则创建的，一般起到排序作用。所谓唯一性索引，这种索引和前面的“普通索引”基本相同，但有一个区别：索引列的所有值都只能出现一次，即必须唯一。")]),a._v(" "),v("p",[a._v("总结：")]),a._v(" "),v("p",[a._v("主键一定是唯一性索引，唯一性索引并不一定就是主键。")]),a._v(" "),v("p",[a._v("一个表中可以有多个唯一性索引，但只能有一个主键。")]),a._v(" "),v("p",[a._v("主键列不允许空值，而唯一性索引列允许空值。")]),a._v(" "),v("p",[a._v("主键可以被其他字段作外键引用，而索引不能作为外键引用。")]),a._v(" "),v("h2",{attrs:{id:"进程线程相关的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程线程相关的问题"}},[a._v("#")]),a._v(" 进程线程相关的问题")]),a._v(" "),v("p",[a._v("参考操作系统"),v("a",{attrs:{href:"http://interview.xiaoyou66.com/pages/5bfa72/",target:"_blank",rel:"noopener noreferrer"}},[a._v("进程和线程 | 面试问题浓缩总结 (xiaoyou66.com)"),v("OutboundLink")],1)]),a._v(" "),v("h2",{attrs:{id:"最短路径问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最短路径问题"}},[a._v("#")]),a._v(" 最短路径问题")]),a._v(" "),v("p",[a._v("有下面几个算法")]),a._v(" "),v("ol",[v("li",[a._v("深度或广度优先搜索算法（解决单源最短路径）")]),a._v(" "),v("li",[a._v("弗洛伊德算法（解决多源最短路径）：时间复杂度O(n^3),空间复杂度O(n^2)")]),a._v(" "),v("li",[a._v("迪杰斯特拉算法（解决单源最短路径）")]),a._v(" "),v("li",[a._v("Bellman-Ford算法(解决负权边，解决单源最短路径，前几种方法不能求含负权边的图)：：时间复杂度O(nm),空间复杂度O(m)")])]),a._v(" "),v("h2",{attrs:{id:"指针问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指针问题"}},[a._v("#")]),a._v(" 指针问题")]),a._v(" "),v("p",[a._v("参考：")]),a._v(" "),v("h2",{attrs:{id:"mysql和mongodb的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql和mongodb的区别"}},[a._v("#")]),a._v(" MySQL和MongoDB的区别")]),a._v(" "),v("ol",[v("li",[a._v("MySQL是关系型数据库，MongoDB是非关系型的")]),a._v(" "),v("li",[a._v("MongoDB采用虚拟内存+持久化来存储数据，MySQL不同的引擎存储方式不同")]),a._v(" "),v("li",[a._v("MySQL使用的是传统的SQL语句，MongoDB使用的是独特的MongoDB查询")]),a._v(" "),v("li",[a._v("MongoDB基于内存，把热数据存储在内存中，达到高速读写。而MySQL不同的引擎有不同的特点")]),a._v(" "),v("li",[a._v("MongoDB是新兴的数据库成熟度较低。MySQL有成熟的体系，成熟度较高")]),a._v(" "),v("li",[a._v("MongoDB采用json存储方式，非常适合文档格式的存储与查询")]),a._v(" "),v("li",[a._v("MySQL海量数据处理效率比较低")]),a._v(" "),v("li",[a._v("MongoDB事务支持较弱，开发文档不够完善")])]),a._v(" "),v("h2",{attrs:{id:"go和java的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#go和java的区别"}},[a._v("#")]),a._v(" Go和Java的区别")]),a._v(" "),v("ol",[v("li",[a._v("Go，也称为Golang，是一种编程语言。作为一种用于编程的开源语言，Go使构建"),v("strong",[a._v("可靠，简单和高效的")]),a._v("软件变得更加容易。Go利用"),v("code",[a._v("goroutines")]),a._v("代替了线程，它可以通过多核并发计算能大幅度提高程序的性能，但是Golang的协程如果使用不当反而会成为影响程序执行的瓶颈，它的各种浪费特性使Go变得非常突出。")]),a._v(" "),v("li",[a._v("Java是一种通用的计算机编程语言，它是基于类，并发和面向对象的。Java经过专门设计，只包含很少的实现依赖项。Java应用程序在JVM（Java虚拟机）上运行，它是当今最著名的编程语言之一，Java是一种用于为多种平台开发软件的编程语言。")]),a._v(" "),v("li",[a._v("Java中没有原始的无符号数字类型，这就是Java不适合进行底层编程的原因。")]),a._v(" "),v("li",[a._v("Go提供垃圾回收，但是像Java一样，它不支持完整的GC。")]),a._v(" "),v("li",[a._v("Go上不允许函数重载，必须具有方法和函数的唯一名称。java允许函数重载。")]),a._v(" "),v("li",[a._v("Go不使用异常来显示运行时和寿命终止之类的事件，而是使用错误来显示此类事件。")]),a._v(" "),v("li",[a._v("go的速度比java快")]),a._v(" "),v("li",[a._v("Java默认允许多态。而Go没有。")]),a._v(" "),v("li",[a._v("Go语言使用HTTP协议进行路由配置；而java使用Akka.routing.ConsistentHashingRouter和Akka.routing.ScatterGatherFirstCompletedRouter进行路由配置。")]),a._v(" "),v("li",[a._v("Go代码可以自动扩展到多个核心；而Java并不总是具有足够的可扩展性。")]),a._v(" "),v("li",[a._v("Go语言的继承通过匿名组合完成：基类以Struct的方式定义，子类只需要把基类作为成员放在子类的定义中，支持多继承。而Java只此次单继承")])]),a._v(" "),v("h2",{attrs:{id:"锁的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁的概念"}},[a._v("#")]),a._v(" 锁的概念")]),a._v(" "),v("h3",{attrs:{id:"mysql的几种锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql的几种锁"}},[a._v("#")]),a._v(" MySQL的几种锁")]),a._v(" "),v("ol",[v("li",[a._v("mysql的读锁和写锁（共享锁和排它锁）")]),a._v(" "),v("li",[a._v("意向锁")]),a._v(" "),v("li",[a._v("乐观锁和悲观锁")])]),a._v(" "),v("p",[a._v("详细参考："),v("a",{attrs:{href:"http://interview.xiaoyou66.com/pages/4b1eef/",target:"_blank",rel:"noopener noreferrer"}},[a._v("事务和锁 | 面试问题浓缩总结 (xiaoyou66.com)"),v("OutboundLink")],1)]),a._v(" "),v("h3",{attrs:{id:"java的同步锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java的同步锁"}},[a._v("#")]),a._v(" Java的同步锁")])])}),[],!1,null,null,null);t.default=e.exports}}]);