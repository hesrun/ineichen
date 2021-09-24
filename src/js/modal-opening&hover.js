const form_containers = document.querySelectorAll(".form__container");
const form__wrappers = document.querySelectorAll(".form__wrapper");
const form_scale_buttons = document.querySelectorAll(".form__info-button");

form_containers.forEach((form_container) => {
  form_container.addEventListener("mouseover", () => {
    form_container.classList.add('form_active');
  });
  form_container.addEventListener("mouseout", () => {
    form_container.classList.remove('form_active');
  });
});

form__wrappers.forEach((form_container,iterator) => {
  form_container.addEventListener("click", (event) => {
    document.querySelector(`.modal-product-${iterator+1}`).classList.add('flex_visible');
    document.querySelector('body').classList.add('no-scrollbar');
  });
});

form_scale_buttons.forEach((form_scale_button,iterator) => {
  form_scale_button.addEventListener("click", (event) => {
    document.querySelector(`.modal-product-${iterator+1}`).classList.add('flex_visible');
    document.querySelector('body').classList.add('no-scrollbar');
  });
});