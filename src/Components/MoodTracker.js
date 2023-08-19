import React, { useState, useContext, useEffect } from "react";
import "../Style/MoodTracker.css";
import { authContext } from '../Context';
import axios from 'axios'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const MoodTracker = () => {
  const [mood, setMood] = useState("");

  const userData = useContext(authContext);
  const { user } = userData;
  const email = user.userEmail;
  const [moodHistory, setMoodHistory] = useState([]);

  const moodOptions = [
    { label: '😄 Happy', value: 'happy' },
    { label: '😊 Content', value: 'content' },
    { label: '😐 Neutral', value: 'neutral' },
    { label: '😔 Sad', value: 'sad' },
    { label: '😡 Angry', value: 'angry' },
    { label: '😴 Tired', value: 'tired' },
    { label: '😍 Excited', value: 'excited' },
    { label: '😕 Confused', value: 'confused' },
    { label: '😎 Relaxed', value: 'relaxed' },
    { label: '🤔 Thoughtful', value: 'thoughtful' },
    { label: '🥰 Loved', value: 'loved' },
    { label: '🙌 Grateful', value: 'grateful' },
    { label: '🤗 Hugged', value: 'hugged' },
    { label: '🙏 Peaceful', value: 'peaceful' },
    { label: '💪 Determined', value: 'determined' },
    { label: '💔 Heartbroken', value: 'heartbroken' },
    { label: '🎉 Celebratory', value: 'celebratory' },
    { label: '😅 Stressed', value: 'stressed' },
    { label: '👌 Content', value: 'content' },
    { label: '😖 Anxious', value: 'anxious' },
  ];

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };



  const handleSaveMood = async () => {
    const timestamp = new Date().toISOString();

    try {
      await axios.post("http://127.0.0.1:5001/moods", { mood, email, timestamp });
      setMood("");

      console.log("Mood saved successfully!");
    } catch (error) {
      console.error("Error saving mood:", error);
    }
  };
  const fetchMoodHistory = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5001/moods?email=${email}`);
      setMoodHistory(response.data);
    } catch (error) {
      console.error("Error fetching mood history:", error);
    }
  };
  useEffect(() => {

    fetchMoodHistory();

  }, [mood]);
  const renderMoodData = () => {
    const moodCounts = {};

    moodHistory.forEach((entry) => {
      const mood = entry.mood;
      if (moodCounts[mood]) {
        moodCounts[mood]++;
      } else {
        moodCounts[mood] = 1;
      }
    });

    const moodData = Object.keys(moodCounts).map((mood) => ({
      name: mood,
      value: moodCounts[mood],
    }));

    return moodData;
  };

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#b19cd9",
    "#fdffb6",
    "#bada55",
    "#ff6961",
    "#7ec0ee",
    "#ff1493",
    "#66cdaa",
    "#ffd700",
    "#d8bfd8",
    "#ff4500",
    "#8b4513",
    "#20b2aa",
    "#9acd32",
    "#00bfff",
    "#9932cc",
    "#ff8c00",
  ];

  return (
    <div className="mood-tracker-container">
      <h2 className="mood-tracker-heading">Mood Tracker</h2>
      <select
        className="mood-tracker-select"
        value={mood}
        onChange={handleMoodChange}
      >
        <option value="">Select Mood</option>
        {moodOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button className="mood-tracker-button" onClick={handleSaveMood}>
        Save Mood
      </button>
      <h3>Mood History:</h3>


      <div>
        <PieChart width={500} height={300}>
          <Pie
            data={renderMoodData()}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {renderMoodData().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

      </div>
      <table className="mood-table">
  <thead>
    <tr>
      <th>Mood</th>
      <th>Timestamp</th>
    </tr>
  </thead>
  <tbody>
    {moodHistory.reverse().map((moodEntry) => (
      <tr key={moodEntry._id}>
        <td>{moodEntry.mood}</td>
        <td>{new Date(moodEntry.timestamp).toLocaleString("en-IN")}</td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  );
};

export default MoodTracker;


// import React,{useState, useEffect} from "react";
// import { FormControl, InputGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const MoodTracker = () => {
//   const [mood, setMood] = useState('');
//   const [email, setEmail] = useState('');
//   const [moodHistory, setMoodHistory] = useState([]);

//   const moodOptions = [
//     { label: '😄 Happy', value: 'happy' },
//     { label: '😊 Content', value: 'content' },
//     { label: '😐 Neutral', value: 'neutral' },
//     { label: '😔 Sad', value: 'sad' },
//     { label: '😡 Angry', value: 'angry' },
//     { label: '😴 Tired', value: 'tired' },
//     { label: '😍 Excited', value: 'excited' },
//     { label: '😕 Confused', value: 'confused' },
//     { label: '😎 Relaxed', value: 'relaxed' },
//     { label: '🤔 Thoughtful', value: 'thoughtful' },
//     { label: '🥰 Loved', value: 'loved' },
//     { label: '🙌 Grateful', value: 'grateful' },
//     { label: '🤗 Hugged', value: 'hugged' },
//     { label: '🙏 Peaceful', value: 'peaceful' },
//     { label: '💪 Determined', value: 'determined' },
//     { label: '💔 Heartbroken', value: 'heartbroken' },
//     { label: '🎉 Celebratory', value: 'celebratory' },
//     { label: '😅 Stressed', value: 'stressed' },
//     { label: '👌 Content', value: 'content' },
//     { label: '😖 Anxious', value: 'anxious' },
// ];

//   useEffect(() => {
//     fetchMoodHistory();
//   }, []);

//   const fetchMoodHistory = async () => {
//     try {
//       const response = await fetch('/api/moods');
//       const data = await response.json();
//       setMoodHistory(data);
//     } catch (error) {
//       console.log('Error fetching mood history:', error);
//     }
//   };

//   const handleMoodChange = (event) => {
//     setMood(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSaveMood = async () => {
//     const timestamp = new Date().toISOString();

//     try {
//       const response = await fetch('/api/moods', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ mood, timestamp, email }),
//       });

//       if (response.ok) {
//         // Mood saved successfully, you can perform further actions here
//         setMood('');
//         setEmail('');
//         fetchMoodHistory();
//       } else {
//         console.log('Failed to save mood:', response.status);
//       }
//     } catch (error) {
//       console.log('Error saving mood:', error);
//     }
//   };
//   return (
//     <div>
//       <h2>Mood Tracker</h2>
//       <InputGroup className="mb-3">
//         <DropdownButton
//           as={InputGroup.Prepend}
//           variant="outline-primary"
//           title="Select Mood"
//           id="mood-dropdown"
//         >
//           {moodOptions.map((option) => (
//             <Dropdown.Item
//               key={option.value}
//               onClick={() => setMood(option.value)}
//             >
//               {option.label}
//             </Dropdown.Item>
//           ))}
//         </DropdownButton>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//         <InputGroup.Append>
//           <Button variant="primary" onClick={handleSaveMood}>
//             Save Mood
//           </Button>
//         </InputGroup.Append>
//       </InputGroup>
//       {/* <h3>Mood History</h3>
//       <LineChart width={500} height={300} data={moodHistory}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="timestamp" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="mood" stroke="#8884d8" />
//       </LineChart> */}
//     </div>
//   )
// }
// export default MoodTracker;