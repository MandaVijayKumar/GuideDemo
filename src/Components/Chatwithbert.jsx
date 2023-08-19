import React, { useState } from 'react';
import axios from 'axios';

const Chatwithbert = () => {
  const [problem, setProblem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5001/analyze', { text:problem });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="problem">Psychology Problem:</label>
      <textarea
        id="problem"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        required
      />
      <button type="submit">Analyze</button>
    </form>
  );
};

export default Chatwithbert;
