const profile_pages_nav = document.querySelectorAll(
  ".profile__navigation-page"
);
const profile_pages_content = document.querySelectorAll(
  ".profile__section-content"
);
profile_pages_nav.forEach((profile_page, index) => {
  profile_page.addEventListener("click", () => {
    profile_pages_content.forEach((page) => {
      page.classList.remove("profile__section-content_chosen");
    });
    profile_pages_nav.forEach((page) => {
      page.classList.remove("profile__navigation-page_active");
    });
    profile_pages_content[index].classList.add(
      "profile__section-content_chosen"
    );
    profile_pages_nav[index].classList.add("profile__navigation-page_active");
  });
});

const open_invoices_button = document.querySelector(
  ".invoices-switch-option-open"
);
const closed_invoices_button = document.querySelector(
  ".invoices-switch-option-closed"
);
const open_invoices_page = document.querySelector(
  ".section-content-open-invoices"
);
const closed_invoices_page = document.querySelector(
  ".section-content-closed-invoices"
);

open_invoices_button.addEventListener("click", () => {
  closed_invoices_button.classList.remove("invoices-switch-option_active");
  open_invoices_button.classList.add("invoices-switch-option_active");
  open_invoices_page.classList.add("section-content-visible-invoices");
  closed_invoices_page.classList.remove("section-content-visible-invoices");
});

closed_invoices_button.addEventListener("click", () => {
  closed_invoices_button.classList.add("invoices-switch-option_active");
  open_invoices_button.classList.remove("invoices-switch-option_active");
  closed_invoices_page.classList.add("section-content-visible-invoices");
  open_invoices_page.classList.remove("section-content-visible-invoices");
});
// change pass===================
const change_password = document.querySelector(
  ".change-password-popup-wrapper"
);
const change_password_buttons = document.querySelectorAll(
  ".change-password-button"
);
const change_password_exit_button = document.querySelector(
  ".change-password-popup-exit"
);

change_password_buttons.forEach((change_password_button) => {
  change_password_button.addEventListener("click", () => {
    change_password.classList.add("popup_visible");
    document.querySelector("body").style.overflow = "hidden";
  });
});

change_password_exit_button.addEventListener("click", () => {
  change_password.classList.remove("popup_visible");
  document.querySelector("body").style.overflow = "visible";
});
// change pass===================
// my card
const my_card = document.querySelector(".card-popup-wrapper");
const my_card_buttons = document.querySelectorAll(
  ".profile__section-content-current-card"
);
const my_card_exit_button = document.querySelector(".card-popup-exit");

my_card_buttons.forEach((my_card_button) => {
  my_card_button.addEventListener("click", () => {
    my_card.classList.add("popup_visible");
    document.querySelector("body").style.overflow = "hidden";
  });
});

my_card_exit_button.addEventListener("click", () => {
  my_card.classList.remove("popup_visible");
  document.querySelector("body").style.overflow = "visible";
});
// my card
// add card
const add_card = document.querySelector(".add-card-popup-wrapper");
const add_card_buttons = document.querySelectorAll(
  ".profile__section-content-add-card"
);
const add_card_exit_button = document.querySelector(".add-card-popup-exit");

add_card_buttons.forEach((add_card_button) => {
  add_card_button.addEventListener("click", () => {
    add_card.classList.add("popup_visible");
    document.querySelector("body").style.overflow = "hidden";
  });
});

add_card_exit_button.addEventListener("click", () => {
  add_card.classList.remove("popup_visible");
  document.querySelector("body").style.overflow = "visible";
});
// add card
// invoice
const invoice = document.querySelector(".invoice-popup-wrapper");
const invoice_buttons = document.querySelectorAll(
  // ".profile__section-content-invoices-invoice-button"
  ".profile__section-content-invoices-invoice"
);
const invoice_exit_button = document.querySelector(".invoice-popup-exit");

invoice_buttons.forEach((invoice_button) => {
  invoice_button.addEventListener("click", () => {
    invoice.classList.add("popup_visible");
    document.querySelector("body").style.overflow = "hidden";
  });
});

invoice_exit_button.addEventListener("click", () => {
  invoice.classList.remove("popup_visible");
  document.querySelector("body").style.overflow = "visible";
});
// invoice


