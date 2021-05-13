(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{515:function(s,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[s._v("#")]),s._v(" 解释")]),s._v(" "),a("p",[s._v("顾名思义，分治问题由“分”（divide）和“治”（conquer）两部分组成，通过把原问题分为子 问题，再将子问题进行处理合并，从而实现对原问题的求解。我们在排序章节展示的归并排序就 是典型的分治问题，其中“分”即为把大数组平均分成两个小数组，通过递归实现，最终我们会得到多个长度为 1 的子数组;“治”即为把已经排好序的两个小数组合成为一个排好序的大数组， 从长度为 1 的子数组开始，最终合成一个大数组。")]),s._v(" "),a("blockquote",[a("p",[s._v("可以使用主定理来求解时间复杂度")])]),s._v(" "),a("h2",{attrs:{id:"表达式问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表达式问题"}},[s._v("#")]),s._v(" 表达式问题")]),s._v(" "),a("h3",{attrs:{id:"为运算表达式设计优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为运算表达式设计优先级"}},[s._v("#")]),s._v(" 为运算表达式设计优先级")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img.xiaoyou66.com/2021/03/25/98799c71e2bee.png",alt:"image-20210325141456840"}})]),s._v(" "),a("p",[s._v("一般这种分治法都是使用递归来进行求解。题如下")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diffWaysToCompute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expression "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" ways "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 遍历整个字符串")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 首先我们判断当前的符号是否为运算符")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是运算符的那么就分别计算左右两边的和")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里实际上就已经把左右两边所有的情况都计算进去了")]),s._v("\n         left"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diffWaysToCompute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n         right"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diffWaysToCompute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下面我们就只需要依次组合计算")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断运算符的类型并把结果放入我们的结果数组")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                  ways "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ways"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                  ways "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ways"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                  ways "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ways"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果结果为空，说明只有数字，我们直接转换一下即可")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ways"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("err"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v("strconv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Atoi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("err"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         ways"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ways"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ways\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);