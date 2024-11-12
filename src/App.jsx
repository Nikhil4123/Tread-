/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AboutPage from './components/About/AboutPage.jsx'; // Import your About page
// import PrivacyPage from './PrivacyPage'; // Import your Privacy Policy page
import HomePage from './HomePage'; // Import your Home page
import ServicesPage2 from './components/Service/ServicesPage2.jsx';
import PrivacyPage from './components/Privercy/PrivacyPage.jsx';
import SignupPage from './components/User/SignupPage.jsx';
// import Login from './Login'; // Import your Login page
// import Signup from './Signup'; // Import your Signup page

const appRouter =createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },{
        path:'/services',
        element:<ServicesPage2/>
    },{
        path:'/about',
        element:<AboutPage/>
    },{
        path:'/privacypage',
        element:<PrivacyPage/>
    },{
        path:'/signup',
        element:<SignupPage/>
    }
])
const App = () => {
  return (<>
    
    <RouterProvider router={appRouter}/>
    </>
  );
};

export default App;
