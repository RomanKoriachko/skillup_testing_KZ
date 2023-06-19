// Navigation

let mainButtons = document.querySelectorAll(".main-btn");
let formSection = document.querySelector(".form-section");

if (window.screen.height > 1100) {
    for (let i = 0; i < mainButtons.length; i++) {
        mainButtons[i].addEventListener("click", function () {
            window.scrollTo({
                top:
                    formSection.getBoundingClientRect().top +
                    window.pageYOffset -
                    100,
                behavior: "smooth",
            });
        });
    }
} else {
    for (let i = 0; i < mainButtons.length; i++) {
        mainButtons[i].addEventListener("click", function () {
            window.scrollTo({
                top:
                    formSection.getBoundingClientRect().top +
                    window.pageYOffset,
                behavior: "smooth",
            });
        });
    }
}

let whoIsSection = document.querySelector(".who-is-section");
let scale1 = document.querySelector(".scale-children-1");
let scale2 = document.querySelector(".scale-children-2");
let scale3 = document.querySelector(".scale-children-3");

window.addEventListener("scroll", function () {
    if (window.screen.height > 1100) {
        if (
            whoIsSection.getBoundingClientRect().top -
                window.screen.height / 2 <
            0
        ) {
            scale1.classList.add("show");
            scale1.classList.remove("hide");
        } else {
            scale1.classList.add("hide");
            scale1.classList.remove("show");
        }
        if (
            whoIsSection.getBoundingClientRect().top +
                20 -
                window.screen.height / 2 <
            0
        ) {
            scale2.classList.add("show");
            scale2.classList.remove("hide");
        } else {
            scale2.classList.add("hide");
            scale2.classList.remove("show");
        }
        if (
            whoIsSection.getBoundingClientRect().top +
                70 -
                window.screen.height / 2 <
            0
        ) {
            scale3.classList.add("show");
            scale3.classList.remove("hide");
        } else {
            scale3.classList.add("hide");
            scale3.classList.remove("show");
        }
    } else {
        if (
            whoIsSection.getBoundingClientRect().top -
                window.screen.height / 10 <
            0
        ) {
            scale1.classList.add("show");
            scale1.classList.remove("hide");
        } else {
            scale1.classList.add("hide");
            scale1.classList.remove("show");
        }
        if (
            whoIsSection.getBoundingClientRect().top +
                100 -
                window.screen.height / 10 <
            0
        ) {
            scale2.classList.add("show");
            scale2.classList.remove("hide");
        } else {
            scale2.classList.add("hide");
            scale2.classList.remove("show");
        }
        if (
            whoIsSection.getBoundingClientRect().top +
                200 -
                window.screen.height / 10 <
            0
        ) {
            scale3.classList.add("show");
            scale3.classList.remove("hide");
        } else {
            scale3.classList.add("hide");
            scale3.classList.remove("show");
        }
    }
});

// Slider

$(document).ready(function () {
    $(".suitable-slider").slick({
        dots: true,
        centerMode: true,
        arrows: false,
        infinite: false,
        variableWidth: true,
        autoplay: true,
    });
});

$(document).ready(function () {
    $(".slider-text").slick({
        arrows: false,
        infinite: true,
        dots: true,
        variableWidth: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                },
            },
        ],
    });
});

// Disable hover on mobile

if (
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
) {
    // console.log("this is a touch device");
} else {
    // console.log("this is not a touch device");
    document.body.classList.add("no-touch");
}
