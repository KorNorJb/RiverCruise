window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } 
    else {
        header.classList.remove('scrolled');
    }
});


// Валидация формы и модальное окно
const form = document.querySelector('.booking__form');
const modal = document.querySelector('#booking-modal');
const modalClose = document.querySelector('.modal__close');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const phoneInput = form.querySelector('#phone');
    const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert('Пожалуйста, введите телефон в формате +7 (XXX) XXX-XX-XX');
        return;
    }
    modal.classList.add('active');
    form.reset();
});

modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
});

// Липкая шапка
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    
    if (!scrollTopButton) {
        console.error('Кнопка .scroll-top не найдена в DOM');
        return;
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});