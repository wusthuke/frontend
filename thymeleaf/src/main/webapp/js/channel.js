/**
 * Created by huke10591 on 2015/8/6.
 */
$(document).ready(function () {

    //当个渠道的索引页面， 点开是以子窗体形式展现
    $("a[name='dialog']").click(function () {
        $("#w").window({
            href: $(this).attr("href"),
            title: $(this).context.innerHTML,
            modal:true,
            width: '80%',
            height: '100%',
            padding: '10px',
            top : 0,
            left : '5%'
        }).window('open');

        return false;
    });

    
});