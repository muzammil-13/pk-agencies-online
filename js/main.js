// Product filter system
const filterProducts = (category) => {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = product.dataset.category === category ? 'block' : 'none';
    });
}

// EMI Calculator
const calculateEMI = (amount, months, interest) => {
    const monthlyInterest = interest / 12 / 100;
    return (amount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / 
           (Math.pow(1 + monthlyInterest, months) - 1);
}

// Image slider for featured products
class ProductSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
    }
    
    next() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlider();
    }
}
