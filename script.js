document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".media-1");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.querySelector(".close");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentSet = [];
  let currentIndex = 0;

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (event) => {
      event.preventDefault();
      const setId = thumbnail.getAttribute("data-set");
      currentSet = loadImages(setId);
      currentIndex = 0;
      showImage(currentIndex);
      modal.style.display = "block";
      updateButtons();
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.src = "";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
      modalImage.src = "";
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex = (currentIndex - 1 + currentSet.length) % currentSet.length;
      showImage(currentIndex);
      updateButtons();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < currentSet.length - 1) {
      currentIndex = (currentIndex + 1) % currentSet.length;
      showImage(currentIndex);
      updateButtons();
    }
  });

  function loadImages(setId) {
    const images = {
      set1: [
        "images/1000-1500/img_1.jpg",
        "images/1000-1500/img_2.jpg",
        "images/1000-1500/img_3.jpg",
        "images/1000-1500/img_4.jpg",
        "images/1000-1500/img_5.jpg",
        "images/1000-1500/img_6.jpg",
        "images/1000-1500/img_7.jpg",
        "images/1000-1500/img_8.jpg",
        "images/1000-1500/img_9.jpg",
        "images/1000-1500/img_10.jpg",
        "images/1000-1500/img_11.jpg",
        "images/1000-1500/img_12.jpg",
        "images/1000-1500/img_13.jpg",
        "images/1000-1500/img_14.jpg",
        "images/1000-1500/img_15.jpg",
        "images/1000-1500/img_16.jpg",
        "images/1000-1500/img_17.jpg",
        "images/1000-1500/img_18.jpg",
        "images/1000-1500/img_19.jpg",
        "images/1000-1500/img_20.jpg",
        "images/1000-1500/img_21.jpg",
      ],
      set2: [
        "images/1500-2000/image_1.jpg",
        "images/1500-2000/image_2.jpg",
        "images/1500-2000/image_3.jpg",
        "images/1500-2000/image_4.jpg",
        "images/1500-2000/image_6.jpg",
        "images/1500-2000/image_7.jpg",
        "images/1500-2000/image_8.jpg",
        "images/1500-2000/image_9.jpg",
        "images/1500-2000/image_10.jpg",
        "images/1500-2000/image_11.jpg",
        "images/1500-2000/image_12.jpg",
        "images/1500-2000/image_13.jpg",
        "images/1500-2000/image_14.jpg",
        "images/1500-2000/image_15.jpg",
        "images/1500-2000/image_16.jpg",
        "images/1500-2000/image_17.jpg",
        "images/1500-2000/image_18.jpg",
        "images/1500-2000/image_19.jpg",
        "images/1500-2000/image_20.jpg",
        "images/1500-2000/image_21.jpg",
        "images/1500-2000/image_22.jpg",
        "images/1500-2000/image_23.jpg",
        "images/1500-2000/image_24.jpg",
        "images/1500-2000/image_25.jpg",
        "images/1500-2000/image_26.jpg",
        "images/1500-2000/image_27.jpg",
        "images/1500-2000/image_28.jpg",
        "images/1500-2000/image_29.jpg",
        "images/1500-2000/image_30.jpg",
        "images/1500-2000/image_31.jpg",
        "images/1500-2000/image_32.jpg",
        "images/1500-2000/image_33.jpg",
        "images/1500-2000/image_34.jpg",
      ],
      set3: ["images/2000-4000/image_1.jpg",
        "images/2000-4000/image_2.jpg",
        "images/2000-4000/image_3.jpg",
        "images/2000-4000/image_4.jpg",
        "images/2000-4000/image_6.jpg",
        "images/2000-4000/image_7.jpg",
        "images/2000-4000/image_8.jpg",
        "images/2000-4000/image_9.jpg",
        "images/2000-4000/image_10.jpg",
        "images/2000-4000/image_11.jpg",
        "images/2000-4000/image_12.jpg",
        "images/2000-4000/image_13.jpg",
        "images/2000-4000/image_14.jpg",
        "images/2000-4000/image_15.jpg",
        "images/2000-4000/image_16.jpg",
        "images/2000-4000/image_17.jpg",
        "images/2000-4000/image_18.jpg",
        "images/2000-4000/image_19.jpg",
        "images/2000-4000/image_20.jpg",
        "images/2000-4000/image_21.jpg",
        "images/2000-4000/image_22.jpg",
        "images/2000-4000/image_23.jpg",
        "images/2000-4000/image_24.jpg",
      ],
      set4: ["images/4000-6000/image_1.jpg",
        "images/4000-6000/image_2.jpg",
        "images/4000-6000/image_3.jpg",
        "images/4000-6000/image_4.jpg",
        "images/4000-6000/image_5.jpg",
        "images/4000-6000/image_6.jpg",
        "images/4000-6000/image_7.jpg",
        "images/4000-6000/image_8.jpg",
        "images/4000-6000/image_9.jpg",
        "images/4000-6000/image_10.jpg",
        "images/4000-6000/image_11.jpg",
        "images/4000-6000/image_12.jpg",
        "images/4000-6000/image_13.jpg",
        "images/4000-6000/image_14.jpg",
        "images/4000-6000/image_15.jpg",
        "images/4000-6000/image_16.jpg",
        "images/4000-6000/image_17.jpg",
        "images/4000-6000/image_18.jpg",
        "images/4000-6000/image_19.jpg",
        "images/4000-6000/image_20.jpg",
        "images/4000-6000/image_21.jpg",
      ],
      set5: ["images/6000-8000/image_1.jpg",
        "images/6000-8000/image_2.jpg",
        "images/6000-8000/image_3.jpg",
        "images/6000-8000/image_4.jpg",
        "images/6000-8000/image_5.jpg",],
      set6: ["images/10000/image_1.jpg",
        "images/10000/image_2.jpg",
        "images/10000/image_3.jpg",
        "images/10000/image_4.jpg",
        "images/10000/image_5.jpg",],
      set7: ["images/hero_1.jpg",],
      set8: ["images/hero_1.png",],
      set9: ["images/Wedding/image_1.jpg",
        "images/Wedding/image_2.jpg",
        "images/Wedding/image_3.jpg",
        "images/Wedding/image_4.jpg",
        "images/Wedding/image_5.jpg",
        "images/Wedding/image_6.jpg",
        "images/Wedding/image_7.jpg",
        "images/Wedding/image_8.jpg",
        "images/Wedding/image_9.jpg",
        "images/Wedding/image_10.jpg",
        "images/Wedding/image_11.jpg",
        "images/Wedding/image_12.jpg",
        "images/Wedding/image_13.jpg",
        "images/Wedding/image_14.jpg",
        "images/Wedding/image_15.jpg",],
    };

    return images[setId] || [];
  }

  function showImage(index) {
    if (currentSet.length > 0) {
      modalImage.src = currentSet[index];
    }
  }

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === currentSet.length - 1;
  }
});
