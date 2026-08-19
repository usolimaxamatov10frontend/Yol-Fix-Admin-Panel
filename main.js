let email = document.getElementById('emailInput');
let password = document.getElementById('passwordInput');
let loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function () {
    if (email.value === 'admin@yolfix.uz' && password.value === 'admin123') {
        window.location.href = 'admin.html';
    } else {
        alert("Noto'g'ri email yoki parol");
    }

})