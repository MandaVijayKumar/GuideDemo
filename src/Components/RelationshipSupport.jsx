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
  background-color: #FF69B4;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FF1493;
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

const loveQuestions = [
  {
    text: '💔 Have you recently experienced a breakup or heartbreak?',
    options: ['Yes', 'No', 'Rather not say'],
  },
  {
    text: '😕 Do you feel misunderstood or unsupported in your relationship?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🤷 Are you uncertain about your feelings towards someone?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🥺 Do you feel distant or disconnected from your partner?',
    options: ['Yes', 'No', 'Rather not say'],
  },
  {
    text: '💬 Are communication issues affecting your relationship?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🚫 Have boundaries been a challenge in your relationship?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🤯 Do you find love or relationship matters distracting you from studies?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: '🥰 Are you happy in your current relationship?',
    options: ['Yes', 'No', 'It\'s complicated'],
  },
  // More questions related to love or relationship can be added as needed...
];

const RelationshipSupport = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    const currentQuestion = loveQuestions[currentQuestionIndex].text;
    setResponses([...responses, { question: currentQuestion, answer: option }]);

    if (currentQuestionIndex < loveQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    console.log('All responses:', responses, 'Feedback:', feedback);
    // Handle the submission, e.g., sending the data to an API or informing the user of completion
  };

  if (currentQuestionIndex === loveQuestions.length-1) {
    return (
      <Container>
        <Title>Love & Relationship Support</Title>
        <QuestionText>Please share any additional love or relationship concerns:</QuestionText>
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
      <Title>Love & Relationship Support</Title>
      <QuestionText>{loveQuestions[currentQuestionIndex].text}</QuestionText>
      {loveQuestions[currentQuestionIndex].options.map((option, index) => (
        <OptionButton key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </OptionButton>
      ))}
    </Container>
  );
};

export default RelationshipSupport;
