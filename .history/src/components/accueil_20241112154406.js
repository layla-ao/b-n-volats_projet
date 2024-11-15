import React from 'react';
import './accueil.css';
import { useNavigate } from 'react-router-dom';


function Accueil() {
  const navigate = useNavigate();

  const navigateToCategory = (category) => {
    if (category === 'sante') {
      navigate('/Saaed/publications/categorie/1');
    }
  };
// Renommez la fonction de défilement pour éviter le conflit avec 'scroll'
const scrollImages = (direction) => {
  const container = document.querySelector('.image-list');
  const scrollAmount = 200; // Ajustez cette valeur selon la vitesse de défilement souhaitée
  if (direction === 'left') {
    container.scrollLeft -= scrollAmount;
  } else {
    container.scrollLeft += scrollAmount;
  }
};
  return (
    <div className="main-container">
      <div className="categories-container">
        {/* Category: Santé */}
        <div className="category-container">
          <div className="left-part">
            <div className="category-titles">
              <div className="category-title">Santé</div>
              <div className="category-subtitle">
                Découvrez les meilleurs produits de santé
              </div>
            </div>
            <div className="bottom-part" onClick={() => navigateToCategory('sante')}>
              En savoir plus
            </div>
          </div>
          <div className="right-part">
            <img src='/images/s22.jpg' alt="Santé" />
          </div>
        </div>

        {/* Category: Sociale */}
        <div className="category-container">
          <div className="left-part">
            <div className="category-titles">
              <div className="category-title">Sociale</div>
              <div className="category-subtitle">
                Découvrez les meilleurs produits de santé
              </div>
            </div>
            <div className="bottom-part" onClick={() => navigate('/Saaed/publications/categorie/2')}>
              En savoir plus
            </div>
          </div>
          <div className="right-part">
            <img src="/images/soc-removebg-preview.png" alt="Sociale" />
          </div>
        </div>

        {/* Category: Sentimentale */}
        <div className="category-container">
          <div className="left-part">
            <div className="category-titles">
              <div className="category-title">Animaux</div>
              <div className="category-subtitle">
                Découvrez les meilleurs produits de santé
              </div>
            </div>
            <div className="bottom-part" onClick={() => navigate('/Saaed/publications/categorie/3')}>
              En savoir plus
            </div>
          </div>
          <div className="right-part">
            <img src="/images/animaux.avif" alt="Sentimentale" />
          </div>
        </div>
      </div>

   {/* Nsihet Mjarreb Part */}
   <div className="nsihet-mjarreb-part">
        <div className="part-label">Événement de Saaed...</div>

        {/* Container for images with scroll buttons */}
        <div className="nsihet-mjarreb-container">
          {/* Left scroll button */}
          <button className="scroll-button left" onClick={() => scrollImages('left')}>&#10094;</button>

          {/* Scrollable image list */}
          <div className="image-list">
            <img src="/images/profile2.jpg" alt="Événement 1" />
            <img src="/images/s22.jpg" alt="Événement 2" />
            <img src="/images/sante.jpg" alt="Événement 3" />
            <img src="/images/soc.jpg" alt="Événement 4" />
            <img src="/images/ss.jpg" alt="Événement 5" />

            {/* Ajoutez d'autres images ici */}
          </div>

          {/* Right scroll button */}
          <button className="scroll-button right" onClick={() => scrollImages('right')}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};
export default Accueil;
