import React, { useState, useContext } from 'react';
import { authContext } from '../Context';
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';

const styles = {
  formContainer: {
    margin: '1rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  responsiveForm: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
  },
  formField: {
    marginBottom: '16px',
  },
  smallScreenPadding: {
    padding: '0 20px',
  },
};

const MentalHealthForm = ({ onFormSubmit }) => {
  const userData = useContext(authContext);
  const { user } = userData;

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    email: user.userEmail,
    problemType: '',
    details: '',
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
    onFormSubmit(formData);
    setFormData({
      name: '',
      gender: '',
      age: '',
      email: user.userEmail,
      problemType: '',
      details: '',
    });
  };

  return (
    <div style={window.innerWidth <= 768 ? {...styles.formContainer, ...styles.smallScreenPadding} : styles.formContainer}>
      <Typography variant="h4" gutterBottom>
        Share Your Mental Health Problem
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Experts in psychology fields will reply to your problems.
      </Typography>
      <form onSubmit={handleSubmit} style={styles.responsiveForm}>
        <div style={styles.formField}>
          <TextField
            label="Your Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </div>
        <div style={styles.formField}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              value={formData.gender}
              onChange={handleInputChange}
              name="gender"
              required
            >
              <MenuItem value="">Select One</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={styles.formField}>
          <TextField
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </div>
        <div style={styles.formField}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={user.userEmail}
            onChange={handleInputChange}
            disabled={true}
            fullWidth
          />
        </div>
        <div style={styles.formField}>
          <FormControl fullWidth>
            <InputLabel>Select the Type of Problem</InputLabel>
            <Select
              value={formData.problemType}
              onChange={handleInputChange}
              name="problemType"
              required
            >
              <MenuItem value="">Select One</MenuItem>
              <MenuItem value="Anxiety">Anxiety</MenuItem>
              <MenuItem value="Depression">Depression</MenuItem>
              <MenuItem value="Stress">Stress</MenuItem>
              <MenuItem value="Academic Pressure">Academic Pressure</MenuItem>
              <MenuItem value="Social Isolation">Social Isolation</MenuItem>
              <MenuItem value="Relationship Issues">Relationship Issues</MenuItem>
              <MenuItem value="Self-Esteem Issues">Self-Esteem Issues</MenuItem>
              <MenuItem value="Body Image Concerns">Body Image Concerns</MenuItem>
              <MenuItem value="Eating Disorders">Eating Disorders</MenuItem>
              <MenuItem value="Substance Abuse">Substance Abuse</MenuItem>
              <MenuItem value="Self-Harm">Self-Harm</MenuItem>
              <MenuItem value="Family Conflict">Family Conflict</MenuItem>
              <MenuItem value="Trauma">Trauma</MenuItem>
              <MenuItem value="Grief and Loss">Grief and Loss</MenuItem>
              <MenuItem value="Identity and Cultural Issues">Identity and Cultural Issues</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={styles.formField}>
          <TextField
            label="Additional Details"
            multiline
            rows={4}
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MentalHealthForm;
