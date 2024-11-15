import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function EditProfile() {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    name: 'Laila Aouadi',
    email: 'Laila@gmail.com',
    phone: '(216) 51819776',
    address: 'Ariana, Tunisie',
    category: 'Santé'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    // Logique pour sauvegarder les données (API, etc.)
    // Ensuite, redirection vers la page Profile
    navigate('/');
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center mt-5">
        <MDBCol lg="6">
          <MDBCard>
            <MDBCardBody>
              <h3 className="mb-4">Modifier les informations</h3>
              
              <div className="mb-3">
                <label>Nom utilisateur</label>
                <input 
                  type="text" 
                  name="name" 
                  value={userData.name} 
                  onChange={handleChange} 
                  className="form-control" 
                />
              </div>
              <div className="mb-3">
                <label>E-mail</label>
                <input 
                  type="email" 
                  name="email" 
                  value={userData.email} 
                  onChange={handleChange} 
                  className="form-control" 
                />
              </div>
              <div className="mb-3">
                <label>Téléphone</label>
                <input 
                  type="text" 
                  name="phone" 
                  value={userData.phone} 
                  onChange={handleChange} 
                  className="form-control" 
                />
              </div>
              <div className="mb-3">
                <label>Adresse</label>
                <input 
                  type="text" 
                  name="address" 
                  value={userData.address} 
                  onChange={handleChange} 
                  className="form-control" 
                />
              </div>
              <div className="mb-3">
                <label>Catégories</label>
                <input 
                  type="text" 
                  name="category" 
                  value={userData.category} 
                  onChange={handleChange} 
                  className="form-control" 
                />
              </div>

              <div className="d-flex justify-content-end">
                <MDBBtn color="success" onClick={handleSave}>Enregistrer</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
