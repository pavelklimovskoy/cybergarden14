let isLogined = false;

const user = {
    'login': 'SuperUser1974',
}

const loginForm = document.querySelector('.sign-in-form');
const userLogin = document.querySelector('.user-info__login');
const loginHeaderButton = document.querySelector('.user-info__sign-in');
const logoutHeaderButton = document.querySelector('.user-info__sign-out');
const signUpButton = document.querySelector('.link_sign-up');
const signUpForm = document.querySelector('.sign-up-form');

signUpForm.classList.add('_hide');
if (!isLogined) {
    userLogin.classList.add('_hide');
    logoutHeaderButton.classList.add('_hide');
    loginHeaderButton.classList.remove('_hide');
} else {
    userLogin.textContent = user.login;

    logoutHeaderButton.classList.remove('_hide');
    loginHeaderButton.classList.add('_hide');
}

loginForm.addEventListener('click', function (event) {
    if (event.target.innerHTML === 'x') {
        event.target.closest('.sign-in-form').classList.add('_hide');
    }
    if (event.target.tagName === 'A') {
        event.preventDefault();
        event.target.closest('.sign-in-form').classList.add('_hide');
        signUpForm.classList.remove('_hide');
    }
});

signUpForm.addEventListener('click', function (event) {
    if (event.target.innerHTML === 'x') {
        event.target.closest('.sign-up-form').classList.add('_hide');
    }
});

loginHeaderButton.addEventListener('click', function (event) {
   loginForm.classList.remove('_hide');
});

signUpButton.addEventListener('click', function (event) {
    event.target.closest('.link_sign-up').classList.add('_hide');
});


