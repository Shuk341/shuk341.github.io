// Typing
let text = "WordPress | Shopify | Wix | Bootstrap";
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

// Modal
function openModal(type) {
  let title = document.getElementById("modal-title");
  let text = document.getElementById("modal-text");

  if (type === "wp") {
    title.innerText = "Business Website";
    text.innerText = "Developed a responsive WordPress website using Elementor/Divi with focus on UI, performance and mobile optimization.";
  }

  if (type === "shopify") {
    title.innerText = "E-commerce Store";
    text.innerText = "Built Shopify store with product pages, cart system and optimized user experience.";
  }

  if (type === "html") {
    title.innerText = "Landing Page";
    text.innerText = "Created responsive landing page using HTML and CSS with clean UI.";
  }

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
