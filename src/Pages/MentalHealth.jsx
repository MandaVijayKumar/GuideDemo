import React from 'react';
import styled from 'styled-components';
import AcademicSupport from '../Components/AcademicSupport';  // Assuming you have named and saved them as such
import PersonalSupport from '../Components/PersonalSupport';
import RelationshipSupport from '../Components/RelationshipSupport';
import MoneySupport from '../Components/MoneySupport';
import BullyingSupport from '../Components/BullyingSupport';
import HealthIssues from '../Components/HealthIssues';


const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 16px;
  margin-top: 1rem;
`;

const MentalHealth = () => {
  return (
    <div>
      <Title>Wellness and Support Hub</Title>
      <Container>
        <AcademicSupport />
        <PersonalSupport />
        <RelationshipSupport />
        <MoneySupport />
        <BullyingSupport />
        <HealthIssues/>
      </Container>
    </div>
  );
};

export default MentalHealth;
