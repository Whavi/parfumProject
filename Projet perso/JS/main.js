// Initialise le carrousel avec la bibliothèque Slick
$(document).ready(function(){
    $('.carousel-container').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
  });
  

  // Gestion du panier
const panier = [];

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  afficherPanier();
}

function afficherPanier() {
  const panierPopup = document.getElementById('panier-popup');
  const totalElement = document.getElementById('total');
  const articleList = document.querySelector('.article-list');

  // Efface le contenu actuel
  articleList.innerHTML = '';

  // Affiche chaque article dans le panier
  panier.forEach((article) => {
    const li = document.createElement('li');
    li.textContent = `${article.nom} : $${article.prix.toFixed(2)}`;
    articleList.appendChild(li);
  });

  // Calcule et affiche le total
  const total = panier.reduce((acc, article) => acc + article.prix, 0);
  totalElement.textContent = total.toFixed(2);

  // Affiche le panier popup
  panierPopup.style.display = 'block';
}

// Gestion de l'événement de survol pour afficher le panier
const panierPopup = document.getElementById('panier-popup');
const panierElement = document.getElementById('panier');

panierElement.addEventListener('mouseover', () => {
  if (panier.length > 0) {
    panierPopup.style.display = 'block';
  }
});

panierElement.addEventListener('mouseout', () => {
  panierPopup.style.display = 'none';
});
  