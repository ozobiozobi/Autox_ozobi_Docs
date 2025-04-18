# 基于控件的操作

基于控件的操作指的是选择屏幕上的控件，获取其信息或对其进行操作。对于一般软件而言，基于控件的操作对不同机型有很好的兼容性；但是对于游戏而言，由于游戏界面并不是由控件构成，无法采用本章节的方法，也无法使用本章节的函数。有关游戏脚本的编写，请参考《基于坐标的操作》。

基于控件的操作依赖于无障碍服务，因此最好在脚本开头使用`auto()`函数来确保无障碍服务已经启用。如果运行到某个需要权限的语句无障碍服务并没启动，则会抛出异常并跳转到无障碍服务界面。这样的用户体验并不好，因为需要重新运行脚本，后续会加入等待无障碍服务启动并让脚本继续运行的函数。

您也可以在脚本开头使用`"auto";`表示这个脚本需要无障碍服务，但是不推荐这种做法，因为这个标记必须在脚本的最开头(前面不能有注释或其他语句、空格等)，我们推荐使用`auto()`函数来确保无障碍服务已启用。
