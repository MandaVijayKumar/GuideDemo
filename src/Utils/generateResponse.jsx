// export const generateSystemResponse = (userMessage) => {
//     const lowerCaseUserMessage = userMessage.toLowerCase();
  
//     // if (
//     //   lowerCaseUserMessage.includes('depressed') ||
//     //   lowerCaseUserMessage.includes('feeling down') ||
//     //   lowerCaseUserMessage.includes('feeling sad')
//     // ) {
//     //   return "I'm sorry to hear that. How long have you been feeling this way?";
//     // }
//     if (userMessage.toLowerCase().includes('depressed')) {
//         return {
//           content: "I'm sorry to hear that. How long have you been feeling this way?",
//           options: [
//             { label: 'Less than a week', recommendation: 'Consider talking to a trusted friend or family member for support.' },
//             { label: '1-2 weeks', recommendation: 'Consider seeking professional help from a therapist or counselor.' },
//             { label: '3-4 weeks', recommendation: 'Reach out to a mental health professional for an evaluation.' },
//             { label: 'More than 4 weeks', recommendation: 'It might be helpful to seek professional help from a psychiatrist or psychologist.' },
//           ],
//         };
//       }
  
//     if (
//       lowerCaseUserMessage.includes('no energy') ||
//       lowerCaseUserMessage.includes('no motivation') ||
//       lowerCaseUserMessage.includes('difficulty concentrating') ||
//       lowerCaseUserMessage.includes('lack of interest') ||
//       lowerCaseUserMessage.includes('loss of pleasure')
//     ) {
//       return "It sounds like you might be experiencing symptoms of depression. How long have you been feeling this way?";
//     }
  
//     if (
//       lowerCaseUserMessage.includes('changes in appetite') ||
//       lowerCaseUserMessage.includes('sleep problems') ||
//       lowerCaseUserMessage.includes('weight changes') ||
//       lowerCaseUserMessage.includes('insomnia') ||
//       lowerCaseUserMessage.includes('oversleeping')
//     ) {
//       return "Changes in appetite and sleep patterns can be indicators of depression. How long have you been experiencing these changes?";
//     }
  
//     if (
//       lowerCaseUserMessage.includes('feelings of worthlessness') ||
//       lowerCaseUserMessage.includes('thoughts of self-harm') ||
//       lowerCaseUserMessage.includes('hopelessness') ||
//       lowerCaseUserMessage.includes('guilt')
//     ) {
//       return "Feelings of worthlessness, thoughts of self-harm, hopelessness, and guilt are serious symptoms. It's important to seek professional help immediately. Can you reach out to a mental health professional?";
//     }
  
