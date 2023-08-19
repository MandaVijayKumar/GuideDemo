// import React from 'react'
// import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import ChatBot from 'react-simple-chatbot';
// import Sidebar from '../Layouts/Sidebar';


//  function PsychoArea() {
//   const [openChat, setOpenChat] = useState(true);


//   const steps = [
//     {
//       id: 1,
//       message: 'hi how are you',
//       trigger: 2
//     },

//     {
//       id: 2,
//       user: true,
//       trigger: 3
//     },

//     {
//       id: 3,
//       message: 'ok . good',
//       trigger: 4
//     },
//     {
//       id: 4,
//       message: 'what is your name?',
//       trigger: 5
//     },
//     {
//       id: 5,
//       user: true,
//       trigger: 5.1
//     },
//     {
//       id: 5.1,
//       message: 'hi {previousValue}, can you choose your problem',
//       trigger: 6
//     },

//     {
//       id: 6,
//       options: [
//         { value: 1, label: 'Depression', trigger: 7 },
//         { value: 2, label: 'anxity', trigger: 8 },
//         { value: 3, label: 'stress', trigger: 9 },
//       ],

//     },
//     {
//       id: 7,
//       message: 'ok. do not worry , we will help you come out from depression!',
//       end: true

//     },
//     {
//       id: 8,
//       message: 'ok. do not worry , we will help you come out from anxity! ',
//       end: true

//     },
//     {
//       id: 9,
//       message: 'ok. do not worry , we will help you to come out from stress!',
//       end: true

//     },
//   ]

//   return (
//     <div style={{ display: 'flex' }} className='psychoarea'>
//       <div className="col-md-3" style={{ width: '5%' }}>
//         <Sidebar />

//       </div>
//       <div className="col-md-9" style={{ width: '90%' }}>
//         {
//           openChat ? (<div style={{ position: 'fixed', bottom: '50px', right: '20px' }}> <ChatBot steps={steps} headerTitle="Speech Recognition"
//             recognitionEnable={true}
//             speechSynthesis={{ enable: true, lang: 'en' }} /> </div>) : null
//         }
//         <button className="btn btn-success" onClick={() => setOpenChat(!openChat)} style={{ position: 'fixed', bottom: '10px', right: '10px' }}>{openChat ? 'close' : 'open'}</button>
//         <Outlet />

//       </div>






//     </div>
//   )
// }

// export default PsychoArea;
import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import Sidebar from '../Layouts/Sidebar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function PsychoArea() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const handleSidebarOpen = () => {
    setOpenSidebar(!openSidebar)
    console.log('what is side nod', openSidebar)
  }


  return (
    <div style={{ display: 'flex', position: 'relative', top: '4rem' }} className='psychoarea'>
       <div className="col-md-3" style={{ width: '5%', position: 'absolute !important', top: '4rem !important' }}>
      {
        openSidebar === true ? (
         
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>

          
        ): <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleSidebarOpen}
        edge="start"
        sx={{
          marginX: '10px',
         

        }}
      >
        <MenuIcon />
      </IconButton>
      }
      </div>
      <div className="col-md-9" style={{ width: '90%' }}>

        <Outlet />

      </div>






    </div>
  )
}

export default PsychoArea;