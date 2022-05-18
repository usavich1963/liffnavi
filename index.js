var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        
        var name = $('input[name="name"]').val();
        var furigana = $('input[name="furigana"]').val();
        var email = $('input[name="email"]').val();
        var tel = $('input[name="tel"]').val();
        var reasons = $('textarea[name="reasons"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = `求人内容：\n${name}\n${furigana}\n${email}\n${tel}\n${reasons}`;
               
        sendText(msg);

        return false;
    });
});
