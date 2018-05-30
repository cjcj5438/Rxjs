var a,b=1,c=2;
a=b+c;
console.log("b=" + b);
console.log("c=" + c);
console.log("a=" + a);
b=3;
c=2;
console.log("a=" + a);
// 在传统编程中 a 的值不会随着bc变

// 那么在响应式编程中的怎么实现呢?
/*
* 1,操作符 : from zip等.. Rx里面有太多着这样的操作符:创建类,变换类,过滤类,合并类,处理错误类,工具类,数学类等等
* 2,lamda表达式 =>: 可以把他想成一个数据的指向,左边获取数据,右边处理输出数据;
* */

//为什么规范性 "b$" 命名呢?   加了$ 说明是一个流操作;
var b$=Rx.Observable.from([1,3]);
var c$=Rx.Observable.from([2,2]);
var a$=Rx.Observable.zip(b$,c$,(b,c)=>{
    console.log("b=" + b);
    console.log("c=" + c);
    return b+c;
})
a$.subscribe(a=>{console.log("a=" + a);})