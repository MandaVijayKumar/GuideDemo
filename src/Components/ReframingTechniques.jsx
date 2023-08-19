// import React, { useState } from 'react';

// const ReframingTechniques = () => {
//   const [selectedTechnique, setSelectedTechnique] = useState('');
//   const [negativeThought, setNegativeThought] = useState('');
//   const [reframedThought, setReframedThought] = useState('');

//   const handleTechniqueChange = (event) => {
//     setSelectedTechnique(event.target.value);
//   };

//   const handleNegativeThoughtChange = (event) => {
//     setNegativeThought(event.target.value);
//   };

//   const handleReframeThought = () => {
//     let reframed = '';

//     switch (selectedTechnique) {
//       case 'cognitiveReframing':
//         reframed = cognitiveReframing(negativeThought);
//         break;
//       case 'positiveAffirmations':
//         reframed = positiveAffirmations(negativeThought);
//         break;
//       case 'perspectiveShifting':
//         reframed = perspectiveShifting(negativeThought);
//         break;
//       default:
//         // Handle default case or error scenario
//         break;
//     }

//     setReframedThought(reframed);
//   };

//   const cognitiveReframing = (thought) => {
//     // Perform cognitive reframing logic and return the reframed thought
//     if (thought.includes("I'm not good enough")) {
//       return thought.replace("I'm not good enough", "I have unique talents and qualities that make me valuable");
//     } else if (thought.includes("I'll never succeed")) {
//       return thought.replace("I'll never succeed", "I am capable of achieving my goals with hard work and perseverance");
//     } else if (thought.includes("I'm a failure")) {
//       return thought.replace("I'm a failure", "I am capable of learning from my mistakes and growing");
//     } else if (thought.includes("I'm worthless")) {
//       return thought.replace("I'm worthless", "I am worthy of love and respect");
//     } else if (thought.includes("I can't do anything right")) {
//       return thought.replace("I can't do anything right", "I am capable and have the potential to succeed");
//     } else if (thought.includes("I always mess things up")) {
//       return thought.replace("I always mess things up", "I learn and grow from every experience, even the challenging ones");
//     } else if (thought.includes("I'm a disappointment")) {
//       return thought.replace("I'm a disappointment", "I have the power to make positive changes and be proud of myself");
//     } else if (thought.includes("I'm not smart enough")) {
//       return thought.replace("I'm not smart enough", "I have a unique intelligence and can learn anything I set my mind to");
//     } else if (thought.includes("I'm a loser")) {
//       return thought.replace("I'm a loser", "I am worthy of success and have the potential to achieve my goals");
//     } else if (thought.includes("I'll never be happy")) {
//       return thought.replace("I'll never be happy", "I have the ability to create my own happiness and find joy in every day");
//     } else if (thought.includes("I'm a burden to others")) {
//       return thought.replace("I'm a burden to others", "I contribute value and support to the people around me");
//     } else if (thought.includes("I'm stuck and can't change")) {
//       return thought.replace("I'm stuck and can't change", "I have the power to create positive change in my life");
//     } else if (thought.includes("I'm not lovable")) {
//       return thought.replace("I'm not lovable", "I am deserving of love and have meaningful connections in my life");
//     } else if (thought.includes("I'll never be successful")) {
//       return thought.replace("I'll never be successful", "I am capable of achieving my definition of success through hard work and dedication");
//     } else if (thought.includes("I'm not worthy of happiness")) {
//       return thought.replace("I'm not worthy of happiness", "I deserve happiness and have the power to create a fulfilling life");
//     } else if (thought.includes("I'll always be alone")) {
//       return thought.replace("I'll always be alone", "I have the ability to build meaningful relationships and find companionship");
//     } else if (thought.includes("I'm not deserving of success")) {
//       return thought.replace("I'm not deserving of success", "I am deserving of success and have the skills and capabilities to achieve it");
//     } else if (thought.includes("I'll never be good enough")) {
//       return thought.replace("I'll never be good enough", "I am enough as I am, and I can continuously improve and grow");
//     } else if (thought.includes("I'm always a disappointment to others")) {
//       return thought.replace("I'm always a disappointment to others", "I have the ability to positively impact the lives of those around me");
//     } else if (thought.includes("I'm not capable of handling challenges")) {
//       return thought.replace("I'm not capable of handling challenges", "I am resilient and can overcome any challenge that comes my way");
//     } else {
//       // If no specific reframing case matches, return the original thought
//       return thought;
//     }
//   };


