let body = document.querySelector('body');
let table = document.createElement('table');
let header = table.createTHead();
let tBody = table.createTBody();

let moviesData = [
    ["Matrix 1", "2000", "Sci Fy"],
    ["Matrix 2", "2001", "Drama"],
    ["Matrix 3", "2002", "Action"],
    ["Matrix 4", "2003", "Sci Fy"],
    ["Matrix 5", "2004", "Terror"],
];

let row = header.insertRow();

let cell = row.insertCell();
cell.appendChild(document.createTextNode("Movie Name"));
cell.style.border = '3px solid black';
cell.style.padding = '10px';

cell = row.insertCell();
cell.appendChild(document.createTextNode("Release Year"));
cell.style.border = '3px solid black';
cell.style.padding = '10px';

cell = row.insertCell();
cell.appendChild(document.createTextNode("Type"));
cell.style.border = '3px solid black';
cell.style.padding = '10px';


for(let i of moviesData){
    let row = tBody.insertRow();
    for(let x of i){
        let cell = row.insertCell();
        cell.appendChild(document.createTextNode(x));
        cell.style.border = '3px solid black';
        cell.style.padding = '10px';
    }
}

table.style.background = '#f8b4b5';
table.style.borderCollapse = 'collapse';
table.style.textAlign = 'center';
body.appendChild(table);









