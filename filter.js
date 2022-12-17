let filter = document.getElementById('filter'); //filter button
let filterWrapper = document.getElementById('filter-form');
let filterButton = document.getElementById('filter-button');
let input = document.getElementById('filter-name');
let hideF = document.getElementById('hide-filter');
let showF = document.getElementById('show-text');

// let name = document.getElementById('nameinput');
let table = document.getElementById("table");



filter.addEventListener('click', function() {
    filterWrapper.classList.toggle('active1');
    showF.classList.toggle('hide-it')
    hideF.classList.toggle('show-it');
    
});

filterButton.addEventListener('click', function(event) {
    event.preventDefault();
});

// let search = () => {
//     let searchBox = input.value.toUpperCase();
    
// }

// input.addEventListener('input', (e) => {
//     let result = e.target.value
    
// })


// filterButton.addEventListener('click', function(event) {
//     event.preventDefault();
    

// });




