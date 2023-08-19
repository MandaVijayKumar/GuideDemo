import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RecommendationModal = ({ isOpen, onClose, onSubmit }) => {
  const [recommendation, setRecommendation] = useState('');

  const handleInputChange = (event) => {
    setRecommendation(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(recommendation);
    
    onClose();
    setRecommendation('')
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Submit Recommendation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="recommendation">
            <Form.Label>Enter your recommendation here:</Form.Label>
            <Form.Control
              as="textarea"
              value={recommendation}
              onChange={handleInputChange}
              placeholder="Enter your recommendation here..."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecommendationModal;
