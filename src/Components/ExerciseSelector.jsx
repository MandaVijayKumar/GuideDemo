import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BreathingTechniques from './BreathingTechniques';
import MeditationExercise from './MeditationExercise';

const ExerciseSelector = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleCompleteExercise = () => {
    setSelectedExercise(null);
  };

  return (
    <Container className="mt-4">
      {selectedExercise ? (
        <>
          {selectedExercise === 'meditation' && (
            <MeditationExercise onComplete={handleCompleteExercise} />
          )}
          {selectedExercise === 'breathing' && (
            <BreathingTechniques onComplete={handleCompleteExercise} />
          )}
        </>
      ) : (
        <Row>
          <Col>
            <h4 className="mb-3">Exercise Selector</h4>
            <Card className="exercise-card">
              <Card.Body>
                <Card.Title>Meditation Exercise</Card.Title>
                <Card.Text>
                  Start a meditation exercise to relax your mind and find inner peace.
                </Card.Text>
                <Button
                  variant="primary"
                  className="exercise-btn"
                  onClick={() => handleSelectExercise('meditation')}
                >
                  Start Exercise
                </Button>
              </Card.Body>
            </Card>
            <Card className="exercise-card">
              <Card.Body>
                <Card.Title>Breathing Techniques Exercise</Card.Title>
                <Card.Text>
                  Explore various breathing techniques to reduce stress and improve focus.
                </Card.Text>
                <Button
                  variant="primary"
                  className="exercise-btn"
                  onClick={() => handleSelectExercise('breathing')}
                >
                  Start Exercise
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ExerciseSelector;

// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import BreathingTechniques from './BreathingTechniques';
// import MeditationExercise from './MeditationExercise';

// const ExerciseSelector = () => {
//   const [selectedExercise, setSelectedExercise] = useState(null);

//   const handleSelectExercise = (exercise) => {
//     setSelectedExercise(exercise);
//   };

//   const handleCompleteExercise = () => {
//     setSelectedExercise(null);
//   };

//   return (
//     <Container className="mt-4">
//       {selectedExercise ? (
//         <>
//           {selectedExercise === 'meditation' && (
//             <MeditationExercise onComplete={handleCompleteExercise} />
//           )}
//           {selectedExercise === 'breathing' && (
//             <BreathingTechniques onComplete={handleCompleteExercise} />
//           )}
//         </>
//       ) : (
//         <Row>
//           <Col>
//             <h4 className="mb-3">Exercise Selector</h4>
//             <Button
//               variant="primary"
//               className="me-3 exercise-btn"
//               onClick={() => handleSelectExercise('meditation')}
//             >
//               Start Meditation Exercise
//             </Button>
//             <Button
//               variant="primary"
//               className="exercise-btn"
//               onClick={() => handleSelectExercise('breathing')}
//             >
//               Start Breathing Techniques Exercise
//             </Button>
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default ExerciseSelector;
