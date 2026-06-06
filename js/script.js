const textElement = document.querySelector('.multiple-text');

if (textElement) {
    const type = new Typed('.multiple-text', {
        strings: ['Lee De Yi', 'UniMAP Student'],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1200,
        loop: true
    });
}

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const textDetails = document.querySelectorAll('.visitedplaces-detail');
const imgItems = document.querySelectorAll('.img-item');

if (leftArrow && rightArrow && textDetails.length > 0 && imgItems.length > 0) {
    let currentIndex = 0;

    function updateCarousel(index) {
        // Clear active classes safely
        textDetails.forEach(detail => detail.classList.remove('active'));
        imgItems.forEach(img => img.classList.remove('active'));

        textDetails[index].classList.add('active');
        imgItems[index].classList.add('active');
    }

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % textDetails.length;
        updateCarousel(currentIndex);
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + textDetails.length) % textDetails.length;
        updateCarousel(currentIndex);
    });
}