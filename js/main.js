document.addEventListener('DOMContentLoaded', (event) => {
    const year = document.getElementById("year")
    const thisYear = new Date().getFullYear()
    year.setAttribute("datetime", thisYear)
    year.textContent = thisYear

    const link = document.getElementById("link")
    link.addEventListener("click", () => {
        this.classList.add("clicked")
    })

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
        })
    })

    document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            
            // Get the target element
            const targetId = this.getAttribute('href').substring(1)
            const targetElement = document.getElementById(targetId)

            if (targetElement) {
                // Calculate the offset from the top of the document
                const headerOffset = document.querySelector('.header').offsetHeight
                const elementPosition = targetElement.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                // Smooth scroll to the target element
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                })
            }
        })
    })
})