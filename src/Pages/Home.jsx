
import React, { useEffect, useContext,useState } from "react";
import { auth, provider } from '../Auth/firebase';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { authContext } from "../Context";
import { useNavigate } from "react-router-dom";
import img23 from '../Asserts/images/23 .jpg'


import '../Style/Home.css';
import FAQ from '../Components/FAQ.jsx'

import signin from '../Asserts/images/googlesignin.png';
import { ThemeProvider } from 'styled-components';
import SuicidePreventionButton from '../Components/SuicidePreventionButton';
import images from '../Asserts/images/technological-ecology-concept-with-human-head_23-2148441823.webp';
import { Avatar } from '@material-ui/core'; 



import { Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '6rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '200',
    margin: 0,
    padding: '1.2rem',
    color: '#1A857F',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    textAlign:'center'
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: 'normal',
    color:'#1A857F',
    margin: 0,
    padding: '0.8rem',
    // color: theme.palette.text.primary,
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  },
  loginButton: {
    margin: '1.2rem',
    padding: '0.8rem 1.4rem',
    
    color: theme.palette.common.white,
    borderRadius: '2rem',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2) !important',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
   
  },
  disclaimer: {
    position: 'fixed',
    bottom: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '1rem',
    backgroundColor: '#f5f8fb',
    border: '1px solid #1A857F',
    borderRadius: '5px',
    fontSize: '0.8rem',
    textAlign: 'center',
    color: '#1A857F',
    maxWidth: '600px',
    zIndex: 1000,
    marginBotton:'5px',
  
    [theme.breakpoints.down('xs')]: { // Adjust styles for extra-small screens
      fontSize: '0.7rem',
      padding: '0.3rem',
      maxWidth: '100vw' // Use a percentage of the viewport width
    }
  }
  ,  
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: '1rem auto',
   border:'1px solid white',

    // Media query for smaller screens
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
  
}));

function Home() {
  const navigate = useNavigate();
  const authUser = useContext(authContext);
  const { user, setUser } = authUser;
  const [context, setContext] = useState({});

 
  console.log(context)

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/psychoarea/introduction');
      }).catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          userName: user.displayName,
          userEmail: user.email,
          userPhoto: user.photoURL
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleComplete = () => {
    setIsOpen(false);
  };
  

  
  
  const classes = useStyles();
  
  return (
    <>
         <div style={{position:'absolute', bottom:'1.5rem', right:'1rem'}} >
  <SuicidePreventionButton/>
</div>

       <div className={classes.root}>
      <h1 className={classes.title}>Hello, I'm an AI Counselling Expert System</h1>
      <h2 className={classes.subtitle}>Your mental health matters. Let's talk</h2>
      <div>
      <Avatar src={images} className={classes.avatar} alt="AI Representation"/>
      </div>
      {/* <button className={classes.loginButton}>Login with me to get started!</button> */}
    </div>
    <div className='container d-flex justify-content-center align-items-center login' 
     style={{ position: 'relative' }}>

    <div className="p-4" style={{ position: 'absolute', bottom: '10rem' }}>
        <h2 className="text-center">Login</h2>
        <div className="d-flex justify-content-center">
            <button onClick={googleSignIn} className="" style={{backgroundColor: '#1A857F',color: 'white', borderRadius:'5px', padding:'5px', border:'0px',boxShadow:'0px 0px 2px 2px'}}>
                {/* <img src={signin} alt="not found" style={{ width: '50%', height: '50%' }} /> */}
                <span className="">Sign in with Google</span>
            </button>
        </div>
    </div>

</div>

    <div>
    <div className={classes.disclaimer}>
      Disclaimer: This is a mental health system intended for research purposes only. Most features are powered by the OpenAI API (ChatGPT). Please consult a qualified professional for any serious mental health concerns.
    </div>
      <FAQ/>

      </div>
    </>
  );
}

export default Home;



