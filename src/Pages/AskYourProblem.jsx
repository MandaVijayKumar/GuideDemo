import React, { useState, useEffect , useContext} from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Send } from 'react-bootstrap-icons';
import { authContext } from '../Context';

const AskYourProblem= () => {
  const [problem, setProblem] = useState('');
  const [response, setResponse] = useState('');
  const [previousProblems, setPreviousProblems] = useState([]);
  const userData = useContext(authContext);
  const { user } = userData;
  const email = user.userEmail;


  useEffect(() => {
    // Fetch the user's data from the backend using their email
    const getUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5001/user/${email}`);


        console.log('ha ha i am first email to get already data')
        setPreviousProblems(response.data.problems);
      } catch (error) {
        console.log('ha ha to get data failed')
        console.error(error);
      }
    };
    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the problem to the backend for analysis
      const response = await axios.post('http://127.0.0.1:5001/analyze', { text:problem });

      setResponse(response.data.answer);

      // Save the new problem and response to the database
      const newProblem = { problem, response: response.data.answer };
      console.log(newProblem)
      await axios.post(`http://127.0.0.1:5001/user/${email}`, newProblem);
      console.log('stored in db success')

      // Update the list of previous problems
      setPreviousProblems([...previousProblems, newProblem]);
    } catch (error) {
      console.log('store problem in db fialed')
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  
return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h3 className="text-center">Ask a Psychology Question</h3>
          <p className="text-center">Type your question below and get insights from BERT!</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="problem">
              <Form.Label>Enter your psychology question</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
                onKeyPress={handleKeyPress}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit" className="mr-2">
                Analyze <Send />
              </Button>
            </div>
          </Form>
          {response && (
            <div className="mt-5">
              <h5>Your Question:</h5>
              <p>{problem}</p>
              <h5>BERT's Response:</h5>
              <p>{response}</p>
            </div>
          )}
          {previousProblems.length > 0 && (
            <div className="mt-5">
              <h5>Previous Problems:</h5>
              {previousProblems.map((problem, index) => (
                <div key={index}>
                  <h6>{problem.problem}</h6>
                  <p>{problem.response}</p>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );





}
export default AskYourProblem;
// 8cHw5rog4ATzlfun
//   palette: {
//     primary: {
//       main: '#6d4adf',
//     },
//     secondary: {
//       main: '#ffe082',
//     },
//     background: {
//       default: '#fff9c4',
//     },
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(4),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     maxWidth: 800,
//     margin: 'auto',
//     marginTop: theme.spacing(8),
//     backgroundColor: theme.palette.background.default,
//   },
//   textField: {
//     width: '100%',
//     marginTop: theme.spacing(4),
//     marginBottom: theme.spacing(4),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     marginLeft: theme.spacing(2),
//   },
//   response: {
//     marginTop: theme.spacing(4),
//     marginBottom: theme.spacing(4),
//   },
// }));

// const AskYourProblem= () => {
//   const classes = useStyles();
//   const [problem, setProblem] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5001/analyze', { text:problem });
//       setResponse(response.data.answer);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit(e);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container spacing={0} justify="center">
//         <Grid item xs={12} sm={10} md={8}>
//           <Paper className={classes.paper}>
//             <Typography variant="h5" gutterBottom>
//               Ask a Psychology Question
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Type your question below and get insights from BERT!
//             </Typography>
//             <form onSubmit={handleSubmit}>
//               <TextField
//                 id="problem"
//                 label="Enter your psychology question"
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 value={problem}
//                 onChange={(e) => setProblem(e.target.value)}
//                 className={classes.textField}
//                 required
//                 onKeyPress={handleKeyPress}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 type="submit"
//                 className={classes.button}
//                 endIcon={<Send />}
//               >
//                 Analyze
//               </Button>
//             </form>
//             {response && (
//               <div className={classes.response}>
//                 <Typography variant="h6" gutterBottom>
//                   Your Question:
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   {problem}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                   BERT's Response:
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   {response}
//                 </Typography>
//               </div>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// };

// export default AskYourProblem;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Send } from 'react-bootstrap-icons';

// const AskYourProblem = () => {
//   const [problem, setProblem] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5001/analyze', { text:problem });
//       setResponse(response.data.answer);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit(e);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={8}>
//           <h3 className="text-center">Ask a Psychology Question</h3>
//           <p className="text-center">Type your question below and get insights from BERT!</p>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="problem">
//               <Form.Label>Enter your psychology question</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 value={problem}
//                 onChange={(e) => setProblem(e.target.value)}
//                 required
//                 onKeyPress={handleKeyPress}
//               />
//             </Form.Group>
//             <div className="text-center">
//               <Button variant="primary" type="submit" className="mr-2">
//                 Analyze <Send />
//               </Button>
//             </div>
//           </Form>
//           {response && (
//             <div className="mt-5">
//               <h5>Your Question:</h5>
//               <p>{problem}</p>
//               <h5>BERT's Response:</h5>
//               <p>{response}</p>
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AskYourProblem;

