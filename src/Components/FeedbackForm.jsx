import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [rating, setRating] = useState('');
    const [experience, setExperience] = useState('');
    const [comments, setComments] = useState('');
    const [comparison, setComparison] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the feedback data to the server
            const response = await axios.post('http://127.0.0.1:5001/feedback', {
                name,
                email,
                age,
                gender,
                rating,
                experience,
                comments,
                comparison,
            });
            console.log(response.data); // Assuming the server responds with the saved feedback data

            // Clear the form after successful submission
            setName('');
            setEmail('');
            setAge('');
            setGender('');
            setRating('');
            setExperience('');
            setComments('');
            setComparison('');
            alert('your feedback data succussefully saved ')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', position:'relative', top:'6rem' }}>
            <form onSubmit={handleSubmit}>
                <h2 className="mb-4">Feedback Form</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Rating"
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Experience</InputLabel>
                            <Select
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                required
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="Excellent">Excellent</MenuItem>
                                <MenuItem value="Good">Good</MenuItem>
                                <MenuItem value="Fair">Fair</MenuItem>

                                <MenuItem value="Poor">Poor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Comparison to Traditional Counseling</InputLabel>
                            <Select
                                value={comparison}
                                onChange={(e) => setComparison(e.target.value)}
                                required
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="Better">Better</MenuItem>
                                <MenuItem value="Same">Same</MenuItem>
                                <MenuItem value="Worse">Worse</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Comments"
                            multiline
                            rows={3}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};
export default FeedbackForm;
