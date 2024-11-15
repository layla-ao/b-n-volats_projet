import React from 'react';
import './footer.css';  // Assurez-vous d'avoir ce fichier CSS pour le style
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <footer className="footer">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </MDBCol>
          <MDBCol md="6" className="text-end">
            {/* Vérifiez les icônes et les liens */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="facebook" style={{ color: '#3b5998' }} className="mx-2" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="twitter" style={{ color: '#55acee' }} className="mx-2" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="instagram" style={{ color: '#ac2bac' }} className="mx-2" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="linkedin" style={{ color: '#0077b5' }} className="mx-2" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </footer>
  );
};

export default Footer;
