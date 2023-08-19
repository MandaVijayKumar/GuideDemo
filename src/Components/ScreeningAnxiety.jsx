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

const AnxietyTest = () => {
  const classes = useStyles();

  const questions = [
        {
          id: 1,
          text: 'Little interest or pleasure in doing things?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'Continue engaging in activities you enjoy.' },
            { value: 1, text: 'Several days', recommendation: 'Try to engage in activities you used to enjoy, even if they do not feel pleasurable at the moment.' },
            { value: 2, text: 'More than half the days', recommendation: 'Consider seeking professional support to address your diminished interest or pleasure in activities.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for further evaluation and support.' },
          ],
        },
        {
          id: 2,
          text: 'Feeling down, depressed, or hopeless?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'Continue practicing self-care and reaching out to supportive individuals in your life.' },
            { value: 1, text: 'Several days', recommendation: 'Consider talking to a mental health professional about your feelings of depression or hopelessness.' },
            { value: 2, text: 'More than half the days', recommendation: 'Seek professional help for further evaluation and support.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and treatment options.' },
          ],
        },
        {
          id: 3,
          text: 'Trouble falling asleep, staying asleep, or sleeping too much?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'Continue practicing good sleep hygiene and healthy sleep habits.' },
            { value: 1, text: 'Several days', recommendation: 'Consider implementing relaxation techniques before bed or seeking professional guidance for sleep difficulties.' },
            { value: 2, text: 'More than half the days', recommendation: 'Talk to a healthcare professional about your sleep disturbances.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and treatment options for sleep disturbances.' },
          ],
        },
        {
          id: 4,
          text: 'Feeling tired or having little energy?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'Ensure you are getting enough rest and practicing self-care.' },
            { value: 1, text: 'Several days', recommendation: 'Consider speaking with a healthcare professional about your fatigue.' },
            { value: 2, text: 'More than half the days', recommendation: 'Seek medical advice for further evaluation and support.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and guidance on managing fatigue.' },
          ],
        },
        {
          id: 5,
          text: 'Poor appetite or overeating?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'Continue practicing healthy eating habits and self-care.' },
            { value: 1, text: 'Several days', recommendation: 'Pay attention to your eating patterns and seek support if you notice significant changes in appetite.' },
            { value: 2, text: 'More than half the days', recommendation: 'Talk to a healthcare professional about your appetite changes.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and guidance on managing appetite changes.' },
          ],
        },
        {
          id: 6,
          text: 'Feeling bad about yourself or that you are a failure or have let yourself or your family down?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'Continue practicing self-care and self-compassion.' },
            { value: 1, text: 'Several days', recommendation: 'Consider reaching out to a mental health professional to address your feelings of self-doubt or inadequacy.' },
            { value: 2, text: 'More than half the days', recommendation: 'Seek professional help for further evaluation and support.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and treatment options.' },
          ],
        },
        {
          id: 7,
          text: 'Trouble concentrating on things, such as reading the newspaper or watching television?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'Continue practicing techniques to improve focus and concentration.' },
            { value: 1, text: 'Several days', recommendation: 'Consider exploring techniques like mindfulness or seeking professional guidance.' },
            { value: 2, text: 'More than half the days', recommendation: 'Talk to a mental health professional for guidance on improving concentration.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Seek professional support to address your persistent difficulty with concentration.' },
          ],
        },
        {
          id: 8,
          text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'Continue practicing healthy coping strategies to manage restlessness or sluggishness.' },
            { value: 1, text: 'Several days', recommendation: 'Consider exploring techniques like exercise or mindfulness to address restlessness or sluggishness.' },
            { value: 2, text: 'More than half the days', recommendation: 'Seek professional help for further evaluation and support.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and guidance on managing restlessness or sluggishness.' },
          ],
        },
        {
          id: 9,
          text: 'Thoughts that you would be better off dead or of hurting yourself in some way?',
          options: [
            { value: 0, text: 'Not at all', recommendation: 'If you ever have thoughts of self-harm, reach out to a mental health professional, a helpline, or a trusted person in your life immediately.' },
            { value: 1, text: 'Several days', recommendation: 'Talk to a mental health professional about your thoughts and seek support from your loved ones.' },
            { value: 2, text: 'More than half the days', recommendation: 'Seek professional help as soon as possible. Reach out to a mental health professional, a helpline, or go to the nearest emergency room.' },
            { value: 3, text: 'Nearly every day', recommendation: 'Seek immediate professional help. Reach out to a mental health professional, a helpline, or go to the nearest emergency room.' },
          ],
        },
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

