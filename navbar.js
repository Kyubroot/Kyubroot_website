document.addEventListener('DOMContentLoaded', function () {
    // Navbar active link on click
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.navbar a').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Typing animation for .home-h2
    const el = document.querySelector('.home-h2');
    if (el) {
        const text = el.textContent;
        el.textContent = '';
        el.classList.add('typing');
        let i = 0;

        function type() {
            if (i <= text.length) {
                el.textContent = text.slice(0, i);
                i++;
                setTimeout(type, 120); // typing speed in ms
            }
        }
        type();
    }
});