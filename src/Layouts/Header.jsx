import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Auth/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { authContext } from '../Context';
import '../Style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faCheckCircle, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(authContext);


  const handleExpertLoginForm = () => {
    navigate('/expertlogin')
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Store the user object directly
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [setUser]);

  return (
    <nav className='navbar navbar-expand-lg navbar-light  fixed-top'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand brand'>
          <h4 className=''>
            <span className='brand-text-1'>Friendly</span>
            <span className='brand-text-2'>Psych</span>
            <span className='brand-text-3'>Analyst</span>
          </h4>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-1 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                <FontAwesomeIcon icon={faHome} />Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/GuideAcknowledgment' className='nav-link'>
                <FontAwesomeIcon icon={faCheckCircle} />Acknowledge
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/feedbackform' className='nav-link'>
                <FontAwesomeIcon icon={faComment} />FeedbackForm
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='#' className='nav-link'>
                <FontAwesomeIcon icon={faEnvelope} />Contact
              </Link>
            </li>
          </ul>
          <div>
            <button className='btn bt bs mx-2' onClick={handleExpertLoginForm}>
              <i className='fas fa-user'></i> Experts Login
            </button>
          </div>
          {user  && (
            <div className='d-flex align-items-center'>
             
              <button className='btn bp bs mx-1' onClick={handleSignOut}>
              <i className='fas fa-sign-out-alt'></i> Logout
              </button>
              <img
                src={user.userPhoto}
                alt='Profile'
                width='40'
                height='40'
                className='rounded-circle me-2'
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;

// import React, { useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../Auth/firebase';
// import { signOut, onAuthStateChanged } from 'firebase/auth';
// import { authContext } from '../Context';
// import '../Style/Header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faHome, faCheckCircle, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// function Header() {
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(authContext);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         setUser(null);
//         navigate('/');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user); // Store the user object directly
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe(); // Clean up the subscription on unmount
//   }, [setUser]);

//   return (
//     <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
//       <div className='container-fluid'>
//         <Link to='/' className='navbar-brand brand'>
//           <h2 className=''>
//             <span className='brand-text-1'>Friendly </span>
//             <span className='brand-text-2'>Psych</span>
//             <span className='brand-text-3'> Analyst</span>
//           </h2>
//         </Link>

//         <button
//           className='navbar-toggler'
//           type='button'
//           data-bs-toggle='collapse'
//           data-bs-target='#navbarSupportedContent'
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </button>
//         <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//           <ul className='navbar-nav me-auto mb-1 mb-lg-0'>
//             <li className='nav-item'>
//               <Link to='/' className='nav-link'>
//                 <FontAwesomeIcon icon={faHome} /> Dashboard
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/GuideAcknowledgment' className='nav-link'>
//                 <FontAwesomeIcon icon={faCheckCircle} /> Acknowledge
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/feedbackform' className='nav-link'>
//                 <FontAwesomeIcon icon={faComment} /> FeedbackForm
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='#' className='nav-link'>
//                 <FontAwesomeIcon icon={faEnvelope} /> Contact
//               </Link>
//             </li>
//           </ul>
//           {user && (
//             <div className='d-flex align-items-center'>
//               <img
//                 src={user.photoURL}
//                 alt='Profile'
//                 width='40'
//                 height='40'
//                 className='rounded-circle me-2'
//               />
//               <button className='btn btn-primary btn-sm' onClick={handleSignOut}>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;

// import React, { useEffect, useContext } from 'react';
// import { auth } from '../Auth/firebase';
// import { signOut, onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { authContext } from '../Context';
// import '../Style/Header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faHome, faCheckCircle, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// function Header() {
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(authContext);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         setUser(null);
//         navigate('/');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser({
//           userName: user.displayName,
//           userEmail: user.email,
//           userPhoto: user.photoURL,
//         });
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe(); // Clean up the subscription on unmount
//   }, [setUser]);

//   return (
//     <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
//       <div className='container-fluid'>
//         <a className='navbar-brand brand' href='/'>
//           <h2 className=''>
//             <span className='brand-text-1'>Friendly </span>
//             <span className='brand-text-2'>Psych</span>
//             <span className='brand-text-3'> Analyst</span>
//           </h2>
//         </a>

//         <button
//           className='navbar-toggler'
//           type='button'
//           data-bs-toggle='collapse'
//           data-bs-target='#navbarSupportedContent'
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//         >
//           <FontAwesomeIcon icon={faBars} />
//         </button>
//         <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//           <ul className='navbar-nav me-auto mb-1 mb-lg-0'>
//             <li className='nav-item'>
//               <a className='nav-link' href='/'>
//                 <FontAwesomeIcon icon={faHome} /> Dashboard
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='/GuideAcknowledgment'>
//                 <FontAwesomeIcon icon={faCheckCircle} /> Acknowledge
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='/feedbackform'>
//                 <FontAwesomeIcon icon={faComment} /> FeedbackForm
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#'>
//                 <FontAwesomeIcon icon={faEnvelope} /> Contact
//               </a>
//             </li>
//           </ul>
//           {user && (
//             <div className='d-flex align-items-center'>
//               <img
//                 src={user.userPhoto}
//                 alt='Profile'
//                 width='40'
//                 height='40'
//                 className='rounded-circle me-2'
//               />
//               <button className='btn btn-primary btn-sm' onClick={handleSignOut}>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;


