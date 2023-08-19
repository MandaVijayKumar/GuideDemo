import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

import RecommendationModal from '../Components/RecommendationModal';

const ExpertsRecommendation = () => {
    const [formEntries, setFormEntries] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        fetchFormEntries();
    }, []);



    const fetchFormEntries = async () => {
        try {
            const response = await axios.get('http://localhost:5001/students');
            setFormEntries(response.data.reverse());
        } catch (error) {
            console.error('Error fetching form entries:', error);
        }
    };

    const handleOpenModal = (student) => {
        console.log(student);
        setSelectedStudent(student);
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setSelectedStudent(null);
    };

    const handleSubmitRecommendation = async (recommendation) => {
        console.log(recommendation)
        try {
            if (selectedStudent && selectedStudent.email && recommendation) {
                const response = await axios.post('http://localhost:5001/recommendation', {
                    email: selectedStudent.email,
                    recommendation,
                    problemType: selectedStudent.problemType,
                    details: selectedStudent.details,
                });
                console.log(response);
                // If you want to update the UI immediately, you can update the corresponding student object in the state with the new recommendation data returned from the server.
            }
           
        } catch (error) {
            console.error('Error submitting recommendation:', error);
        }
    };

    return (
        <div style={{marginTop:'4rem'}}> 

            <h6 className='bg-priamry text-center mt-5 pt-3'>Psychology Experts Group - Providing Guidance and Support</h6>
            <p className='lead text-center'>Welcome to the Psychology Experts Group, a community of dedicated mental health professionals and psychologists committed to offering guidance and support to students seeking help with their emotional well-being.</p>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Problem Type</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Recommendations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formEntries.map((entry) => (
                            <TableRow key={entry._id}>
                                <TableCell>{entry.name}</TableCell>
                                <TableCell>{entry.gender}</TableCell>
                                <TableCell>{entry.age}</TableCell>
                                <TableCell>{entry.email}</TableCell>
                                <TableCell>{entry.problemType}</TableCell>
                                <TableCell>{entry.details}</TableCell>
                                <TableCell>
                                    <button
                                        onClick={() => handleOpenModal(entry)}
                                        style={{
                                            padding: '8px 16px',
                                            fontSize: '14px',
                                            color: 'white',
                                            background: '#007bff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Recommendations
                                    </button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <RecommendationModal
                isOpen={modalIsOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmitRecommendation}
            />
        </div>
    );
};

export default ExpertsRecommendation;
