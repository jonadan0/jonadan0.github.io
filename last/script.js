document.addEventListener("DOMContentLoaded", function() {
    // Navbar toggle
    const toggleBtn = document.getElementById("toggleBtn");
    const menu = document.getElementById("menu");
    toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Image slide
    let slideIndex = 0;
    const slides = document.getElementsByClassName("image-slide");
    const prev = document.getElementById("imagePrev");
    const next = document.getElementById("imageNext");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    showSlides();

    prev.addEventListener("click", () => {
        slideIndex -= 2;
        showSlides();
    });

    next.addEventListener("click", () => {
        showSlides();
    });

    // Portfolio filter
    const filterItems = document.getElementsByClassName("listItem");
    const portfolioItems = document.getElementsByClassName("filterItem");

    for (let i = 0; i < filterItems.length; i++) {
        filterItems[i].addEventListener("click", function() {
            const category = this.id;
            for (let j = 0; j < filterItems.length; j++) {
                filterItems[j].classList.remove("active");
            }
            this.classList.add("active");
            for (let k = 0; k < portfolioItems.length; k++) {
                if (category === "all" || portfolioItems[k].classList.contains(category)) {
                    portfolioItems[k].style.display = "block";
                } else {
                    portfolioItems[k].style.display = "none";
                }
            }
        });
    }

    // Portfolio modal
    const modal = document.getElementById("portfolioModal");
    const modalImage = document.getElementById("modalImage");
    const modalMain = document.getElementById("modalMain");
    const modalSub = document.getElementById("modalSub");
    const modalText = document.getElementById("modalText");
    const closeModal = document.getElementById("modalClose");

    for (let i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].addEventListener("click", function() {
            const image = this.querySelector("img").src;
            const main = this.querySelector(".main").textContent;
            const sub = this.querySelector(".sub").textContent;
            const text = this.querySelector(".text").textContent;

            modalImage.src = image;
            modalMain.textContent = main;
            modalSub.textContent = sub;
            modalText.textContent = text;

            modal.style.display = "flex";
        });
    }

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
