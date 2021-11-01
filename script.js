
const pass = document.getElementById('pass');
const confirmpass = document.getElementById('confirmpass');


function checkPass(e) {
    passval = pass.value;
    console.log(passval);
}


confirmpass.addEventListener('input', function () {
    if (pass.value === confirmpass.value) {

        confirmpass.style.color = 'green';
        confirmpass.style.border = '1px solid green';

    } else {

        confirmpass.style.color = 'red';
        confirmpass.style.border = '1px solid red';

    }
});