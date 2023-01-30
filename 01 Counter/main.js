const result = document.querySelector('.result');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const reset = document.querySelector('.reset');

let count = 0;

plus.addEventListener('click', function() {
    count ++;
    brojanje();
});

minus.addEventListener('click', function() {
    count --;
    brojanje();
});

reset.addEventListener('click', function() {
    count = 0;
    brojanje();
})


function brojanje() {
    result.innerHTML = count;
}

brojanje();