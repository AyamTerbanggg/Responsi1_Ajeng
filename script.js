/*================== Toggle Icon Navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-right');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
}

/*================== Scroll Section Active Link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================== Stick Navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================== Remove Toggle icon and Navbar ====================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*================== Scroll Reveal ====================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-container, .resume-box', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


/*================== Typed JS ====================*/
const typingEffect = new Typed(".multiple-text",{
    strings : ['Teknologi Informasi', 'Semester 3', 'UNISA Yogyakarta'],
    loop : true,
    typeSpeed : 70,
    backSpeed: 70,
    backDelay: 1000,
})

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission

    // Display the SweetAlert message
    Swal.fire({
        title: 'Terima Kasih!',
        text: 'Pesan kamu berhasil dikirim.',
        icon: 'success',
        confirmButtonText: 'Tutup'
    });

    // Optionally, you can reset the form after submission
    this.reset();
});