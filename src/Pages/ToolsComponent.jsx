
import React from 'react';
import { Typography } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ToolsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f3f4f6;
  padding: 2% 0;  /* Add vertical padding for mobile views */

  @media (max-width: 768px) { 
    flex-direction: column; 
  }
`;

const ToolCard = styled.div`
  width: 300px;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 90%;  /* Take up almost the full width of the viewport */
  }
`;

const ToolIcon = styled.div`
  margin-bottom: 16px;
  color: #ff9800;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ToolTitle = styled(Typography).attrs(() => ({
  variant: 'h6',
}))`
  margin-bottom: 16px;
  color: #03a9f4;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ToolDescription = styled(Typography).attrs(() => ({
  variant: 'body1',
}))`
  color: #4caf50;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ToolsComponent = () => {

  const navigate = useNavigate();

  const handleExercise = () => navigate('/psychoarea/exercise-selector');
  const handleMoodTracker = () => navigate('/psychoarea/moodtracker');
  const handleNegativeThoughts = () => navigate('/psychoarea/changethoughts');

  return (
    <ToolsContainer>
      <ToolCard onClick={handleMoodTracker}>
        <ToolIcon>
          <MoodIcon fontSize="inherit" />
        </ToolIcon>
        <ToolTitle>Mood Tracker</ToolTitle>
        <ToolDescription>
          Track your mood and emotions to gain insights and self-awareness.
        </ToolDescription>
      </ToolCard>

      <ToolCard onClick={handleExercise}>
        <ToolIcon>
          <FitnessCenterIcon fontSize="inherit" />
        </ToolIcon>
        <ToolTitle>Exercise Selector</ToolTitle>
        <ToolDescription>
          Explore a variety of exercises and activities to promote well-being.
        </ToolDescription>
      </ToolCard>

      <ToolCard onClick={handleNegativeThoughts}>
        <ToolIcon>
          <ChangeCircleIcon fontSize="inherit" />
        </ToolIcon>
        <ToolTitle>Change Negative Thoughts</ToolTitle>
        <ToolDescription>
          Challenge and reframe negative thoughts for a positive mindset.
        </ToolDescription>
      </ToolCard>
    </ToolsContainer>
  );
};

export default ToolsComponent;



