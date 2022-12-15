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

});