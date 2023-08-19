
import React, { useState, useEffect, useRef, useContext } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { generateSystemResponse } from '../Utils/generateResponse'
import { authContext } from '../Context';
import axios from 'axios';
import  '../Style/DepressionTest.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  conversationContainer: {
    marginBottom: theme.spacing(2),
    minHeight: '200px',
    maxHeight: '400px',
    overflow: 'auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
    fontSize: '1.5rem',

  },
  messageContainer: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    fontSize: '1.5rem',

  },
  userMessageContainer: {
    textAlign: 'right',
    fontSize: '1.5rem',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  userInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
 
  messageContent: {
    
    marginBottom: theme.spacing(1),
    margin: '2rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: '1.4',
    textTransform: 'capitalize',
    // Add any other desired styles for the message content
  },

  
  recommendationText: {
    color: 'green',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    fontSize: '1.2rem',
    marginTop: '10px',
    padding: '1.2rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow effect
    // Add any other desired styles for the recommendation text
  },



  questionText: {
    color: '#555555',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '8px',
  },
  specialText: {
    color: 'red',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontSize: '1.2rem',
  },
   systemMessageContainer: {
    backgroundColor: '#F3F3F3',
    padding: '8px',
    borderRadius: '8px',
    marginBottom: '8px', // Add desired bottom margin
    // Add any other desired styles for the system message container
  },



}));


