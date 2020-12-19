function getColor(){
    var color = "#";
    var str = "0123456789abcdef";
    for (var i = 0; i < 6; i++) {
        color += str.charAt(parseInt(Math.random()*str.length));
    }
    return color;
}

function showTime(){
    var bargin = document.getElementById("bargin")
    var newyear = new Date('1 1 2021');
    var date = new Date();
    var ms = newyear-date;
    var day = Math.floor(ms/1000/3600/24);
    var h = Math.floor(ms%(3600*24*1000)/1000/3600);
    var m = Math.floor(ms%(3600*24*1000)/1000%3600/60);
    var s = Math.floor(ms%(3600*24*1000)/1000%3600%60);
    bargin.innerHTML = '<p style="margin-top:10px; font-size: 20px; font-family: 华文琥珀;">新年大酬宾</p>'
    +'<p style="color:red; margin-top:5px; margin-bottom:5px; font-size:27px">距离全场半价</p>'
    +'还有'+"<span style='font-size:20px; color:" + getColor() + ";'>"+
    day+"</span>"+'天'+"<span style='font-size:20px; color:" + getColor()+ ";'>"+h
    +"</span>"+'小时'+ "<span style='font-size:20px; color:" + getColor() + ";'>" + m
    +"</span>"+'分钟'+"<span style='font-size:20px; color:" + getColor() + ";'>"+s+"</span>"+'秒';
}
setInterval(showTime,1000);
