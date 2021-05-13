(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{461:function(_,v,t){"use strict";t.r(v);var r=t(21),a=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[_._v("#")]),_._v(" 基本概念")]),_._v(" "),t("h3",{attrs:{id:"进程和线程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程的区别"}},[_._v("#")]),_._v(" 进程和线程的区别")]),_._v(" "),t("ul",[t("li",[_._v("进程："),t("strong",[_._v("进程")]),_._v("是系统进行资源分配和调度的一个"),t("strong",[_._v("独立单位")]),_._v("，是系统中的并发执行的单位")]),_._v(" "),t("li",[_._v("线程："),t("strong",[_._v("线程")]),_._v("是进程的一个实体，也是  CPU  调度和分派的基本单位，它是比进程更小的能独立运行的基本单位，有时又被称为轻量级进程")]),_._v(" "),t("li",[_._v("进程是"),t("strong",[_._v("资源分配")]),_._v("的最小单位，而线程是 "),t("strong",[_._v("CPU  调度")]),_._v("的最小单位")]),_._v(" "),t("li",[_._v("创建进程或撤销进程，系统都要为之分配或回收资源，操作系统开销远大于创建或撤销线程时的开销")]),_._v(" "),t("li",[_._v("不同进程地址空间相互独立，同一进程内的线程共享同一地址空间。一个进程的线程在另一个进程内是不可见的")]),_._v(" "),t("li",[_._v("进程间不会相互影响，而一个线程挂掉将可能导致整个进程挂掉")])]),_._v(" "),t("h3",{attrs:{id:"多线程的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多线程的优点"}},[_._v("#")]),_._v(" 多线程的优点")]),_._v(" "),t("ul",[t("li",[_._v("更加高效的内存共享。多进程下内存共享不便")]),_._v(" "),t("li",[_._v("较轻的上下文切换。因为不用切换地址空间，CR3寄存器和清空TLB")])]),_._v(" "),t("h3",{attrs:{id:"多进程的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多进程的优点"}},[_._v("#")]),_._v(" 多进程的优点")]),_._v(" "),t("ul",[t("li",[_._v("各个进程有自己内存空间，所以具有更强的容错性，不至于一个集成crash导致系统崩溃")]),_._v(" "),t("li",[_._v("具有更好的多核可伸缩性，因为进程将地址空间，页表等进行了隔离，在多核的系统上可伸缩性更强")])]),_._v(" "),t("h3",{attrs:{id:"如何提升多线程的效率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何提升多线程的效率"}},[_._v("#")]),_._v(" 如何提升多线程的效率")]),_._v(" "),t("ul",[t("li",[_._v("尽量使用池化技术，也就是线程池，从而不用频繁的创建，销毁线程")]),_._v(" "),t("li",[_._v("减少线程之间的同步和通信")]),_._v(" "),t("li",[_._v("通过Huge Page的方式避免产生大量的缺页异常")]),_._v(" "),t("li",[_._v("避免需要频繁共享写的数据")])]),_._v(" "),t("h3",{attrs:{id:"进程之间的通信方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程之间的通信方式"}},[_._v("#")]),_._v(" 进程之间的通信方式")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("管道")]),_._v("  管道是单向的，一个输入，另一个可以得到输出")]),_._v(" "),t("li",[t("strong",[_._v("消息队列")]),_._v(" 在发送数据的时候，按照一个个独立单元(消息体)进行发送")]),_._v(" "),t("li",[t("strong",[_._v("共享内存")]),_._v(" 通过"),t("strong",[_._v("shmget")]),_._v("创建一份"),t("strong",[_._v("共享内存")]),_._v("，并可以通过ipcs命令查看我们创建的共享内存。此时如果一个进程需要访问这段内存，需要将这个内存加载到自己虚拟地址空间的一个位置，让内核给它一个合法地址。使用完毕接触板顶并删除内存对象")]),_._v(" "),t("li",[t("strong",[_._v("信号量")]),_._v(" 用于保证同一份资源只能有一个进程使用，信号量提供了P（申请资源）V（释放资源）操作")]),_._v(" "),t("li",[t("strong",[_._v("信号")]),_._v(" 其实就是通知机制，不同的信号有不同的值，我们只需要发送一个信号，然后函数接收并进行处理")]),_._v(" "),t("li",[t("strong",[_._v("套接字")]),_._v(" 不同进程使用socket进行通信")])]),_._v(" "),t("h3",{attrs:{id:"进程调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程调度算法"}},[_._v("#")]),_._v(" 进程调度算法")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("FCFS 先来先服务")]),_._v("  先来的先进行服务")]),_._v(" "),t("li",[t("strong",[_._v("SPN 最短进程优先")]),_._v("  就是服务时间最短的先执行")]),_._v(" "),t("li",[t("strong",[_._v("SRT 最短剩余时间")]),_._v("  当程序的剩余时间最短的先执行")]),_._v(" "),t("li",[t("strong",[_._v("轮转（RR）调度算法")]),_._v(" 给每个进程都执行一个时间片，执行完后放到队列尾部，然后我们执行队列头部")]),_._v(" "),t("li",[t("strong",[_._v("FB反馈算法")]),_._v(" 有多个就绪队列，不同的队列有不同的优先级（越到前面越高），队列就按FCFS执行，然后当被其他进程强占时，会降低至第二队列，直到第n个队列（只有当前面的队列为空，才执行当前队列）")])]),_._v(" "),t("h3",{attrs:{id:"进程调度模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程调度模型"}},[_._v("#")]),_._v(" 进程调度模型")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/23/fcc24707bbf33.png",alt:"image-20210304215513880"}})]),_._v(" "),t("ol",[t("li",[t("code",[_._v("阻塞")]),_._v(" 一般是当系统执行IO操作时，此时进程进入阻塞状态，等待某个事件的返回。")]),_._v(" "),t("li",[t("code",[_._v("挂起")]),_._v(" 是指进程没有占有物理内存，被写到磁盘上了。这时进程状态是挂起状态。")]),_._v(" "),t("li",[t("code",[_._v("阻塞挂起")]),_._v(" 进程被写入硬盘并等待某个事件的出现。")]),_._v(" "),t("li",[t("code",[_._v("就绪挂起")]),_._v(" 进程被写入硬盘，进入内存可直接进入就绪状态。")])]),_._v(" "),t("h3",{attrs:{id:"pcb-进程控制块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pcb-进程控制块"}},[_._v("#")]),_._v(" PCB 进程控制块")]),_._v(" "),t("p",[_._v("作用是使一个在多道程序环境下不能独立运行的程序，成为一个能独立运行的基本单位，一个能与其它进程并发执行的进程")]),_._v(" "),t("h4",{attrs:{id:"pcb包含的信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pcb包含的信息"}},[_._v("#")]),_._v(" PCB包含的信息")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("进程标识符")]),_._v("  用于唯一地标识一个进程，一个进程通常有两种标识符：\n"),t("ol",[t("li",[t("code",[_._v("内部进程标识符")]),_._v("：标识各个进程，每个进程都有一个并且唯一的标识符，设置内部标识符主要是为了方便系统使用。")]),_._v(" "),t("li",[t("code",[_._v("外部进程标识符")]),_._v("：它由创建者提供，可设置用户标识，以指示拥有该进程的用户。往往是由用户进程在访问该进程时使用。一般为了描述进程的家族关系，还应设置父进程标识及子进程标识。")])])]),_._v(" "),t("li",[t("strong",[_._v("处理机状态")]),_._v(" 由各种寄存器组成。包含许多信息都放在寄存器中，方便程序restart。\n"),t("ol",[t("li",[_._v("通用寄存器、指令计数器、程序状态字PSW、用户栈指针等信息。")])])]),_._v(" "),t("li",[t("strong",[_._v("进程调度信息")]),_._v(" "),t("ol",[t("li",[_._v("进程状态：指明进程的当前状态，作为进程调度和对换时的依据。")]),_._v(" "),t("li",[_._v("进程优先级：用于描述进程使用处理机的优先级别的一个整数，优先级高的进程应优先获得处理机")]),_._v(" "),t("li",[_._v("进程调度所需的其它信息：与所采用的进程调度算法有关，如进程已等待CPU的时间总和、进程已执行的时间总和等。")]),_._v(" "),t("li",[_._v("事件：指进程由执行状态转变为阻塞状态所等待发生的事件，即阻塞原因。")])])]),_._v(" "),t("li",[t("strong",[_._v("资源清单")]),_._v("  有关内存地址空间或虚拟地址空间的信息，所打开文件的列表和所使用的 I/O 设备信息。")])]),_._v(" "),t("h4",{attrs:{id:"pcb组织方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pcb组织方式"}},[_._v("#")]),_._v(" PCB组织方式")]),_._v(" "),t("ol",[t("li",[_._v("线性方式")]),_._v(" "),t("li",[_._v("索引方式")]),_._v(" "),t("li",[_._v("链接方式")])]),_._v(" "),t("h3",{attrs:{id:"用户态和内核态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户态和内核态"}},[_._v("#")]),_._v(" 用户态和内核态")]),_._v(" "),t("ul",[t("li",[_._v("内核态：cpu可以访问内存的所有数据，包括外围设备，例如硬盘，网卡，cpu也可以将自己从一个程序切换到另一个程序。")]),_._v(" "),t("li",[_._v("用户态：只能受限的访问内存，且不允许访问外围设备，占用cpu的能力被剥夺，cpu资源可以被其他程序获取。")])]),_._v(" "),t("h4",{attrs:{id:"为什么要有用户态和内核态呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有用户态和内核态呢"}},[_._v("#")]),_._v(" 为什么要有用户态和内核态呢？")]),_._v(" "),t("p",[_._v("由于需要限制不同的程序之间的访问能力, 防止他们获取别的程序的内存数据, 或者获取外围设备的数据, 并发送到网络, CPU划分出两个权限等级 -- 用户态和内核态。")]),_._v(" "),t("h4",{attrs:{id:"如何从用户态切换到内核态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何从用户态切换到内核态"}},[_._v("#")]),_._v(" 如何从用户态切换到内核态")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("系统调用")]),_._v(" 这是用户态进程主动要求切换到内核态的一种方式，用户态进程通过系统调用申请使用操作系统提供的服务程序完成工作，比如 fork() 实际上就是执行了一个创建新进程的系统调用。而系统调用的机制其核心还是使用了操作系统为用户特别开放的一个中断来实现，例如 Linux 的 int 80h 中断。")]),_._v(" "),t("li",[t("strong",[_._v("中断")]),_._v(" 当外围设备完成用户请求的操作后，会向 CPU 发出相应的中断信号，这时 CPU 会暂停执行下一条即将要执行的指令转而去执行与中断信号对应的处理程序，如果先前执行的指令是用户态下的程序，那么这个转换的过程自然也就发生了由用户态到内核态的切换。比如硬盘读写操作完成，系统会切换到硬盘读写的中断处理程序中执行后续操作等。")]),_._v(" "),t("li",[t("strong",[_._v("异常")]),_._v(" 当 CPU 在执行运行在用户态下的程序时，发生了某些事先不可知的异常，这时会触发由当前运行进程切换到处理此异常的内核相关程序中，也就转到了内核态，比如缺页异常。")])]),_._v(" "),t("p",[t("strong",[_._v("参考")])]),_._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/youngyoungla/article/details/53106671",target:"_blank",rel:"noopener noreferrer"}},[_._v("用户态和内核态的区别_youngyoungla-CSDN博客_用户态和内核态的区别"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/279354447",target:"_blank",rel:"noopener noreferrer"}},[_._v("Linux 用户态切换到内核态的 3 种方式 - 知乎 (zhihu.com)"),t("OutboundLink")],1)])]),_._v(" "),t("h2",{attrs:{id:"常问的面试问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常问的面试问题"}},[_._v("#")]),_._v(" 常问的面试问题")]),_._v(" "),t("h3",{attrs:{id:"说一下你对并发和并行的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说一下你对并发和并行的理解"}},[_._v("#")]),_._v(" 说一下你对并发和并行的理解")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("并发")]),_._v("  一个处理器同时处理多个任务")]),_._v(" "),t("li",[t("strong",[_._v("并行")]),_._v("  多个处理器或者是多核的处理器同时处理多个不同的任务")])]),_._v(" "),t("h3",{attrs:{id:"同步、异步、阻塞、非阻塞的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步、异步、阻塞、非阻塞的概念"}},[_._v("#")]),_._v(" 同步、异步、阻塞、非阻塞的概念")]),_._v(" "),t("p",[_._v("同步和异步是操作系统的层面，然后阻塞和非阻塞内核层面的操作")]),_._v(" "),t("p",[t("strong",[_._v("同步")]),_._v(" 当一个同步调用发出后，调用者要一直等待返回结果。通知后，才能进行后续的执行。")]),_._v(" "),t("p",[t("strong",[_._v("异步")]),_._v(" 当一个异步过程调用发出后，调用者不能立刻得到返回结果。实际处理这个调用的部件在完成后，通过状态、通知和回调来通知调用者。")]),_._v(" "),t("p",[t("strong",[_._v("阻塞")]),_._v(" 是指调用结果返回前，当前线程会被挂起，即阻塞。")]),_._v(" "),t("p",[t("strong",[_._v("非阻塞")]),_._v(" 是指即使调用结果没返回，也不会阻塞当前线程。")])])}),[],!1,null,null,null);v.default=a.exports}}]);