//   const positiveAffirmations = (thought) => {
//     // Perform positive affirmations logic and return the reframed thought
//     // Example: Replace negative thoughts with uplifting and empowering statements
//     if (thought.includes("I'm a failure")) {
//       return thought.replace("I'm a failure", "I am capable of learning from my mistakes and growing");
//     } else if (thought.includes("I'm worthless")) {
//       return thought.replace("I'm worthless", "I am worthy of love and respect");
//     } else {
//       // Return the original thought if no specific reframing applies
//       return thought;
//     }
//   };

//   const perspectiveShifting = (thought) => {
//     // Perform perspective shifting logic and return the reframed thought
//     // Example: Encourage seeing the situation from a different angle or considering other people's perspectives
//     if (thought.includes("Everyone is against me")) {
//       return thought.replace("Everyone is against me", "Everyone has their own struggles and perspectives");
//     } else if (thought.includes("Nothing ever goes my way")) {
//       return thought.replace("Nothing ever goes my way", "There are always opportunities for growth and positive outcomes");
//     } else {
//       // Return the original thought if no specific reframing applies
//       return thought;
//     }
//   };

//   return (
//     <div>
//       <h2>Reframing Techniques</h2>
//       <p>
//         Reframing techniques can help us shift our perspective and find more positive and empowering thoughts. Choose a technique below and practice reframing your negative thought.
//       </p>

//       <label htmlFor="techniques">Choose a technique:</label>
//       <select id="techniques" value={selectedTechnique} onChange={handleTechniqueChange}>
//         <option value="">Select a technique</option>
//         <option value="cognitiveReframing">Cognitive Reframing</option>
//         <option value="positiveAffirmations">Positive Affirmations</option>
//         <option value="perspectiveShifting">Perspective Shifting</option>
//         {/* Add more reframing techniques as options */}
//       </select>

//       <label htmlFor="negativeThought">Negative Thought:</label>
//       <textarea id="negativeThought" value={negativeThought} onChange={handleNegativeThoughtChange}></textarea>

//       <button onClick={handleReframeThought}>Reframe Thought</button>

//       {reframedThought && (
//         <div>
//           <h3>Reframed Thought:</h3>
//           <p>{reframedThought}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReframingTechniques;
import React, { useState } from 'react';
import '../Style/ReframingTechniques.css';

