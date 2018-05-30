/**
 * 这里把foo 看成一个函数,意味着每次调用foo 时都回导致传入Rx.Observable.create里的回调重新执行一次,
 * @type {Observable|*}
 */
let foo = Rx.Observable.create(observer => {
    console.log("hello")
    // observer.next表示一个返回值,当然可以多次调;
    // 每次调用后会将next里面的值返回给 foo.subscribe里面的回掉,执行完后再返回
    observer.next(42)
});
//foo.subscribe调用方法相当与foo(); 为了通过里面的回掉函数来获取值;
foo.subscribe(x => console.log(x))
foo.subscribe(y => console.log(y))
