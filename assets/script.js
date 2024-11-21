const input = document.getElementById('input');
const output = document.getElementById('output');


const enbtn = document.getElementById('enbtn');
const debtn = document.getElementById('debtn');

const error = document.getElementById('errors');

function show_error(text){
    error.removeAttribute('hidden');
    error.innerText = text;
}

enbtn.addEventListener("click", function(){
    output.innerText = btoa(input.value);
})


debtn.addEventListener("click", function(){
    output.innerText = atob(input.value);
})