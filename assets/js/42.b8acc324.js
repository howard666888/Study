(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{450:function(a,t,v){"use strict";v.r(t);var l=v(21),s=Object(l.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h2",{attrs:{id:"主从复制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[a._v("#")]),a._v(" 主从复制")]),a._v(" "),v("p",[a._v("将主数据库中的DDL和DML操作通过二进制日志（BINLOG）传输到从数据库上，然后将这些日志重新执行（重做）；从而使得从数据库的数据与主数据库保持一致。")]),a._v(" "),v("h3",{attrs:{id:"作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),v("ol",[v("li",[a._v("主数据库出现问题，可以切换到从数据库。")]),a._v(" "),v("li",[a._v("可以进行数据库层面的读写分离。")]),a._v(" "),v("li",[a._v("可以在从数据库上进行日常备份。")])]),a._v(" "),v("h3",{attrs:{id:"解决的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决的问题"}},[a._v("#")]),a._v(" 解决的问题")]),a._v(" "),v("ul",[v("li",[a._v("数据分布：随意开始或停止复制，并在不同地理位置分布数据备份")]),a._v(" "),v("li",[a._v("负载均衡：降低单个服务器的压力")]),a._v(" "),v("li",[a._v("高可用和故障切换：帮助应用程序避免单点失败")]),a._v(" "),v("li",[a._v("升级测试：可以用更高版本的MySQL作为从库")])]),a._v(" "),v("h3",{attrs:{id:"工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[a._v("#")]),a._v(" 工作原理")]),a._v(" "),v("ul",[v("li",[a._v("master提交完事务后，写入binlog （Binary log：主数据库的二进制日志）")]),a._v(" "),v("li",[a._v("slave连接到master，获取binlog")]),a._v(" "),v("li",[a._v("master创建dump线程，推送binglog到slave")]),a._v(" "),v("li",[a._v("slave启动一个IO线程读取同步过来的master的binlog，记录到relay log中继日志中 （Relay log：从服务器的中继日志）")]),a._v(" "),v("li",[a._v("slave再开启一个sql线程读取relay log事件并在slave执行，完成同步")]),a._v(" "),v("li",[a._v("slave记录自己的binglog")])]),a._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/30/eab9f8d3188aa.jpg",alt:"img"}})]),a._v(" "),v("h2",{attrs:{id:"读写分离"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[a._v("#")]),a._v(" 读写分离")]),a._v(" "),v("p",[a._v("读写分离是依赖于主从复制，而主从复制又是为读写分离服务的。因为主从复制要求slave不能写只能读（如果对slave执行写操作，那么show slave status将会呈现Slave_SQL_Running=NO，此时你需要按照前面提到的手动同步一下slave）。")]),a._v(" "),v("ol",[v("li",[a._v("使用mysql-proxy代理")]),a._v(" "),v("li",[a._v("使用AbstractRoutingDataSource+aop+annotation在dao层决定数据源。")]),a._v(" "),v("li",[a._v("使用AbstractRoutingDataSource+aop+annotation在service层决定数据源")])])])}),[],!1,null,null,null);t.default=s.exports}}]);