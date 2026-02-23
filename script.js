document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.fade');

    function showOnScroll() {
        items.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 50) {
                el.classList.add('show');
            }
        });
    }

    // Throttle scroll
    function throttle(fn, limit) {
        let wait;
        return (...args) => {
            if (!wait) {
                fn.apply(this, args);
                wait = setTimeout(() => wait = null, limit);
            }
        };
    }

    window.addEventListener('scroll', throttle(showOnScroll, 16));
    showOnScroll();

    // Active nav
    document.querySelectorAll('.menu a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
