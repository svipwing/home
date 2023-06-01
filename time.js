function addZero(i){
    if (i<10) {
        i="0" + i;
    }
    return i;
}
function time(){
    var d=new Date();
    var x=document.getElementById("time");
    var h=addZero(d.getHours());
    var m=addZero(d.getMinutes());
    var s=addZero(d.getSeconds());
    x.innerHTML=h + ":" + m + ":" + s;
}
setInterval(time, 1000);