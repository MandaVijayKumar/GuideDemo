// // const userData = useContext(authContext);
// // const {user} = userData;
// // console.log('sidebar', user);
import { authContext } from '../Context';

import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, NavLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserMd, faBrain, faCommentMedical, faVial, faComments, faUserGraduate, faTools, faBook } from "@fortawesome/free-solid-svg-icons";


const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,


    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const userData = useContext(authContext);
  const { user } = userData;
  console.log('sidebar', user);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const features = [
    { name: 'Introduction', link: 'introduction', icon: faHome },
    { name: 'Virtual Therapist', link: 'chatgpt', icon: faUserMd },
    { name: 'Mental Health Test', link: 'mentalhealth', icon: faBrain },
    { name: 'Depression & Anxiety Support', link: 'depressiontest', icon: faCommentMedical },
    { name: 'Screening Mental Test', link: 'screeningmental', icon: faVial },
    { name: 'Chat With Experts', link: 'chatwithexperts', icon: faComments },
    { name: 'Student Problem Solver', link: 'yourcomponent', icon: faUserGraduate },
    { name: 'Mental Health Tools', link: 'toolscomponent', icon: faTools },
    { name: 'Support and Resource', link: 'resources', icon: faBook }
  ];


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpenSidebar(false)
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', marginTop: '4rem !important', position: 'absolute !important ', top: '5rem !important' }}>
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Psyctrist
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          backgroundColor: '#F4F4F4',  // light grey background
          color: '#333',  // dark grey text for contrast against light background
          opacity: '1',
          position: 'relative',
          top: '4rem',
          boxShadow: '2px 0px 15px rgba(0, 0, 0, 0.1)'  // subtle shadow on the right side
        }}
      >


        {open ? <button
          className="btn btn-sm m-2"
          onClick={handleDrawerClose}
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '4px 8px',
            backgroundColor: '#4A90E2', // same background as drawer
            color: '#ffffff',  // off-white text color
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          <span className=' text-white'>Close</span></button>
          : (<IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginX: '10px',


            }}
          >
            <MenuIcon />
          </IconButton>)}

        <Divider />
        {open ? (<Container sx={{ marginTop: '1rem', textAlign: 'center', }}>
          <Paper container elevation={5}>
            <img src={user.userPhoto} alt="not available" style={{ width: '100px', height: '100px', borderRadius: '50%', marginTop: '8px' }} />
            <Typography >
              {user.userName}
            </Typography>
          </Paper>

        </Container>) : null}


        {open && <List className='mt-3' >
          {features !== null && features.map((data, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block', }} onClick={handleDrawerClose}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2,
                  my: 1,
                  mx: 1,
                  fontSize:'1rem',
                  fontWeight:'normal',
                  background: '#f4f4f4',
                  transition: 'background-color 0.3s',  // smooth transition for hover effect
                  '&:hover': {
                    background: '#e0e0e0'  // slightly darker shade for hover
                  }
                }}
              >

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 1 : 'auto',
                    justifyContent: 'center',
                    color: '#ff9800',
                    fontSize: '1.4rem'
                  }}
                >
                  <FontAwesomeIcon icon={data.icon} />
                </ListItemIcon>

                <NavLink
                  to={data.link}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    color: open ? '#EAEAEA' : 'rgba(255, 255, 255, 0.7)', // make inactive links a bit transparent
                  }}
                  activeStyle={{ color: '#FFD700' }}  // gold color for active link
                >
                  <ListItemText
                    primary={data.name}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: '#03a9f4',  // muted blue-grey color
                      fontSize: '0.8rem',
                      fontWeight: 'normal'
                    }}
                  />
                </NavLink>
                {/* <Link to={data.link} style={{textDecoration:'none', fontSize:'1.2rem'}}><ListItemText primary={data.name} sx={{ opacity: open ? 1 : 0 }} /> </Link> */}
                {/* <Link to={data.link} ><span style={{opacity: open ?1: 0, fontSize: '1.2rem', color:'royalblue' }}>{data.name}</span> </Link> */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>}


      </Drawer>

    </Box>
  );
}


// import React, { useState, useContext } from "react";
// import { Navbar, Nav, Image } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { authContext } from '../Context';



// const Sidebar = ({  links }) => {
//   const userData = useContext(authContext);
//   const { user } = userData;
//   console.log('sidebar', user);
//   const [showSidebar, setShowSidebar] = useState(false);

//   const handleToggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   return (
//     <div className="sidebar-container">
//       <Navbar bg="light" variant="light">
//         <Navbar.Brand>
//           <Image
//             src={user.userPhoto}
//             width="30"
//             height="30"
//             roundedCircle
//             className="d-inline-block align-top mr-2"
//           />
//           {user.userName}
//         </Navbar.Brand>
//         <Nav className="ml-auto d-md-none">
//           <Nav.Link onClick={handleToggleSidebar}>
//             <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
//           </Nav.Link>
//         </Nav>
//       </Navbar>
//       <div className={`sidebar ${showSidebar ? "show" : ""}`}>
//         <Nav className="flex-column">
//           {links.map((link) => (
//             <Nav.Link key={link.id} href={link.url}>
//               {link.label}
//             </Nav.Link>
//           ))}
//         </Nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
