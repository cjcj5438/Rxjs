// subscription陷阱


//  Rx.Observable.interval可以返回一个能够发射(返回123的数字) 间隔时1000毫秒
var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));
setTimeout(()=>{
    //subscription里面的有个方法 unsubscribe可以取消订阅observable里发射的数据
    // 但是Observable仍然在吐数字
    subscription.unsubscribe();
},3000)