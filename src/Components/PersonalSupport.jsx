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
  background-color: #9b59b6;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8e44ad;
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

const personalQuestions = [
  {
    text: '❤️ Do you often feel lonely or isolated?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '😔 Do you experience feelings of sadness or hopelessness?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '😰 Are you frequently anxious or stressed?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '👥 Do you struggle with maintaining personal relationships?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '💤 Do you have trouble sleeping or maintaining a regular sleep schedule?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🍔 Do you have concerns about eating habits or body image?',
    options: ['Always', 'Often', 'Rarely', 'Never'],
  },
  {
    text: '🍺 Have you ever felt you should cut down on drinking or drug use?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🌍 Do you sometimes feel out of place or struggle with your identity?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  // You can add more personal questions as needed...
];

const PersonalSupport = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    const currentQuestion = personalQuestions[currentQuestionIndex].text;
    setResponses([...responses, { question: currentQuestion, answer: option }]);

    if (currentQuestionIndex < personalQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    console.log('All responses:', responses, 'Feedback:', feedback);
    // Handle the submission, e.g., sending the data to an API or informing the user of completion
  };

  if (currentQuestionIndex === personalQuestions.length-1) {
    return (
      <Container>
        <Title>Personal Support</Title>
        <QuestionText>Please share any additional personal concerns:</QuestionText>
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
      <Title>Personal Support</Title>
      <QuestionText>{personalQuestions[currentQuestionIndex].text}</QuestionText>
      {personalQuestions[currentQuestionIndex].options.map((option, index) => (
        <OptionButton key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </OptionButton>
      ))}
    </Container>
  );
};

export default PersonalSupport;
