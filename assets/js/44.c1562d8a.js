(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{452:function(t,a,r){"use strict";r.r(a);var v=r(21),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("下图是MySQL底层的一个简单的概括图")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/29/732a5ce252035.png",alt:"image-20210329140528337"}})]),t._v(" "),r("h2",{attrs:{id:"日志部分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日志部分"}},[t._v("#")]),t._v(" 日志部分")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/29/cf4b9e926e510.png",alt:"image-20210329140643337"}})]),t._v(" "),r("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://img.xiaoyou66.com/2021/03/29/93f74604a46dd.png",alt:"image-20210329143342296"}}),t._v(" "),r("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://img.xiaoyou66.com/2021/03/29/b9f51581f47a9.png",alt:"image-20210329143416392"}}),t._v(" "),r("p",[t._v("主要就是这部分了，下面简单介绍一下mysql的三种日志")]),t._v(" "),r("h3",{attrs:{id:"三种日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三种日志"}},[t._v("#")]),t._v(" 三种日志")]),t._v(" "),r("h4",{attrs:{id:"bin-log"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bin-log"}},[t._v("#")]),t._v(" bin log")]),t._v(" "),r("p",[t._v("这个是MySQL自带的日志，它会记录下完整的SQL语句，主要用于主从复制")]),t._v(" "),r("h4",{attrs:{id:"redo-log"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redo-log"}},[t._v("#")]),t._v(" redo log")]),t._v(" "),r("p",[t._v("这部分是Innodb数据库的日志，它会记录下每一页的改动，当我们开启事务后，一开始会把日志放入log buffer里，只有当事务提交后才进行持久化存储到本地，可以作为异常宕机或者介质故障后的数据恢复使用")]),t._v(" "),r("p",[t._v("redo log有两个文件默认为48M（可以进行调整，如果太大的话，重启时间会延长），在我们执行完SQL语句后，就会向redo log里面追加日志，因为我们的日志文件是顺序IO（一开始就申请了48M的空间）。然后采用的是append进行追加，所以速度会很快。当两个文件都满了之后，聚会触发检查点（check point），然后把buffer poll里面的脏页数据持久化，然后才会继续追加人日志")]),t._v(" "),r("p",[t._v("三种持久化的方式")]),t._v(" "),r("ul",[r("li",[t._v("0.提交事务并不会持久化，而是交给后台线程去做")]),t._v(" "),r("li",[t._v("1.提交事务就去持久化（默认）")]),t._v(" "),r("li",[t._v("2.提交事务，会写入操作系统缓存去，只要操作系统没挂，数据库挂了也没关系，后续操作系统会定时的写入")])]),t._v(" "),r("h4",{attrs:{id:"undo-log"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#undo-log"}},[t._v("#")]),t._v(" undo log")]),t._v(" "),r("p",[t._v("这个也是innodb 才有的，主要是记录增删插相反的操作，可以用于事务的回滚操作")]),t._v(" "),r("h2",{attrs:{id:"页的概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页的概念"}},[t._v("#")]),t._v(" 页的概念")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/29/719a49fef7c99.png",alt:"image-20210329143254398"}})]),t._v(" "),r("p",[t._v("这个也是Innodb里面的东西，默认情况下buffer poll为128M，然后里面又分为多个页，一页为16KB，格式如下")]),t._v(" "),r("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://img.xiaoyou66.com/2021/03/29/916d4b3b79df3.png",alt:"image-20210329144351836"}}),t._v(" "),r("p",[t._v("我们的页其实就是相当于链表（因为有些页可能是空的），当我们有查询过来时，会把数据存储到buffer poll里面。这里我们需要引入3个链表")]),t._v(" "),r("h3",{attrs:{id:"三大链表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三大链表"}},[t._v("#")]),t._v(" 三大链表")]),t._v(" "),r("h4",{attrs:{id:"free链表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#free链表"}},[t._v("#")]),t._v(" free链表")]),t._v(" "),r("p",[t._v("这个链表有一个基节点，用于记录统计信息，后续是控制块，用于记录空闲页的指针，并不大，当前buffer pool里面有多少个空白页，就有多少个控制块（后续节点）。")]),t._v(" "),r("p",[t._v("当我们从磁盘中取出一页，会先去这个free链表中找第一个控制块节点，然后填充完以后，就会把那个控制块节点删除，然后当我们buffer poll有空白页时，就会把空白页指针添加到free链表中")]),t._v(" "),r("h4",{attrs:{id:"flush链表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flush链表"}},[t._v("#")]),t._v(" flush链表")]),t._v(" "),r("p",[t._v("这个链表就是用于持久化的，因为默认情况下我们修改数据时会先修改buffer pool里面的数据，然后再进行持久化，但是默认情况下，我们可能会有脏页数据，所以我们可以通过这个flush链表，当我们持久化时，只需要持久和flush链表的数据就可以了")]),t._v(" "),r("h4",{attrs:{id:"lru链表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lru链表"}},[t._v("#")]),t._v(" LRU链表")]),t._v(" "),r("p",[t._v("因为我们的buffer pool是有大小限制的，当我们的buffer pool满了之后我们就必须要想办法淘汰某些空间，这个时候我们就用到了lru链表（也叫最近最少使用的链表，我们会对链表里面的页进行淘汰，这个lru链表的逻辑是这样的：当有一页被更新或者是被查询之类的，那个那个页在链表的节点就会移到最前面，只要是有更新操作就会提前，所以满了以后，就会将最后一个节点进行淘汰！因为那是最少使用的）")]),t._v(" "),r("p",[t._v("但是这样还是有问题（当 select * 后可能会把buffer里面的数据全部淘汰掉）所以我们可以把lru链表将链表换成两个区域，一个是占用5/8（热点数据区域），一个占用3/8（冷数据区域），他会进行一个时间设置，如果对一个页的查询间隔时间小于一个设定的时间（假设为一秒），就不会替换掉前面的热点数据区域（因为全表扫描，一个页里面也有多个数据），如果超过就会对前面的热门数据进行替换")]),t._v(" "),r("h3",{attrs:{id:"脏页"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脏页"}},[t._v("#")]),t._v(" 脏页")]),t._v(" "),r("p",[t._v("当有修改的时候，就会对buffer pool里面的页进行更新，当时它并不会马上持久化到磁盘里面的！如果此时有一个事务去读取时，就会读取到这个数据，所以这是脏页！脏读就是这么来的")]),t._v(" "),r("p",[t._v("当MySQL挂掉了，脏页没有了，会去从磁盘里面读取，而且会结合redo log里面的日志进行数据的整合，返回最新的数据")]),t._v(" "),r("p",[t._v("如何判断是否是脏页？可以通过flush链表来实现")]),t._v(" "),r("p",[r("strong",[t._v("脏页持久化")])]),t._v(" "),r("p",[t._v("可以通过redo log，当我们修改完数据后会生成一个redo log，此时不会马上持久化，而是后台会定期通过redo log对我们的数据进行持久化。")]),t._v(" "),r("p",[t._v("为什么不直接将页数据持久化到磁盘中呢？主要是页数据一页是16kb，它是逻辑上是顺序的，而如果直接写入到磁盘里，它存储形式是随机I/O,磁盘访问速度慢")]),t._v(" "),r("p",[t._v("为什么通过redo log进行持久化呢？如果记录到一个文件里面，它是以append()的形式进行追加，不需要去找文件位置，所以是顺序I/O,磁盘访问速度快")]),t._v(" "),r("h2",{attrs:{id:"sql语句执行过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql语句执行过程"}},[t._v("#")]),t._v(" SQL语句执行过程")]),t._v(" "),r("p",[t._v("主要包括service层和存储引擎层")]),t._v(" "),r("h3",{attrs:{id:"service层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#service层"}},[t._v("#")]),t._v(" service层")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("连接器")]),t._v(" 用于验证用户权限")]),t._v(" "),r("li",[r("strong",[t._v("缓存")]),t._v(" 查询缓存，使用Key/Value的形式，在MySQL8.0已取消，不常使用")]),t._v(" "),r("li",[r("strong",[t._v("分析器")]),t._v(" 分析SQL语句，提取关键字，表格，字段，判断语法是否正确")]),t._v(" "),r("li",[r("strong",[t._v("优化器")]),t._v(" 选择SQL语句的最优执行方案，如：是否走索引，多表查询如何选择关联顺序")]),t._v(" "),r("li",[r("strong",[t._v("执行器")]),t._v("  执行前会判断用户是否有权限去执行SQL语句，有则用调用引擎的接口，返回接口执行的结果")])]),t._v(" "),r("p",[t._v("存储引擎层主要负责从文件中查询数据并返回结果")]),t._v(" "),r("p",[t._v("查询步骤如下： 权限->缓存(8.0删除)->分析器->优化器->执行器->(权限)引擎查询")]),t._v(" "),r("p",[t._v("更新步骤如下： 前面和查询一样，但更新会添加日志（bin log，redo log，详情看日志模块）先记录redo log（prepare）执行完记录bin log 最后在记录redo log（commit）（两段式提交）")])])}),[],!1,null,null,null);a.default=e.exports}}]);