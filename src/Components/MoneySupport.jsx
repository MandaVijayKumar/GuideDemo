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
  background-color: #FFA500;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FF8C00;
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

const financeQuestions = [
  {
    text: '💸 Do you often find yourself struggling to manage your monthly budget?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '📚 Are the costs of textbooks and study materials a concern for you?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🏠 Is finding affordable housing or accommodation a challenge?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🍲 Do you sometimes skip meals due to financial constraints?',
    options: ['Yes', 'No', 'Rarely'],
  },
  {
    text: '🛍️ Are you able to afford basic necessities comfortably?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '📉 Have you ever been in debt or borrowed money to support your studies?',
    options: ['Yes', 'No', 'Only once'],
  },
  {
    text: '🤝 Are you aware of financial support services or scholarships available to you?',
    options: ['Yes', 'No', 'Not fully aware'],
  },
  // Additional finance-related questions can be added as needed...
];

const MoneySupport = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    const currentQuestion = financeQuestions[currentQuestionIndex].text;
    setResponses([...responses, { question: currentQuestion, answer: option }]);

    if (currentQuestionIndex < financeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    console.log('All responses:', responses, 'Feedback:', feedback);
    // Handle the submission, e.g., sending the data to an API or informing the user of completion
  };

  if (currentQuestionIndex === financeQuestions.length-1) {
    return (
      <Container>
        <Title>Financial Support</Title>
        <QuestionText>Please share any additional financial concerns or details:</QuestionText>
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
      <Title>Financial Support</Title>
      <QuestionText>{financeQuestions[currentQuestionIndex].text}</QuestionText>
      {financeQuestions[currentQuestionIndex].options.map((option, index) => (
        <OptionButton key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </OptionButton>
      ))}
    </Container>
  );
};

export default MoneySupport;
