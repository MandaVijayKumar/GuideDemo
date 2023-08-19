import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));
const expertsInfo = [
    {
        expertName: 'doctor1',
        password: 'password'
    },
    {
        expertName: 'doctor2',
        password: 'password'
    },
    {
        expertName: 'doctor3',
        password: 'password'
    }
]
const ExpertLoginForm = () => {
    const navigate = useNavigate();

  const classes = useStyles();

  const [formData, setFormData] = useState({
    expertName: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { expertName, password } = formData;
  
    if (expertName && password) {
      // Find expert with matching credentials
      const matchedExpert = expertsInfo.find(
        (expert) => expert.expertName === expertName && expert.password === password
      );
  
      if (matchedExpert) {
        console.log('Expert login successful........');
        // Perform the action you want when login is successful (e.g., redirect to a different page)
        navigate('/experts');
      } else {
        console.log('Invalid expert credentials');
        // Display an error message or take appropriate action for failed login
      }
    }
  };
  

  return (
    <div className={classes.root} style={{marginTop:'4rem'}}>
      <Typography variant="h5">Expert Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Expert Name"
          type="text"
          name="expertName"
          value={formData.expertName}
          onChange={handleInputChange}
          required
          fullWidth
        />
        <TextField
          className={classes.textField}
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          fullWidth
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default ExpertLoginForm;
