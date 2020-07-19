const input = document.getElementById('bval');
const btn = document.getElementById('button');
const answer = document.getElementById('dval');
let finalValue;
let decimal;

input.addEventListener('change', () => {
    decimal = 0;
    finalValue = input.value;
    for (let i = 0; i < finalValue.length; i++) {
        decimal += parseInt((input.value[i]) * Math.pow(2, (input.value.length-1)-i));
    }
    dval.style.display = "none";
    console.log(decimal);
});

btn.addEventListener('click', (e) => {
    console.log(decimal);
    e.preventDefault();
    dval.textContent = decimal;
    answer.style.display = "block";
});































// const button = document.querySelector("#button");

// button.addEventListener('click', function () {
//     let binary = document.getElementById('bval').value;
//     binary.onChange = function () {
//         console.log("hey",binary);
//     };
//     let decimal = 0;
//     for (let i = 0; i < binary.length; i++) {
//         decimal += parseInt(binary[i]) * Math.pow(2, ((binary.length-1)-i));
//         console.log(decimal);
//     }
    
//     const span = document.getElementById('dval');
//     span.innerHTML = decimal;
//     span.style.display = "block";

// });
