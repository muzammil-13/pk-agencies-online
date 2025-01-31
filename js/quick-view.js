const initQuickView = () => {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.addEventListener('click', () => {
            showProductModal(product.dataset.id);
        });
    });
}
