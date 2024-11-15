import React from 'react';
import './profile.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


export default function Profile({ userData }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit-profile');
  };
  return (
    <section>
      <MDBContainer>
        <MDBRow>
          {/* Profile Card */}
          <MDBCol lg="4" className="mb-4">
            <MDBCard>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="./images/profile2.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <h5 className="mt-3">Laila Aouadi</h5>
                <p className="text-muted">Full Stack Developer</p>
                <p className="text-muted">Ariana, Tunisie</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={handleEditClick} style={{ backgroundColor: '#4ECDC4' }}>Edit</MDBBtn>
                  <MDBBtn outline className="ms-1" style={{ borderColor: '#4ECDC4', color: '#4ECDC4' }}>Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* Social Links */}
            <MDBCard className="mt-4">
              <MDBCardBody className="p-0">
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fas icon="globe" style={{ color: '#4ECDC4' }} />
                    <span className="ms-3">https://saaed.com</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fab icon="github" style={{ color: '#333' }} />
                    <span className="ms-3" color="">layla-ao</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fab icon="twitter" style={{ color: '#4ECDC4' }} />
                    <span className="ms-3">@lailaa</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fab icon="instagram" style={{ color: '#4ECDC4' }} />
                    <span className="ms-3">laila-ao</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fab icon="facebook" style={{ color: '#4ECDC4' }} />
                    <span className="ms-3">laila-ao</span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Personal Information Card */}
          <MDBCol lg="8" className="mb-4">
            <MDBCard>
              <MDBCardBody>
              <MDBRow>
                  <MDBCol sm="3"><strong>Nom utilisateur</strong></MDBCol>
                  <MDBCol sm="9" className="text-muted">{userData.name}</MDBCol> {/* Utilise userData.name */}
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3"><strong>E-mail</strong></MDBCol>
                  <MDBCol sm="9" className="text-muted">{userData.email}</MDBCol> {/* Utilise userData.email */}
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3"><strong>Téléphone</strong></MDBCol>
                  <MDBCol sm="9" className="text-muted">{userData.phone}</MDBCol> {/* Utilise userData.phone */}
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3"><strong>Adresse</strong></MDBCol>
                  <MDBCol sm="9" className="text-muted">{userData.address}</MDBCol> {/* Utilise userData.address */}
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3"><strong>Catégories</strong></MDBCol>
                  <MDBCol sm="9" className="text-muted">{userData.category}</MDBCol> {/* Utilise userData.category */}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            {/* Project Status Cards */}
            <MDBRow className="mt-4">
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <h6 className="font-italic" style={{ color: '#282929' }}>Activités Bénévolats</h6>
                    <ProjectProgress title="Web Design" progress={80} style={{ color: '#4ECDC4' }}/>
                    <ProjectProgress title="Website Markup" progress={72} style={{ color: '#4ECDC4' }}/>
                    <ProjectProgress title="One Page" progress={89} />
                    <ProjectProgress title="Mobile Template" progress={55} />
                    <ProjectProgress title="Backend API" progress={66} />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <h6 className="font-italic" style={{ color: '#282929' }}>Assignment Project Status</h6>
                    <ProjectProgress title="Web Design" progress={80} />
                    <ProjectProgress title="Website Markup" progress={72} />
                    <ProjectProgress title="One Page" progress={89} />
                    <ProjectProgress title="Mobile Template" progress={55} />
                    <ProjectProgress title="Backend API" progress={66} />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

// Component for displaying individual project progress
function ProjectProgress({ title, progress }) {
  return (
    <>
      <p className="mb-1" style={{ fontSize: '.77rem' }}>{title}</p>
      <MDBProgress className="rounded mb-3">
        <MDBProgressBar width={progress} valuemin={0} valuemax={100} />
      </MDBProgress>
    </>
  );
}