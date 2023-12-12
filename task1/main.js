document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        navLinks = document.querySelectorAll('.nav__link'),
        aboutSubtitle = document.querySelector('.about__subtitle');

    /*===== MENU SHOW =====*/
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    /*===== MENU HIDDEN =====*/
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', linkAction);
    });

    /*=============== SCROLL REVEAL ANIMATION ===============*/
    const sr = ScrollReveal({
        distance: '90px',
        duration: 3000,
    });

    sr.reveal(`.home__data`, { origin: 'top', delay: 400 });
    sr.reveal(`.home__img`, { origin: 'bottom', delay: 600 });
    sr.reveal(`.home__footer`, { origin: 'bottom', delay: 800 });

    /*=============== SMOOTH SCROLL ===============*/
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /*=============== UNDERLINE TRANSITION ===============*/
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutSubtitle.classList.add('underline-visible');
            } else {
                aboutSubtitle.classList.remove('underline-visible');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(aboutSubtitle);
});
