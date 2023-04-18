/* Show/Hidden mobile menu */
const menuBtn = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');


menuBtn.addEventListener('click', ()=> {
    navbar.classList.toggle('show');
});

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
    })
})

/* Glass background on scroll (sticky header) */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('glass');
  } else {
    header.classList.remove('glass');
  }
});

/* Change link color on scroll*/
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navbarLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});


/*Show more portfolio projects */
const content = document.getElementById("extra-portfolio-content");
const showMoreBtn = document.getElementById("showMoreBtn");

showMoreBtn.addEventListener("click", function(){
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    showMoreBtn.innerHTML = "Mostrar menos";
  } else {
    content.classList.add("hidden");
    showMoreBtn.innerHTML = "Mostrar más";
  }
});

/* Scroll reveal */

ScrollReveal({ 
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .about-content, .services h2, .portfolio', { 
  origin: 'top'});

ScrollReveal().reveal('.home-image, .contact-form, .portfolio h3',  { 
  origin: 'bottom'});

ScrollReveal().reveal('.home-content h1, .about-content h2, .portfolio h2', { 
  origin: 'left'});

ScrollReveal().reveal('.home-social-media, .about-skills, .contact h2', { 
  origin: 'right'});

/*conctat form */
const $form = document.querySelector('.contact-form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(e){
  e.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  });
 
  if(response.ok) {
    this.reset();
    swal('Gracias por contactarme!','','success')
  }
}