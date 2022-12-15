//table
let products = [
    {
        name: "HL Road Frame - Black, 58",
        number: "FR-R82B-58",
        color: "Black",
        price: 900.00,
        date: "11 Novmver 2021"
    },
    {
        name: "HL Road Frame - Red, 58",
        number: "FR-R82B-62",
        color: "Red",
        price: 1431.50,
        date: "06 August 2021"
    },
    {
        name: "HL Road Frame - Red, 62",
        number: "FR-R82B-62",
        color: "Red",
        price: 1431.50,
        date: "09 Novmver 2021"
    },
    {
        name: "HL Road Frame - Red, 44",
        number: "FR-R82B-44",
        color: "Red",
        price: 1431.50,
        date: "18 December 2021"
    },
    {
        name: "HL Road Frame - Red, 48",
        number: "FR-R92R-48",
        color: "Red",
        price: 1431.50,
        date: "13 February 2022"
    },
    {
        name: "HL Road Frame - Red, 52",
        number: "FR-R92B-52",
        color: "Red",
        price: 1431.50,
        date: "28 February 2022"
    },
    {
        name: "HL Road Frame - Red, 56",
        number: "FR-R92R-56",
        color: "Red",
        price: 1431.50,
        date: "25 July 2022"
    },
    {
        name: "LL Road Frame - Black, 58",
        number: "FR-R38B-58",
        color: "Black",
        price: 337.22,
        date: "12 January 2022"
    },
    {
        name: "LL Road Frame - Black, 60",
        number: "FR-R38B-60",
        color: "Black",
        price: 377.22,
        date: "02 December 2021"
    },
    {
        name: "LL Road Frame - Black, 62",
        number: "FR-R38B-62",
        color: "Black",
        price: 377.22,
        date: "01 December 2021"
    }
]

function createTable() {
    let table = document.getElementById("table");

    for(let product of products) {
        let tr = document.createElement('tr');

        let nameTd = document.createElement('td');
        nameTd.textContent = product.name;

        let numberTd = document.createElement('td');
        numberTd.textContent = product.number;

        let colorTd = document.createElement('td');
        colorTd.textContent = product.color;

        let priceTd = document.createElement('td');
        priceTd.textContent = product.price;

        let dateTd = document.createElement('td');
        dateTd.textContent = product.date;

        let editCell = document.createElement('td');

        let buttonEdit = document.createElement('a');
        buttonEdit.href = "edit.html?name=" + product.name;
        buttonEdit.textContent = "Edit";
        buttonEdit.classList.add("edit-button");

        let buttonDelate = document.createElement('a');
        buttonDelate.href = "delete.html?name" + product.name;
        buttonDelate.textContent = "Delete";
        buttonDelate.classList.add("delete-button");

        editCell.appendChild(buttonEdit);
        editCell.appendChild(buttonDelate);

        tr.appendChild(nameTd);
        tr.appendChild(numberTd);
        tr.appendChild(colorTd);
        tr.appendChild(priceTd);
        tr.appendChild(dateTd);
        tr.appendChild(editCell);
        table.appendChild(tr);

    }
}
createTable();



