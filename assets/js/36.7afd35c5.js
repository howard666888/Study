(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{444:function(v,a,_){"use strict";_.r(a);var r=_(21),t=Object(r.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"数据库三大范式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库三大范式"}},[v._v("#")]),v._v(" 数据库三大范式")]),v._v(" "),_("h3",{attrs:{id:"第一范式-属性不可再分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一范式-属性不可再分"}},[v._v("#")]),v._v(" 第一范式（属性不可再分）")]),v._v(" "),_("p",[v._v("如果数据库表中的所有字段值都是不可分解的原子值，就说明该数据库表满足了第一范式。")]),v._v(" "),_("h3",{attrs:{id:"第二范式-每个非主属性完全依赖于主属性集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二范式-每个非主属性完全依赖于主属性集"}},[v._v("#")]),v._v(" 第二范式（每个非主属性完全依赖于主属性集）")]),v._v(" "),_("p",[_("strong",[v._v("完全依赖：")])]),v._v(" "),_("p",[v._v("A中的所有属性唯一决定B，属性少了就不能唯一决定，属性多了则有冗余（叫依赖不叫完全依赖）。举例：（学号，课程名）这个主属性集可以唯一决定成绩，但是对于"),_("code",[v._v("学生姓名")]),v._v("这个属性，（学号，课程名）这个属性集就是冗余的，所以"),_("code",[v._v("学生姓名")]),v._v("不完全依赖于（学号，课程名）这一属性集；")]),v._v(" "),_("p",[_("strong",[v._v("第二范式要求：")])]),v._v(" "),_("p",[v._v("第二范式需要确保数据库表中的每一列都和主键相关，而不能只与主键的某一部分相关。**也就是说在一个数据库表中，一个表中只能保存一种数据，不可以把多种数据保存在同一张数据库表中。**比如将（学号，课程名，成绩）做成一张表；（学号，学生姓名）做成另一张表，避免大量的数据冗余；")]),v._v(" "),_("h3",{attrs:{id:"第三范式-非主属性不传递依赖于主属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三范式-非主属性不传递依赖于主属性"}},[v._v("#")]),v._v(" 第三范式（非主属性不传递依赖于主属性）")]),v._v(" "),_("p",[v._v("**传递依赖：**如果C依赖于B，B依赖于A，那么C传递依赖于A")]),v._v(" "),_("p",[v._v("3NF在2NF的基础上，消除了非主属性之间的依赖；比如一个表中，主属性有（学号），非主属性有（姓名，院系，院长名），可以看到院长名这个非主属性依赖于院系，传递依赖于学号。消除的办法是分解。 必须先满足第二范式（2NF），要求："),_("strong",[v._v("表中的每一列只与主键直接相关而不是间接相关")]),v._v("，（表中的每一列只能依赖于主键）；")]),v._v(" "),_("h2",{attrs:{id:"候选码、主码、超码、外码、主属性、非主属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#候选码、主码、超码、外码、主属性、非主属性"}},[v._v("#")]),v._v(" 候选码、主码、超码、外码、主属性、非主属性")]),v._v(" "),_("ol",[_("li",[v._v("候选码的定义：如果关系中的某一属性组的值能唯一地标识一个元组，则称该属性组为候选码；")]),v._v(" "),_("li",[v._v("主码的定义：如果一个关系有多个候选码，则选定其中一个为主码；")]),v._v(" "),_("li",[v._v("主属性定义：候选码的诸属性称为主属性；")]),v._v(" "),_("li",[v._v("非主属性定义：不包含在任何候选码中的属性称为非主属性；")]),v._v(" "),_("li",[v._v("实体完整性规则：如果属性（一个或者一组属性）A是基本关系R的主属性，则A不能取空值。")]),v._v(" "),_("li",[v._v("码是数据库中的基本概念，用于唯一表示实体属性，是整个实体集的性质，而不是单个实体")]),v._v(" "),_("li",[_("strong",[v._v("超码")]),v._v("是一个或多个属性的集合，这些属性可以让我们在一个实体集中唯一地标识一个实体")]),v._v(" "),_("li",[_("strong",[v._v("候选码")]),v._v("是从超码中选出的，自然地候选码也是一个或多个属性的集合。")])]),v._v(" "),_("h2",{attrs:{id:"不符合范式会出现什么异常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不符合范式会出现什么异常"}},[v._v("#")]),v._v(" 不符合范式会出现什么异常")]),v._v(" "),_("ul",[_("li",[v._v("冗余数据：某些同样的数据多次出现（如学生姓名）；")]),v._v(" "),_("li",[v._v("修改异常：修改了一个记录中的信息，另一个记录中相同的信息却没有修改；")]),v._v(" "),_("li",[v._v("删除异常：删除一个信息，那么也会丢失其它信息（删除一个课程，丢失了一个学生的信息）；")]),v._v(" "),_("li",[v._v("插入异常：无法插入（插入一个还没有课程信息的学生）")])]),v._v(" "),_("h2",{attrs:{id:"数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[v._v("#")]),v._v(" 数据类型")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/21/1f4d254c340be.png",alt:"image-20210308090755247"}})]),v._v(" "),_("h2",{attrs:{id:"varchar与char的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#varchar与char的区别"}},[v._v("#")]),v._v(" varchar与char的区别")]),v._v(" "),_("ul",[_("li",[v._v("char表示定长字符串，长度是固定的；")]),v._v(" "),_("li",[v._v("如果插入数据的长度小于char的固定长度时，则用空格填充；")]),v._v(" "),_("li",[v._v("因为长度固定，所以存取速度要比varchar快很多，甚至能快50%，但正因为其长度固定，所以会占据多余的空间，是空间换时间的做法；")]),v._v(" "),_("li",[v._v("对于char来说，最多能存放的字符个数为255，和编码无关")]),v._v(" "),_("li",[v._v("varchar表示可变长字符串，长度是可变的；")]),v._v(" "),_("li",[v._v("插入的数据是多长，就按照多长来存储；")]),v._v(" "),_("li",[v._v("varchar在存取方面与char相反，它存取慢，因为长度不固定，但正因如此，不占据多余的空间，是时间换空间的做法；")]),v._v(" "),_("li",[v._v("对于varchar来说，最多能存放的字符个数为65532")]),v._v(" "),_("li",[v._v("从性能角度选char，节省磁盘角度选varchar")])]),v._v(" "),_("h2",{attrs:{id:"float和double的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#float和double的区别"}},[v._v("#")]),v._v(" FLOAT和DOUBLE的区别")]),v._v(" "),_("ul",[_("li",[v._v("FLOAT类型数据可以存储至多8位十进制数，并在内存中占4字节。")]),v._v(" "),_("li",[v._v("DOUBLE类型数据可以存储至多18位十进制数，并在内存中占8字节。")])])])}),[],!1,null,null,null);a.default=t.exports}}]);