// Define result ranges and interpretations for the anxiety test
// Adjust the score ranges and interpretations based on your desired scale
if (totalScore >= 0 && totalScore <= 4) {
  result = 'Minimal or no anxiety';
  finalRecommendation = 'Continue practicing self-care, stress management techniques, and maintaining a healthy balance between your academic and personal life. If you encounter any concerns or changes, reach out to a school counselor or trusted adult for support and guidance.';
} else if (totalScore >= 5 && totalScore <= 9) {
  result = 'Mild anxiety';
  finalRecommendation = 'Prioritize self-care activities, such as exercise, mindfulness, and relaxation techniques, to manage stress and anxiety. Consider discussing your feelings with a school counselor or trusted adult who can provide guidance and support.';
} else if (totalScore >= 10 && totalScore <= 14) {
  result = 'Moderate anxiety';
  finalRecommendation = 'Reach out to a school/college mental health counselor or mental health professional who can assist you in developing coping strategies, such as deep breathing exercises or time management techniques, to manage anxiety. They can also provide support in navigating academic stressors.';
} else if (totalScore >= 15 && totalScore <= 19) {
  result = 'Moderately severe anxiety';
  finalRecommendation = 'It is important to seek professional help from a school counselor, therapist, or mental health provider. They can help you develop a comprehensive plan to manage your anxiety, explore therapy options, and discuss potential accommodations or support services available to you as a student.';
} else {
  result = 'Severe anxiety';
  finalRecommendation = 'Urgently seek help and support from a school/college mental health counselor, therapist, or mental health professional. They can work with you, your parents/guardians, and educational staff to ensure your well-being, provide necessary interventions, and explore appropriate accommodations to support your academic journey.';
}


    return (
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.resultContainer}>
            <Typography variant="h5" className={classes.heading}>
              Anxiety Test Result
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
            Anxiety Test
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

export default AnxietyTest;

// import React, { useState } from 'react';
// import { Container, Card, CardContent, Typography, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//   },
//   card: {
//     width: 400,
//     padding: theme.spacing(4),
//   },
//   heading: {
//     marginBottom: theme.spacing(4),
//   },
//   question: {
//     marginBottom: theme.spacing(2),
//   },
//   optionButton: {
//     marginBottom: theme.spacing(2),
//     width: '100%',
//     fontWeight: 'bold',
//     textTransform: 'none',
//   },
//   resultButton: {
//     marginTop: theme.spacing(3),
//   },
//   resultContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
// }));

// const AnxietyTest = () => {
//   const classes = useStyles();

  
//   const questions = [
//     {
//       id: 1,
//       text: 'Little interest or pleasure in doing things?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'Continue engaging in activities you enjoy.' },
//         { value: 1, text: 'Several days', recommendation: 'Try to engage in activities you used to enjoy, even if they do not feel pleasurable at the moment.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Consider seeking professional support to address your diminished interest or pleasure in activities.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for further evaluation and support.' },
//       ],
//     },
//     {
//       id: 2,
//       text: 'Feeling down, depressed, or hopeless?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'Continue practicing self-care and reaching out to supportive individuals in your life.' },
//         { value: 1, text: 'Several days', recommendation: 'Consider talking to a mental health professional about your feelings of depression or hopelessness.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Seek professional help for further evaluation and support.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and treatment options.' },
//       ],
//     },
//     {
//       id: 3,
//       text: 'Trouble falling asleep, staying asleep, or sleeping too much?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'Continue practicing good sleep hygiene and healthy sleep habits.' },
//         { value: 1, text: 'Several days', recommendation: 'Consider implementing relaxation techniques before bed or seeking professional guidance for sleep difficulties.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Talk to a healthcare professional about your sleep disturbances.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and treatment options for sleep disturbances.' },
//       ],
//     },
//     {
//       id: 4,
//       text: 'Feeling tired or having little energy?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'Ensure you are getting enough rest and practicing self-care.' },
//         { value: 1, text: 'Several days', recommendation: 'Consider speaking with a healthcare professional about your fatigue.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Seek medical advice for further evaluation and support.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and guidance on managing fatigue.' },
//       ],
//     },
//     {
//       id: 5,
//       text: 'Poor appetite or overeating?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'Continue practicing healthy eating habits and self-care.' },
//         { value: 1, text: 'Several days', recommendation: 'Pay attention to your eating patterns and seek support if you notice significant changes in appetite.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Talk to a healthcare professional about your appetite changes.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and guidance on managing appetite changes.' },
//       ],
//     },
//     {
//       id: 6,
//       text: 'Feeling bad about yourself or that you are a failure or have let yourself or your family down?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'Continue practicing self-care and self-compassion.' },
//         { value: 1, text: 'Several days', recommendation: 'Consider reaching out to a mental health professional to address your feelings of self-doubt or inadequacy.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Seek professional help for further evaluation and support.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and treatment options.' },
//       ],
//     },
//     {
//       id: 7,
//       text: 'Trouble concentrating on things, such as reading the newspaper or watching television?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'Continue practicing techniques to improve focus and concentration.' },
//         { value: 1, text: 'Several days', recommendation: 'Consider exploring techniques like mindfulness or seeking professional guidance.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Talk to a mental health professional for guidance on improving concentration.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Seek professional support to address your persistent difficulty with concentration.' },
//       ],
//     },
//     {
//       id: 8,
//       text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'Continue practicing healthy coping strategies to manage restlessness or sluggishness.' },
//         { value: 1, text: 'Several days', recommendation: 'Consider exploring techniques like exercise or mindfulness to address restlessness or sluggishness.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Seek professional help for further evaluation and support.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Consult with a healthcare professional for a comprehensive assessment and guidance on managing restlessness or sluggishness.' },
//       ],
//     },
//     {
//       id: 9,
//       text: 'Thoughts that you would be better off dead or of hurting yourself in some way?',
//       options: [
//         { value: 0, text: 'Not at all', recommendation: 'If you ever have thoughts of self-harm, reach out to a mental health professional, a helpline, or a trusted person in your life immediately.' },
//         { value: 1, text: 'Several days', recommendation: 'Talk to a mental health professional about your thoughts and seek support from your loved ones.' },
//         { value: 2, text: 'More than half the days', recommendation: 'Seek professional help as soon as possible. Reach out to a mental health professional, a helpline, or go to the nearest emergency room.' },
//         { value: 3, text: 'Nearly every day', recommendation: 'Seek immediate professional help. Reach out to a mental health professional, a helpline, or go to the nearest emergency room.' },
//       ],
//     },
//   ];

