// Typing
let text = "Web Developer | WordPress | Shopify Specialist";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Tabs
function setActive(button, category) {
  document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  let cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = card.classList.contains(category) ? 'block' : 'none';
    }
  });
}

// 🔥 IMAGE SLIDER LOGIC
let currentImages = [];
let currentIndex = 0;

function openModal(type) {
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");

  if (type === "wp") {
    currentImages = [
      "images/projects/wp1.jpg",
      "images/projects/wp2.jpg"
    ];
    title.innerText = "Business Website";
    text.innerText = "Developed responsive WordPress website with UI optimization and mobile responsiveness.";
  }

  if (type === "shopify") {
    currentImages = [
      "images/projects/shop1.jpg",
      "images/projects/shop2.jpg"
    ];
    title.innerText = "Shopify Store";
    text.innerText = "Built e-commerce store with optimized UX and mobile performance.";
  }

  if (type === "html") {
    currentImages = [
      "images/projects/html1.jpg"
    ];
    title.innerText = "Landing Page";
    text.innerText = "Designed responsive landing page using HTML & CSS.";
  }

  currentIndex = 0;
  showImage();

  document.getElementById("modal").style.display = "flex";
}

function showImage() {
  document.getElementById("modal-image").src = currentImages[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
