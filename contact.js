/* ==========================================================
   CONTACT SECTION JAVASCRIPT
   Author : Sarbajit Senapati
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeContactForm();
    initializeCopyButtons();
    initializeContactAnimation();

});

/* ==========================================================
   CONTACT FORM
========================================================== */

function initializeContactForm() {

    const form = document.querySelector(".contact-form form");

    if (!form) return;

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !message) {

            alert("Please complete all required fields.");

            return;
        }

        alert("Thank you! Your message is ready to send.");

        form.reset();

    });

}

/* ==========================================================
   COPY EMAIL / PHONE
========================================================== */

function initializeCopyButtons() {

    document.querySelectorAll("[data-copy]").forEach(item => {

        item.addEventListener("click", () => {

            navigator.clipboard.writeText(item.dataset.copy);

            alert(item.dataset.copy + " copied successfully.");

        });

    });

}

/* ==========================================================
   CONTACT ANIMATION
========================================================== */

function initializeContactAnimation() {

    const section = document.querySelector("#contact");

    if (!section) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                section.classList.add("visible");

            }

        });

    },{

        threshold:0.3

    });

    observer.observe(section);

}