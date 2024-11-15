import React from 'react';
import './profile.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Profile() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 text-center">
              <MDBCardBody>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid 
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBListGroup flush className="rounded-3">
                  {[
                    { icon: "globe", color: "warning", text: "https://mdbootstrap.com" },
                    { icon: "github", color: "#333333", text: "mdbootstrap" },
                    { icon: "twitter", color: "#55acee", text: "@mdbootstrap" },
                    { icon: "instagram", color: "#ac2bac", text: "mdbootstrap" },
                    { icon: "facebook", color: "#3b5998", text: "mdbootstrap" }
                  ].map((item, index) => (
                    <MDBListGroupItem key={index} className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon={`${item.icon} fa-lg`} style={{ color: item.color }} />
                      <MDBCardText>{item.text}</MDBCardText>
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                {[
                  { label: "Full Name", value: "Johnatan Smith" },
                  { label: "Email", value: "example@example.com" },
                  { label: "Phone", value: "(097) 234-5678" },
                  { label: "Mobile", value: "(098) 765-4321" },
                  { label: "Address", value: "San Francisco, CA" }
                ].map((field, index) => (
                  <MDBRow key={index}>
                    <MDBCol sm="3">
                      <MDBCardText>{field.label}</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{field.value}</MDBCardText>
                    </MDBCol>
                    {index < 4 && <hr />}
                  </MDBRow>
                ))}
              </MDBCardBody>
            </MDBCard>
            <MDBRow>
              {[1, 2].map((_, index) => (
                <MDBCol md="6" key={index}>
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">Assignment</span> Project Status
                      </MDBCardText>
                      {[
                        { text: "Web Design", progress: 80 },
                        { text: "Website Markup", progress: 72 },
                        { text: "One Page", progress: 89 },
                        { text: "Mobile Template", progress: 55 },
                        { text: "Backend API", progress: 66 }
                      ].map((item, i) => (
                        <div key={i}>
                          <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>{item.text}</MDBCardText>
                          <MDBProgress className="rounded">
                            <MDBProgressBar width={item.progress} valuemin={0} valuemax={100} />
                          </MDBProgress>
                        </div>
                      ))}
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
