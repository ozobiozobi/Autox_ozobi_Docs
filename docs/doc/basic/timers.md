# Timers

:::tip 稳定性: 稳定

:::

timers 模块暴露了一个全局的 API，用于在某个未来时间段调用调度函数。

因为定时器函数是全局的，所以使用该 API 无需调用 timers.XXXXX

Auto.js 中的计时器函数实现了与 Web 浏览器提供的定时器类似的 API，除了它使用了一个不同的内部实现，它是基于 `Android Looper-Handler` 消息循环机制构建的。其实现机制与 Node.js 比较相似。

例如，要在 5 秒后发出消息"hello":

```js
setTimeout(function () {
    toast("hello");
}, 5000);
```

需要注意的是，这些定时器仍然是单线程的。如果脚本主体有耗时操作或死循环，则设定的定时器不能被及时执行，例如：

```js
setTimeout(function () {
    //这里的语句会在15秒后执行而不是5秒后
    toast("hello");
}, 5000);
//暂停10秒
sleep(10000);
```

再如：

```js
setTimeout(function () {
    //这里的语句永远不会被执行
    toast("hello");
}, 5000);
//死循环
while (true);
```

## setInterval(callback, delay\[, ...args\])

-   `callback` {Function} 当定时器到点时要调用的函数。
-   `delay` {number} 调用 callback 之前要等待的毫秒数。
-   `...args` {any} 当调用 callback 时要传入的可选参数。

预定每隔 delay 毫秒重复执行的 callback。 返回一个用于 clearInterval() 的 id。

当 delay 小于 0 时，delay 会被设为 0。

## setTimeout(callback, delay\[, ...args\])

-   `callback` {Function} 当定时器到点时要调用的函数。
-   `delay` {number} 调用 callback 之前要等待的毫秒数。
-   `...args` {any} 当调用 callback 时要传入的可选参数。

预定在 delay 毫秒之后执行的单次 callback。 返回一个用于 clearTimeout() 的 id。

callback 可能不会精确地在 delay 毫秒被调用。 Auto.js 不能保证回调被触发的确切时间，也不能保证它们的顺序。 回调会在尽可能接近所指定的时间上调用。

当 delay 小于 0 时，delay 会被设为 0。

## setImmediate(callback[, ...args])

-   `callback` {Function} 在 Looper 循环的当前回合结束时要调用的函数。
-   `...args` {any} 当调用 callback 时要传入的可选参数。

预定立即执行的 callback，它是在 I/O 事件的回调之后被触发。 返回一个用于 clearImmediate() 的 id。

当多次调用 setImmediate() 时，callback 函数会按照它们被创建的顺序依次执行。 每次事件循环迭代都会处理整个回调队列。 如果一个立即定时器是被一个正在执行的回调排入队列的，则该定时器直到下一次事件循环迭代才会被触发。

setImmediate()、setInterval() 和 setTimeout() 方法每次都会返回表示预定的计时器的 id。 它们可用于取消定时器并防止触发。

## clearInterval(id)

-   `id` {number} 一个 setInterval() 返回的 id。

取消一个由 setInterval() 创建的循环定时任务。

例如：

```js
//每5秒就发出一次hello
var id = setInterval(function () {
    toast("hello");
}, 5000);
//1分钟后取消循环
setTimeout(function () {
    clearInterval(id);
}, 60 * 1000);
```

## clearTimeout(id)

-   `id` {number} 一个 setTimeout() 返回的 id。

取消一个由 setTimeout() 创建的定时任务。

## clearImmediate(id)

-   `id` {number} 一个 setImmediate() 返回的 id。

取消一个由 setImmediate() 创建的 Immediate 对象。
