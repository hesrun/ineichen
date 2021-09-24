const dropdown_button = document.querySelector('.dropdown__button');
const dropdown_buttonArrow = document.querySelector('.dropdown__button-arrow');
const dropdown_options = document.querySelector('.dropdown__options');
const dropdown_optionsSelect = document.querySelectorAll('.dropdown__option-with-select');

dropdown_button.addEventListener('click', event => {
    dropdown_buttonArrow.classList.toggle('dropdown__button-arrow_up');
    dropdown_options.classList.toggle('dropdown__options_active');
});

dropdown_optionsSelect.forEach(dropdown_optionSelect => {
    dropdown_optionSelect.addEventListener('click', event => {
        dropdown_optionSelect.classList.toggle('dropdown__option-select_selected');
    })
});


