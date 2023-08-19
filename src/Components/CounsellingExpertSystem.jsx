import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typist from 'react-typist';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '6rem',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100% - 4rem)',
   
    overflow: 'auto',
  },
  container: {
    padding: theme.spacing(4),
  },
}));

const CounsellingExpertSystem = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            <Typist cursor={{ show: false }} style={{margin: '3rem',  padding:'2rem'}}>
              Hello, I'm an AI Counselling Expert System
              <Typist.Delay ms={1000}  style={{margin: '3rem',  padding:'2rem'}}/>
              <br />
              I can help you with your psychological problems.
              <Typist.Delay ms={1000}  style={{margin: '3rem', padding:'2rem'}}/>
              <br />
              Just login with me to get started!
            </Typist>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CounsellingExpertSystem;
