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

// Event to call native share method from browser
function shareLink() {
    let btnShare = document.querySelectorAll('.js-btn-share');
    
    btnShare.forEach((e) => {
        let getUrl = e.parentNode.querySelector('a').href;
        e.classList.remove('hide');
        
        e.addEventListener('click', function(){
            navigator.share({
              url: getUrl,
            })
            .then(() => console.log('Link shared'))
            .catch((error) => console.log('Error sharing', error));
        });
    })
}


// Function to create links dynamically
function outputLink(title, category_id, link, icon) {
    var el = document.createElement('div');

    el.classList.add('js-category-link', 'link-item');
    el.dataset.link = category_id;

    const output = `
        <a href="${link}" target="_blank" rel="noopener">
            <div class="icon">
                <img src="./images/icons/icon-${icon ? icon : 'link'}.svg" alt="icon-name" loading="lazy">
            </div>
            <p>${title}</p>
        </a>
        <button class="js-btn-share btn-share btn-reset hide">
            <img src="./images/icons/icon-share.svg" alt="share" loading="lazy">
        </button>
    `;

    el.innerHTML += output;
    return el;
}

// Function to create categories dynamically
function outputCategory(title, icon, category_id) {
    var el = document.createElement('li');
    el.classList.add('nav-item');
    const output = `
        <button type="button" class="js-category-button btn-reset" data-label="${title}" data-category="${category_id}">
            <div class="icon">
                <img src="images/icons/icon-${icon ? icon : 'link'}.svg" alt="link icon" loading="lazy">
            </div>
            <span>${title}</span>
        </button>
    `;

    el.innerHTML += output;
    return el;
}

// Function to add links and categories to DOM
function generateContent() {
    links.forEach((e) => {
        document.querySelector('#links').append(outputLink(e.title, e.category_id, e.link, e.icon));
    });

    categories.forEach((e) => {
        document.querySelector('#categories').append(outputCategory(e.title, e.icon, e.category_id));
    });
}

// Call main functions
generateContent();
categoriesNav();
toggleNav();
newsletter();
if (typeof window.orientation !== 'undefined') { shareLink() }