//     // Default response if the user's message doesn't match any specific condition
//     return "I'm here to support you. How can I assist you today?";
//   };
  


  // export const generateSystemResponse = (userMessage) => {
  //   const lowerCaseUserMessage = userMessage.toLowerCase();
  
  //   if (lowerCaseUserMessage.includes('depressed')) {
  //     return [
  //       {
  //         content: "I'm sorry to hear that. How long have you been feeling this way?",
  //         options: [
  //           { label: 'Less than a week', recommendation: 'Consider talking to a trusted friend or family member for support.' },
  //           { label: '1-2 weeks', recommendation: 'Consider seeking professional help from a therapist or counselor.' },
  //           { label: '3-4 weeks', recommendation: 'Reach out to a mental health professional for an evaluation.' },
  //           { label: 'More than 4 weeks', recommendation: 'It might be helpful to seek professional help from a psychiatrist or psychologist.' },
  //         ],
  //       },
  //       {
  //         content: "In addition to seeking professional help, there are self-care strategies that may help improve your well-being. Are you open to exploring some self-care practices?",
  //         options: [
  //           { label: 'Yes', recommendation: 'Engaging in activities like exercise, journaling, or mindfulness can positively impact your mental health.' },
  //           { label: 'No', recommendation: "That's understandable. Remember that professional help is available if you decide you want to explore self-care in the future." },
  //         ],
  //       },
  //       {
  //         content: "Is there anything specific that you believe contributes to your feelings of depression?",
  //         options: [
  //           { label: 'Relationship issues', recommendation: 'Consider seeking couples counseling or relationship therapy to address any underlying issues.' },
  //           { label: 'Work or academic stress', recommendation: 'Explore stress management techniques and consider seeking support from a career counselor or academic advisor.' },
  //           { label: 'Lack of social support', recommendation: 'Try to connect with supportive communities or groups and consider reaching out to a therapist or support helpline.' },
  //           { label: 'Other factors', recommendation: 'It can be helpful to work with a mental health professional to identify and address specific factors contributing to your depression.' },
  //         ],
  //       },
  //       {
  //         content: "Have you noticed any changes in your sleeping or eating patterns?",
  //         options: [
  //           { label: 'Yes', recommendation: 'Changes in sleeping or eating patterns can be related to depression. It\'s important to monitor these changes and discuss them with a mental health professional.' },
  //           { label: 'No', recommendation: 'That is alright. It is still beneficial to explore your feelings further and seek professional help if needed.' },
  //         ],
  //       },
  //       {
  //         content: "Are you experiencing a loss of interest or pleasure in activities that you once enjoyed?",
  //         options: [
  //           { label: 'Yes', recommendation: 'A loss of interest or pleasure in activities can be a symptom of depression. It is recommended to consult with a mental health professional to discuss your symptoms.' },
  //           { label: 'No', recommendation: 'That\'s okay. It\'s important to continue exploring your feelings and seek professional help if you have any concerns.' },
  //         ],
  //       },
  //       {
  //         content: "Do you often feel fatigued or lack energy?",
  //         options: [
  //           { label: 'Yes', recommendation: 'Fatigue and lack of energy are common symptoms of depression. It is recommended to discuss these symptoms with a mental health professional.' },
  //           { label: 'No', recommendation: 'That\'s alright. It\'s still important to address your feelings and seek professional help if needed.' },
  //         ],
  //       },
  //     ];
  //   }
    
  
  //   // Add more conditions and responses here
  
  //   return [
  //     {
  //       content: "I'm here to support you. How can I assist you today?",
  //     },
  //   ];
  // };
  
  export const generateSystemResponse =  (userMessage) => {
    const lowerCaseUserMessage = userMessage.toLowerCase();
  
    if (lowerCaseUserMessage.includes('depressed')) {
      return Promise.resolve([
        {
          content: "I'm sorry to hear that. How long have you been feeling this way?",
          options: [
            { label: 'Less than a week', recommendation: 'Consider talking to a trusted friend or family member for support.' },
            { label: '1-2 weeks', recommendation: 'Consider seeking professional help from a therapist or counselor.' },
            { label: '3-4 weeks', recommendation: 'Reach out to a mental health professional for an evaluation.' },
            { label: 'More than 4 weeks', recommendation: 'It might be helpful to seek professional help from a psychiatrist or psychologist.' },
          ],
        },
        {
          content: "In addition to seeking professional help, there are self-care strategies that may help improve your well-being. Are you open to exploring some self-care practices?",
          options: [
            { label: 'Yes', recommendation: 'Engaging in activities like exercise, journaling, or mindfulness can positively impact your mental health.' },
            { label: 'No', recommendation: "That's understandable. Remember that professional help is available if you decide you want to explore self-care in the future." },
          ],
        },
        {
          content: "Is there anything specific that you believe contributes to your feelings of depression?",
          options: [
            { label: 'Relationship issues', recommendation: 'Consider seeking couples counseling or relationship therapy to address any underlying issues.' },
            { label: 'Work or academic stress', recommendation: 'Explore stress management techniques and consider seeking support from a career counselor or academic advisor.' },
            { label: 'Lack of social support', recommendation: 'Try to connect with supportive communities or groups and consider reaching out to a therapist or support helpline.' },
            { label: 'Other factors', recommendation: 'It can be helpful to work with a mental health professional to identify and address specific factors contributing to your depression.' },
          ],
        },
        {
          content: "Have you noticed any changes in your sleeping or eating patterns?",
          options: [
            { label: 'Yes', recommendation: 'Changes in sleeping or eating patterns can be related to depression. It\'s important to monitor these changes and discuss them with a mental health professional.' },
            { label: 'No', recommendation: 'That is alright. It is still beneficial to explore your feelings further and seek professional help if needed.' },
          ],
        },
        {
          content: "Are you experiencing a loss of interest or pleasure in activities that you once enjoyed?",
          options: [
            { label: 'Yes', recommendation: 'A loss of interest or pleasure in activities can be a symptom of depression. It is recommended to consult with a mental health professional to discuss your symptoms.' },
            { label: 'No', recommendation: 'That\'s okay. It\'s important to continue exploring your feelings and seek professional help if you have any concerns.' },
          ],
        },
        {
          content: "Do you often feel fatigued or lack energy?",
          options: [
            { label: 'Yes', recommendation: 'Fatigue and lack of energy are common symptoms of depression. It is recommended to discuss these symptoms with a mental health professional.' },
            { label: 'No', recommendation: 'That\'s alright. It\'s still important to address your feelings and seek professional help if needed.' },
          ],
        },
      ]);
    }
  
    // Add more conditions and responses here
  
    return Promise.resolve([
      {
        content: "I'm here to support you. How can I assist you today?",
      },
    ]);
  };
  