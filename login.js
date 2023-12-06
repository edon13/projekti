//funksioni per ndrrimin e formav prej log in ne register ose anasjelltas
function toggleForm() {
    var loginform = document.getElementById('loginform');
    var signupform = document.getElementById('signupform');

    loginform.style.display = (loginform.style.display === 'none') ? 'block' : 'none';
    signupform.style.display = (signupform.style.display === 'none') ? 'block' : 'none';
}



//validimi i te dhenav

function validateForm() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var username = document.getElementById('signupUsername').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('signupPassword').value;

    if (!validateName(name)) {
        alert('Please enter a valid name (starts with a capital letter, contains only letters).');
        return false;
    }

    if (!validateName(surname)) {
        alert('Please enter a valid surname (starts with a capital letter, contains only letters).');
        return false;
    }

    if (!validateUsername(username)) {
        alert('Please enter a valid username (length between 8 and 15 characters).');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!validatePassword(password)) {
        alert('Please enter a valid password (starts with a capital letter, ends with three numbers).');
        return false;
    }


    document.getElementById('signupform').submit();
    return true;
}

function validateName(value) {
    var nameRegex = /^[A-Z][a-z]*$/;
    return nameRegex.test(value);
}

function validateUsername(value) {
    return value.length >= 8 && value.length <= 15;
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(value) {
    var passwordRegex = /^[A-Z].*\d{3}$/;
    return passwordRegex.test(value);
}



