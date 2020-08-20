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

// Categories navigation

function categoriesNav() {
    let btn = document.querySelectorAll('.js-category-button');
    let links = document.querySelectorAll('.js-category-link');
    let categoryTitle = document.querySelector('.js-category-title');

    // Clear all active items
    function clearActivedItems() {
        btn.forEach((e) => {
            e.classList.remove('active');
        })
    }

    // Button event
    btn.forEach((item) => {
        item.addEventListener('click', (e) => {
            clearActivedItems();

            // Update links setion title with category selected
            let btnTitle = e.currentTarget.dataset.label;
            categoryTitle.innerText = btnTitle;
            
            // Add active state to clicked category
            e.currentTarget.classList.add('active');

            // Show links if category is active and hide all others
            let category = e.currentTarget.dataset.category;
            links.forEach((link) => {
                link.classList.remove('hidden-link');

                if(link.dataset.link !== category && category !== 'links-uteis') {
                    link.classList.add('hidden-link');
                }
            })
        })
    });
}

// Newsletter with getform
function newsletter() {
    const form = document.querySelector('#ajaxForm');
    let formResponse = document.querySelector('.form-response');
    let loading = document.querySelectorAll('.form-icon');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        loading.forEach((e) => e.classList.toggle('hide'));

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            dataType: 'json',
            headers: { "Accept": "application/json" }
        })
        .then(() => {
            formResponse.classList.add('is-visible')
            loading.forEach((e) => e.classList.toggle('hide'));

            setTimeout(() => {
                formResponse.classList.remove('is-visible')    
            },3000);
        })
        .catch(err => {
            alert(err.text);
            loading.forEach((e) => e.classList.toggle('hide'));
        })
    })
}

// Call functions
categoriesNav();
toggleNav();
newsletter();