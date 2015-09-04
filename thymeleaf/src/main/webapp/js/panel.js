
$(document).ready(function () {
    $("#content-left ul li a").click(function() {
        var title = $(this).html();
        
        if (!$('#body-center').tabs('exists', title)) {
            $('#body-center').tabs('add', {
                title: title,
                content: '<iframe src="' + $(this).attr("href") + '" frameBorder="0" border="0"  style="width: 100%; height: 99%"/>',
                closable: true
            });
        } else {
            $('#tabs').tabs('select', title);
        }
        
        return false;
    });
});

/**
 * add by cgh 针对panel window dialog三个组件调整大小时会超出父级元素的修正
 * 如果父级元素的overflow属性为hidden，则修复上下左右个方向 如果父级元素的overflow属性为非hidden，则只修复上左两个方向
 *
 * @param width
 * @param height
 * @returns
 */
var easyuiPanelOnResize = function(width, height) {
    var parentObj = $(this).panel('panel').parent();
    var left = $(this).panel('panel').position().left;
    var top = $(this).panel('panel').position().top;
    if (left < 0) {
        $(this).panel('move', {
            left : 1
        }).panel('resize', {
            width : width + left + 1
        });
    }
    if (top < 0) {
        $(this).panel('move', {
            top : 1
        }).panel('resize', {
            height : height + top + 1
        });
    }
    if (parentObj.css("overflow") == "hidden") {
        if (width + left > parentObj.width()) {
            $(this).panel('resize', {
                width : parentObj.width() - left - 1
            });
        }

        if (height + top > parentObj.height()) {
            $(this).panel('resize', {
                height : parentObj.height() - top - 1
            });
        }
    }
};
$.fn.panel.defaults.onResize = easyuiPanelOnResize;
$.fn.window.defaults.onResize = easyuiPanelOnResize;
$.fn.dialog.defaults.onResize = easyuiPanelOnResize;