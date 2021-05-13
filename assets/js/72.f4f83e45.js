(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{480:function(a,t,r){"use strict";r.r(t);var _=r(21),v=Object(_.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("先说一下什么是循环依赖，循环依赖就是A引用了对象B，但是B对象又引用了A，如下图所示")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/26/3ae0b245dc1c9.png",alt:"image-20210313153357517"}})]),a._v(" "),r("p",[a._v("springIOC就是我们不自己创建对象，而是使用springIOC来帮我们创建，所以也叫控制反转。但是IOC在创建bean对象时，就不可避免要遇到两个问题，一个是循环依赖，一个就是AOP的代理。")]),a._v(" "),r("h1",{attrs:{id:"ioc创建bean过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ioc创建bean过程"}},[a._v("#")]),a._v(" IOC创建bean过程")]),a._v(" "),r("p",[a._v("首先我们通过工厂方法来创建一个bean对象（通过工厂方法工厂就会从单例池里面去获取对象，如果没有就自己新建一个）")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/26/0d40b487bbbdc.png",alt:"image-20210313154913582"}})]),a._v(" "),r("h2",{attrs:{id:"创建对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建对象"}},[a._v("#")]),a._v(" 创建对象")]),a._v(" "),r("p",[a._v("那么如何新建一个对象呢，主要包括以下几个步骤")]),a._v(" "),r("p",[a._v("getBean->然后通过反射实例化（createBeanInstance(“a”)）->填充属性(populate(“b”))->初始化（执行Bean里面的初始化方法）创建完以后就放到单例池里面，然后再返回出去（如下图）")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/26/5588315ffb8f3.png",alt:"image-20210313155047091"}})]),a._v(" "),r("h2",{attrs:{id:"死循环出现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#死循环出现"}},[a._v("#")]),a._v(" 死循环出现")]),a._v(" "),r("p",[a._v("当我们创建的时候出现一个循环引用时，我们的代码执行栈里面就会出现递归操作，造成死循环")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/26/ac7596b2d96d7.png",alt:"image-20210313155547466"}})]),a._v(" "),r("h2",{attrs:{id:"那么我们如何解决呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#那么我们如何解决呢"}},[a._v("#")]),a._v(" 那么我们如何解决呢？")]),a._v(" "),r("p",[a._v("由两级缓存就可以实现：一个是单例池，一个是半成品池")]),a._v(" "),r("ol",[r("li",[a._v("先去获取a，但a实例化的时候，就会把a放到半成品池中去")]),a._v(" "),r("li",[a._v("然后去填充属性b，然后获取b")]),a._v(" "),r("li",[a._v("b在单例池中判断是否有a，如果没有就去半成品池中去获取")]),a._v(" "),r("li",[a._v("如果半成品中有把a放到b中就进行填充和初始化，然后b初始化成功，b 就可以放到单例池中")]),a._v(" "),r("li",[a._v("而后a就可以在单例池中获取到b进行属性填充，最后也初始化成功，将a放入到单例池中")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/26/989ca3805dc0a.png",alt:"image-20210313155846260"}})]),a._v(" "),r("h2",{attrs:{id:"aop代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aop代理"}},[a._v("#")]),a._v(" AOP代理")]),a._v(" "),r("p",[a._v("虽然我们前面已经解决了死循环的问题，但是如果我们要使用AOP时，因为我们创建的对象是代理对象不是实际对象，我们就需要想个办法获取到实际的对象")]),a._v(" "),r("h2",{attrs:{id:"三级缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三级缓存"}},[a._v("#")]),a._v(" 三级缓存")]),a._v(" "),r("p",[a._v("三级缓存实现：一个是单例池，一个是半成品池，一个是对象工厂池")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/26/1bbae71dd44bc.png",alt:"image-20210313160329540"}})]),a._v(" "),r("p",[a._v("代理对象的产生如上图所示：")]),a._v(" "),r("p",[a._v("首先初始化的时候会调用bean处理器，而这个处理器里面包含了一个AOP的处理器")]),a._v(" "),r("p",[a._v("AOP处理器会调用createproxy创建代理对象")]),a._v(" "),r("p",[a._v("调用createproxy有两种途径，一个是后置处理器（正常途径），"),r("strong",[a._v("一个是提前处理器（解决问题的关键）")])]),a._v(" "),r("p",[a._v("最后的创建过程如下")]),a._v(" "),r("ol",[r("li",[a._v("当a实例化的时候就会在工厂池里面创建一个factory(a) a的对象工厂,这个对象工厂可以调用提前处理，创建一个a的代理对象，当然这个factory(a)并不会自动的调用，只有当b需要填充属性的时候才会调用")]),a._v(" "),r("li",[a._v("当b填充属性调用factory(a)， factory(a)会提前引用创建出来了一个代理对象a，会放入半成品池中，然后把半成品池中的a，填充到b中")]),a._v(" "),r("li",[a._v("b就初始化完成，通过后置处理创建出b的代理对象放入单例池中（在b实例化的时候也会创建factory(b)，但无人引用就销毁了）")]),a._v(" "),r("li",[a._v("a填充属性，由于单例池中有b了就直接填充进去了，然后执行初始化、后置处理创建动态代理，由于半成品池中有了a的代理对象，所以直接把半成品池中直接拿到单例池，同时再把factory(a)销毁，这样两个代理对象就都创建出来了")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/26/3785d02d71ca2.png",alt:"image-20210313160548729"}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/26/a8639da6c87d9.png",alt:"3d9f567b-31d3-43ac-a8a4-6b2371e8337d.png"}})]),a._v(" "),r("h1",{attrs:{id:"回答模板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#回答模板"}},[a._v("#")]),a._v(" 回答模板")]),a._v(" "),r("h2",{attrs:{id:"spring如何解决循环依赖的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring如何解决循环依赖的"}},[a._v("#")]),a._v(" Spring如何解决循环依赖的")]),a._v(" "),r("p",[a._v("答：Spring通过三级缓存解决了循环依赖，其中一级缓存为单例池（singletonObjects），二级缓存为早期曝光对象earlySingletonObjects，三级缓存为早期曝光对象工厂（singletonFactories）。")]),a._v(" "),r("p",[a._v("当A、B两个类发生循环引用时，在A完成实例化后，就使用实例化后的对象去创建一个"),r("code",[a._v("对象工厂")]),a._v("，添加到三级缓存中，如果A被AOP代理，那么通过这个工厂获取到的就是A"),r("code",[a._v("代理后")]),a._v("的对象，如果A没有被AOP代理，那么这个工厂获取到的就是A实例化的对象。")]),a._v(" "),r("p",[a._v("当A进行属性注入时，会去创建B，同时B又依赖了A，所以创建B的同时又会去调用getBean(a)来获取需要的依赖，此时的getBean(a)会从缓存中获取：")]),a._v(" "),r("blockquote",[r("p",[a._v("第一步：先获取到三级缓存中的工厂；")]),a._v(" "),r("p",[a._v("第二步：调用对象工工厂的getObject方法来获取到对应的对象，得到这个对象后将其注入到B中。紧接着B会走完它的生命周期流程，包括初始化、后置处理器等。")]),a._v(" "),r("p",[a._v("第三步：当B创建完后，会将B再注入到A中，此时A再完成它的整个生命周期。至此，循环依赖结束！")])]),a._v(" "),r("h3",{attrs:{id:"面试官-为什么要使用三级缓存呢-二级缓存能解决循环依赖吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#面试官-为什么要使用三级缓存呢-二级缓存能解决循环依赖吗"}},[a._v("#")]),a._v(" 面试官：为什么要使用三级缓存呢？二级缓存能解决循环依赖吗？")]),a._v(" "),r("blockquote",[r("p",[a._v("答：如果要使用二级缓存解决循环依赖，意味着所有Bean在实例化后就要完成AOP代理，这样"),r("code",[a._v("违背了Spring设计的原则")]),a._v("，Spring在设计之初就是通过AnnotationAwareAspectJAutoProxyCreator这个后置处理器来在Bean生命周期的最后一步来完成AOP代理，而不是在实例化后就立马进行AOP代理。")])]),a._v(" "),r("blockquote",[r("p",[a._v("参考")])]),a._v(" "),r("p",[r("a",{attrs:{href:"https://my.oschina.net/u/4511602/blog/4720252",target:"_blank",rel:"noopener noreferrer"}},[a._v("烂大街的Spring循环依赖该如何回答？ - sowhat1412的个人空间 - OSCHINA - 中文开源技术交流社区"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);