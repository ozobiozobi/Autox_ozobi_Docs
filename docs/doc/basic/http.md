# HTTP

:::tip 稳定性: 稳定

:::

http 模块提供一些进行 http 请求的函数。

## http.get(url[, options, callback])

-   `url` {string} 请求的 URL 地址，需要以"http://"或"https://"开头。如果 url 没有以"http://"开头，则默认为"http://"。
-   `options` {Object} 请求选项。参见[http.request()][]。
-   `callback` {Function} 回调函数，可选，其参数是一个[Response][]对象。如果不加回调函数，则该请求将阻塞、同步地执行。

对地址 url 进行一次 HTTP GET 请求。如果没有回调函数，则在请求完成或失败时返回此次请求的响应(参见[Response][])。

最简单 GET 请求如下:

```js
console.show();
var r = http.get("www.baidu.com");
log("code = " + r.statusCode);
log("html = " + r.body.string());
```

采用回调形式的 GET 请求如下：

```js
console.show();
http.get("www.baidu.com", {}, function (res, err) {
    if (err) {
        console.error(err);
        return;
    }
    log("code = " + res.statusCode);
    log("html = " + res.body.string());
});
```

如果要增加 HTTP 头部信息，则在 options 参数中添加，例如：

```js
console.show();
var r = http.get("www.baidu.com", {
    headers: {
        "Accept-Language": "zh-cn,zh;q=0.5",
        "User-Agent": "Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11",
    },
});
log("code = " + r.statusCode);
log("html = " + r.body.string());
```

一个请求天气并解析返回的天气 JSON 结果的例子如下：

```js
var city = "广州";
var res = http.get("http://www.sojson.com/open/api/weather/json.shtml?city=" + city);
if (res.statusCode != 200) {
    toast("请求失败: " + res.statusCode + " " + res.statusMessage);
} else {
    var weather = res.body.json();
    log(weather);
    toast(util.format("温度: %s 湿度: %s 空气质量: %s", weather.data.wendu, weather.data.shidu, weather.quality));
}
```

## http.post(url, data[, options, callback])

-   `url` {string} 请求的 URL 地址，需要以"http://"或"https://"开头。如果 url 没有以"http://"开头，则默认为"http://"。
-   `data` {string} | {Object} POST 数据。
-   `options` {Object} 请求选项。
-   `callback` {Function} 回调，其参数是一个[Response][]对象。如果不加回调参数，则该请求将阻塞、同步地执行。

对地址 url 进行一次 HTTP POST 请求。如果没有回调函数，则在请求完成或失败时返回此次请求的响应(参见[Response][])。

其中 POST 数据可以是字符串或键值对。具体含义取决于 options.contentType 的值。默认为"application/x-www-form-urlencoded"(表单提交), 这种方式是 JQuery 的 ajax 函数的默认方式。

一个模拟表单提交登录淘宝的例子如下:

```js
var url = "https://login.taobao.com/member/login.jhtml";
var username = "你的用户名";
var password = "你的密码";
var res = http.post(url, {
    "TPL_username": username,
    "TPL_password": password,
});
var html = res.body.string();
if (html.contains("页面跳转中")) {
    toast("登录成功");
} else {
    toast("登录失败");
}
```

## http.postJson(url[, data, options, callback])

-   `url` {string} 请求的 URL 地址，需要以"http://"或"https://"开头。如果 url 没有以"http://"开头，则默认为"http://"。
-   `data` {Object} POST 数据。
-   `options` {Object} 请求选项。
-   `callback` {Function} 回调，其参数是一个[Response][]对象。如果不加回调参数，则该请求将阻塞、同步地执行。

以 JSON 格式向目标 Url 发起 POST 请求。如果没有回调函数，则在请求完成或失败时返回此次请求的响应(参见[Response][])。

JSON 格式指的是，将会调用`JSON.stringify()`把 data 对象转换为 JSON 字符串，并在 HTTP 头部信息中把"Content-Type"属性置为"application/json"。这种方式是 AngularJS 的 ajax 函数的默认方式。

一个调用图灵机器人接口的例子如下：

```js
var url = "http://www.tuling123.com/openapi/api";
r = http.postJson(url, {
    key: "65458a5df537443b89b31f1c03202a80",
    info: "你好啊",
    userid: "1",
});
toastLog(r.body.string());
```

## http.postMultipart(url, files[, options, callback])

-   `url` {string} 请求的 URL 地址，需要以"http://"或"https://"开头。如果 url 没有以"http://"开头，则默认为"http://"。
-   `files` {Object} POST 数据。
-   `options` {Object} 请求选项。
-   `callback` {Function} 回调，其参数是一个`Response`对象。如果不加回调参数，则该请求将阻塞、同步地执行。

向目标地址发起类型为 multipart/form-data 的请求（通常用于文件上传等), 其中 files 参数是{name1: value1, name2: value2, ...}的键值对，value 的格式可以是以下几种情况：

