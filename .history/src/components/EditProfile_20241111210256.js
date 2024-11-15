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

export default function EditProfile({ userData, updateUserData }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    updateUserData(formData); // Met à jour les données dans l'état global
    navigate('/Profile'); // Redirige vers la page Profile
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
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Téléphone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Adresse</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Catégories</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
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
