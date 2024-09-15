console.log('Hello World!');
const toggleButton = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('mode');

if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '🌙';
}

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        toggleButton.textContent = '🌙';
    } else {
        localStorage.setItem('mode', 'light');
        toggleButton.textContent = '🌞';
    }
});