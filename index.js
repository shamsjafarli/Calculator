



document.getElementById('calc1').addEventListener('click', function () {
    let num1 = document.getElementById('powerInput').value;
    let num2 = document.getElementById('superInput').value;
    let result = +num1 + +num2;
    console.log(` ${result}`);
});

document.getElementById('calc2').addEventListener('click', function () {
    let num1 = document.getElementById('powerInput').value;
    let num2 = document.getElementById('superInput').value;
    let result = +num1 - +num2;
    console.log(` ${result}`);
});

document.getElementById('calc3').addEventListener('click', function () {
    let num1 = document.getElementById('powerInput').value;
    let num2 = document.getElementById('superInput').value;
    let result = +num1 * +num2;
    console.log(` ${result}`);
});

document.getElementById('calc4').addEventListener('click', function () {
    let num1 = document.getElementById('powerInput').value;
    let num2 = document.getElementById('superInput').value;
    let result = +num1 / +num2;
    console.log(`${result}`);
});

document.getElementById('calc5').addEventListener('click', function () {
    document.getElementById('powerInput').value = '';
    document.getElementById('superInput').value = '';
});






