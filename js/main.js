const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-bar a')
navLinks.forEach(navLink => {
    const navLinkPathname = new URL(navLink.href).pathname
    if ((windowPathname === navLinkPathname) || (((windowPathname === '/en/') || (windowPathname === '/fr/')) && navLinkPathname === '/')  || ((windowPathname.includes('articles')) && (navLinkPathname === '/blog/'))) {
        navLink.classList.add('active');
    }
})

const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-bar')
const body = document.body
hamburger.onclick = function () {
    hamburger.classList.toggle('active')
    navBar.classList.toggle('active')
    body.classList.toggle('nav-bar-active')
}
    
// Get the language switcher links
const enLink = document.getElementById("eng-page")
const frLink = document.getElementById("fr-page")

if (windowPathname.includes('/en/')) {
    enLink.classList.add('active');
} else if (windowPathname.includes('/fr/')) {
    frLink.classList.add('active');
}

const blogMenus = document.querySelectorAll('.blog .ai-cv-menu nav li a')
blogMenus.forEach(blogMenu => {
    if (blogMenu.attributes.href.textContent === windowPathname.substring(windowPathname.lastIndexOf('/') + 1)) {
        blogMenu.classList.add('active')
    }
})

const gallery_photo = document.querySelector('.gallery-photo')
const images = gallery_photo.querySelectorAll('.grid-item')
const gallery_header = document.querySelectorAll('.gallery-header ul li')
const grid_header = document.createElement('div')

const gallery_filter = e => {
    document.querySelector('.gallery-header').querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    
    images.forEach(image => {
        image.classList.add("hide")
        if (e.target.dataset.category === 'all') {
            image.classList.remove('hide')
        }
        else if (image.dataset.category === e.target.dataset.category) {
            image.classList.remove('hide')
            image.classList.remove('no-show')
        }
    })
}

gallery_header.forEach(option => {
    option.onclick = gallery_filter
})

