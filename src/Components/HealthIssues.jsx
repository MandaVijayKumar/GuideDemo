import React, { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const QuestionText = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;

const OptionButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  background-color: #28a745; /* Updated color */
  color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e7e34; /* Updated hover color */
  }
`;


const FeedbackInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 16px;
  height: 150px;
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  background-color: #34c759;
  color: white;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2aa04e;
  }
`;


// The styled components remain mostly the same, so they're not repeated here.
// But you should still include them in your actual implementation.

const healthQuestions = [
  {
    text: '🤒 Do you frequently experience health issues while studying?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '💊 Do you have regular access to necessary medications or treatments?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🥦 Do you believe you have a balanced diet?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🏋️‍♂️ Are you able to maintain regular physical activity?',
    options: ['Yes', 'No', 'Rarely'],
  },
  {
    text: '🧘‍♀️ Do you practice mindfulness or relaxation techniques?',
    options: ['Yes', 'No', 'Occasionally'],
  },
  {
    text: '😴 Do you get adequate sleep regularly?',
    options: ['Yes', 'No', 'Most of the time'],
  },
  {
    text: '👥 Are you aware of the student health services available to you?',
    options: ['Yes', 'No', 'Not fully aware'],
  },
  // Additional health-related questions can be added as needed...
];

const HealthIssues = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    const currentQuestion = healthQuestions[currentQuestionIndex].text;
    setResponses([...responses, { question: currentQuestion, answer: option }]);

    if (currentQuestionIndex < healthQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    console.log('All responses:', responses, 'Feedback:', feedback);
    // Handle the submission, e.g., sending the data to an API or informing the user of completion
  };

  if (currentQuestionIndex === healthQuestions.length-1) {
    return (
      <Container>
        <Title>Student Health Support</Title>
        <QuestionText>Please share any additional health concerns or details:</QuestionText>
        <FeedbackInput
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback or comments here..."
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Student Health Support</Title>
      <QuestionText>{healthQuestions[currentQuestionIndex].text}</QuestionText>
      {healthQuestions[currentQuestionIndex].options.map((option, index) => (
        <OptionButton key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </OptionButton>
      ))}
    </Container>
  );
};

export default HealthIssues;
