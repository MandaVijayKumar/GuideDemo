
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import '../Style/GuidAcknowlegement.css'; // CSS styles for animations
import guid from '../Asserts/images/Anuradha.jfif';

const GuidAcknowledgement = () => {
  return (
    <div className="guid-acknowledgement d-flex align-items-center justify-content-center vh-100 bg-light">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={12} lg={12} className="text-center">
            <Image src={guid} roundedCircle className="mb-3" width={150} height={150} alt="Guid" />
            <CSSTransition in={true} appear={true} timeout={2000} classNames="fade-up">
              <Typist cursor={{ show: false }}>
                <h3 className="font-weight-bold mb-3 p-2 text-primary" style={{lineHeight:'2'}}>
                  "I would like to express my deepest gratitude and sincere appreciation to Professor Anuradha, Department of Computer Science and Technology, Dravidian University, Kupam, for their invaluable guidance and support throughout my research. Their expertise, patience, and encouragement have been instrumental in helping me complete this project successfully. Their insightful feedback and constructive criticism have been invaluable in shaping my research and enhancing its quality. I have learned so much from their mentorship and will always be grateful for their contributions to my academic and personal growth. Thank you for believing in me and for sharing your knowledge and expertise with me. It has been an honor to work with you, and I hope to continue to learn from you in the future."
                </h3>
              </Typist>
            </CSSTransition>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GuidAcknowledgement;


