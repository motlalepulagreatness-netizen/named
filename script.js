const enterButton = document.querySelector("#enterButton");
const welcomeScreen = document.querySelector("#welcomeScreen");
const nextScreen = document.querySelector("#nextScreen");
const message = document.querySelector("#message");

const passwordInput = document.querySelector("#passwordInput");
const unlockButton = document.querySelector("#unlockButton");

const mainExperience = document.querySelector("#mainExperience");
const storySection = document.querySelector(".story-section");

// const correctPassword = "13/10/2025";
const correctPassword = "1";

/* ========================================
   OPEN PASSWORD SCREEN
   ======================================== */

enterButton.addEventListener("click", function () {

    welcomeScreen.classList.add("fade-out");

    setTimeout(function () {

        welcomeScreen.style.display = "none";

        nextScreen.style.display = "flex";

        setTimeout(function () {
            nextScreen.classList.add("show");
        }, 70);

    },  300);

});


/* ========================================
   CHECK PASSWORD
   ======================================== */

unlockButton.addEventListener("click", function () {

    const enteredPassword = passwordInput.value;

    message.style.opacity = "0";

    setTimeout(function () {

        if (enteredPassword === correctPassword) {

            message.textContent = "You remembered. ❤️";

            nextScreen.classList.remove("show");

            setTimeout(function () {

                nextScreen.style.display = "none";

                mainExperience.style.display = "flex";

                window.scrollTo(0,0);

            },  200);

        } else {

            message.textContent =
                "Hmm... that's not quite it. ❤️ Try again.";

            message.style.opacity = "1";

        }

    }, 300);

});

window.addEventListener("scroll" , function () {

    const position = storySection.getBoundingClientRect();

    if (position.top < window.innerHeight) {
        storySection.classList.add("visible");
    }
});

const sections = document.querySelectorAll(
    ".story-section, .memory-section"
);

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const position = section.getBoundingClientRect();

        if (position.top < window.innerHeight * 0.8) {

            section.classList.add("visible");

        }

    });

});