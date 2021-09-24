const transition = 0.6;
const transition2 = 0.6;
let offset_left = 0;
let offset_right = 0;

document.addEventListener("wheel", (event) => {
  let activeElement = document.querySelector(".flex_visible");
  const previous_selector = activeElement.classList[1];
  const modal_page = document.querySelector(
    `.${previous_selector} .lot-modal-page_desktop`
  );
  const left_side = document.querySelector(
    `.${previous_selector} .left-side__photo-slider`
  );
  const right_side = document.querySelector(
    `.${previous_selector} .right-side__main-info`
  );
  left_side.style.transition = `${transition2}s`
  right_side.style.transition = `${transition}s`
  const left_height = left_side.scrollHeight - left_side.offsetHeight;
  const right_height = right_side.scrollHeight - right_side.offsetHeight;

  const step_left = Math.round(left_height * 0.04);// left-side speed
  const step_right = Math.round(right_height * 0.18);// right-side speed

  if (event.deltaY > 0) {
    if (left_height > offset_left) {
      offset_left += step_left;
      left_side.style.transform = "translateY(-" + offset_left + "px)";
    }
    if (right_height > offset_right) {
      offset_right += step_right;
      right_side.style.transform = "translateY(-" + offset_right + "px)";
    }
  }

  if (event.deltaY < 0) {
    if (offset_left > 0) {
      offset_left -= step_left;
      left_side.style.transform = "translateY(-" + offset_left + "px)";
    }
    if (offset_right > 0) {
      offset_right -= step_right;
      right_side.style.transform = "translateY(-" + offset_right + "px)";
    }
  }
  document
  .querySelectorAll(`.right-side__header-navigation-exit`)
  .forEach((exit) => {
    exit.addEventListener("click", () => {
      offset_left = 0;
      offset_right = 0;
      
      left_side.style.transform = "none";
      right_side.style.transform = "none";
    });
  });
  document
  .querySelectorAll(`.right-side__header-navigation-arrows .before-arrow`)
  .forEach((exit) => {
    exit.addEventListener("click", () => {
      offset_left = 0;
      offset_right = 0;
      
      left_side.style.transform = "none";
      right_side.style.transform = "none";
    });
  });
  document
  .querySelectorAll(`.right-side__header-navigation-arrows .next-arrow`)
  .forEach((exit) => {
    exit.addEventListener("click", () => {
      offset_left = 0;
      offset_right = 0;
      
      left_side.style.transform = "none";
      right_side.style.transform = "none";
    });
  });
});