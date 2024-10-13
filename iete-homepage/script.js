function scrollToClass() {
    document.querySelector('.slider').scrollIntoView({
        behavior: 'smooth'
    });
}

const hamburger = document.querySelector('.hamburger');
const sections = document.querySelector('.sections');

hamburger.addEventListener('click', () => {
    sections.classList.toggle('active'); // Toggle the active class
});




