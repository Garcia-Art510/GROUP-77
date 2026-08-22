/* =========================================================
   RANDOM HELPER
========================================================= */

function random(min, max) {
    return Math.random() * (max - min) + min;
}


/* =========================================================
   STAR GENERATOR
========================================================= */

const starsContainer = document.getElementById("stars");

const STAR_COUNT = 90;

for (let i = 0; i < STAR_COUNT; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = `${random(0, 100)}%`;
    star.style.top = `${random(-10, 100)}%`;

    const size = random(1, 4);

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.animationDuration =
        `${random(2, 6)}s, ${random(8, 20)}s`;

    star.style.animationDelay =
        `${random(0, 5)}s, ${random(0, 10)}s`;

    starsContainer.appendChild(star);
}


/* =========================================================
   PARTICLES
========================================================= */

const particlesContainer =
    document.getElementById("particles");

const PARTICLE_COUNT = 45;

for (let i = 0; i < PARTICLE_COUNT; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        `${random(0, 100)}%`;

    particle.style.top =
        `${random(0, 100)}%`;

    const size = random(2, 5);

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.animationDuration =
        `${random(8, 18)}s`;

    particle.style.animationDelay =
        `${random(0, 10)}s`;

    particlesContainer.appendChild(particle);
}


/* =========================================================
   ASTEROIDS
========================================================= */

const asteroidsContainer =
    document.getElementById("asteroids");

function createAsteroid() {

    const asteroid = document.createElement("div");

    asteroid.classList.add("asteroid");

    asteroid.style.left =
        `${random(-10, 100)}%`;

    asteroid.style.top =
        `${random(-20, 15)}%`;

    const size = random(35, 95);

    asteroid.style.width = `${size}px`;
    asteroid.style.height = `${size}px`;

    asteroid.style.animationDuration =
        `${random(10, 22)}s`;

    asteroid.style.animationDelay =
        `${random(0, 10)}s`;

    asteroidsContainer.appendChild(asteroid);

    setTimeout(() => {
        asteroid.remove();
    }, 30000);
}


/* Asteroid pertama */

for (let i = 0; i < 5; i++) {
    setTimeout(createAsteroid, i * 2500);
}


/* Asteroid terus muncul */

setInterval(() => {
    createAsteroid();
}, 4500);


/* =========================================================
   LIGHTNING
========================================================= */

const lightningContainer =
    document.getElementById("lightning-container");


function createLightning() {

    const lightning =
        document.createElement("div");

    lightning.classList.add("lightning");

    lightning.style.left =
        `${random(2, 98)}%`;

    lightning.style.height =
        `${random(200, 600)}px`;

    lightning.style.transform =
        `rotate(${random(-18, 18)}deg)`;

    lightningContainer.appendChild(lightning);

    setTimeout(() => {
        lightning.remove();
    }, 400);
}


/*
    Petir utama muncul berkala
*/

function lightningBurst() {

    const amount =
        Math.floor(random(1, 4));

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {
            createLightning();
        }, i * random(80, 220));

    }
}


/*
    Petir muncul setiap beberapa detik
*/

setInterval(() => {

    lightningBurst();

}, random(3500, 6500));


/*
    Beberapa petir pertama
*/

setTimeout(lightningBurst, 1500);

setTimeout(lightningBurst, 3000);


/* =========================================================
   BUTTON LINK HANDLER
========================================================= */

const buttons =
    document.querySelectorAll(".action-btn");


buttons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const target =
            this.dataset.link;

        if (!target || target === "#") {
            console.warn(
                "Link tombol belum diatur:",
                this.textContent.trim()
            );

            return;
        }

        window.open(
            target,
            "_blank",
            "noopener,noreferrer"
        );

    });

});


/* =========================================================
   RANDOM BUTTON HOVER EFFECT
========================================================= */

buttons.forEach(button => {

    button.addEventListener("mouseenter", function() {

        this.style.setProperty(
            "--random-angle",
            `${random(-4, 4)}deg`
        );

    });

});


/* =========================================================
   PARALLAX MOUSE EFFECT
========================================================= */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);

    const cards =
        document.querySelectorAll(".site-card");

    cards.forEach((card, index) => {

        const speed =
            (index % 2 === 0 ? 3 : -3);

        const moveX =
            x * speed;

        const moveY =
            y * speed;

        card.style.setProperty(
            "--parallax-x",
            `${moveX}px`
        );

        card.style.setProperty(
            "--parallax-y",
            `${moveY}px`
        );

    });

});