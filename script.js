// Typing Effect
let text = "Web Developer | WordPress | Shopify | Wix";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Filter + Active Tab
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

// Modal
function openModal(type) {
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");

  if (type === "wp") {
    title.innerText = "Business Website (WordPress)";
    text.innerText = "Developed responsive WordPress website using Elementor/Divi with modern UI and performance optimization.";
  }

  if (type === "shopify") {
    title.innerText = "Shopify Store";
    text.innerText = "Built e-commerce store with product pages, cart system and optimized UX.";
  }

  if (type === "html") {
    title.innerText = "Landing Page";
    text.innerText = "Designed responsive landing page using HTML and CSS with clean UI.";
  }

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
