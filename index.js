var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var comname = $('textarea[name="comname"]').val();
        var telnum = $('textarea[name="telnum"]').val();
        var hplink = $('textarea[name="hplink"]').val();
        var cont = $('textarea[name="cont"]').val();
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = `${key}\n会社名：${comname}`;
        var msg = `${key}\n電話番号：${telnum}`;
        var msg = `${key}\nホームページ：${hplink}`;
        var msg = `${key}\n求人内容：${cont}`;
               
        sendText(msg);

        return false;
    });
});
