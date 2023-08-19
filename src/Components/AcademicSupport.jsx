// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 600px;
//   margin: 50px auto;
//   padding: 20px;
//   border: 1px solid #e0e0e0;
//   border-radius: 5px;
//   box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   text-align: center;
// `;

// const QuestionText = styled.p`
//   font-size: 18px;
//   margin: 20px 0;
// `;

// const OptionButton = styled.button`
//   display: block;
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: none;
//   background-color: #007BFF;
//   color: white;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const questions = [
//   {
//     text: 'Do you find it difficult to manage your time effectively?',
//     options: ['Yes', 'No', 'Sometimes'],
//   },
//   {
//     text: 'Do you struggle to understand the course material?',
//     options: ['Yes', 'No', 'Sometimes'],
//   },
//   {
//     text: 'Do you feel that classroom lectures are too fast-paced?',
//     options: ['Yes', 'No', 'Sometimes'],
//   },
//   {
//     text: 'Have you faced challenges with group assignments or projects?',
//     options: ['Always', 'Often', 'Rarely', 'Never'],
//   },
//   {
//     text: 'Do you find it hard to motivate yourself to study?',
//     options: ['Yes', 'No', 'Sometimes'],
//   },
//   {
//     text: 'Do you have difficulty finding or using academic resources (e.g., library, online platforms)?',
//     options: ['Yes', 'No', 'Sometimes'],
//   },
//   {
//     text: 'Have you ever felt overwhelmed by the number of assignments or exams?',
//     options: ['Always', 'Often', 'Rarely', 'Never'],
//   },
//   {
//     text: 'Do you feel that you have adequate support from teaching staff (e.g., professors, teaching assistants)?',
//     options: ['Yes', 'No', 'Sometimes'],
//   },
//   {
//     text: 'Are you satisfied with the feedback you receive on your assignments?',
//     options: ['Yes', 'No', 'Sometimes'],
//   },
//   {
//     text: 'Have you ever considered dropping a course due to its difficulty?',
//     options: ['Yes', 'No', 'Only once'],
//   },
//   // You can continue to add more questions as needed
// ];


// const MentalHealth = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [responses, setResponses] = useState([]);

//   const handleOptionClick = (option) => {
//     // Save the question and answer to state
//     const currentQuestion = questions[currentQuestionIndex].text;
//     setResponses([...responses, { question: currentQuestion, answer: option }]);

//     // Move to the next question or finish if it's the last one
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       console.log('All responses:', responses.concat([{ question: currentQuestion, answer: option }]));
//       // Here, you can handle the completion of the survey, e.g., sending the data to an API
//     }
//   };

//   return (
//     <Container>
//       <Title>Academic Support</Title>
//       <QuestionText>{questions[currentQuestionIndex].text}</QuestionText>
//       {questions[currentQuestionIndex].options.map((option, index) => (
//         <OptionButton key={index} onClick={() => handleOptionClick(option)}>
//           {option}
//         </OptionButton>
//       ))}
//     </Container>
//   );
// };

// export default MentalHealth;
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
  background-color: #007BFF;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
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


const questions = [
  {
    text: 'Do you find it difficult to manage your time effectively?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: 'Do you struggle to understand the course material?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: 'Do you feel that classroom lectures are too fast-paced?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: 'Have you faced challenges with group assignments or projects?',
    options: ['Always', 'Often', 'Rarely', 'Never'],
  },
  {
    text: 'Do you find it hard to motivate yourself to study?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: 'Do you have difficulty finding or using academic resources (e.g., library, online platforms)?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: 'Have you ever felt overwhelmed by the number of assignments or exams?',
    options: ['Always', 'Often', 'Rarely', 'Never'],
  },
  {
    text: 'Do you feel that you have adequate support from teaching staff (e.g., professors, teaching assistants)?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: 'Are you satisfied with the feedback you receive on your assignments?',
    options: ['Yes', 'No', 'Sometimes'],
  },
  {
    text: 'Have you ever considered dropping a course due to its difficulty?',
    options: ['Yes', 'No', 'Only once'],
  },
  {
    text: 'Have you ever felt that being a female student has affected your academic experience?',
    options: ['Yes', 'No', 'Not sure'],
  },
  {
    text: 'Do you feel that there are adequate resources/support specifically for female students?',
    options: ['Yes', 'No', 'Sometimes', 'Not sure'],
  },
  {
    text: 'Have you ever faced gender-based discrimination or bias in the academic environment?',
    options: ['Yes', 'No', 'Not sure'],
  }
  // You can continue to add more questions as needed
];


const AcademicSupport = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    const currentQuestion = questions[currentQuestionIndex].text;
    setResponses([...responses, { question: currentQuestion, answer: option }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    console.log('All responses:', responses, 'Feedback:', feedback);
    // Handle the submission, e.g., sending the data to an API or informing the user of completion
  };

  if (currentQuestionIndex === questions.length-1) {
    // All questions have been answered, show the feedback input
    return (
      <Container>
        <Title>Academic Support</Title>
        <QuestionText>Please share anything else related to academics:</QuestionText>
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
      <Title>Academic Support</Title>
      <QuestionText>{questions[currentQuestionIndex].text}</QuestionText>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <OptionButton key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </OptionButton>
      ))}
    </Container>
  );
};

export default AcademicSupport;




