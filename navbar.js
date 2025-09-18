document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
    const toggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.navbar ul');
    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

    // Navbar active link on click
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.navbar a').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Close menu on link click (mobile)
            if (window.innerWidth <= 900 && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
            }
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
                setTimeout(type, 80);
            }
        }
        type();
    }
});
