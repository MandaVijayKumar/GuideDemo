import React from 'react';
import { Link } from 'react-router-dom';

const AcademicResources = () => {
  return (
    <div>
      <h2>Academic Resources</h2>
      <p>Here are some resources to help you succeed academically:</p>
      <ul>
        <li><Link to="https://www.khanacademy.org/">Khan Academy</Link></li>
        <li><Link to="https://www.coursera.org/">Coursera</Link></li>
        <li><Link to="https://www.edx.org/">edX</Link></li>
        <li><Link to="https://owl.purdue.edu/owl/purdue_owl.html">Purdue OWL</Link></li>
      </ul>
    </div>
  );
}

export default AcademicResources;
