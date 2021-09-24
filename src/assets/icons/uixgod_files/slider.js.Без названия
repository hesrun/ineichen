const modals = document.querySelectorAll(".lot-modal-page");

modals.forEach((modal, iterator) => {
  const previous_selector = `modal-product-${iterator+1}`;
  const images = document.querySelectorAll(
    `.${previous_selector} .photo-mobile-slider .photo-mobile-slider-line img`
  );
  const sliderLine = document.querySelector(
    `.${previous_selector} .photo-mobile-slider .photo-mobile-slider-line`
  );
  let count = 0;
  let width = window.innerWidth;
  
  
  function init() {
    width = document.querySelector(`.${previous_selector} .photo-mobile-slider`).offsetWidth || window.innerWidth;
    sliderLine.style.width = width * images.length + "px";
    images.forEach((item) => {
      if (width < 100) {
        item.style.width = window.innerWidth + 'px';
      } else {
        item.style.width = width + "px";
      }
      item.style.height = "auto";
    });
    rollSlider();
  }
  
  init();
  window.addEventListener("resize", init);
  
  document.querySelector(`.${previous_selector} .slider-next`).addEventListener("click", function () {
    count++;
    if (count >= images.length) {
      count = 0;
    }
    rollSlider();
  });
  
  document.querySelector(`.${previous_selector} .slider-prev`).addEventListener("click", function () {
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    rollSlider();
  });
  
  function rollSlider() {
    sliderLine.style.transform = "translate(-" + count * width + "px)";
  }
  
  
  const slider_mobile = document.querySelector(`.${previous_selector} .photo-mobile-slider`);
  
  const swipe_Control = () => {
    let x_start = null;
    let y_start = null;
    let click = new Event("click");
    slider_mobile.addEventListener("touchstart", swipe_Control_start, false);
    slider_mobile.addEventListener("touchmove", swipe_Control_move, false);
    function swipe_Control_start(event) {
      const touch = event.touches[0];
      x_start = touch.clientX;
      y_start = touch.clientY;
    }
    function swipe_Control_move(event) {
      if (!x_start || !y_start) {
        return false;
      }
      let x_current = event.touches[0].clientX;
      let y_current = event.touches[0].clientY;
      let xDiff = x_current - x_start;
      let yDiff = y_current - y_start;
  
      console.log(x_current, y_current);
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          document.querySelector(`.${previous_selector} .slider-prev`).dispatchEvent(click);
          
        }
        if (xDiff < 0) {
          document.querySelector(`.${previous_selector} .slider-next`).dispatchEvent(click);
        }
      }
       x_start = null;
       y_start = null;
    }
  };
  swipe_Control();
  
  const photos_modal = document.querySelectorAll(`.${previous_selector} .photo-slider-photo`);
  const currentMainImg = document.querySelector(`.${previous_selector} .main-img`);
  let outer_iterator = null;
  photos_modal.forEach((photo, iterator) => {
    photo.addEventListener('click', (event) => {
      outer_iterator = iterator;
      document.querySelector(`.${previous_selector} .lot-modal-pop-up-gallery`).style.display='flex';
      currentMainImg.src = event.target.src;
    })
  })
  
  const popup_slider = document.querySelector(`.${previous_selector} .popup-slider`);
  popup_slider.addEventListener("click", (event) => {
    if (event.target.classList.contains('gallery-prev')) {
      if (outer_iterator === 0) {
        outer_iterator = photos_modal.length-1;
      } else {
        outer_iterator--;
      }
      currentMainImg.src = photos_modal[outer_iterator].src;
    }else if (event.target.classList.contains('gallery-next')) {
      if (outer_iterator === photos_modal.length-1) {
        outer_iterator = 0;
      } else {
        outer_iterator++;
      }
      currentMainImg.src = photos_modal[outer_iterator].src;
    }else if (event.target.localName !== "img") {
      outer_iterator = null;
      popup_slider.style.display = "none";
      
    }
  });
});