# 找图找色

## images.requestScreenCapture([landscape])

-   `landscape` {boolean} 截屏方向
    -   `true` 横屏截图
    -   `false` 竖屏截图
    -   不指定值，由当前设备屏幕方向决定截图方向
-   `return` {boolean}

向系统申请屏幕截图权限，返回是否请求成功,仅需执行一次

建议在本软件界面运行该函数，在其他软件界面运行时容易出现一闪而过的黑屏现象。

示例:

```js
//请求截图
//每次使用该函数都会弹出截图权限请求，建议选择“总是允许”。
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
//连续截图 10 张图片(间隔 1 秒)并保存到存储卡目录
for (var i = 0; i < 10; i++) {
    captureScreen("/sdcard/screencapture" + i + ".png");
    sleep(1000);
}
```

```js
//安卓版本高于Android 9
if (device.sdkInt > 28) {
    //等待截屏权限申请并同意
    threads.start(function () {
        packageName("com.android.systemui").text("立即开始").waitFor();
        text("立即开始").click();
    });
}
//申请截屏权限
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
```

该函数也可以作为全局函数使用。

## images.captureScreen()

-   `return` {Image}

截取当前屏幕并返回一个 Image 对象。

没有截图权限时执行该函数会抛出 SecurityException。

该函数不会返回 null，两次调用可能返回相同的 Image 对象。这是因为设备截图的更新需要一定的时间，短时间内（一般来说是 16ms）连续调用则会返回同一张截图。

截图需要转换为 Bitmap 格式，从而该函数执行需要一定的时间(0~20ms)。

另外在 requestScreenCapture()执行成功后需要一定时间后才有截图可用，因此如果立即调用 captureScreen()，会等待一定时间后(一般为几百 ms)才返回截图。

例子:

```js
//请求横屏截图
requestScreenCapture(true);
//截图
var img = captureScreen();
//获取在点(100, 100)的颜色值
var color = images.pixel(img, 100, 100);
//显示该颜色值
toast(colors.toString(color));
```

该函数也可以作为全局函数使用。

## images.captureScreen(path)

-   `path` {string} 截图保存路径

截取当前屏幕并以 PNG 格式保存到 path 中。如果文件不存在会被创建；文件存在会被覆盖。

该函数不会返回任何值。该函数也可以作为全局函数使用。

## images.pixel(image, x, y)

-   `image` {Image} 图片
-   `x` {number} 要获取的像素的横坐标。
-   `y` {number} 要获取的像素的纵坐标。

返回图片 image 在点(x, y)处的像素的 ARGB 值。

该值的格式为 0xAARRGGBB，是一个"32 位整数"(虽然 JavaScript 中并不区分整数类型和其他数值类型)。

坐标系以图片左上角为原点。以图片左侧边为 y 轴，上侧边为 x 轴。

## images.readPixels(path)

-   `path` {string} 图片的地址
-   `return` {Object} 包括图片的像素数据和宽高，{data,width,height}

读取图片的像素数据和宽高。

## images.findColor(image, color, options)

-   `image` {Image} 图片
-   `color` {number} | {string} 要寻找的颜色的 RGB 值。如果是一个整数，则以 0xRRGGBB 的形式代表 RGB 值（A 通道会被忽略）；如果是字符串，则以"#RRGGBB"代表其 RGB 值。
-   `options` {Object} 选项包括：
    -   `region` {Array} 找色区域。是一个两个或四个元素的数组。(region[0], region[1])表示找色区域的左上角；region[2]\*region[3]表示找色区域的宽高。如果只有 region 只有两个元素，则找色区域为(region[0], region[1])到屏幕右下角。如果不指定 region 选项，则找色区域为整张图片。
    -   `threshold` {number} 找色时颜色相似度的临界值，范围为 0~255（越小越相似，0 为颜色相等，255 为任何颜色都能匹配）。默认为 4。threshold 和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.

在图片中寻找颜色 color。找到时返回找到的点 Point，找不到时返回 null。

该函数也可以作为全局函数使用。

一个循环找色的例子如下：

```js
requestScreenCapture();

//循环找色，找到红色(#ff0000)时停止并报告坐标
while (true) {
    var img = captureScreen();
    var point = findColor(img, "#ff0000");
    if (point) {
        toast("找到红色，坐标为(" + point.x + ", " + point.y + ")");
    }
}
```

一个区域找色的例子如下：

```js
//读取本地图片/sdcard/1.png
var img = images.read("/sdcard/1.png");
//判断图片是否加载成功
if (!img) {
    toast("没有该图片");
    exit();
}
//在该图片中找色，指定找色区域为在位置(400, 500)的宽为300长为200的区域，指定找色临界值为4
var point = findColor(img, "#00ff00", {
    region: [400, 500, 300, 200],
    threshold: 4,
});
if (point) {
    toast("找到啦:" + point);
} else {
    toast("没找到");
}
```

## images.findColorInRegion(img, color, x, y[, width, height, threshold])

区域找色的简便方法。

相当于

```js
images.findColor(img, color, {
    region: [x, y, width, height],
    threshold: threshold,
});
```

