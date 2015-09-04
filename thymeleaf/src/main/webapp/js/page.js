/**
 * Created by huke10591 on 2015/8/6.
 */
$(document).ready(function () {

    var datetime = formatDate();
    
    $("#serial_no").val(datetime);
    $("#order_time").val(datetime.substr(8, 6));
    $("#order_date").val(datetime.substr(0, 8));
    
    $("#form-ufx-backend").form({
        url: $(this).attr("action"),
        dataType: "json",
        onSubmit: function() {
            return $(this).form('validate');
        },
        success: function(data) {
            $("#form_content").html(data);
        },
        error: function() {
            alert("请求失败");
        }
    });
    
    
});

/**
 * 获取格式化后的当前机器时间
 *
 * @returns {string}   yyyyMMddhhmmss
 */
function formatDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var months = date.getMonth() + 1;
    var day = date.getDate();
    var seconds = date.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    months = months < 10 ? '0' + months : months;
    day = day < 10 ? '0' + day : day;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    var strTime = hours + '' + minutes + '' + seconds;

    return date.getFullYear() + "" + months + "" + day + "" + strTime;
}