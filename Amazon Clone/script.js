const imgs = document.querySelectorAll('.header-slider ul img');
const prev_button = document.querySelector('.control_prev');
const next_button = document.querySelector('.control_next');

let n = 0;


function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();

// Automatic slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    n = (n + 1) % imgs.length;
    changeSlide();
}

// Reset interval on user interaction
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Previous button
prev_button.addEventListener('click', () => {
    n = (n - 1 + imgs.length) % imgs.length;
    changeSlide();
    resetInterval();
});

next_button.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});


let startX = 0;
let endX = 0;
const slider = document.querySelector('.header-slider');

if (slider) {
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const distance = endX - startX;
        if (Math.abs(distance) > 50) {
            if (distance < 0) {
                nextSlide(); // Swiped left
            } else {
                n = (n - 1 + imgs.length) % imgs.length; // Swiped right
                changeSlide();
            }
            resetInterval();
        }
    }
}


const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer)
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      darkModeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });