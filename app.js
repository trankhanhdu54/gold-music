let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = Math.floor(Math.random() * items.length); // Initial random active position

const setSlider = () => {
  let oldActive = document.querySelector('.slider .list .item.active');
  if (oldActive) oldActive.classList.remove('active');

  items[active].classList.add('active');

  // Handle button visibility based on active position
  nextBtn.classList.remove('d-none');
  prevBtn.classList.remove('d-none'); // Initially show both buttons
  if (active === lastPosition) nextBtn.classList.add('d-none'); // Hide next button at the end
  if (active === firstPosition) prevBtn.classList.add('d-none'); // Hide prev button at the beginning
};

setSlider(); // Initial display

nextBtn.onclick = () => {
  active++;  // Increment active index directly for simpler logic
  if (active > lastPosition) active = firstPosition; // Wrap around for infinite loop
  setSlider();
};

prevBtn.onclick = () => {
  active--;  // Decrement active index directly for simpler logic
  if (active < firstPosition) active = lastPosition; // Wrap around for infinite loop
  setSlider();
};

// Set diameter (separate function for clarity)
const setDiameter = () => {
  let slider = document.querySelector('.slider');
  let widthSlider = slider.offsetWidth;
  let heightSlider = slider.offsetHeight;
  let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
  document.documentElement.style.setProperty('--diameter', diameter + 'px');
};

setDiameter();
window.addEventListener('resize', () => {
  setDiameter();
});

// Infinite loop using setInterval
setInterval(() => {
  nextBtn.onclick(); // Trigger next button click every second
}, 4000); // Adjust the interval (in milliseconds) for the desired speed
