window.addEventListener('scroll', function() {
    document.documentElement.style.fontSize = '1rem';
});

const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(navLink => {
    const navLinkPathname = new URL(navLink.href).pathname
    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLink.classList.add('active');
    }
})

const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-bar')
const body = document.body
hamburger.onclick =  function () {
    hamburger.classList.toggle('active')
    navBar.classList.toggle('active')
    body.classList.toggle('nav-bar-active')
}

    // document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault()
            
    //         // Get the target element
    //         const targetId = this.getAttribute('href').substring(1)
    //         const targetElement = document.getElementById(targetId)

    //         if (targetElement) {
    //             // Calculate the offset from the top of the document
    //             const headerOffset = document.querySelector('.header').offsetHeight
    //             const elementPosition = targetElement.getBoundingClientRect().top
    //             const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    //             // Smooth scroll to the target element
    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: "smooth"
    //             })
    //         }
    //     })
    // })

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