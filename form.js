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
        //myForm.submit();
        
        window.location.href = 'index.html';

    }
});


// let buttonSave = document.getElementById('save');
// let wholeForm = document.getElementById('whole-form');

// buttonSave.addEventListener('submit', function(event) {
//     let formData = {
//         title: event.target[0].value,
//         number: event.target[1].value,
//         color: event.target[2].value,
//         cost: event.target[3].value,
//         price: event.target[4].value,
//         size: event.target[5].value,
//         weight: event.target[6].value,
//         date: event.target[7].value,
//     }
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((post) => afterPostSave(post));
//     })

    
    
// });