1. `string`
2. 文件类型，即 open()返回的类型
3. [fileName, filePath]
4. [fileName, mimeType, filePath]

其中 1 属于非文件参数，2、3、4 为文件参数。举个例子，最简单的文件上传的请求为：

```js
var res = http.postMultipart(url, {
    file: open("/sdcard/1.txt"),
});
log(res.body.string());
```

如果使用格式 2，则代码为

```js
var res = http.postMultipart(url, {
    file: ["1.txt", "/sdcard/1.txt"],
});
log(res.body.string());
```

如果使用格式 3，则代码为

```js
var res = http.postMultipart(url, {
    file: ["1.txt", "text/plain", "/sdcard/1.txt"],
});
log(res.body.string());
```

如果使用格式 2 的同时要附带非文件参数"appId=abcdefghijk"，则为:

```js
var res = http.postMultipart(url, {
    appId: "adcdefghijk",
    file: open("/sdcard/1.txt"),
});
log(res.body.string());
```

## http.request(url[, options, callback])

-   `url` {string} 请求的 URL 地址，需要以"http://"或"https://"开头。如果 url 没有以"http://"开头，则默认为"http://"。
-   `options` {Object} 请求选项。参见[http.buildRequest()][]。
-   `callback` {Function} 回调，其参数是一个[Response][]对象。如果不加回调参数，则该请求将阻塞、同步地执行。

对目标地址 url 发起一次 HTTP 请求。如果没有回调函数，则在请求完成或失败时返回此次请求的响应(参见[Response][])。

选项 options 可以包含以下属性：

-   `headers` {Object} 键值对形式的 HTTP 头部信息。有关 HTTP 头部信息，参见[菜鸟教程：HTTP 响应头信息](http://www.runoob.com/http/http-header-fields.html)。
-   `method` {string} HTTP 请求方法。包括"GET", "POST", "PUT", "DELET", "PATCH"。
-   `contentType` {string} HTTP 头部信息中的"Content-Type", 表示 HTTP 请求的内容类型。例如"text/plain", "application/json"。更多信息参见[菜鸟教程：HTTP contentType](http://www.runoob.com/http/http-content-type.html)。
-   `body` {string} | {Array} | {Function} HTTP 请求的内容。可以是一个字符串，也可以是一个字节数组；或者是一个以[BufferedSink](https://github.com/square/okio/blob/master/okio/src/main/java/okio/BufferedSink.java)为参数的函数。

该函数是 get, post, postJson 等函数的基础函数。因此除非是 PUT, DELET 等请求，或者需要更高定制的 HTTP 请求，否则直接使用 get, post, postJson 等函数会更加方便。

# Response

HTTP 请求的响应。

## Response.statusCode

-   {number}

当前响应的 HTTP 状态码。例如 200(OK), 404(Not Found)等。

有关 HTTP 状态码的信息，参见[菜鸟教程：HTTP 状态码](http://www.runoob.com/http/http-status-codes.html)。

## Response.statusMessage

-   {string}

当前响应的 HTTP 状态信息。例如"OK", "Bad Request", "Forbidden"。

有关 HTTP 状态码的信息，参见[菜鸟教程：HTTP 状态码](http://www.runoob.com/http/http-status-codes.html)。

例子：

```js
var res = http.get("www.baidu.com");
if (res.statusCode >= 200 && res.statusCode < 300) {
    toast("页面获取成功!");
} else if (res.statusCode == 404) {
    toast("页面没找到哦...");
} else {
    toast("错误: " + res.statusCode + " " + res.statusMessage);
}
```

## Response.headers

-   {Object}

当前响应的 HTTP 头部信息。该对象的键是响应头名称，值是各自的响应头值。 所有响应头名称都是小写的(吗)。

有关 HTTP 头部信息，参见[菜鸟教程：HTTP 响应头信息](http://www.runoob.com/http/http-header-fields.html)。

例子:

```js
console.show();
var res = http.get("www.qq.com");
console.log("HTTP Headers:");
for (var headerName in res.headers) {
    console.log("%s: %s", headerName, res.headers[headerName]);
}
```

## Response.body

-   {Object}

当前响应的内容。他有以下属性和函数：

-   bytes() {Array} 以字节数组形式返回响应内容
-   string() {string} 以字符串形式返回响应内容
-   json() {Object} 把响应内容作为 JSON 格式的数据并调用 JSON.parse，返回解析后的对象
-   contentType {string} 当前响应的内容类型

## Response.request

-   {Request}
    当前响应所对应的请求。参见[Request][]。

## Response.url

-   {number}
    当前响应所对应的请求 URL。

## Response.method

-   {string}
    当前响应所对应的 HTTP 请求的方法。例如"GET", "POST", "PUT"等。
