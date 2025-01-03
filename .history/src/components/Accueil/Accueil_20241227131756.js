import React, { useEffect, useRef, useState } from 'react';
import './acueil.css';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  const navigate = useNavigate();

  // NsihetMjarrebPart: Part for the images and automatic scrolling
  const NsihetMjarrebPart = () => {
    const imageListRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      '/images/event1.avif',
      '/images/event2.avif',
      '/images/event3.avif',
      '/images/event4.avif',
      '/images/event5.avif',
      '/images/event6.avif',
      '/images/event7.avif'
    ];
 
    // Auto change image every 3 seconds
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      // Cleanup interval when component unmounts
      return () => clearInterval(intervalId);
    }, [images.length]);

    // Handle scroll left and right
    const scrollImages = (direction) => {
      if (direction === 'left') {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (direction === 'right') {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    return (
      <div className="nsihet-mjarreb-part">
        <div className="part-label">
          Événements de Saaed - Découvrez nos derniers événements
        </div>

        {/* Container for images with scroll buttons */}
        <div className="nsihet-mjarreb-container">
          <button onClick={() => scrollImages('left')} className="scroll-button left">
            ←
          </button>

          {/* Scrollable image list */}
          <div className="image-list" ref={imageListRef}>
            <img src={images[currentImageIndex]} alt={`Événement ${currentImageIndex + 1}`} />
          </div>

          <button onClick={() => scrollImages('right')} className="scroll-button right">
            →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="main-container">
      <div className="categories-container">
        {/* Category: Santé */}
        <div className="category-container">
          <div className="left-part">
            <div className="category-titles">
              <div className="category-title">Santé</div>
              <div className="category-subtitle">Découvrez les meilleurs produits de santé</div>
            </div>
            <div className="bottom-part" onClick={() => navigate('/sante')}>
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
              <div className="category-subtitle">Découvrez les meilleurs produits sociaux</div>
            </div>
            <div className="bottom-part" onClick={() => navigate('/sociale')}>
              En savoir plus
            </div>
          </div>
          <div className="right-part">
            <img src="/images/soc-removebg-preview.png" alt="Sociale" />
          </div>
        </div>

        {/* Category: Animaux */}
        <div className="category-container">
          <div className="left-part">
            <div className="category-titles">
              <div className="category-title">Animaux</div>
              <div className="category-subtitle">Découvrez les meilleurs produits pour vos animaux</div>
            </div>
            <div className="bottom-part" onClick={() => navigate('/animaux')}>
              En savoir plus
            </div>
          </div>
          <div className="right-part">
            <img src="/images/animaux.avif" alt="Animaux" />
          </div>
        </div>
      </div>

      {/* Nsihet Mjarreb Part */}
      <NsihetMjarrebPart />

      {/* Pourquoi le bénévolat ? Section */}
      <div className="volunteer-section">
        <div className="volunteer-header">
          <h2>Pourquoi devenir bénévole ?</h2>
          <p>Devenez un acteur de changement en rejoignant notre équipe de bénévoles.</p>
        </div>
        <div className="volunteer-cards-container">
          <div className="volunteer-card">
            <FaHandsHelping size={50} />
            <h3>Contribuer à une cause</h3>
            <p>
              Faites la différence en contribuant à des événements qui changent des vies.
            </p>
          </div>
          <div className="volunteer-card">
            <FaHeart size={50} />
            <h3>Apprenez et grandissez</h3>
            <p>
              Développez des compétences tout en apportant de l'aide à ceux qui en ont besoin.
            </p>
          </div>
          <div className="volunteer-card">
            <FaUsers size={50} />
            <h3>Rencontrer de nouvelles personnes</h3>
            <p>
              Élargissez votre réseau et travaillez avec des gens qui partagent vos valeurs.
            </p>
          </div>
        </div> 
      </div>

      {/* Nous sommes qui ? Section */}
      <div className="about-us-section">
        <div className="about-us-header">
          <h2>Nous sommes qui ?</h2>
        </div>
        <div className="about-us-content">
          <div className="about-us-image">
            <img src="/images/equipe.avif" alt="Notre équipe" />
          </div>
          <div className="about-us-text">
            <p>
              Nous sommes une organisation passionnée qui se consacre à améliorer la vie de ceux qui nous entourent. 
              Notre mission est d'organiser des événements significatifs pour notre communauté, tout en offrant des opportunités de bénévolat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Acueil;