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
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    dval.textContent = decimal;
    answer.style.display = "block";
});
