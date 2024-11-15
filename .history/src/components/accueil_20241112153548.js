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
      .nsihet-mjarreb-container {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.image-list {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.image-list img {
  width: 150px; /* Ajustez la taille selon vos préférences */
  margin: 0 5px;
  border-radius: 8px;
}

.scroll-button {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.scroll-button.left {
  left: 0;
}

.scroll-button.right {
  right: 0;
}

    </div>
  );
};
export default Accueil;
