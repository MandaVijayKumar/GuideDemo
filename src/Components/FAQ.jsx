import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Icon, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  accordion: {
    backgroundColor: theme.palette.grey[100],
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  accordionSummary: {
    backgroundColor: theme.palette.grey[200],
    borderBottom: `1px solid ${theme.palette.divider}`,
    minHeight: 56,
    '&$accordionSummaryExpanded': {
      minHeight: 56,
    },
  },
  accordionSummaryExpanded: {},
  accordionDetails: {
    padding: theme.spacing(2),
  },
}));

const FAQ = () => {
  const classes = useStyles();
  const faqs = [
    {
      "question": "I'm feeling overwhelmed with my workload. What can I do to manage my stress levels?",
      "answer": "It's important to prioritize your tasks and break them down into smaller, more manageable chunks. Make a to-do list and schedule your time accordingly. Don't forget to take breaks and practice self-care, such as getting enough sleep, exercise, and healthy meals."
    },
    {
      "question": "I'm having trouble concentrating in class. What can I do to improve my focus?",
      "answer": "There are several things you can do to improve your concentration. Make sure you're getting enough sleep and exercise, eat a healthy diet, and avoid distractions such as social media and your phone during class. You can also try active listening techniques, like taking notes or repeating information in your head."
    },
    {
      "question": "I'm feeling anxious about upcoming exams. How can I manage my test anxiety?",
      "answer": "Try to prepare for exams well in advance, so you have enough time to study and feel confident in your knowledge. Practice relaxation techniques, such as deep breathing or meditation, to help calm your nerves. You can also talk to a counselor or mental health professional for additional support."
    },
    {
      "question": "I'm struggling to balance my schoolwork with other responsibilities, like a part-time job or extracurricular activities. What can I do to manage my time more effectively?",
      "answer": "Try using a planner or calendar to schedule your time and prioritize your tasks. Make sure to build in time for self-care and relaxation as well. Consider delegating some responsibilities or seeking additional support if you're feeling overwhelmed."
    },
    {
      "question": "I'm having difficulty adjusting to college life and making new friends. What can I do to feel more connected?",
      "answer": "Joining clubs or organizations on campus can be a great way to meet new people who share your interests. Consider reaching out to classmates or roommates to form study groups or socialize. Don't be afraid to step out of your comfort zone and try new things. And remember that it's okay to seek support from a counselor or mental health professional if you're struggling."
    }
  ]

  return (
    <div className={classes.root}>
      {faqs.map((faq, index) => (
        <Accordion key={index} className={classes.accordion}>
          <AccordionSummary
            expandIcon={<Icon>expand_more</Icon>}
            aria-controls={`faq${index}-content`}
            id={`faq${index}-header`}
            className={classes.accordionSummary}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="body1">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
