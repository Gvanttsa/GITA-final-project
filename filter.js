let filter = document.getElementById('filter');
let filterWrapper = document.getElementById('filter-form');
let filterButton = document.getElementById('filter-button');
let input = document.getElementById('filter-name');

let name = document.getElementById('nameinput');


filter.addEventListener('click', function() {
    filterWrapper.classList.toggle('active1');
    filter.textContent = "HIde filter";
});

filterButton.addEventListener('click', function(event) {
    event.preventDefault();
    

});




