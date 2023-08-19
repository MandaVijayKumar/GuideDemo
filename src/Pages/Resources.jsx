import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Grid,
  Slider,
  Tooltip
} from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    width: 300,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    [theme.breakpoints.down('sm')]: {
      width: 250,
      height: 150,
    },
  },
  cardContent: {
    height: '80%',
  },
  cardActions: {
    height: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  slideContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  slider: {
    width: 'calc(100% - 120px)',
  },
}));

const resources = [{ title: 'Find Help for Mental Illnesses (National Institute of Mental Health)', link: 'https://www.nimh.nih.gov/health/find-help/index.shtml', }, { title: 'Find a Therapist (Psychology Today)', link: 'https://www.psychologytoday.com/us/therapists', }, { title: 'National Suicide Prevention Lifeline (1-800-273-TALK)', link: 'https://suicidepreventionlifeline.org/', }, { title: 'Crisis Text Line (Text HOME to 741741)', link: 'https://www.crisistextline.org/', }, { title: 'Vandrevala Foundation (India)', link: 'https://www.vandrevalafoundation.com/', }, { title: 'Fortis Mental Health Services (India)', link: 'https://www.fortishealthcare.com/india/mental-health-services', }, { title: 'Manochikitsa (India)', link: 'https://www.manochikitsa.com/', },];

const Resources = () => {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handlePrevClick = () => {
    setSliderValue((prevValue) => prevValue - 1);
  };

  const handleNextClick = () => {
    setSliderValue((prevValue) => prevValue + 1);
  };

  const renderCard = (index) => {
    const resource = resources[index];
    return (
      <Card key={index} className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h2">
            {resource.title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button color="primary" size="small" href={resource.link} target="_blank">
            Visit
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <div>
      <Typography variant="h4" component="h1" align="center">
        Resources and Support
      </Typography>
      {/* Slider Controls */}
      <div className={classes.slideContainer}>
        <IconButton onClick={handlePrevClick} disabled={sliderValue === 0}>
          <ChevronLeft />
        </IconButton>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={resources.length - 1}
          step={1}
          marks
          className={classes.slider}
          ThumbComponent={Tooltip}
          ThumbProps={{
            placement: 'top',
            children: <span>{resources[sliderValue].title}</span>
          }}
        />
        <IconButton onClick={handleNextClick} disabled={sliderValue === resources.length - 1}>
          <ChevronRight />
        </IconButton>
      </div>

      {/* Cards */}
      <Grid container justify="center">
        {renderCard(sliderValue)}
      </Grid>
    </div>
  );
};

export default Resources;
