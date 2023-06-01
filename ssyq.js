s = "https://www.baidu.com/s?ie=utf-8&word=";

function go(){
    var word = document.getElementById("word").value;
    var url = s + word;
    window.open(url);
}

function baidu(){
    s = "https://www.baidu.com/s?ie=utf-8&word=";
    //alert("成功切换搜索引擎");
    $('.ssyq').css('background-color','grey');
    $('#baidu').css('background-color','yellow');
}

function bing(){
    s = "https://cn.bing.com/search?q=";
    //alert("成功切换搜索引擎");
    $('.ssyq').css('background-color','grey');
    $('#bing').css('background-color','yellow');
}