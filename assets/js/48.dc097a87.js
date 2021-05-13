(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{456:function(e,t,r){"use strict";r.r(t);var a=r(21),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"缓存雪崩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[e._v("#")]),e._v(" 缓存雪崩")]),e._v(" "),r("p",[e._v("Redis中大批量key在同一时间同时失效导致所有请求都打到了MySQL。而MySQL扛不住导致大面积崩塌")]),e._v(" "),r("p",[r("strong",[e._v("解决方案")])]),e._v(" "),r("ol",[r("li",[e._v("缓存数据的过期时间加上个随机值，防止同一时间大量数据过期现象发生")]),e._v(" "),r("li",[e._v("如果缓存数据库是分布式部署，将热点数据均匀分布在不同搞得缓存数据库中")]),e._v(" "),r("li",[e._v("设置热点数据永远不过期")])]),e._v(" "),r("h2",{attrs:{id:"缓存穿透"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[e._v("#")]),e._v(" 缓存穿透")]),e._v(" "),r("p",[e._v("缓存穿透是指缓存和数据库中"),r("code",[e._v("都没有")]),e._v("的数据，比如ID默认>0，黑客一直 请求ID= -12的数据那么就会导致数据库压力过大，严重会击垮数据库。")]),e._v(" "),r("p",[r("strong",[e._v("解决方案")])]),e._v(" "),r("ol",[r("li",[e._v("后端接口层增加 用户"),r("strong",[e._v("鉴权校验")]),e._v("，"),r("strong",[e._v("参数做校验")]),e._v("等")]),e._v(" "),r("li",[e._v("单个IP每秒访问次数超过阈值"),r("strong",[e._v("直接拉黑IP")])]),e._v(" "),r("li",[e._v("从缓存取不到的数据，在数据库中也没有取到，这时也可以将key-value对写为key-null 失效时间可以为15秒"),r("strong",[e._v("防止恶意攻击")])]),e._v(" "),r("li",[e._v("用Redis提供的 "),r("strong",[e._v("Bloom Filter")]),e._v(" 特性")])]),e._v(" "),r("h2",{attrs:{id:"缓存击穿"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[e._v("#")]),e._v(" 缓存击穿")]),e._v(" "),r("p",[e._v("大并发集中对这一个热点key进行访问，当这个Key在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库")]),e._v(" "),r("p",[r("strong",[e._v("解决方案")]),e._v("：设置热点数据永远不过期或者加上互斥锁")]),e._v(" "),r("blockquote",[r("p",[e._v("参考"),r("a",{attrs:{href:"https://blog.csdn.net/zeb_perfect/article/details/54135506",target:"_blank",rel:"noopener noreferrer"}},[e._v("缓存穿透，缓存击穿，缓存雪崩解决方案分析_zeb_perfect的专栏-CSDN博客"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"双写一致性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双写一致性"}},[e._v("#")]),e._v(" 双写一致性")]),e._v(" "),r("p",[r("code",[e._v("缓存")]),e._v("跟"),r("code",[e._v("数据库")]),e._v("均更新数据，如何保证数据一致性？")]),e._v(" "),r("h3",{attrs:{id:"先更新数据库-再更新缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#先更新数据库-再更新缓存"}},[e._v("#")]),e._v(" 先更新数据库，再更新缓存")]),e._v(" "),r("ol",[r("li",[e._v("安全问题：线程A更新数据库->线程B更新数据库->线程B更新缓存->线程A更新缓存。"),r("code",[e._v("导致脏读")]),e._v("。")]),e._v(" "),r("li",[e._v("业务场景：读多写少场景，频繁更新数据库而缓存根本没用。更何况如果缓存是叠加计算后结果更"),r("code",[e._v("浪费性能")]),e._v("。")])]),e._v(" "),r("h3",{attrs:{id:"先删缓存-再更新数据库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#先删缓存-再更新数据库"}},[e._v("#")]),e._v(" 先删缓存，再更新数据库")]),e._v(" "),r("p",[e._v("同样会造成数据不一致的问题：")]),e._v(" "),r("p",[e._v("A 请求写来更新缓存->B 发现缓存不在去数据查询旧值后写入缓存->A 将数据写入数据库，此时缓存跟数据库"),r("strong",[e._v("不一致")]),e._v("。")]),e._v(" "),r("p",[e._v("FaceBook的"),r("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDQ3MjQxNA==&mid=2247486125&idx=1&sn=9a263b9bb7f1abdf249a0011e7996a5e&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cache Aside Pattern"),r("OutboundLink")],1),e._v("方案")]),e._v(" "),r("ol",[r("li",[e._v("失效：应用程序先从cache取数据，没有得到，则从数据库中取数据，成功后，放到缓存中。")]),e._v(" "),r("li",[e._v("命中：应用程序从cache中取数据，取到后返回。")]),e._v(" "),r("li",[e._v("更新："),r("code",[e._v("先把数据存到数据库中，成功后，再让缓存失效")]),e._v("。")])]),e._v(" "),r("h2",{attrs:{id:"脑裂"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脑裂"}},[e._v("#")]),e._v(" 脑裂")]),e._v(" "),r("p",[e._v("脑裂是指因为网络原因，导致master节点、slave节点 和 sentinel集群处于不用的网络分区，此时因为sentinel集群"),r("strong",[e._v("无法感知")]),e._v("到master的存在，所以将slave节点提升为master节点 此时存在两个不同的master节点就像一个大脑分裂成了两个。如果客户端还在基于原来的master节点继续写入数据那么新的master节点将无法同步这些数据，当网络问题解决后sentinel集群将原先的master节点降为slave节点，此时再从新的master中同步数据将造成大量的数据丢失。")]),e._v(" "),r("p",[r("strong",[e._v("解决方法")])]),e._v(" "),r("p",[e._v("修改redis的配置文件")]),e._v(" "),r("div",{staticClass:"language-ini line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-ini"}},[r("code",[e._v("min-replicas-to-write 3  表示连接到master的最少slave数量\nmin-replicas-max-lag 10  表示slave连接到master的最大延迟时间\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("当我们上面两个条件都不满足时,那么master就会拒绝写请求，这样就可以减小数据同步后的数据丢失")]),e._v(" "),r("h2",{attrs:{id:"事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[e._v("#")]),e._v(" 事务")]),e._v(" "),r("p",[e._v("Redis支持事务，通过 "),r("a",{attrs:{href:"http://redis.readthedocs.org/en/latest/transaction/multi.html#multi",target:"_blank",rel:"noopener noreferrer"}},[e._v("MULTI"),r("OutboundLink")],1),e._v(" （事务开始）、 "),r("a",{attrs:{href:"http://redis.readthedocs.org/en/latest/transaction/discard.html#discard",target:"_blank",rel:"noopener noreferrer"}},[e._v("DISCARD"),r("OutboundLink")],1),e._v(" （事务取消）、 "),r("a",{attrs:{href:"http://redis.readthedocs.org/en/latest/transaction/exec.html#exec",target:"_blank",rel:"noopener noreferrer"}},[e._v("EXEC"),r("OutboundLink")],1),e._v(" （执行事务）和 "),r("a",{attrs:{href:"http://redis.readthedocs.org/en/latest/transaction/watch.html#watch",target:"_blank",rel:"noopener noreferrer"}},[e._v("WATCH"),r("OutboundLink")],1),e._v(" （监听key，当key被修改时会打断当前事务）四个命令来实现事务功能")]),e._v(" "),r("h3",{attrs:{id:"执行的三个阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行的三个阶段"}},[e._v("#")]),e._v(" 执行的三个阶段")]),e._v(" "),r("ol",[r("li",[e._v("开启事务（multi）")]),e._v(" "),r("li",[e._v("命令入队（业务操作）")]),e._v(" "),r("li",[e._v("执行事务（exec）或取消事务（discard）")])]),e._v(" "),r("h3",{attrs:{id:"特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" 特点")]),e._v(" "),r("ol",[r("li",[e._v("redis事务就是一次性、顺序性、排他性的执行一个队列中的"),r("strong",[e._v("一系列命令")]),e._v("。")]),e._v(" "),r("li",[e._v("Redis事务失败时不支持回滚，而是会继续执行剩下的命令")])]),e._v(" "),r("blockquote",[r("p",[e._v("深入："),r("a",{attrs:{href:"https://segmentfault.com/a/1190000023951592",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 事务详解 - SegmentFault 思否"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"热key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#热key"}},[e._v("#")]),e._v(" 热key")]),e._v(" "),r("p",[e._v("所谓热key问题就是，突然有几十万的请求去访问redis上的某个特定key，那么这样会造成流量过于集中，达到物理网卡上限，从而导致这台redis的服务器宕机引发雪崩。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/30/fdd9460777f90.jpg",alt:"img"}})]),e._v(" "),r("p",[e._v("针对热key的解决方案：")]),e._v(" "),r("ol",[r("li",[e._v("提前把热key打散到不同的服务器，降低压力")]),e._v(" "),r("li",[e._v("加入二级缓存，提前加载热key数据到内存中，如果redis宕机，走内存查询")])])])}),[],!1,null,null,null);t.default=s.exports}}]);