该函数也可以作为全局函数使用。

## images.findColorEquals(img, color[, x, y, width, height])

-   `img` {Image} 图片
-   `color` {number} | {string} 要寻找的颜色
-   `x` {number} 找色区域的左上角横坐标
-   `y` {number} 找色区域的左上角纵坐标
-   `width` {number} 找色区域的宽度
-   `height` {number} 找色区域的高度
-   返回 {Point}

在图片 img 指定区域中找到颜色和 color 完全相等的某个点，并返回该点的左边；如果没有找到，则返回`null`。

找色区域通过`x`, `y`, `width`, `height`指定，如果不指定找色区域，则在整张图片中寻找。

该函数也可以作为全局函数使用。

示例：
(通过找 QQ 红点的颜色来判断是否有未读消息)

```js
requestScreenCapture();
launchApp("QQ");
sleep(1200);
var p = findColorEquals(captureScreen(), "#f64d30");
if (p) {
    toast("有未读消息");
} else {
    toast("没有未读消息");
}
```

## images.findAllPointsForColor(img, color, options)

-   `img` {Image} 图片
-   `color` {number | string} 要检测的颜色
-   `options` {Object} 选项包括：
    -   `region` {Array} 找色区域。是一个两个或四个元素的数组。(region[0], region[1])表示找色区域的左上角；region[2]\*region[3]表示找色区域的宽高。如果 `region`只有两个元素，则找色区域为(region[0], region[1])到图片右下角。如果不指定`region`选项，则找色区域为整张图片。
    -   `similarity` {number} 找色时颜色相似度，范围为 0~1（越大越相似，1 为颜色相等，0 为任何颜色都能匹配）。
    -   `threshold` {number} 找色时颜色相似度的临界值，范围为 0 ~ 255（越小越相似，0 为颜色相等，255 为任何颜色都能匹配）。默认为 4。
    -   `similarity`与`threshold`的换算为`similarity` = (255 - `threshold`) / 255 。二选一，同时存在则以`similarity`为准。
-   `return` {Array}

在图片中寻找所有颜色为`color`的点。找到时返回找到的点 Point 的数组，找不到时返回`null`。

例如找出所有白色的点：

```js
log(images.findAllPointsForColor(img, "#ffffff"));
```

## images.findMultiColors(img, firstColor, colors[, options])

-   `img` {Image} 要找色的图片
-   `firstColor` {number} | {string} 第一个点的颜色
-   `colors` {Array} 表示剩下的点相对于第一个点的位置和颜色的数组，数组的每个元素为[x, y, color]
-   `options` {Object} 选项，包括：
    -   `region` {Array} 找色区域。是一个两个或四个元素的数组。(region[0], region[1])表示找色区域的左上角；region[2]\*region[3]表示找色区域的宽高。如果只有 region 只有两个元素，则找色区域为(region[0], region[1])到屏幕右下角。如果不指定 region 选项，则找色区域为整张图片。
    -   `threshold` {number} 找色时颜色相似度的临界值，范围为 0~255（越小越相似，0 为颜色相等，255 为任何颜色都能匹配）。默认为 4。threshold 和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.

多点找色，类似于按键精灵的多点找色，其过程如下：

1. 在图片 img 中找到颜色 firstColor 的位置(x0, y0)
2. 对于数组 colors 的每个元素[x, y, color]，检查图片 img 在位置(x + x0, y + y0)上的像素是否是颜色 color，是的话返回(x0, y0)，否则继续寻找 firstColor 的位置，重新执行第 1 步
3. 整张图片都找不到时返回`null`

例如，对于代码`images.findMultiColors(img, "#123456", [[10, 20, "#ffffff"], [30, 40, "#000000"]])`，假设图片在(100, 200)的位置的颜色为#123456, 这时如果(110, 220)的位置的颜色为#fffff 且(130, 240)的位置的颜色为#000000，则函数返回点(100, 200)。

如果要指定找色区域，则在 options 中指定，例如:

```js
var p = images.findMultiColors(
    img,
    "#123456",
    [
        [10, 20, "#ffffff"],
        [30, 40, "#000000"],
    ],
    {
        region: [0, 960, 1080, 960],
    }
);
```

## images.detectsColor(image, color, x, y[, threshold = 16, algorithm = "diff"])

