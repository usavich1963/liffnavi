var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        var name = $('input[name="name"]').val();
        var furigana = $('input[name="furigana"]').val();
        var name = $('input[name="name"]').val();
        var name = $('input[name="name"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = ``${key}\n求人内容：\n${reasons}`;
               
        sendText(msg);

        return false;
    });
});
