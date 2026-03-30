// Typing Effect
//let text = "Web Developer | WordPress | Shopify Expert";
let text = "Web Developer | WordPress, Shopify & Frontend Specialist  <br> Building responsive, high-performing websites with a data-driven approach";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Filter Projects
function filterProjects(category) {
  let cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = card.classList.contains(category) ? 'block' : 'none';
    }
  });
}