-   `image` {Image} 图片
-   `color` {number} | {string} 要检测的颜色
-   `x` {number} 要检测的位置横坐标
-   `y` {number} 要检测的位置纵坐标
-   `threshold` {number} 颜色相似度临界值，默认为 16。取值范围为 0~255。
-   `algorithm` {string} 颜色匹配算法，包括:

    -   "equal": 相等匹配，只有与给定颜色 color 完全相等时才匹配。
    -   "diff": 差值匹配。与给定颜色的 R、G、B 差的绝对值之和小于 threshold 时匹配。
    -   "rgb": rgb 欧拉距离相似度。与给定颜色 color 的 rgb 欧拉距离小于等于 threshold 时匹配。

    -   "rgb+": 加权 rgb 欧拉距离匹配([LAB Delta E](https://en.wikipedia.org/wiki/Color_difference))。
    -   "hs": hs 欧拉距离匹配。hs 为 HSV 空间的色调值。

返回图片 image 在位置(x, y)处是否匹配到颜色 color。用于检测图片中某个位置是否是特定颜色。

一个判断微博客户端的某个微博是否被点赞过的例子：

```js
requestScreenCapture();
//找到点赞控件
var like = id("ly_feed_like_icon").findOne();
//获取该控件中点坐标
var x = like.bounds().centerX();
var y = like.bounds().centerY();
//截图
var img = captureScreen();
//判断在该坐标的颜色是否为橙红色
if (images.detectsColor(img, "#fed9a8", x, y)) {
    //是的话则已经是点赞过的了，不做任何动作
} else {
    //否则点击点赞按钮
    like.click();
}
```

## images.findImage(img, template[, options])

-   `img` {Image} 大图片
-   `template` {Image} 小图片（模板）
-   `options` {Object} 选项包括：
    -   `threshold` {number} 图片相似度。取值范围为 0~1 的浮点数。默认值为 0.9。
    -   `region` {Array} 找图区域。参见 findColor 函数关于 region 的说明。
    -   `level` {number} **一般而言不必修改此参数**。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level 参数表示金字塔的层次, level 越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。

找图。在大图片 img 中查找小图片 template 的位置（模块匹配），找到时返回位置坐标(Point)，找不到时返回 null。

该函数也可以作为全局函数使用。

一个最简单的找图例子如下：

```js
var img = images.read("/sdcard/大图.png");
var templ = images.read("/sdcard/小图.png");
var p = findImage(img, templ);
if (p) {
    toast("找到啦:" + p);
} else {
    toast("没找到");
}
```

稍微复杂点的区域找图例子如下：

```js
auto();
requestScreenCapture();
var wx = images.read("/sdcard/微信图标.png");
//返回桌面
home();
//截图并找图
var p = findImage(captureScreen(), wx, {
    region: [0, 50],
    threshold: 0.8,
});
if (p) {
    toast("在桌面找到了微信图标啦: " + p);
} else {
    toast("在桌面没有找到微信图标");
}
```

## images.findImageInRegion(img, template, x, y[, width, height, threshold])

区域找图的简便方法。相当于：

```js
images.findImage(img, template, {
    region: [x, y, width, height],
    threshold: threshold,
});
```

该函数也可以作为全局函数使用。

## images.matchTemplate(img, template, options)

**[v4.1.0 新增]**

-   `img` {Image} 大图片
-   `template` {Image} 小图片（模板）
-   `options` {Object} 找图选项：
    -   `threshold` {number} 图片相似度。取值范围为 0~1 的浮点数。默认值为 0.9。
    -   `region` {Array} 找图区域。参见 findColor 函数关于 region 的说明。
    -   `max` {number} 找图结果最大数量，默认为 5
    -   `level` {number} **一般而言不必修改此参数**。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level 参数表示金字塔的层次, level 越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
-   返回 {MatchingResult}

在大图片中搜索小图片，并返回搜索结果 MatchingResult。该函数可以用于找图时找出多个位置，可以通过 max 参数控制最大的结果数量。也可以对匹配结果进行排序、求最值等操作。

## images.findCircles(gray, options)

-   `gray` {Image} 灰度图片
-   `options` {Object} 选项包括：
    -   `region` {Array} 找圆区域。是一个两个或四个元素的数组。(region[0], region[1])表示找圆区域的左上角；region[2]\*region[3]表示找圆区域的宽高。如果只有 region 只有两个元素，则找圆区域为(region[0], region[1])到图片右下角。如果不指定`region`选项，则找圆区域为整张图片。
    -   `dp` {number} dp 是累加面与原始图像相比的分辨率的反比参数，dp=2 时累计面分辨率是元素图像的一半，宽高都缩减为原来的一半，dp=1 时，两者相同。默认为 1。
    -   `minDst` {number} minDist 定义了两个圆心之间的最小距离。默认为图片高度的八分之一。
    -   `param1` {number} param1 是 Canny 边缘检测的高阈值，低阈值被自动置为高阈值的一半。默认为 100，范围为 0-255。
    -   `param2` {number} param2 是累加平面对是否是圆的判定阈值，默认为 100。
    -   `minRadius` {number} 定义了检测到的圆的半径的最小值，默认为 0。
    -   `maxRadius` {number} 定义了检测到的圆的半径的最大值，0 为不限制最大值，默认为 0。
-   `return` {Array}

在图片中寻找圆（做霍夫圆变换）。找到时返回找到的所有圆{x,y,radius}的数组，找不到时返回 null。

一个寻找圆的例子：

```js
// 请求截图
requestScreenCapture();
// 截图
let img = captureScreen();
// 灰度化图片
let gray = images.grayscale(img);
// 找圆
let arr = findCircles(gray, {
    dp: 1,
    minDst: 80,
    param1: 100,
    param2: 100,
    minRadius: 50,
    maxRadius: 80,
});
// 回收图片
gray.recycle();
```
