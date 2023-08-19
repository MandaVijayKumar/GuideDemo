import React, { useState } from "react";
import { Typography, Button, Box, Container, Grid } from "@material-ui/core";
import ScreeningDepression from "../Components/ScreeningDepression";
import ScreeningAnxiety from "../Components/ScreeningAnxiety";

const ScreeningTest = () => {
  const [selectTest, setSelectTest] = useState(null);

  const handleAnxiety = () => {
    setSelectTest("anxiety");
  };

  const handleDepression = () => {
    setSelectTest("depression");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} textAlign="center">
        <Typography variant="h6" gutterBottom>
          Screening Test (Depression & Anxiety)
        </Typography>
        <Box mt={2} mb={1}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleDepression}
              >
                Depression Test
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleAnxiety}
              >
                Anxiety Test
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box mt={2} mb={1}>
          {selectTest === "depression" && <ScreeningDepression />}
          {selectTest === "anxiety" && <ScreeningAnxiety />}
        </Box>
      </Box>
    </Container>
  );
};

export default ScreeningTest;

// import React, { useState } from "react";
// import { Typography, Button, Box, Container } from "@material-ui/core";
// import ScreeningDepression from "../Components/ScreeningDepression";
// import ScreeningAnxiety from "../Components/ScreeningAnxiety";

// const ScreeningTest = () => {
//   const [selectTest, setSelectTest] = useState(null);

//   const handleAnxiety = () => {
//     setSelectTest("anxiety");
//   };

//   const handleDepression = () => {
//     setSelectTest("depression");
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={4} textAlign="center">
//         <Typography variant="h6" gutterBottom>
//           Screening Test (Depression & Anxiety)
//         </Typography>
//         {/* <Typography variant="body1" paragraph>
//         The Depression Screening Test and the Anxiety Screening Test are self-assessment tools designed to help individuals evaluate their symptoms and determine the possible presence of depression or anxiety, respectively, prompting them to consider seeking professional help if necessary
//         </Typography> */}
//         <Box mt={2} mb={1}>
//           <Button
//             variant="contained"
//             color="primary"
//             style={styles.button}
//             onClick={handleDepression}
//           >
//             Depression Test
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             style={styles.button}
//             onClick={handleAnxiety}
//           >
//             Anxiety Test
//           </Button>
//         </Box>
//         <Box width="100%">
//           {selectTest === "depression" && <ScreeningDepression />}
//           {selectTest === "anxiety" && <ScreeningAnxiety />}
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// const styles = {
//   button: {
//     margin: "0 10px",
//   },
// };

// export default ScreeningTest;

// import React, { useState } from "react";
// import ScreeningDepression from "../Components/ScreeningDepression";
// import ScreeningAnxiety from "../Components/ScreeningAnxiety";

// function ScreeningTest() {
//   const [selectTest, setSelectTest] = useState(null);

//   const handleAnxiety = () => {
//     setSelectTest("anxiety");
//   };

//   const handleDepression = () => {
//     setSelectTest("depression");
//   };

//   return (
//     <div style={styles.container}>
//         <h3>Screening Test(Depression & Anxiety)</h3>
//         <p>The Depression Screening Test and Anxiety Screening Test are self-assessment tools that help individuals evaluate their symptoms and determine the possible presence of depression or anxiety. The tests consist of a series of questions covering various emotional, behavioral, and physical indicators associated with these conditions. By completing these tests, individuals can gain insights into their emotional well-being, identify potential concerns, and consider seeking professional help or further evaluation. It's important to note that these tests serve as initial tools and should not replace a formal diagnosis from healthcare professionals or mental health specialists.</p>
//       <div style={styles.buttonContainer}>
//         <button style={styles.button} onClick={handleDepression}>
//           Depression Test
//         </button>
//         <button style={styles.button} onClick={handleAnxiety}>
//           Anxiety Test
//         </button>
//       </div>
//       <div style={styles.componentContainer}>
//         {selectTest === "depression" && <ScreeningDepression />}
//         {selectTest === "anxiety" && <ScreeningAnxiety />}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//   },
//   buttonContainer: {
//     marginBottom: "20px",
//   },
//   button: {
//     padding: "10px 20px",
//     margin: "0 10px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "white",
//     backgroundColor: "#007bff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   componentContainer: {
//     width: "100%",
//   },
// };

// export default ScreeningTest;
