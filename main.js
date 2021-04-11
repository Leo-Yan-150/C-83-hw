canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_x;
var last_position_y;
var color = "black";
var width = 1;
var last_position_of_xx, last_position_of_yy;
var widtha = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
document.getElementById("color").value = "black";
document.getElementById("width").value = 5;
if(widtha<992){
document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").heights = new_height;
document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
console.log("my_touchstart");

color = document.getElementById("color").value;
width_of_line = document.getElementById("width").value;

last_position_of_xx = e.touches[0].clientX - canvas.offsetLeft;
last_position_of_yy = e.touches[0].clientY - canvas.offsetTop;

}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
console.log("my_touchMove");
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("Last position of x and y coordinates = ");
console.log("x = " + last_position_of_xx + "y = " + last_position_of_yy);
ctx.moveTo(last_position_of_xx, last_position_of_yy);
console.log("Current position of x and y coordinates = ");
console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();
last_position_of_xx = current_position_of_touch_x;
last_position_of_yy = current_position_of_touch_y;
}

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){

color = document.getElementById("color").value;
width = document.getElementById("width").value;
mouseEvent = "mousedown";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

mouseEvent = "mouseleave";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){

mouseEvent = "mouseup";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("last position of x and y coordnates = ");
        console.log("x = "+last_position_x+" y = "+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("Current position of x and y coordnates = ");
        console.log("x = "+current_position_x+" y = "+ current_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
        }

        last_position_x = current_position_x;
        last_position_y = current_position_y;

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}