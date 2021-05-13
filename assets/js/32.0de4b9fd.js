(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{440:function(v,_,t){"use strict";t.r(_);var a=t(21),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("只需要记住下面这5个阶段就行了")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/6db4376bea983.png",alt:"img"}})]),v._v(" "),t("p",[v._v("参考："),t("a",{attrs:{href:"https://www.pdai.tech/md/java/jvm/java-jvm-classload.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("JVM 基础 - Java 类加载机制 | Java 全栈知识体系 (pdai.tech)"),t("OutboundLink")],1)]),v._v(" "),t("p",[v._v("下面简单介绍一下每个部分做了啥")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("加载")]),v._v("  首先获取二进制流，然后把字节流所代表的静态存储结构转化为方法区的运行时数据结构，最后在java堆中生成一个代表这个类的java.lang.Class对象，作为数据访问入口")]),v._v(" "),t("li",[t("strong",[v._v("验证")]),v._v(" 确保被加载类的正确性，分为文件格式验证，元数据验证，字节码验证和符合引用验证")]),v._v(" "),t("li",[t("strong",[v._v("准备")]),v._v("  为类的静态变量分配内存，并将其初始化为默认值")]),v._v(" "),t("li",[t("strong",[v._v("解析")]),v._v(" 把类中的符号引用转换为直接引用")]),v._v(" "),t("li",[t("strong",[v._v("初始化")]),v._v(" 初始化，为类的静态变量赋予正确的初始值，JVM负责对类进行初始化，主要对类变量进行初始化")]),v._v(" "),t("li",[t("strong",[v._v("使用")]),v._v(" 类访问方法区内的数据结构的接口， 对象是Heap区的数据")]),v._v(" "),t("li",[t("strong",[v._v("卸载")])])]),v._v(" "),t("h2",{attrs:{id:"双亲委派模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派模型"}},[v._v("#")]),v._v(" 双亲委派模型")]),v._v(" "),t("p",[v._v("类加载器可以细分为下面几种类型")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/fafa7c8626766.png",alt:"image.png"}})]),v._v(" "),t("p",[v._v("它们之间的层次关系被称为类加载器的"),t("strong",[v._v("双亲委派模型")]),v._v("。该模型要求除了顶层的启动类加载器外，其余的类加载器都应该有自己的父类加载器，而这种父子关系一般通过"),t("strong",[v._v("组合（Composition）关系")]),v._v("来实现，而不是通过继承（Inheritance）。")]),v._v(" "),t("p",[v._v("当应用类加载器获取到一个类加载的请求的时候，不会立即处理这个类加载请求，而是将这个请求委派给他的父加载器加载，如果这个父加载器不能够处理这个类加载请求，便将之传递给子加载器。一级一级传递指导可以加载该类的类加载器。")]),v._v(" "),t("h2",{attrs:{id:"new新建对象过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new新建对象过程"}},[v._v("#")]),v._v(" new新建对象过程")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/30/592899b0b7057.jpg",alt:"img"}})]),v._v(" "),t("p",[v._v("这个其实相当于类加载的机制")]),v._v(" "),t("p",[v._v("当虚拟机遇见new关键字时候，实现判断当前类是否已经加载，如果类没有加载，首先执行类的加载机制，加载完成后再为对象分配空间、初始化等。")]),v._v(" "),t("ol",[t("li",[v._v("首先校验当前类是否被加载，如果没有加载，执行类加载机制")]),v._v(" "),t("li",[v._v("加载：就是从字节码加载成二进制流的过程")]),v._v(" "),t("li",[v._v("验证：当然加载完成之后，当然需要校验Class文件是否符合虚拟机规范，跟我们接口请求一样，第一件事情当然是先做个参数校验了")]),v._v(" "),t("li",[v._v("准备：为静态变量、常量赋默认值")]),v._v(" "),t("li",[v._v("解析：把常量池中符号引用(以符号描述引用的目标)替换为直接引用(指向目标的指针或者句柄等)的过程")]),v._v(" "),t("li",[v._v("初始化：执行static代码块(cinit)进行初始化，如果存在父类，先对父类进行初始化")])]),v._v(" "),t("p",[t("em",[v._v("Ps：静态代码块是绝对线程安全的，只能隐式被java虚拟机在类加载过程中初始化调用！")]),v._v("(此处该有问题static代码块线程安全吗？)")]),v._v(" "),t("p",[v._v("当类加载完成之后，紧接着就是对象分配内存空间和初始化的过程")]),v._v(" "),t("ol",[t("li",[v._v("首先为对象分配合适大小的内存空间")]),v._v(" "),t("li",[v._v("接着为实例变量赋默认值")]),v._v(" "),t("li",[v._v("设置对象的头信息，对象hash码、GC分代年龄、元数据信息等")]),v._v(" "),t("li",[v._v("执行构造函数(init)初始化")])])])}),[],!1,null,null,null);_.default=s.exports}}]);