/*==================================================================
    HERO.JS
    ----------------------------------------------------------------
    Project : Legend of Sarbajit Portfolio V2
    Purpose : Controls Hero Section Animations
==================================================================*/


/*===============================================================
    WAIT UNTIL PAGE IS FULLY LOADED
===============================================================*/

document.addEventListener("DOMContentLoaded", function () {

    initializeTyping();

    animateXPBar();

    floatingProfile();

    buttonRippleEffect();

    initializeHeroBadges();   // NEW

});

/*===============================================================
    TYPING EFFECT
===============================================================*/

function initializeTyping() {

    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    new Typed("#typing-text", {

        strings: [

            "IT Trainer",

            "Technical Support Executive",

            "Web Developer",

            "AI Automation Enthusiast",

            "Graphic Designer",

            "Founder of Nootech Computer Centre"

        ],

        typeSpeed: 70,

        backSpeed: 45,

        backDelay: 1500,

        startDelay: 300,

        loop: true,

        showCursor: true,

        cursorChar: "|"

    });

}


/*===============================================================
    XP BAR ANIMATION
===============================================================*/

function animateXPBar() {

    const xpFill = document.querySelector(".xp-fill");

    if (!xpFill) return;

    xpFill.style.width = "0%";

    setTimeout(function () {

        xpFill.style.transition = "width 2s ease";

        xpFill.style.width = "95%";

    }, 400);

}


/*===============================================================
    FLOATING PROFILE IMAGE
===============================================================*/

function floatingProfile() {

    const image = document.querySelector(".hero-image-wrapper img");

    if (!image) return;

    let direction = 1;

    let position = 0;

    setInterval(function () {

        position += direction;

        image.style.transform = `translateY(${position}px)`;

        if (position >= 10)

            direction = -1;

        if (position <= -10)

            direction = 1;

    }, 60);

}


/*===============================================================
    BUTTON RIPPLE EFFECT
===============================================================*/

function buttonRippleEffect() {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const circle = document.createElement("span");

            const diameter = Math.max(button.clientWidth, button.clientHeight);

            circle.style.width = diameter + "px";

            circle.style.height = diameter + "px";

            circle.style.left = event.offsetX - diameter / 2 + "px";

            circle.style.top = event.offsetY - diameter / 2 + "px";

            circle.classList.add("ripple");

            const ripple = button.querySelector(".ripple");

            if (ripple) {

                ripple.remove();

            }

            button.appendChild(circle);

        });

    });

}


/*===============================================================
    HERO SCROLL REVEAL
===============================================================*/

window.addEventListener("scroll", function () {

    const hero = document.querySelector("#hero");

    if (!hero) return;

    const scroll = window.scrollY;

    hero.style.opacity = 1 - scroll / 700;

});


/*===============================================================
    PARALLAX EFFECT
===============================================================*/

document.addEventListener("mousemove", function (event) {

    const image = document.querySelector(".hero-image-wrapper");

    if (!image) return;

    const x = (window.innerWidth / 2 - event.clientX) / 50;

    const y = (window.innerHeight / 2 - event.clientY) / 50;

    image.style.transform = `translate(${x}px, ${y}px)`;

});


/*===============================================================
    HERO BUTTON HOVER SCALE
===============================================================*/

const heroButtons = document.querySelectorAll(".hero-buttons .btn");

heroButtons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function () {

        button.style.transform = "scale(1)";

    });

});

/*===============================================================
    HERO BADGE ROTATOR
===============================================================*/

function initializeHeroBadges() {

    const badge1 = document.getElementById("badge1");
    const badge2 = document.getElementById("badge2");
    const badge3 = document.getElementById("badge3");

    if (!badge1 || !badge2 || !badge3) return;

    const badgeSets = [

        [
            "🏆 Founder & Director",
            "👨‍🏫 Senior IT Trainer",
            "💻 Technical Support"
        ],

        [
            "🎨 Graphic Designer",
            "🌐 Web Developer",
            "🤖 AI Automation"
        ],

        [
            "📊 MIS Executive",
            "🎓 Government Projects",
            "🚀 Career Mentor"
        ]

    ];

    let currentSet = 0;

    function changeBadges() {

        badge1.style.opacity = "0";
        badge2.style.opacity = "0";
        badge3.style.opacity = "0";

        setTimeout(function () {

            badge1.textContent = badgeSets[currentSet][0];
            badge2.textContent = badgeSets[currentSet][1];
            badge3.textContent = badgeSets[currentSet][2];

            badge1.style.opacity = "1";
            badge2.style.opacity = "1";
            badge3.style.opacity = "1";

            currentSet++;

            if (currentSet >= badgeSets.length) {

                currentSet = 0;

            }

        }, 300);

    }

    setInterval(changeBadges, 3000);

}


/*===============================================================
    CONSOLE MESSAGE
===============================================================*/

console.log("%cHero Section Loaded Successfully!",
    "color:#00F5FF;font-size:16px;font-weight:bold;");
	