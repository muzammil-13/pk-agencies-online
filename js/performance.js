// Lazy loading images
const lazyLoad = () => {
    const images = document.querySelectorAll('[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
            }
        });
    });
}