const ReframingTechniques = () => {
  const [selectedTechnique, setSelectedTechnique] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [reframedThought, setReframedThought] = useState('');

  const handleTechniqueChange = (event) => {
    setSelectedTechnique(event.target.value);
  };

  const handleNegativeThoughtChange = (event) => {
    setNegativeThought(event.target.value);
  };

  const handleReframeThought = () => {
    let reframed = '';

    switch (selectedTechnique) {
      case 'cognitiveReframing':
        reframed = cognitiveReframing(negativeThought);
        break;
      case 'positiveAffirmations':
        reframed = positiveAffirmations(negativeThought);
        break;
      case 'perspectiveShifting':
        reframed = perspectiveShifting(negativeThought);
        break;
      default:
        // Handle default case or error scenario
        break;
    }

    setReframedThought(reframed);
  };

  const cognitiveReframing = (thought) => {
    // Perform cognitive reframing logic and return the reframed thought
    if (thought.includes("I'm not good enough")) {
      return thought.replace("I'm not good enough", "I have unique talents and qualities that make me valuable");
    } else if (thought.includes("I'll never succeed")) {
      return thought.replace("I'll never succeed", "I am capable of achieving my goals with hard work and perseverance");
    } else if (thought.includes("I'm a failure")) {
      return thought.replace("I'm a failure", "I am capable of learning from my mistakes and growing");
    } else if (thought.includes("I'm worthless")) {
      return thought.replace("I'm worthless", "I am worthy of love and respect");
    } else if (thought.includes("I can't do anything right")) {
      return thought.replace("I can't do anything right", "I am capable and have the potential to succeed");
    } else if (thought.includes("I always mess things up")) {
      return thought.replace("I always mess things up", "I learn and grow from every experience, even the challenging ones");
    } else if (thought.includes("I'm a disappointment")) {
      return thought.replace("I'm a disappointment", "I have the power to make positive changes and be proud of myself");
    } else if (thought.includes("I'm not smart enough")) {
      return thought.replace("I'm not smart enough", "I have a unique intelligence and can learn anything I set my mind to");
    } else if (thought.includes("I'm a loser")) {
      return thought.replace("I'm a loser", "I am worthy of success and have the potential to achieve my goals");
    } else if (thought.includes("I'll never be happy")) {
      return thought.replace("I'll never be happy", "I have the ability to create my own happiness and find joy in every day");
    } else if (thought.includes("I'm a burden to others")) {
      return thought.replace("I'm a burden to others", "I contribute value and support to the people around me");
    } else if (thought.includes("I'm stuck and can't change")) {
      return thought.replace("I'm stuck and can't change", "I have the power to create positive change in my life");
    } else if (thought.includes("I'm not lovable")) {
      return thought.replace("I'm not lovable", "I am deserving of love and have meaningful connections in my life");
    } else if (thought.includes("I'll never be successful")) {
      return thought.replace("I'll never be successful", "I am capable of achieving my definition of success through hard work and dedication");
    } else if (thought.includes("I'm not worthy of happiness")) {
      return thought.replace("I'm not worthy of happiness", "I deserve happiness and have the power to create a fulfilling life");
    } else if (thought.includes("I'll always be alone")) {
      return thought.replace("I'll always be alone", "I have the ability to build meaningful relationships and find companionship");
    } else if (thought.includes("I'm not deserving of success")) {
      return thought.replace("I'm not deserving of success", "I am deserving of success and have the skills and capabilities to achieve it");
    } else if (thought.includes("I'll never be good enough")) {
      return thought.replace("I'll never be good enough", "I am enough as I am, and I can continuously improve and grow");
    } else if (thought.includes("I'm always a disappointment to others")) {
      return thought.replace("I'm always a disappointment to others", "I have the ability to positively impact the lives of those around me");
    } else if (thought.includes("I'm not capable of handling challenges")) {
      return thought.replace("I'm not capable of handling challenges", "I am resilient and can overcome any challenge that comes my way");
    } else {
      // If no specific reframing case matches, return the original thought
      return thought;
    }
  };

  const positiveAffirmations = (thought) => {
    // Perform positive affirmations logic and return the reframed thought
    if (thought.includes("I am not good enough to be successful")) {
      return thought.replace("I am not good enough to be successful", "I have the abilities and qualities needed to succeed in my goals");
    } else if (thought.includes("I am not worthy of happiness")) {
      return thought.replace("I am not worthy of happiness", "I deserve happiness and joy in my life");
    } else if (thought.includes("I am always anxious and stressed")) {
      return thought.replace("I am always anxious and stressed", "I am calm and capable of managing stress in healthy ways");
    } else if (thought.includes("I am not capable of making friends")) {
      return thought.replace("I am not capable of making friends", "I have the social skills to connect with others and form meaningful friendships");
    } else if (thought.includes("I am always compared to others and found lacking")) {
      return thought.replace("I am always compared to others and found lacking", "I embrace my uniqueness and value myself for who I am");
    } else if (thought.includes("I am not smart enough to understand")) {
      return thought.replace("I am not smart enough to understand", "I am a capable learner and can understand complex concepts");
    } else if (thought.includes("I am not confident in my abilities")) {
      return thought.replace("I am not confident in my abilities", "I believe in myself and have confidence in my skills and talents");
    } else if (thought.includes("I am always judged for my appearance")) {
      return thought.replace("I am always judged for my appearance", "I love and accept myself unconditionally, regardless of my physical appearance");
    } else if (thought.includes("I am not good enough to pursue my dreams")) {
      return thought.replace("I am not good enough to pursue my dreams", "I am deserving of pursuing my dreams, and I have the determination to achieve them");
    } else if (thought.includes("I am always overwhelmed by academic pressure")) {
      return thought.replace("I am always overwhelmed by academic pressure", "I manage my academic responsibilities with ease and achieve success");
    } else if (thought.includes("I am not deserving of support")) {
      return thought.replace("I am not deserving of support", "I am deserving of support and care from those around me");
    } else if (thought.includes("I am not capable of overcoming challenges")) {
      return thought.replace("I am not capable of overcoming challenges", "I am resilient and have the strength to overcome any challenge that comes my way");
    } else if (thought.includes("I am always criticized for my mistakes")) {
      return thought.replace("I am always criticized for my mistakes", "I embrace my mistakes as opportunities for growth and learning");
    } else if (thought.includes("I am not confident in public speaking")) {
      return thought.replace("I am not confident in public speaking", "I speak with confidence and clarity, captivating my audience");
    } else if (thought.includes("I am not good enough to be loved")) {
      return thought.replace("I am not good enough to be loved", "I am deserving of love and affection, just as I am");
    } else if (thought.includes("I am always worried about what others think")) {
      return thought.replace("I am always worried about what others think", "I trust my own judgment and value my own opinion");
    } else if (thought.includes("I am not creative or talented")) {
      return thought.replace("I am not creative or talented", "I am a creative and talented individual with unique gifts to share");
    } else if (thought.includes("I am not capable of managing my time effectively")) {
      return thought.replace("I am not capable of managing my time effectively", "I am organized and manage my time efficiently to accomplish my tasks");
    } else if (thought.includes("I am always afraid of failure")) {
      return thought.replace("I am always afraid of failure", "I embrace failure as a stepping stone to success and learn valuable lessons along the way");
    } else {
      // If no specific reframing case matches, return the original thought
      return thought;
    }
  };

  const perspectiveShifting = (thought) => {
    // Perform perspective shifting logic and return the reframed thought
    // ...
  };

  return (
    <div className="reframing-container">
      <h2 className="reframing-title">Reframing Techniques</h2>
      <p className="reframing-description">
        Reframing techniques can help us shift our perspective and find more positive and empowering thoughts. Choose a
        technique below and practice reframing your negative thought.
      </p>

      <div className="reframing-form">
        <label htmlFor="techniques" className="reframing-label">Choose a technique:</label>
        <select id="techniques" className="reframing-select" value={selectedTechnique} onChange={handleTechniqueChange}>
          <option value="">Select a technique</option>
          <option value="cognitiveReframing">Cognitive Reframing</option>
          <option value="positiveAffirmations">Positive Affirmations</option>
          <option value="perspectiveShifting">Perspective Shifting</option>
          {/* Add more reframing techniques as options */}
        </select>

        <label htmlFor="negativeThought" className="reframing-label">Negative Thought:</label>
        <textarea id="negativeThought" className="reframing-textarea" value={negativeThought} onChange={handleNegativeThoughtChange}></textarea>

        <button className="reframing-button" onClick={handleReframeThought}>Reframe Thought</button>

        {reframedThought && (
          <div className="reframing-result">
            <h3 className="reframing-result-title">Reframed Thought:</h3>
            <p className="reframing-result-text">{reframedThought}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReframingTechniques;

