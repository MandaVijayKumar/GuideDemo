import React, { useState, useEffect } from "react";
import Header from "./Layouts/Header";
import { authContext } from "./Context";
// import {  PsychoArea } from './Pages';
import Home from './Pages/Home'
import PsychoArea from './Pages/PsychoArea'
import { auth } from './Auth/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';


import {  Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './Style/ChatComponent.css'
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'

import Mainbar from "./Layouts/Mainbar";
import Community from "./Pages/Community";
import MentalHealth from "./Pages/MentalHealth";
import DepressionTest from "./Pages/DepressionTest";
import AnxiotyTest from "./Pages/AnxiotyTest";
import VirtualTherapist from "./Pages/VirtualTherapist";
import Introduction from "./Pages/Introduction";
import AskYourProblem from "./Pages/AskYourProblem";
import YourComponent from "./Pages/YourComponent";
import GuideAcknowledgment from "./Pages/GuideAcknowledgment";
import ChatWithExperts from "./Pages/ChatWithExperts";
import Resources from "./Pages/Resources";
import FeedbackForm from "./Components/FeedbackForm";
import ScreeningTest from "./Pages/ScreeningTest";
import ToolsComponent from "./Pages/ToolsComponent";
import ExerciseSelector from "./Components/ExerciseSelector";
import MoodTracker from './Components/MoodTracker';
import ReframingTechniques from "./Components/ReframingTechniques";
import ExpertsRecommendation from "./Pages/ExeprtsRecommendation";
import ExpertLoginForm from "./Components/ExpertLogin";







function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  console.log('app', user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


  // useEffect(() => {
  //   // Use Firebase onAuthStateChanged listener to track authentication changes
  //   const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
  //     if (firebaseUser) {
  //       // User is signed in, set the user in the state
  //       console.log('inside app useeffect', firebaseUser)
  //       setUser(firebaseUser);
  //     } else {
  //       // User is signed out, set the user to null
  //       setUser(null);
  //     }
  //   });

  //   // Unsubscribe the listener when the component unmounts
  //   return () => unsubscribe();
  // }, []);

  return (

    <div className="appContainer" style={{height:window.innerHeight}}>
      <authContext.Provider value={{user, setUser}}>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='GuideAcknowledgment' element={<GuideAcknowledgment/>} />
          <Route path='feedbackform' element={<FeedbackForm/>} />
          <Route path='expertlogin' element={<ExpertLoginForm/>} />
          <Route path="experts" element={<ExpertsRecommendation/>} />
          
          <Route path='psychoarea' element={user?<PsychoArea/>: <Navigate to='/'/>}>
            
            <Route path="introduction" element = {user ?<Introduction/>:<Navigate to='/'/>}  />
            <Route path="virtualtherapist" element = {user?<VirtualTherapist/>: <Navigate to='/'/>}  />

            <Route path="mentalhealth" element={user?<MentalHealth/>: <Navigate to='/'/>}  />
            <Route path="depressiontest" element={user?<DepressionTest/>: <Navigate to='/'/>} />
            <Route path="screeningmental" element={user?<ScreeningTest/>: <Navigate to='/'/>} />
            <Route path="toolscomponent" element={user?<ToolsComponent/>: <Navigate to='/'/>} />
            <Route path="exercise-selector" element={user?<ExerciseSelector/>: <Navigate to='/'/>} />
            <Route path="moodtracker" element={user?<MoodTracker/>: <Navigate to='/'/>} />
            <Route path="changethoughts" element={user?<ReframingTechniques/>: <Navigate to='/'/>} />
            
            <Route path="askyourproblem" element={user?<AskYourProblem/>: <Navigate to='/'/>} />
            <Route path="yourcomponent" element={user?<YourComponent/>: <Navigate to='/'/>} />
            <Route path="chatwithexperts" element={user?<ChatWithExperts/>: <Navigate to='/'/>} />
           
            <Route path='resources' element={<Resources/>} />

          </Route>
         
          <Route path='*' element={<div>vijay kumar</div>} />
        </Routes>

      </authContext.Provider>

    </div>


  )
}

export default App;



