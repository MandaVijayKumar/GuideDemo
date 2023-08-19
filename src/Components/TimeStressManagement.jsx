import React from 'react';
import { Link } from 'react-router-dom';

const TimeStressManagement = () => {
  return (
    <div>
      <h2>Time and Stress Management</h2>
      <p>Here are some resources to help you manage your time and stress:</p>
      <ul>
        <li><Link to="https://www.mindtools.com/pages/main/newMN_HTE.htm">Effective Time Management</Link></li>
        <li><Link to="https://www.helpguide.org/articles/stress/stress-management.htm">Stress Management</Link></li>
        <li><Link to="https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/time-management/art-20048186">Time Management: Tips to Reduce Stress and Improve Productivity</Link></li>
      </ul>
    </div>
  );
}

export default TimeStressManagement;
