let list = document.getElementsByClassName("name");

let n = ["Nguyễn Văn A", "Lưu Bị", "Võ Tòng"];

for(let i=0; i<list.length; i++){
    list[i].textContent =n[i];
}