/* ========================================================================================================
      UNDER CONSTRUCTION MODAL FOR TEMPORARY PERIOD ONLY WHEN SKILLS, CAREER, CERTIFICATE NOT BUILD.
=========================================================================================================== */

document.addEventListener("DOMContentLoaded", function(){

    const modal =
        document.getElementById("construction-modal");

    const title =
        document.getElementById("construction-title");

    const closeButton =
        document.getElementById("construction-close");

    const okButton =
        document.getElementById("construction-ok");

    if(!modal || !title){

        console.warn(
            "Construction modal elements not found."
        );

        return;

    }

/* ======================================================
   TEMPORARY NAVIGATION TARGETS
====================================================== */

const constructionSections = {

    "#timeline":
        "🚀 Career Journey",

    "#skills":
        "⚡ Technical Skills",

    "#certificates":
        "🏅 Certifications & Credentials"

};

    /* ======================================================
       NAVIGATION HANDLER
    ====================================================== */

    document.querySelectorAll("a[href]").forEach(function(link){

        const href = link.getAttribute("href");

        if(!constructionSections[href]) return;

        link.addEventListener("click", function(event){

            event.preventDefault();

            title.textContent =
                constructionSections[href];

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    /* ======================================================
       CLOSE MODAL
    ====================================================== */

    function closeConstructionModal(){

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

    closeButton.addEventListener(
        "click",
        closeConstructionModal
    );

    okButton.addEventListener(
        "click",
        closeConstructionModal
    );

    /* ======================================================
       CLOSE BY CLICKING BACKDROP
    ====================================================== */

    modal.querySelector(
        ".construction-overlay"
    ).addEventListener(
        "click",
        closeConstructionModal
    );

    /* ======================================================
       CLOSE WITH ESCAPE KEY
    ====================================================== */

    document.addEventListener("keydown", function(event){

        if(
            event.key === "Escape" &&
            modal.classList.contains("active")
        ){

            closeConstructionModal();

        }

    });

});

console.log(
    "Under Construction Navigation Loaded Successfully!"
);