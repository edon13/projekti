function toggleForm() {
    var loginform = document.getElementById('loginform');
    var signupform = document.getElementById('signupform');

    loginform.style.display = (loginform.style.display === 'none') ? 'block' : 'none';
    signupform.style.display = (signupform.style.display === 'none') ? 'block' : 'none';
}