const DepressionTest = () => {
  const classes = useStyles();
  const [userMessage, setUserMessage] = useState('');
  const [options, setOptions] = useState(false);
  const [indexing, setIndexing] = useState(0);
  const [selectedResponses, setSelectedResponses] = useState([]);
  const [selectedContent, setselectedContent] = useState({});
  const [trigger, setTrigger] = useState(false);
  const userData = useContext(authContext);
  const { user } = userData;
  const email = user.userEmail;
  const [dumy, setDumy] = useState(false)
  const [loading, setLoading] = useState(false);
  const [ result, setResult] = useState(null)


  const [conversation, setConversation] = useState([
    // {
    //   email: email,
    //   role: 'system',
    //   content: 'Welcome to the counseling system. How can I assist you today?',
    // },

  ]);

  const conversationContainerRef = useRef(null);

  useEffect(() => {

    // Scroll to the bottom of the conversation container whenever the conversation updates
    if (conversationContainerRef.current) {
      conversationContainerRef.current.scrollTop = conversationContainerRef.current.scrollHeight;
    }
  }, [conversation, trigger, loading]);

  useEffect(() => {
    // Fetch conversations for the specified user
    setLoading(true)
    axios.get(`http://127.0.0.1:5001/conversations/${email}`)
      .then((response) => {
        setConversation([{
          email: email,
          role: 'system',
          content: 'Welcome to the counseling system. How can I assist you today?',
        }, ...response.data]);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to fetch conversations:', error);
      });
  }, [dumy]);

  const handleUserMessage = async (message) => {
    const newConversation = {
      userEmail: email,
      role: 'user',
      content: message,
      options: undefined,
      special: undefined,
    };
  
    // Send the user's message to the server
    setLoading(true)
    axios
      .post('http://127.0.0.1:5001/conversations', newConversation)
      .then((response) => {
        console.log('Conversation stored successfully:', response.data);
        setDumy(!dumy);
        setLoading(false)
        // Reset the form fields
      })
      .catch((error) => {
        console.error('Failed to store conversation:', error);
      });
       //clasification end point
      
      //   try {
      //     const response = await fetch('http://127.0.0.1:5001/classify', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify({ userMessage: message })
      //     });
    
      //     if (!response.ok) {
      //       throw new Error('Failed to classify text.');
      //     }
    
      //     const data = await response.json();
      //     console.log(data)
      //     setResult(data);
      //   } catch (error) {
      //     console.error(error);
      //   }
      // console.log('the result is', result);
    // Process user's message, generate system's response
    setLoading(true)
    fetch('http://127.0.0.1:5001/system-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSelectedResponses(data);
        setLoading(false)
        console.log('Inside then:', selectedResponses);
        console.log('The generated responses from backend are:', data, data.length);
  
        // Add system's response to the conversation
        console.log('The selected response is:', selectedResponses);
        console.log('The indexing is:', indexing);
  
        if (data.length > 1) {
          const selectedContent = data[indexing];
          console.log('I am testing:', selectedContent);
  
          const newConversation = {
            userEmail: email,
            role: 'system',
            content: selectedContent.content,
            options: selectedContent.options,
            special: undefined,
          };
  
          // Send the system's response to the server
          setLoading(true);
          axios
            .post('http://127.0.0.1:5001/conversations', newConversation)
            .then((response) => {
              console.log('Conversation stored successfully:', response.data);
              setDumy(!dumy);
              setLoading(false)
              // Reset the form fields
            })
            .catch((error) => {
              console.error('Failed to store conversation:', error);
            });
  
          const opt = selectedContent?.options;
          if (opt) {
            setOptions(true);
          } else {
            setOptions(false);
          }
        }
      })
      .catch((error) => {
        console.log('There was an error fetching response data:', error);
      });
  
    setUserMessage(''); // Clear the input field after sending the message
  };
  
  const optionClickHandler = (recommendation) => {
    console.log(recommendation);
    const newConversation = {
      userEmail: email,
      role: 'system',
      content: recommendation,
      options: undefined,
      special: undefined,
    };

    // Send the conversation data to the server
    setLoading(true);
    axios.post('http://127.0.0.1:5001/conversations', newConversation)
      .then((response) => {
        console.log('Conversation stored successfully:', response.data);
        setDumy(!dumy);
        setLoading(false);
        // Reset the form fields

      })
      .catch((error) => {
        console.error('Failed to store conversation:', error);
      });


    setTimeout(() => {setTrigger(true)},3000);

    setIndexing((prevIndexing) => prevIndexing + 1);

    // if (indexing < selectedResponse.length - 1) {
    //   const selectedContent = selectedResponse[indexing + 1];
    //   console.log(indexing, selectedContent);

    //   setConversation((prevConversation) => [
    //     ...prevConversation,
    //     { role: 'system', content: selectedContent.content, options: selectedContent.options },
    //   ]);
    // }

    // if (indexing === selectedResponse.length - 1) setOptions(false);
  };
  const handleNext = () => {
    if (indexing < selectedResponses.length - 1) {
      const selectedContent = selectedResponses[indexing + 1];
      console.log(indexing, selectedContent);
      setTrigger(false);

      // setConversation((prevConversation) => [
      //   ...prevConversation,
      //   { role: 'system', content: selectedContent.content, options: selectedContent.options },
      // ]);
      const newConversation = {
        userEmail: email,
        role: 'system',
        content: selectedContent.content,
        options: selectedContent.options,
        special: undefined,
      };

      // Send the conversation data to the server
      setLoading(true);
      axios.post('http://127.0.0.1:5001/conversations', newConversation)
        .then((response) => {
          console.log('Conversation stored successfully:', response.data);
          setDumy(!dumy);
          setLoading(false);
          // Reset the form fields

        })
        .catch((error) => {
          console.error('Failed to store conversation:', error);
        });


    }


    if (indexing === selectedResponses.length - 1) { setOptions(false); setIndexing(0);setTrigger(false) };

  }
  const handleStop = () => {
    setOptions(false); setIndexing(0); setTrigger(false);
    // setConversation((prevConversation) => [
    //   ...prevConversation,
    //   { role: 'system', content: 'Thank you for using the counseling system. If you have any more problems, feel free to enter them.', special: true, },
    // ]);
    const newConversation = {
      userEmail: email,
      role: 'system',
      content: 'Thank you for using the counseling system. If you have any more problems, feel free to enter them.',
      options: undefined,
      special: true,
    };

    // Send the conversation data to the server
    setLoading(true);
    axios.post('http://127.0.0.1:5001/conversations', newConversation)
      .then((response) => {
        console.log('Conversation stored successfully:', response.data);
        setDumy(!dumy);
        setLoading(false)
        // Reset the form fields

      })
      .catch((error) => {
        console.error('Failed to store conversation:', error);
      });
  }



  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center" gutterBottom>
        Intelligent Counseling System
      </Typography>

      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} style={{paddingBottom:'1rem'}}>
          <Paper className={classes.conversationContainer} ref={conversationContainerRef} style={{ paddingBottom: '1rem', marginBottom: '1rem' }}>
            {conversation.map((message, index) => (
              <div
                key={index}
                className={`${classes.messageContainer} ${message.role === 'user' ? classes.userMessageContainer : ''
                  }`}
              >
                <Typography
                  variant="body1"
                  className={`${classes.messageContent} ${message.options ? classes.questionText : classes.recommendationText} ${message.special ? classes.specialText : ''}`}
                >
                  {message.content}
                </Typography>

                {message.options ? (
                  <div>
                    {message.options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        color="primary"
                        onClick={() => optionClickHandler(option.recommendation)}
                        style={{
                          borderRadius: '8px',
                          margin: '10px',
                        }}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>


                ) : null}

              </div>
            ))}
            {trigger === true && (<Grid container justify="center" alignItems="center" spacing={2} style={{marginBottom:'2rem'}}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  Ok, Got It
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleStop}>
                  Ok, Stop It
                </Button>
              </Grid>
            </Grid>)}
            {loading &&(<div className="typing-indicator1 pb-3 ">
              Typing<span></span><span></span><span></span></div>)}
            {/* {loading &&(<div className="typing-indicator mb-5">Typing...</div>)} */}
          </Paper>
          {options === false


            && (<Grid item xs={12}>
              <div className={classes.userInput} style={{ display: 'flex' }}>
                <TextField
                  type="text"
                  placeholder="Enter your message..."
                  variant="outlined"
                  fullWidth
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleUserMessage(e.target.value);
                    }
                  }}
                  style={{ marginRight: '8px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleUserMessage(userMessage)}
                >
                  Send
                </Button>
              </div>
            </Grid>
            )}
        </Grid>

      </Grid>
    </div>
  );
};

export default DepressionTest;

