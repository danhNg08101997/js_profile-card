let img = document.querySelectorAll(".image img");
let closeBtn = document.querySelector(".gallery__icon-close");
let prevBtn = document.querySelector(".gallery__icon-prev");
let nextBtn = document.querySelector(".gallery__icon-next");
let galleryImg = document.querySelector(".gallery__inner img");
let gallery = document.querySelector(".gallery");

let currentIndex = 0;

galleryShow = () => {
  galleryImg.src = img[currentIndex].src;
  gallery.classList.add("gallery--show");

  //display prevBtn
  if (currentIndex === 0) {
    prevBtn.classList.add("gallery__icon--hide");
  } else {
    prevBtn.classList.remove("gallery__icon--hide");
  }
  //   display nextBtn
  if (currentIndex === img.length - 1) {
    nextBtn.classList.add("gallery__icon--hide");
  } else {
    nextBtn.classList.remove("gallery__icon--hide");
  }
};

img.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    galleryShow();
  });
});

closeBtn.addEventListener("click", function () {
  gallery.classList.remove("gallery--show");
});
// close gallery bằng esc(keycode = 27)
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    gallery.classList.remove("gallery--show");
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    galleryShow();
  }
});

nextBtn.addEventListener("click", function () {
  if (currentIndex < img.length - 1) {
    currentIndex++;
    galleryShow();
  }
});
