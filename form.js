let form = document.getElementById('creation');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let myForm = event.target;



//product name validation
let productName = document.getElementById('product-name').value;

if (productName.length == " ") {
    errors.productname = 'The name field is required';
}

//product number validation

let productNumber = document.getElementById('product-number').value;

if (productNumber.length == " ") {
    errors.productnumber = 'The ProductNumber field is required';
}

//List price validation

let productPrice = document.getElementById('product-price').value;

if (productPrice < 0.1 || productPrice > 1000) {
    errors.productprice = 'The Field ListPrice must be between 0.1 and 10000';
}

console.log(errors);

myForm.querySelectorAll('.error-text').forEach(item => {
    item.innerHTML = ' ';
});

for (let item in errors) {
    console.log(item);
    let errorSpan = document.getElementById('error_' + item);

    if (errorSpan) {
        errorSpan.textContent = errors[item];
    }
}
    
    if(Object.keys(errors).length == 0) {
        window.location.href = 'index.html';
    }
});


//dislay input values in Table
let buttonSave = document.getElementById('save');
let productName = document.getElementById('product-name').value;
let productNumber = document.getElementById('product-number').value;
let productColor = document.getElementById('product-color').value;
let prodyctCost = document.getElementById('product-cost').value;
let productPrice = document.getElementById('product-price').value;
let productSize = document.getElementById('product-size').value;
let table = document.getElementById("table");

buttonSave.addEventListener('click', function() {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${productName}</td>
        <td>${productNumber}</td>
        <td>${productColor}</td>
        <td>${productPrice}</td>
        <td>${productSize}</td>
        <td>
        
    `;
    table.appendChild(row);
    
})