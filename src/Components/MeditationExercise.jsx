// import React, { useState, useEffect } from 'react';
// import { Typography, Button, Grid } from '@mui/material';

// const MeditationExercise = () => {
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [completedExercises, setCompletedExercises] = useState([]);

//   useEffect(() => {
//     let intervalId = null;

//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isRunning]);

//   const startExercise = (duration) => {
//     setTimeLeft(duration * 60);
//     setIsRunning(true);
//   };

//   const completeExercise = () => {
//     setIsRunning(false);
//     setCompletedExercises((prevExercises) => [
//       ...prevExercises,
//       { timestamp: new Date().toISOString(), duration: timeLeft },
//     ]);
//   };

//   const formatTime = (timeLeft) => {
//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;

//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div>
//       <Typography variant="h4">Meditation Exercise</Typography>
//       {isRunning ? (
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="body1">Remaining Time: {formatTime(timeLeft)}</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Button variant="contained" onClick={completeExercise}>
//               Complete Exercise
//             </Button>
//           </Grid>
//         </Grid>
//       ) : (
//         <>
//           <Typography variant="body1">Sit in a comfortable position and close your eyes.</Typography>
//           <Typography variant="body1">Focus on your breath and let go of any thoughts.</Typography>
//           <Typography variant="body1">Duration: 10 minutes</Typography>
//           <Button variant="contained" onClick={() => startExercise(10)}>
//             Start
//           </Button>
//         </>
//       )}

//       {completedExercises.length > 0 && (
//         <>
//           <Typography variant="h5">Completed Exercises</Typography>
//           <ul>
//             {completedExercises.map((exercise, index) => (
//               <li key={index}>
//                 <Typography variant="body1">
//                   Timestamp: {new Date(exercise.timestamp).toLocaleString()}
//                 </Typography>
//                 <Typography variant="body1">Duration: {exercise.duration} seconds</Typography>
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default MeditationExercise;
// import React, { useState, useEffect } from 'react';
// import { Typography, Button, Grid, makeStyles } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     padding: theme.spacing(2),
//     backgroundColor: theme.palette.background.default,
//     borderRadius: theme.spacing(1),
//     boxShadow: theme.shadows[2],
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//   },
//   remainingTime: {
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: theme.spacing(2),
//   },
//   completedExercisesContainer: {
//     marginTop: theme.spacing(4),
//   },
//   completedExerciseItem: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// const MeditationExercise = () => {
//   const classes = useStyles();
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [completedExercises, setCompletedExercises] = useState([]);

//   useEffect(() => {
//     let intervalId = null;

//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isRunning]);

//   const startExercise = (duration) => {
//     setTimeLeft(duration * 60);
//     setIsRunning(true);
//   };

//   const completeExercise = () => {
//     setIsRunning(false);
//     setCompletedExercises((prevExercises) => [
//       ...prevExercises,
//       { timestamp: new Date().toISOString(), duration: timeLeft },
//     ]);
//   };

//   const formatTime = (timeLeft) => {
//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;

//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className={classes.container}>
//       <Typography variant="h4" className={classes.title}>
//         Meditation Exercise
//       </Typography>
//       {isRunning ? (
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} sm={6}>
//             <Typography variant="body1" className={classes.remainingTime}>
//               Remaining Time: {formatTime(timeLeft)}
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6} className={classes.buttonContainer}>
//             <Button variant="contained" onClick={completeExercise}>
//               Complete Exercise
//             </Button>
//           </Grid>
//         </Grid>
//       ) : (
//         <>
//           <Typography variant="body1">Sit in a comfortable position and close your eyes.</Typography>
//           <Typography variant="body1">Focus on your breath and let go of any thoughts.</Typography>
//           <Typography variant="body1">Duration: 10 minutes</Typography>
//           <Button variant="contained" onClick={() => startExercise(10)}>
//             Start
//           </Button>
//         </>
//       )}

//       {completedExercises.length > 0 && (
//         <div className={classes.completedExercisesContainer}>
//           <Typography variant="h5">Completed Exercises</Typography>
//           <ul>
//             {completedExercises.map((exercise, index) => (
//               <li key={index} className={classes.completedExerciseItem}>
//                 <Typography variant="body1">
//                   Timestamp: {new Date(exercise.timestamp).toLocaleString()}
//                 </Typography>
//                 <Typography variant="body1">Duration: {exercise.duration} seconds</Typography>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MeditationExercise;
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[2],
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  remainingTime: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  completedExercisesContainer: {
    marginTop: theme.spacing(4),
  },
  completedExerciseItem: {
    marginBottom: theme.spacing(2),
  },
}));

const MeditationExercise = () => {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completedExercises, setCompletedExercises] = useState([]);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startExercise = (duration) => {
    setTimeLeft(duration * 60);
    setIsRunning(true);
  };

  const completeExercise = () => {
    setIsRunning(false);
    setCompletedExercises((prevExercises) => [
      ...prevExercises,
      { timestamp: new Date().toISOString(), duration: timeLeft },
    ]);
  };

  const formatTime = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card className={classes.container}>
      <Card.Body>
        <Typography variant="h4" className={classes.title}>
          Meditation Exercise
        </Typography>
        {isRunning ? (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className={classes.remainingTime}>
                Remaining Time: {formatTime(timeLeft)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.buttonContainer}>
              <Button variant="primary" onClick={completeExercise}>
                Complete Exercise
              </Button>
            </Grid>
          </Grid>
        ) : (
          <>
            <Typography variant="body1">Sit in a comfortable position and close your eyes.</Typography>
            <Typography variant="body1">Focus on your breath and let go of any thoughts.</Typography>
            <Typography variant="body1">Duration: 10 minutes</Typography>
            <Button variant="primary" onClick={() => startExercise(10)}>
              Start
            </Button>
          </>
        )}

        {completedExercises.length > 0 && (
          <div className={classes.completedExercisesContainer}>
            <Typography variant="h5">Completed Exercises</Typography>
            <ul>
              {completedExercises.map((exercise, index) => (
                <li key={index} className={classes.completedExerciseItem}>
                  <Typography variant="body1">
                    Timestamp: {new Date(exercise.timestamp).toLocaleString()}
                  </Typography>
                  <Typography variant="body1">Duration: {exercise.duration} seconds</Typography>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default MeditationExercise;


