const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('turquoise-theme')) {
        body.classList.replace('turquoise-theme', 'pink-theme');
        themeIcon.textContent = '🐻'; // Pink Bear
    } else {
        body.classList.replace('pink-theme', 'turquoise-theme');
        themeIcon.textContent = '🐢'; // Turquoise Turtle
    }
});
