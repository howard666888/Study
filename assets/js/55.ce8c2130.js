(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{463:function(t,v,_){"use strict";_.r(v);var s=_(21),r=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),_("h3",{attrs:{id:"产生死锁的原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#产生死锁的原因"}},[t._v("#")]),t._v(" 产生死锁的原因")]),t._v(" "),_("p",[_("strong",[t._v("根本原因")]),t._v(" 就是系统能够提供的资源个数比要求该资源的进程数要少")]),t._v(" "),_("p",[_("strong",[t._v("基本原因")]),t._v(" 资源竞争和进程推进顺序不合理")]),t._v(" "),_("h3",{attrs:{id:"产生死锁必要条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#产生死锁必要条件"}},[t._v("#")]),t._v(" 产生死锁必要条件")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("互斥")]),t._v(" 一个资源一次只能被一个进程使用；")]),t._v(" "),_("li",[_("strong",[t._v("占有并等待")]),t._v(" 一个进程至少占有一个资源，并在等待另一个被其它进程占用的资源；")]),t._v(" "),_("li",[_("strong",[t._v("非抢占")]),t._v(" 已经分配给一个进程的资源不能被强制性抢占，只能由进程完成任务之后自愿释放；")]),t._v(" "),_("li",[_("strong",[t._v("循环等待")]),t._v(" 若干进程之间形成一种头尾相接的环形等待资源关系，该环路中的每个进程都在等待下一个进程所占有的资源。")])]),t._v(" "),_("h3",{attrs:{id:"死锁的处理方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#死锁的处理方法"}},[t._v("#")]),t._v(" 死锁的处理方法")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("鸵鸟策略")]),t._v("  直接忽略死锁。因为解决死锁问题的代价很高，该方案会获得更高的性能。当发生死锁时不会对用户造成多大影响，或发生死锁的概率很低，可以采用鸵鸟策略。")]),t._v(" "),_("li",[_("strong",[t._v("死锁预防")]),t._v(" 其实就是破坏产生死锁的四个必要条件")]),t._v(" "),_("li",[_("strong",[t._v("死锁避免")]),t._v(" 动态地检测资源分配状态，以确保系统处于安全状态，比如使用银行家算法，或安全序列")]),t._v(" "),_("li",[_("strong",[t._v("死锁解除")]),t._v("  利用抢占（抢占它的资源） 、利用回滚（让进程回退到足以解除死锁的地步）、杀死进程")])]),t._v(" "),_("blockquote",[_("p",[t._v("检测死锁可以检测有向图是否存在环，或者使用类似死锁避免的检测算法。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);