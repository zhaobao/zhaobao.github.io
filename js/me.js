/**
 * Created by zhaobao on 4/13/16.
 */

$(function() {

    // 修正 a 标签打开方式
    // 栗子：[abc](http://www.baidu.com?target=blank) 会使用blank方式打开
    var links = document.getElementsByTagName('a');
    if (links.length > 0) {
        for (var i = 0, len = links.length; i < len; i++) {
            var a = links[i];
            if (/target=blank/.test(a.getAttribute('href'))) {
                a.setAttribute('target', '_blank');
            }
        }
    }

    //
});
