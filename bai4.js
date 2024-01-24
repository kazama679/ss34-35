let click = document.getElementById("btn");
let h2 = document.getElementById("text");
click.onclick = function(){
    h2.innerText = "Đã được bấm";
    h2.style.background = "yellow";
    h2.style.color = "red";
}