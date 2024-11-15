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

export default function Profile() {
  return (
    <section>
      
      <MDBContainer>
        <MDBRow>
          {/* Profile Card */}
          <MDBCol lg="4" className="mb-4">
            <MDBCard>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <h5 className="mt-3">Laila Aouadi</h5>
                <p className="text-muted">Full Stack Developer</p>
                <p className="text-muted">Ariana, Tunisie</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* Social Links */}
            <MDBCard className="mt-4">
              <MDBCardBody className="p-0">
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fas icon="globe" className="text-warning" />
                    <span className="ms-3">https://mdbootstrap.com</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fab icon="github" style={{ color: '#333' }} />
                    <span className="ms-3">mdbootstrap</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fab icon="twitter" style={{ color: '#55acee' }} />
                    <span className="ms-3">@mdbootstrap</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fab icon="instagram" style={{ color: '#ac2bac' }} />
                    <span className="ms-3">mdbootstrap</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex align-items-center">
                    <MDBIcon fab icon="facebook" style={{ color: '#3b5998' }} />
                    <span className="ms-3">mdbootstrap</span>
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
                  <MDBCol sm="9" className="text-muted">Laila Aouadi</MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3"><strong>E-mail</strong></MDBCol>
                  <MDBCol sm="9" className="text-muted">Laila@gmail.com</MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3"><strong>Téléphone</strong></MDBCol>
                  <MDBCol sm="9" className="text-muted">(216) 51819776</MDBCol>
                </MDBRow>
                
                <hr />
                <MDBRow>
                  <MDBCol sm="3"><strong>Adresse</strong></MDBCol>
                  <MDBCol sm="9" className="text-muted">Ariana, Tunisie</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="3"><strong>Catégories choisi </strong></MDBCol>
                  <MDBCol sm="9" className="text-muted"></MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>

            {/* Project Status Cards */}
            <MDBRow className="mt-4">
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <h6 className="text-primary font-italic">Assignment Project Status</h6>
                    <ProjectProgress title="Web Design" progress={80} />
                    <ProjectProgress title="Website Markup" progress={72} />
                    <ProjectProgress title="One Page" progress={89} />
                    <ProjectProgress title="Mobile Template" progress={55} />
                    <ProjectProgress title="Backend API" progress={66} />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <h6 className="text-primary font-italic">Assignment Project Status</h6>
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
