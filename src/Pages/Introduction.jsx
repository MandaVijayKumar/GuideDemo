// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Style/Introduction.css';

// function Introduction() {
//   const navigate = useNavigate();

//   const cardData = [
//     {
//       title: 'Virtual Therapist',
//       description: 'conversation with Virtual Therapist.',
//       route: '/psychoarea/virtualtherapist',
//     },
//     {
//       title: 'Mental Health Test',
//       description: 'Assess your mental health.',
//       route: '/psychoarea/mentalhealth',
//     },
//     {
//       title: 'Ask Your Problem',
//       description: 'Get answers and solutions.',
//       route: '/psychoarea/askyourproblem',
//     },
   
//     {
//       title: 'Screening Mental Test',
//       description: 'Assess your anxiety level.',
//       route: '/psychoarea/screeningmental',
//     },
//     {
//       title: 'Chat With Experts',
//       description: 'Start a chat with experts.',
//       route: '/psychoarea/chatwithexperts',
//     },
   
//     {
//       title: 'Depression and Anxiety Support',
//       description: 'Interactive UI to explore Depression & Anxiety.',
//       route: '/psychoarea/depressiontest',
//     },
//     {
//       title: 'Psychology Problem Solver (Drag & Drop)',
//       description:
//         'Drag & Drop to explore psychology problems.',
//       route: '/psychoarea/yourcomponent',
//     },
//     {
//       title: 'Mental Health Support Tools',
//       description:
//         'Tools to support mental health.',
//       route: '/psychoarea/toolscomponent',
//     },
//   ];

//   const renderCards = () => {
//     return cardData.map((card, index) => (
//       <div className="card" key={index} onClick={() => navigate(card.route)}>
//         <div className="card-body">
//           <h5 className="card-title">{card.title}</h5>
//           <p className="card-text">{card.description}</p>
         
//           <button type="button" className="btn btn-primary btn-sm btn-rounded">
//             Start
//           </button>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="intro-container container">
//       <div className="intro-items">{renderCards()}</div>
//     </div>
//   );
// }

// export default Introduction;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Introduction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faHeartbeat, faQuestion, faHandsHelping, faComments, faSadTear, faPuzzlePiece, faToolbox } from '@fortawesome/free-solid-svg-icons';

function Introduction() {
  const navigate = useNavigate();

  const cardData = [
    {
      title: 'Virtual Therapist',
      description: 'Conversation with Virtual Therapist.',
      route: '/psychoarea/virtualtherapist',
      icon: faUserMd,
    },
    {
      title: 'Wellness and Support Hub',
      description: 'Journey to Well-being.',
      route: '/psychoarea/mentalhealth',
      icon: faHeartbeat,
    },
    {
      title: 'Ask Your Problem',
      description: 'Get answers and solutions.',
      route: '/psychoarea/askyourproblem',
      icon: faQuestion,
    },
    {
      title: 'Screening Mental Test',
      description: 'Assess your anxiety level.',
      route: '/psychoarea/screeningmental',
      icon: faHandsHelping,
    },
    {
      title: 'Chat With Experts',
      description: 'Start a chat with experts.',
      route: '/psychoarea/chatwithexperts',
      icon: faComments,
    },
    {
      title: 'Depression and Anxiety Support',
      description: 'Interactive UI to explore Depression & Anxiety.',
      route: '/psychoarea/depressiontest',
      icon: faSadTear,
    },
    {
      title: 'Psychology Problem Solver (Drag & Drop)',
      description: 'Drag & Drop to explore psychology problems.',
      route: '/psychoarea/yourcomponent',
      icon: faPuzzlePiece,
    },
    {
      title: 'Mental Health Support Tools',
      description: 'Tools to support mental health.',
      route: '/psychoarea/toolscomponent',
      icon: faToolbox,
    },
  ];

  const renderCards = () => {
    return cardData.map((card, index) => (
      <div className="card" key={index} onClick={() => navigate(card.route)}>
        <div className="card-body text-center">
          {/* Render the Font Awesome icon */}
          <div className='text-center'>
          <FontAwesomeIcon icon={card.icon} className="card-icon" />
          </div>
          
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.description}</p>
         
          <button type="button" className="btn btn-primary btn-sm btn-rounded">
            Start
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="intro-container container">
      <div className="intro-items">{renderCards()}</div>
    </div>
  );
}

export default Introduction;
