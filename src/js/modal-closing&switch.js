const modals_for_products = document.querySelectorAll(".lot-modal-page");

modals_for_products.forEach((modal, iterator) => {
    const previous_selector = `modal-product-${iterator+1}`;
  document.querySelector(`.${previous_selector} .right-side__header-navigation-exit`).addEventListener('click', () => {
    document.querySelector('body').classList.remove('no-scrollbar');
    document.querySelector(`.${previous_selector}`).classList.remove(document.querySelector(`.${previous_selector}`).classList[2]);
  });
  
  document.querySelector(`.${previous_selector} .exit-mobile`).addEventListener('click', () => {
    document.querySelector('body').classList.remove('no-scrollbar');
    document.querySelector(`.${previous_selector}`).classList.remove(document.querySelector(`.${previous_selector}`).classList[2]);
  });
  
  const before_arrow = document.querySelector(`.${previous_selector} .right-side__header-navigation-arrows .before-arrow`);
  const next_arrow = document.querySelector(`.${previous_selector} .right-side__header-navigation-arrows .next-arrow`);
  const before_arrow_mobile = document.querySelector(`.${previous_selector} .lot-modal-page_mobile__header-navigation .before-arrow-mobile`);
  const next_arrow_mobile = document.querySelector(`.${previous_selector} .lot-modal-page_mobile__header-navigation .next-arrow-mobile`);
  before_arrow.addEventListener('click', () => {
    if (iterator > 0) {
      document.querySelector(`.${previous_selector}`).classList.remove(document.querySelector(`.${previous_selector}`).classList[2]);
      document.querySelector(`.${previous_selector}`).classList.remove('flex_visible');
      document.querySelector(`.${previous_selector}`).classList.remove('no-blink');
      document.querySelector(`.modal-product-${iterator}`).classList.add('flex_visible');
      document.querySelector(`.modal-product-${iterator}`).classList.add('no-blink');
    }
  });
  next_arrow.addEventListener('click', () => {
    if (iterator < modals_for_products.length-1) {
      document.querySelector(`.${previous_selector}`).classList.remove(document.querySelector(`.${previous_selector}`).classList[2]);
      document.querySelector(`.${previous_selector}`).classList.remove('flex_visible');
      document.querySelector(`.${previous_selector}`).classList.remove('no-blink');
      document.querySelector(`.modal-product-${iterator+2}`).classList.add('flex_visible');
      document.querySelector(`.modal-product-${iterator+2}`).classList.add('no-blink');
    }
  });
  before_arrow_mobile.addEventListener('click', () => {
    if (iterator > 0) {
      document.querySelector(`.${previous_selector}`).classList.remove(document.querySelector(`.${previous_selector}`).classList[2]);
      document.querySelector(`.${previous_selector}`).classList.remove('flex_visible');
      document.querySelector(`.${previous_selector}`).classList.remove('no-blink');
      document.querySelector(`.modal-product-${iterator}`).classList.add('flex_visible');
      document.querySelector(`.modal-product-${iterator}`).classList.add('no-blink');
    }
  });
  next_arrow_mobile.addEventListener('click', () => {
    if (iterator < modals_for_products.length-1) {
      document.querySelector(`.${previous_selector}`).classList.remove(document.querySelector(`.${previous_selector}`).classList[2]);
      document.querySelector(`.${previous_selector}`).classList.remove('flex_visible');
      document.querySelector(`.${previous_selector}`).classList.remove('no-blink');
      document.querySelector(`.modal-product-${iterator+2}`).classList.add('flex_visible');
      document.querySelector(`.modal-product-${iterator+2}`).classList.add('no-blink');
    }
  });
  });