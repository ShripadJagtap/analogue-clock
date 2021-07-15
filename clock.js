var canvas = document.getElementById("canvas");
var ctx = canvas.msGetRegionContent("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock(){
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillstyle = "White";
    ctx.fill();
}