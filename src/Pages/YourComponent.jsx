
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Typography, Button, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: theme.spacing(2, 0),
  },
  glassEffect: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust the opacity as desired
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Adjust the shadow properties as desired
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    // Add any additional styles for the glass effect here
  },
  box: {
    width: 300,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[3], // Add box shadow for focus effect
    '&:hover': {
      boxShadow: theme.shadows[4], // Increase box shadow on hover
    },
  },
  boxTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    color: 'red',
  },
  boxBackgroundText: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
  dragItem: {
    display: 'flex',
    
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    backgroundColor: '#ffffff',
    color: '#1A857F',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    '&:hover': {
      cursor: 'move',
      backgroundColor: theme.palette.action.hover,
    },
  },
  removeButton: {
    color: theme.palette.text.secondary,
    border: 'none',
    background: 'none',
    fontSize: 12,
    cursor: 'pointer',
  },
  submitButton: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    display: 'inline',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },

}));


const ItemTypes = {
  CAUSE: 'cause',
  SYMPTOM: 'symptom',
};

const YourComponent = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [itemDescription, setItemDescription] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === 'causes' && destination.droppableId === 'box') {
      const draggedItem = causes[source.index];
      const newItems = [...items, draggedItem];
      setItems(newItems);
    }

    if (source.droppableId === 'symptoms' && destination.droppableId === 'box') {
      const draggedItem = symptoms[source.index];
      const newItems = [...items, draggedItem];
      setItems(newItems);
    }
    if (source.droppableId === 'emotions' && destination.droppableId === 'box') {
      const draggedItem = emotions[source.index];
      const newItems = [...items, draggedItem];
      setItems(newItems);
    }
  };
  const handleSubmit = () => {
    console.log('These are the selected items:', items);
    const selectedCauses = [];
    const selectedSymptoms = [];
    const selectedEmotions = [];
  
    items.forEach((item) => {
      if (item.type === 'cause') {
        selectedCauses.push(item.name);
      }
      if (item.type === 'symptom') {
        selectedSymptoms.push(item.name);
      }
      if (item.type === 'emotion') {
        selectedEmotions.push(item.name);
      }
    });
  
    if (selectedCauses.length > 0 || selectedSymptoms.length > 0 || selectedEmotions.length > 0) {
      setLoading(true);
      axios
        .post('http://127.0.0.1:5001/get-recommendation', {
          causes: selectedCauses,
          symptoms: selectedSymptoms,
          emotions: selectedEmotions,
        })
        .then((result) => {
          console.log(result);
          setSuggestions(result.data.recommendations);
          console.log(result.data.recommendations);
          setLoading(false);
        }
        )
        .catch((error) => setLoading(false));
    }
  };
  

  const causes = [
    {
      "id": 1,
      "name": "📚 Academic Pressure",
      "description": "The pressure to perform well academically, such as high expectations from parents, teachers, or self-imposed goals, can lead to feelings of stress, anxiety, and eventually depression.",
      "type": "cause"
    },
    {
      "id": 2,
      "name": "🚶‍♂️ Social Isolation",
      "description": "Students who feel socially isolated or have difficulty making friends may experience feelings of loneliness and sadness, which can contribute to depression.",
      "type": "cause"
    },
    {
      "id": 3,
      "name": "🤬 Harassment and Peer Influence",
      "description": "Experiencing harassment or feeling influenced by peers can negatively affect a student's mental health, potentially leading to depression.",
      "type": "cause"
    },
    {
      "id": 4,
      "name": "🏠 Family Problems",
      "description": "Conflicts within the family, such as parental divorce, financial difficulties, or dysfunctional relationships, can significantly affect a student's well-being and contribute to depression.",
      "type": "cause"
    },
    {
      "id": 5,
      "name": "🔄 Transitions in Life",
      "description": "Major changes in life, such as moving to a new school or transitioning from high school to college, can be stressful and overwhelming for students, potentially leading to feelings of depression.",
      "type": "cause"
    },
    {
      "id": 6,
      "name": "🍔 Unhealthy Lifestyle Habits",
      "description": "Poor sleeping patterns, lack of exercise, unhealthy eating habits, and substance abuse can all contribute to the development or exacerbation of depression among students.",
      "type": "cause"
    },
    {
      "id": 7,
      "name": "🏆 High Expectations and Perfectionism",
      "description": "Setting unrealistically high standards for oneself and feeling the constant need to meet expectations can lead to chronic stress and perfectionism, which may increase the risk of depression.",
      "type": "cause"
    },
    {
      "id": 8,
      "name": "💸 Financial Stress",
      "description": "Financial difficulties, including the burden of student loans or inability to afford basic necessities, can place significant stress on students, potentially leading to depressive symptoms.",
      "type": "cause"
    },
    {
      "id": 9,
      "name": "😢 Harmful Life Events",
      "description": "Students who have experienced trauma, such as physical or emotional abuse, neglect, or the loss of a loved one, are at a higher risk of developing depression.",
      "type": "cause"
    },
    {
      "id": 10,
      "name": "📱 Unrealistic Comparison and Social Media",
      "description": "Constant exposure to social media, where students compare themselves to others' seemingly perfect lives, can contribute to feelings of inadequacy, low self-esteem, and depression.",
      "type": "cause"
    },
    {
      "id": 11,
      "name": "💔 Relationship Problems",
      "description":"Relationship problems refer to conflicts, challenges, or difficulties that arise within a romantic relationship or partnership. These issues can stem from various factors, such as communication problems, trust issues, differing expectations, or external stressors. Relationship problems can significantly impact the emotional well-being of individuals involved and strain the overall connection between partners.",
      "type": "cause"
    }
  ];


  const symptoms = [
    {
      "id": 12,
      "name": "😔 Persistent Sadness",
      "description": "Feeling sad, empty, or hopeless for an extended period of time.",
      "type": "symptom"
    },
    {
      "id": 13,
      "name": "😞 Loss of Interest or Pleasure",
      "description": "Losing interest in activities or hobbies once enjoyed, experiencing a lack of motivation.",
      "type": "symptom"
    },
    {
      "id": 14,
      "name": "🍔 Changes in Appetite or Weight",
      "description": "Significant changes in appetite, leading to weight gain or weight loss.",
      "type": "symptom"
    },
    {
      "id": 15,
      "name": "🌙 Sleep Problems",
      "description": "Experiencing insomnia, sleeping too much, or having disrupted sleep patterns.",
      "type": "symptom"
    },
    {
      "id": 16,
      "name": "😴 Tiredness and Lack of Energy",
      "description": "Feeling constantly tired, lacking energy, or experiencing a decrease in productivity.",
      "type": "symptom"
    },
    {
      "id": 17,
      "name": "🤯 Difficulty Concentrating",
      "description": "Having trouble focusing, experiencing a decline in academic performance.",
      "type": "symptom"
    },
    {
      "id": 18,
      "name": "😓 Feelings of Worthlessness or Guilt",
      "description": "Feeling excessively guilty, self-critical, or having a diminished sense of self-worth.",
      "type": "symptom"
    },
    {
      "id": 19,
      "name": "😡 Restlessness or Irritability",
      "description": "Feeling agitated, restless, or easily annoyed, even over small matters.",
      "type": "symptom"
    },
    {
      "id": 20,
      "name": "🚶‍♂️ Withdrawal from Social Activities",
      "description": "Avoiding social interactions, isolating oneself from friends and family.",
      "type": "symptom"
    },
    {
      "id": 21,
      "name": "💭 Thoughts of Death or Suicide",
      "description": "Having recurrent thoughts of death, dying, or contemplating suicide.",
      "type": "symptom"
    },
    {
      "id": 22,
      "name": "💥 Increased Arguments",
      "description": "Increased arguments refer to a situation where there is a notable rise in disagreements, disputes, or conflicts between individuals or groups. It signifies a higher frequency or intensity of arguments compared to a previous period or the norm.",
      "type": "symptom"
    }
];

