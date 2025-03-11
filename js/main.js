// Loader Animation
document.addEventListener("DOMContentLoaded", function() {
    // GSAP animation for the loader
    gsap.from(".loader-circle", {
        rotation: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.inOut"
    });

    // Wait for the entire page to load
    window.addEventListener("load", function() {
        // Animate the loader out
        gsap.to("#loader", {
            opacity: 0,
            duration: 1,
            onComplete: function() {
                // Hide the loader and show the content
                document.getElementById("loader").style.display = "none";
                document.getElementById("content").style.display = "block";
            }
        });
    });
});

//  Animated counter 
function animateNumbers() {
    const counters = document.querySelectorAll(".number");
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-number");
        const increment = target / speed;

        let current = 0;

        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

window.onload = animateNumbers;

//Animation for main section
gsap.registerPlugin(ScrollTrigger);

gsap.from(".main_section .col-lg-6", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".main_section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
});

gsap.from(".main_banner", {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".main_banner",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
});

gsap.registerPlugin(ScrollTrigger);

//Animation for about section
gsap.from(".about_section .title, .about_section .text", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2, // Adds a delay between animations
    scrollTrigger: {
        trigger: ".about_section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".about_section iframe", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about_section",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

//Animation for offer section
//Animation for offer section(bg)
gsap.to(".offer_section", {
    backgroundPosition: "50% 20%", // Moves background upwards
    ease: "none",
    scrollTrigger: {
        trigger: ".offer_section",
        start: "top bottom", // Starts when the section enters
        end: "bottom top",   // Ends when it leaves the viewport
        scrub: 2,            // Smooth animation effect
    }
});

//Animation for offer section(card)
gsap.set(".card", { opacity: 0, y: 50, scale: 0.9 });

ScrollTrigger.batch(".card", {
    onEnter: (batch) => gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
    }),
    onLeave: (batch) => gsap.to(batch, { opacity: 0.5, y: 30, duration: 0.5 }), 
    onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: 0.2 }), 
    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 50, duration: 0.5 }), 

    scrollTrigger: {
        trigger: ".offer_section",
        start: "top 85%",
        toggleActions: "play none none none",
    }
});

// Animation for price section
gsap.from(".price_section .title, .price_section .text", {
    opacity: 0,
    x: -50, // Slide in from the left
    duration: 1,
    stagger: 0.2, 
    scrollTrigger: {
        trigger: ".price_section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".price_section img", {
    opacity: 0,
    x: 50, // Slide in from the right
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".price_section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Animate the background gradient shift
gsap.registerPlugin(ScrollTrigger);

// Get the container where shapes will be added
const shapesContainer = document.querySelector(".falling-shapes");

// Colors for the shapes
const colors = ["#ff5f5f", "#ffcc00", "#66c2ff", "#8cd6fb"];
const shapeTypes = ["circle", "triangle", "square"];

// Function to create falling shapes
function createShape() {
    let shape = document.createElement("div");
    let randomSize = Math.random() * 20 + 10; // Shape size between 10px - 30px
    let shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

    shape.classList.add("shape", shapeType);
    shape.style.width = `${randomSize}px`;
    shape.style.height = `${randomSize}px`;
    shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    shape.style.left = `${Math.random() * 100}%`; // Random horizontal position

    shapesContainer.appendChild(shape);

    // Animate falling effect
    gsap.to(shape, {
        y: window.innerHeight + 50, // Moves the shape down the screen
        rotation: Math.random() * 360, // Adds rotation
        duration: Math.random() * 4 + 2, // Random speed (2s to 6s)
        ease: "linear",
        onComplete: () => {
            shape.remove(); // Remove shape after animation completes
            createShape(); // Create a new one to keep the effect going
        }
    });
}

// Generate multiple shapes to start the effect
for (let i = 0; i < 15; i++) {
    createShape();
}

//Animation Slider
document.addEventListener("DOMContentLoaded", function() {
    // Select the carousel items
    const carouselItems = document.querySelectorAll('.carousel-item');

    // Function to animate the testimonial content
    function animateTestimonial(item) {
        // Reset the opacity and position of the elements
        gsap.set(item.querySelector('.testimonial-content'), { opacity: 0, y: 50 });
        gsap.set(item.querySelector('.testimonial-img'), { opacity: 0, scale: 0.8 });
        gsap.set(item.querySelector('.testimonial-text'), { opacity: 0, x: -20 });
        gsap.set(item.querySelector('.testimonial-name'), { opacity: 0, x: 20 });

        // Animate the elements
        gsap.to(item.querySelector('.testimonial-content'), { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
        gsap.to(item.querySelector('.testimonial-img'), { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 });
        gsap.to(item.querySelector('.testimonial-text'), { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 });
        gsap.to(item.querySelector('.testimonial-name'), { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });
    }

    // Animate the first testimonial on page load
    animateTestimonial(carouselItems[0]);

    // Add event listeners for the carousel controls
    const carousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000, // Adjust the interval as needed
        wrap: true
    });

    // Animate testimonials when the carousel slides
    document.getElementById('testimonialCarousel').addEventListener('slid.bs.carousel', function (event) {
        const activeItem = event.relatedTarget;
        animateTestimonial(activeItem);
    });
});

// Animation for footer
gsap.from("footer", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
