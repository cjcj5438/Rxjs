// Subject是一种能够发射多个数据给observer的Observable, 看起来好像是EventEmintter
var subject=new Rx.Subject();
subject.subscribe({
    next:(v=>{console.log("a:"+v)})
});
subject.subscribe({
    next:(v=>{console.log("b:"+v)})
})
subject.next(1)
subject.next(2)

// 与Observable不同的是, Subject发射数据给多个observer. 其次,定义subject时没有传入callback;
// 是因为subject 它自带next ,complete ,error 等方法;从而可以发射数据给observer,
// observer不知道数据是  Observable 还是subject给的数据;透明的;
// 而且,subject有各种派生


// BehaviorSubject能够保留最近的数据,使得当有subscribe的时候,立马能发射出去
// ReplaySubject 能够保留最近的一些数据, 使得当有subscript的时候,将这些数据发射出去
// AsyncSubject 只会发射结束前的一个数据
// Multicasted Observables 是一种借助Subject来讲数据发射给多个observer的Observable