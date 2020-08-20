'use strict'

// Toggle offset navigation with social icons
function toggleNav() {
    let btn = document.querySelector('.js-toggle-nav');
    let btnIcon = document.querySelectorAll('.js-toggle-nav .btn-icon');
    let body = document.body;

    btn.addEventListener('click', () => {
        body.classList.toggle('nav-opened');
        btnIcon.forEach((e) => {
            e.classList.toggle('hide');
        })
    })
}

toggleNav();