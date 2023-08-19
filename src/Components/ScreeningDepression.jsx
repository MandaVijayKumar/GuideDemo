import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  card: {
    width: 400,
    padding: theme.spacing(4),
  },
  heading: {
    marginBottom: theme.spacing(4),
  },
  question: {
    marginBottom: theme.spacing(2),
  },
  optionButton: {
    marginBottom: theme.spacing(2),
    width: '100%',
    fontWeight: 'bold',
    textTransform: 'none',
  },
  resultButton: {
    marginTop: theme.spacing(3),
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  recommendationContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  recommendationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
}));

const DepressionTest = () => {
  const classes = useStyles();

  const questions = [
    {
      id: 1,
      text: 'Little interest or pleasure in doing things?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Engage in activities that bring you joy and relaxation.' },
        { value: 1, text: 'Several days', recommendation: 'Seek professional help for further evaluation and support.' },
        { value: 2, text: 'More than half the days', recommendation: 'Consider talking to a therapist or counselor.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Reach out to your support network of friends and family.' }
      ]
    },
    {
      id: 2,
      text: 'Feeling down, depressed, or hopeless?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Consider seeking professional help for further evaluation and support.' },
        { value: 1, text: 'Several days', recommendation: 'You may benefit from talking to a therapist or counselor.' },
        { value: 2, text: 'More than half the days', recommendation: 'Reach out to your support network of friends and family.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Engage in activities that bring you joy and relaxation.' }
      ]
    },
    {
      id: 3,
      text: 'Trouble falling asleep, staying asleep, or sleeping too much?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Establish a regular sleep schedule and practice good sleep hygiene.' },
        { value: 1, text: 'Several days', recommendation: 'Consider talking to a healthcare professional for sleep-related concerns.' },
        { value: 2, text: 'More than half the days', recommendation: 'Seek medical advice for further evaluation and support.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Consult a healthcare professional for a comprehensive assessment.' }
      ]
    },
    {
      id: 4,
      text: 'Feeling tired or having little energy?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Engage in activities that promote relaxation and self-care.' },
        { value: 1, text: 'Several days', recommendation: 'Consider seeking professional help for further evaluation and support.' },
        { value: 2, text: 'More than half the days', recommendation: 'Consult a healthcare professional to address your fatigue.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Reach out to your support network for assistance and support.' }
      ]
    },
    {
      id: 5,
      text: 'Poor appetite or overeating?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Ensure a balanced diet and try to maintain regular eating habits.' },
        { value: 1, text: 'Several days', recommendation: 'Consider talking to a healthcare professional for further evaluation.' },
        { value: 2, text: 'More than half the days', recommendation: 'Seek professional help to address your eating patterns.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment.' }
      ]
    },
    {
      id: 6,
      text: 'Feeling bad about yourself or that you are a failure or have let yourself or your family down?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Practice self-compassion and focus on your positive qualities.' },
        { value: 1, text: 'Several days', recommendation: 'Consider seeking professional help for further evaluation and support.' },
        { value: 2, text: 'More than half the days', recommendation: 'Talk to a therapist or counselor to address your feelings.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Reach out to your support network for assistance and validation.' }
      ]
    },
    {
      id: 7,
      text: 'Trouble concentrating on things such as reading the newspaper or watching television?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Create a conducive environment for concentration and practice mindfulness.' },
        { value: 1, text: 'Several days', recommendation: 'Consider seeking professional help for further evaluation and support.' },
        { value: 2, text: 'More than half the days', recommendation: 'Consult a healthcare professional to address your concentration difficulties.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Seek assistance from a healthcare professional for a comprehensive assessment.' }
      ]
    },
    {
      id: 8,
      text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Engage in activities that promote relaxation and stress reduction.' },
        { value: 1, text: 'Several days', recommendation: 'Consider seeking professional help for further evaluation and support.' },
        { value: 2, text: 'More than half the days', recommendation: 'Talk to a healthcare professional to address your symptoms.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment.' }
      ]
    },
    {
      id: 9,
      text: 'Thoughts that you would be better off dead or of hurting yourself in some way?',
      options: [
        { value: 0, text: 'Not at all', recommendation: 'Reach out to your support network of friends and family for assistance.' },
        { value: 1, text: 'Several days', recommendation: 'Seek professional help immediately to ensure your safety and well-being.' },
        { value: 2, text: 'More than half the days', recommendation: 'Contact a mental health professional for immediate assistance and support.' },
        { value: 3, text: 'Nearly every day', recommendation: 'Call emergency services or a helpline right away for immediate help.' }
      ]
    }
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  

  const handleAnswer = (value) => {
    setSelectedOption(value);
    setShowRecommendation(true);
    setTotalScore(totalScore + value);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowRecommendation(false);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setSelectedOption(null);
    setCurrentQuestion(0);
    setShowRecommendation(false);
    setShowResult(false);
    setTotalScore(0);
  };

  if (showResult) {
    let result = '';
    let finalRecommendation = '';

// Define result ranges and interpretations for the depression test
// Adjust the score ranges and interpretations based on your desired scale
if (totalScore >= 0 && totalScore <= 4) {
  result = 'Minimal or no depression';
  finalRecommendation = 'Continue prioritizing your mental well-being and maintaining a healthy balance between your academic responsibilities and self-care. If you notice any changes or challenges, consider reaching out to a school counselor or trusted adult for support and guidance.';
 
} else if (totalScore >= 5 && totalScore <= 9) {
  result = 'Mild depression';
  finalRecommendation = 'It is important to prioritize self-care activities and stress management techniques. Consider talking to a school counselor or trusted adult about what you are experiencing. They can provide support and connect you with appropriate resources.';
  
} else if (totalScore >= 10 && totalScore <= 14) {
  result = 'Moderate depression';
  finalRecommendation = 'Reach out to a school/college mental health counselor or mental health professional who can provide guidance and support. They can help you develop coping strategies, explore therapy options, and communicate with teachers or professors about your needs.';
 
} else if (totalScore >= 15 && totalScore <= 19) {
  result = 'Moderately severe depression';
  finalRecommendation = 'It is crucial to seek professional help from a school/college mental health counselor, therapist, or mental health provider. They can assist you in developing a comprehensive plan to manage your symptoms, address academic challenges, and explore support services available to you.';
  
} else {
  result = 'Severe depression';
  finalRecommendation= 'Urgently seek help and support from a school counselor, therapist, or mental health professional. They can work with you, your parents/guardians, and educational staff to ensure your well-being and discuss potential accommodations to support your academic journey.';
  
}

    return (
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.resultContainer}>
            <Typography variant="h5" className={classes.heading}>
              Depression Test Result
            </Typography>
            <Typography variant="body1" gutterBottom>
              Your score: {totalScore}
            </Typography>
            <Typography variant="body1" gutterBottom className='text-danger'>
              Interpretation: {result}
            </Typography>
            <Typography variant="" gutterBottom>
              Recommendations: {finalRecommendation}
            </Typography>
            <Button variant="contained" color="primary" onClick={resetTest} className={classes.resultButton}>
              Retake Test
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" className={classes.heading}>
            Depression Test
          </Typography>
          <Typography variant="body1" className={classes.question}>
            {currentQuestionData.text}
          </Typography>
          <div>
            {currentQuestionData.options.map((option) => (
              <Button
                key={option.value}
                variant="contained"
                color={selectedOption === option.value?"secondary":"primary"}
                onClick={() => handleAnswer(option.value)}
                className={classes.optionButton}
              >
                {option.text}
              </Button>
            ))}
          </div>
          {showRecommendation && (
             <div className={classes.recommendationContainer}>
             <Typography variant="body1" gutterBottom className={classes.recommendationText}>
               Recommendation: {currentQuestionData.options.find((option) => option.value === selectedOption).recommendation}
             </Typography>
           </div>
          )}
          <Button variant="contained" color="primary" onClick={handleNextQuestion} disabled={selectedOption===null? true: false}>
            {currentQuestion === questions.length - 1 ? 'Get Result' : 'Next Question'}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DepressionTest;

