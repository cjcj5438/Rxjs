// Observable里面怎么控制流的 ?
var observable = Rx.Observable.create(observer => {
    try {
        observer.next(1)
        observer.next("hello")
        observer.next(2)
        observer.next(3)
        // 到这步就完成了. 面的next 就不会执行了
        observer.complete();
        observer.next(4)
    } catch (err) {
        observer.error(err)
    }

})
// 这么看observable.subscribe 怎么封装的callback
var observer = {
    next(value) {
        console.log(value)
    },
    complete() {
        console.log('完成')
    },
    error(err) {
        console.log(value)
    }
}
let subcription = observable.subscribe(observer)