//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showRecommendation, setShowRecommendation] = useState(false);
//   const [showResult, setShowResult] = useState(false);

//   const handleAnswer = (value) => {
//     const updatedScore = score + value;
//     setScore(updatedScore);

//     setShowRecommendation(true);
//   };

//   const handleNextQuestion = () => {
//     setShowRecommendation(false);

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const resetTest = () => {
//     setScore(0);
//     setCurrentQuestion(0);
//     setShowRecommendation(false);
//     setShowResult(false);
//   };

//   if (showResult) {
//     let result = '';
//     // Define result ranges and interpretations for anxiety test
//     // Adjust the score ranges and interpretations based on your desired scale
//     if (score >= 0 && score <= 4) {
//       result = 'Minimal or no anxiety';
//     } else if (score >= 5 && score <= 9) {
//       result = 'Mild anxiety';
//     } else if (score >= 10 && score <= 14) {
//       result = 'Moderate anxiety';
//     } else if (score >= 15 && score <= 19) {
//       result = 'Moderately severe anxiety';
//     } else {
//       result = 'Severe anxiety';
//     }

//     return (
//       <Container className={classes.container}>
//         <Card className={classes.card}>
//           <CardContent className={classes.resultContainer}>
//             <Typography variant="h5" className={classes.heading}>
//               Anxiety Test Result
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Your score: {score}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Interpretation: {result}
//             </Typography>
//             <Button variant="contained" color="primary" onClick={resetTest} className={classes.resultButton}>
//               Retake Test
//             </Button>
//           </CardContent>
//         </Card>
//       </Container>
//     );
//   }

//   const currentQuestionData = questions[currentQuestion];

//   return (
//     <Container className={classes.container}>
//       <Card className={classes.card}>
//         <CardContent>
//           <Typography variant="h5" className={classes.heading}>
//             Anxiety Test
//           </Typography>
//           <Typography variant="body1" className={classes.question}>
//             {currentQuestionData.text}
//           </Typography>
//           <div>
//             {currentQuestionData.options.map((option) => (
//               <Button
//                 key={option.value}
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleAnswer(option.value)}
//                 className={classes.optionButton}
//               >
//                 {option.text}
//               </Button>
//             ))}
//           </div>
//           {showRecommendation && (
//             <Typography variant="body1" gutterBottom>
//               Recommendation: {currentQuestionData.options.find((option) => option.value === score).recommendation}
//             </Typography>
//           )}
//           <Button variant="contained" color="primary" onClick={handleNextQuestion}>
//             {currentQuestion === questions.length - 1 ? 'Get Result' : 'Next Question'}
//           </Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default AnxietyTest;
