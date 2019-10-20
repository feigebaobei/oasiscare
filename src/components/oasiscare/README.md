oasis（泓华）的公共组件库

css预处理工具
    stylus

版本说明：
    0.0.x ui级组件开发
    0.1.x 功能级开发
        grade 可点击控制级别
        formItem 添加验证功能
        tabBarTime 兼容pc，开发缓动效果
        softCorner 感觉inline-flex时会出现样式问题
        参数名称统一 grade/gradeValue 数据类型统一

# 使用组件库。

使用该组件库前需要安装`stylus`,`stylus-loader`。设置根元素的font-size.

    ```
    npm i oasiscare // install
    // *.vue
    // 引入
    import {componentName0, componentName1, ...} from 'oasiscare'
    // 在components里定义组件。
    components: {
        componentName0,
        componentName1
    },
    //在html中使用组件...
    <component-name0 :propName="propValue"></component-name0>
    ```

    ```
    // demo
        // html
          <authentication :text="a0.text"></authentication>
        // script
          ...
          components: {
            authentication
          },
          ...
    ```

## 设置根元素的font-size的示例

    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 750) {
                    docEl.style.fontSize = '100px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

# 创建组件

该组件库的css预处理工具使用stylus。
组件库的目录结构如下：

    src
     |--assets // 组件库需要的资源
          |--basic // 新建组件是的vue模板。你可以不使用这个。它存在的目的是为了更新的初始化vue文件的基本结构。
          |--imgs // 图片
          |--style // 基本样式目录
               |-- basic.styl // 保存基本css变量等。
               |-- main.styl // 引入相应的基本样式文件
     |--components // 各组件
          |--componentName // 各组件的名称命名的目录名。
               |-- index.vue // 该组件的默认组件或组件入口。
               |-- first.vue // 该组件的其它版本或默认组件的组件。
     |--data // 组件库需要的配置数据
          |--index.js // 设置相应数据后，以es6的方式输出数据。
     |--lib // 工具代码仓库
          |--picMap.js // 引入相应的图片数据，用es6的方式输出数据。
          |--util.js // 定义常用函数，用es6的方式输出。
          |--api.js // 对接后端接口的文件。会封装axios。现在还没有。
     |--index.js // 组件库的入口
     |--README.md // 组件库的说明
     |--package-lock.json
     |--package.json

## 新建组件的文件放置位置

新建组件的vue文件放在src/components里用组件名命名目录名。该目录内以index.vue的名称定义组件。在src/index.js里引入并输出。
组件使用图片里在src/assets/imgs里添加相应图片。在src/lib/picMap.js里引入并输出。
src/lib/util.js里定义常用的函数。如操作星期、操作cookie等。方便在多个*.vue文件里使用。

## 新建组件的vue文件要求

1. props要定义默认值。最好设置数据类型。
2. 需要使用图片时，从picMap.js里引入。以保证组件库离线可用。
3. 定义样式前请引入main.styl。可以从变量中使用统一的样式。不需要可以不引入。


