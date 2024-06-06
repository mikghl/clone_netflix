document.querySelectorAll('.faq__questions__item-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('faq__questions__item--is-open');
    });
});


