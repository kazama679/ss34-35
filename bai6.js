let box = document.getElementById("btn");
let li = document.createElement("li");
let ul = document.getElementById("ul");

box.style.background = "green";
box.style.border = "green";
box.style.borderRadius = "4px";
input.style.borderRadius = "20px";

btn.onclick = function(){
    li.innerText = document.getElementById("input").value;
    ul.appendChild(li);
    document.getElementById("input").value = "";
}