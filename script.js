// Toggle Dark Mode
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Smooth Scroll
const scrollDownButton = document.getElementById('scroll-down');

scrollDownButton.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
