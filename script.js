const btn = document.getElementById('theme-toggle');
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });