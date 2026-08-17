/* ==========================================================
   CONTACT SECTION JAVASCRIPT
   Author : Sarbajit Senapati
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeCopyButtons();

    initializeContactAnimation();

});

/* ==========================================================
   COPY EMAIL / PHONE
========================================================== */

function initializeCopyButtons() {

    document.querySelectorAll("[data-copy]").forEach(function (item) {

        item.addEventListener("click", function () {

            const value = item.dataset.copy;

            if (!value) return;

            navigator.clipboard.writeText(value)
                .then(function () {

                    alert(value + " copied successfully.");

                })
                .catch(function () {

                    alert("Unable to copy. Please copy it manually.");

                });

        });

    });

}

/* ==========================================================
   CONTACT ANIMATION
========================================================== */

function initializeContactAnimation() {

    const section = document.querySelector("#contact");

    if (!section) return;

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    section.classList.add("visible");

                    observer.unobserve(section);

                }

            });

        },

        {
            threshold: 0.3
        }

    );

    observer.observe(section);

}

/* ==========================================================
   CONTACT JAVASCRIPT INITIALIZATION COMPLETE
========================================================== */

console.log("Contact Section Loaded Successfully!");
