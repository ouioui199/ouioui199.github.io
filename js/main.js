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

document.addEventListener('DOMContentLoaded', (event) => {

    const hamburger = document.getElementById('hamburger')
    const menu = document.getElementById('menu')
    const body = document.body
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active')
        hamburger.classList.toggle('active')
        body.classList.toggle('menu__active')
    })
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            body.classList.remove('menu__active')
            hamburger.classList.remove('active')
        })
    })

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
})

const gallery_photo = document.querySelector('.gallery__photo')
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
lightbox.innerHTML = `
    <span>&times;</span>
    <img src="" alt="">
`
document.body.appendChild(lightbox)

const images = gallery_photo.querySelectorAll('.grid__item')
images.forEach(image => {
    image.onclick = () => {
        lightbox.style.display = 'flex'
        lightbox.style.justifyContent = 'center'
        lightbox.style.alignItems = 'center'

        const anchor = image.querySelector('a')
        const img = lightbox.querySelector('img')
        img.src = anchor.getAttribute('href')
        img.alt = anchor.getAttribute('data-title')
    }
})

lightbox.querySelector('span').onclick = () => {
    lightbox.style.display = 'none'
}

// lightbox.addEventListener('click', e => {
//     if (e.target !== e.currentTarget) return
//     lightbox.classList.remove('active')
// })