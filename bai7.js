let table = document.createElement('table');
table.style.border = '1px solid black';
let row = table.insertRow();
let cell1 = row.insertCell();
cell1.textContent = 'Cell 1 row 1';
cell1.style.border = '1px solid black'; 
let cell2 = row.insertCell();
cell2.textContent = 'Cell 2 row 1';
cell2.style.border = '1px solid black'; 
let cell3 = row.insertCell();
cell3.textContent = 'Cell 3 row 1';
cell3.style.border = '1px solid black';
document.body.appendChild(table);
let button = document.createElement('button');
button.textContent = 'Thêm hàng';
let rowCount = 2;
button.addEventListener('click', function() {
    let row = table.insertRow();
    let cell1 = row.insertCell();
    cell1.textContent = 'Cell 1 row ' + rowCount;
    cell1.style.border = '1px solid black'; 
    let cell2 = row.insertCell();
    cell2.textContent = 'Cell 2 row ' + rowCount;
    cell2.style.border = '1px solid black'; 
    let cell3 = row.insertCell();
    cell3.textContent = 'Cell 3 row ' + rowCount;
    cell3.style.border = '1px solid black';
    rowCount++;
});
document.body.appendChild(button);