const emotions = [
  {
    "id": 22,
    "name": "😄 Happiness",
    "description": "Feeling joy, contentment, or pleasure.",
    "type":"emotion"
  },
  {
    "id": 23,
    "name": "😞 Sadness",
    "description": "Feeling sorrow, grief, or unhappiness.",
    "type":"emotion"
  },
  {
    "id": 24,
    "name": "😡 Anger",
    "description": "Feeling strong displeasure, irritation, or rage.",
    "type":"emotion"
  },
  {
    "id": 25,
    "name": "😱 Fear",
    "description": "Feeling scared, anxious, or threatened.",
    "type":"emotion"
  },
  {
    "id": 26,
    "name": "😲 Surprise",
    "description": "Feeling astonishment, wonder, or unexpectedness.",
    "type":"emotion"
  },
  {
    "id": 27,
    "name": "😓 Stress",
    "description": "Feeling overwhelmed, tense, or under pressure.",
    "type":"emotion"
  },
  {
    "id": 28,
    "name": "😰 Anxiety",
    "description": "Feeling worried, apprehensive, or nervous.",
    "type":"emotion"
  },
  {
    "id": 29,
    "name": "🚶 Loneliness",
    "description": "Feeling isolated, alone, or lacking companionship.",
    "type":"emotion"
  },
  {
    "id": 30,
    "name": "💔 Grief",
    "description": "Feeling deep sorrow or emotional pain due to a loss.",
    "type":"emotion"
  },
  {
    "id": 31,
    "name": "❓ Uncertainty",
    "description": "Feeling unsure, doubtful, or indecisive.",
    "type":"emotion"
  },
  {
    "id": 32,
    "name": "😴 Lethargy",
    "description": "Feeling tired, lack of energy, or sluggish.",
    "type":"emotion"
  },
  {
    "id": 33,
    "name": "😤 Frustration",
    "description": "Feeling annoyed, irritated, or impatient.",
    "type":"emotion"
  },
  {
    "id": 34,
    "name": "🙇‍♀️ Inadequacy",
    "description": "Feeling not good enough, unworthy, or incompetent.",
    "type":"emotion"
  },
  {
    "id": 35,
    "name": "🤔 Worry",
    "description": "Feeling concerned, troubled, or uneasy about something.",
    "type":"emotion"
  },
  {
    "id": 36,
    "name": "😢 Despair",
    "description": "Feeling extreme sadness, hopelessness, or loss of hope.",
    "type":"emotion"
  },
  {
    "id": 37,
    "name": "😔 Hopelessness",
    "description": "Feeling without hope, discouraged, or pessimistic.",
    "type":"emotion"
  },
  {
    "id": 38,
    "name": "😒 Jealousy",
    "description": "Feeling envious or resentful towards someone's achievements or possessions.",
    "type":"emotion"
  }
];


  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setItemDescription('');
  };
  const clearHandler = () => {
    setSuggestions([])
  }
  const handleClearItems = () => {
    setItems([]);
  }

  return (
    <>
    {suggestions.length > 0 &&(
         <div className='container bg-light'>
          <h6 className='mt-4 text-center text-success'>Suggestions</h6>
         <ul className='list-group'>
             {
               suggestions.length > 0 && suggestions.map((sugestion)=> (
                 
                   <li className='list-group-item'>{sugestion}</li>
                 
               )) 
             }
             </ul>
             <div className='text-center'>
              <button className='btn btn-sm btn-success ' onClick={clearHandler}>clear</button>
             </div>
         </div>
    )}
    
    <DragDropContext onDragEnd={onDragEnd}>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom style={{textAlign:'center',marginTop:'2rem'}}>
          Students Psychology Problems Solver
        </Typography>
        <div className={classes.container}>
          <Box className={classes.box}>
            <Typography variant="h5" className={classes.boxTitle}>
              Box
            </Typography>
            <Droppable droppableId="box">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                      onMouseEnter={() => setItemDescription(item.description)}
                      onMouseLeave={() => setItemDescription('')}
                    >
                      {(provided) => (
                        <Box
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={classes.dragItem}
                        >
                          <Tooltip title={item.description}>
                            <Typography>{item.name}</Typography>
                          </Tooltip>
                          <Button
                            size="small"
                            className={classes.removeButton}
                            onClick={() => handleRemoveItem(index)}
                          >
                            Remove
                          </Button>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  {items.length === 0 && (
                    <Typography variant="body2" className={classes.boxBackgroundText}>
                      Drag causes and symptoms and emotions here
                    </Typography>
                  )}
                  {items.length > 0 && (
                    <>
                    {loading === true &&(<p>please wait few seconds.....</p>)}
                    <Button
                      size="small"
                      className={classes.submitButton}
                      onClick={() => handleSubmit()}
                      disabled={loading?true: false}
                    >
                      Submit
                    </Button>
                    <Button
                      size="small"
                      className={classes.submitButton}
                      onClick={() => handleClearItems()}
                    >
                      Clear
                    </Button>
                    </>
                  )}
                </div>
              )}
            </Droppable>
          </Box>
          {/* <Box className={classes.box}>
            <Typography variant="h5" className={classes.boxTitle}>
              Causes
            </Typography>
            <Droppable droppableId="causes">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {causes.map((cause, index) => (
                    <Draggable
                      key={cause.id}
                      draggableId={cause.id.toString()}
                      index={index}
                      onMouseEnter={() => setItemDescription(cause.description)}
                      onMouseLeave={() => setItemDescription('')}
                    >
                      {(provided) => (
                        <Box
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={classes.dragItem}
                        >
                          <Tooltip title={cause.description} >
                            <Typography style={{ fontSize: '16px' }}>{cause.name}</Typography>
                          </Tooltip>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Box> */}
          <Box className={classes.box}>
  <Typography variant="h5" className={classes.boxTitle}>
    Causes
  </Typography>
  <Droppable droppableId="causes">
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className={classes.glassEffect} // Add a class for the glass effect
      >
        {causes.map((cause, index) => (
          <Draggable
            key={cause.id}
            draggableId={cause.id.toString()}
            index={index}
            onMouseEnter={() => setItemDescription(cause.description)}
            onMouseLeave={() => setItemDescription('')}
          >
            {(provided) => (
              <Box
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className={classes.dragItem}
              >
                <Tooltip title={cause.description}>
                  <Typography style={{ fontSize: '16px' }}>{cause.name}</Typography>
                </Tooltip>
              </Box>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</Box>

          <Box className={classes.box}>
            <Typography variant="h5" className={classes.boxTitle}>
              Symptoms
            </Typography>
            <Droppable droppableId="symptoms">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {symptoms.map((symptom, index) => (
                    <Draggable
                      key={symptom.id}
                      draggableId={symptom.id.toString()}
                      index={index}
                      onMouseEnter={() => setItemDescription(symptom.description)}
                      onMouseLeave={() => setItemDescription('')}
                    >
                      {(provided) => (
                        <Box
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={classes.dragItem}
                        >
                          <Tooltip title={symptom.description}>
                            <Typography>{symptom.name}</Typography>
                          </Tooltip>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Box>
          <Box className={classes.box}>
            <Typography variant="h5" className={classes.boxTitle}>
              Emotions
            </Typography>
            <Droppable droppableId="emotions">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {emotions.map((emotion, index) => (
                    <Draggable
                      key={emotion.id}
                      draggableId={emotion.id.toString()}
                      index={index}
                      onMouseEnter={() => setItemDescription(emotion.description)}
                      onMouseLeave={() => setItemDescription('')}
                    >
                      {(provided) => (
                        <Box
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={classes.dragItem}
                        >
                          <Tooltip title={emotion.description} >
                            <Typography style={{ fontSize: '16px' }}>{emotion.name}</Typography>
                          </Tooltip>
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Box>
        </div>
      </Box>
    </DragDropContext>
    </>
  );
};

export default YourComponent;

