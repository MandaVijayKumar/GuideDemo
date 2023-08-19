
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import MentalHealthForm from '../Components/MentalHealthForm';
import { authContext } from '../Context';
import { Row, Col } from 'react-bootstrap'; // Removed Table from here
import { Paper, Typography, Button } from '@mui/material';


const Container = styled.div`
  margin: 2em 0;
`;

const StyledPaper = styled(Paper)`
  margin: 2em 0;
  padding: 2em;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 1em;
`;

const StyledButton = styled(Button)`
  margin: 1em 0;
  text-align: center
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2em 0;

  thead {
    background-color: #f7f7f7;
  }

  th, td {
    padding: 0.5em;
    border: 1px solid #e0e0e0;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const CenterText = styled.h2`
  text-align: center;
  margin: 2em 0;
`;

const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

function ChatWithExperts() {
  const userData = useContext(authContext);
  const { user } = userData;
  const [isShare, setIsShare] = useState(true);
  const [problemData, setProblemData] = useState([]);

  const handleFormSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:5001/submit', formData);
      alert('Successfully submitted!');
      setIsShare(false);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/recommendations/${user.userEmail}`);
        const recommendations = response.data.recommendations;
        setProblemData(recommendations);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, [user.userEmail]);

  const experts = [
    {
      name: 'Dr. John Smith',
      profilePic: 'https://picsum.photos/id/1018/50/50', // Reduced profile pic size
      designation: 'Clinical Psychologist',
      address: '123 Main St, Anytown USA',
      whatsapp: 'https://wa.me/123456789',
      facebook: 'https://www.facebook.com/drjohnsmith',
      instagram: 'https://www.instagram.com/drjohnsmith',
      twitter: 'https://www.twitter.com/drjohnsmith',
      userId: 'doctor1',
      password: 'password'
    },
    {
      name: 'Dr. Jane Doe',
      profilePic: 'https://picsum.photos/id/1025/50/50', // Reduced profile pic size
      designation: 'Counseling Psychologist',
      address: '456 Oak St, Anytown USA',
      whatsapp: 'https://wa.me/987654321',
      facebook: 'https://www.facebook.com/drjanedoe',
      instagram: 'https://www.instagram.com/drjanedoe',
      twitter: 'https://www.twitter.com/drjanedoe',
      userId: 'doctor2',
      password: 'password'
    },
  ];

  return (
    <Container>
      <StyledPaper elevation={3}>
        <StyledTypography variant="body1" align="justify">
          We understand that navigating through academic and personal challenges can be overwhelming...
        </StyledTypography>

        <StyledButton variant="contained" color="primary" onClick={() => setIsShare(!isShare)}>
          {isShare ? 'Hide Form' : 'Share Your Problems With Experts - Click Here'}
        </StyledButton>

        {isShare && (
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6}>
              <MentalHealthForm onFormSubmit={handleFormSubmit} />
            </Col>
          </Row>
        )}
      </StyledPaper>

      {problemData.length !== 0 && (
        <div>
          <h5>Experts recommendations...</h5>
          <StyledTable>
            <thead>
              <tr>
                <th>Problem Type</th>
                <th>Problem Details</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {problemData.map((problem, index) => (
                <tr key={index}>
                  <td>{problem.problemType}</td>
                  <td>{problem.details}</td>
                  <td>{problem.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </div>
      )}

      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <CenterText>Chat with Experts</CenterText>
          <StyledTable striped bordered hover responsive>
            <thead>
              <tr>
                <th>Profile Pic</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Address</th>
                <th>WhatsApp</th>
                <th>Facebook</th>
                <th>Instagram</th>
                <th>Twitter</th>
              </tr>
            </thead>
            <tbody>
              {experts.map((expert, index) => (
                <tr key={index}>
                  <td>
                    <ProfilePic src={expert.profilePic} alt={expert.name} />
                  </td>
                  <td>{expert.name}</td>
                  <td>{expert.designation}</td>
                  <td>{expert.address}</td>
                  <td>
                    <StyledAnchor href={expert.whatsapp} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp />
                    </StyledAnchor>
                  </td>
                  <td>
                    <StyledAnchor href={expert.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </StyledAnchor>
                  </td>
                  <td>
                    <StyledAnchor href={expert.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </StyledAnchor>
                  </td>
                  <td>
                    <StyledAnchor href={expert.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </StyledAnchor>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </Col>
      </Row>
    </Container>
  );
  
}

export default ChatWithExperts;


