// rcc
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import Coding from './components/Coding.js'
import Aptitude from './components/Aptitude.js'
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter  ([
    {
      path: "/",
      element:  (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
      
    },
    {
      path: "/Aptitude",
      element:  (
        <>
          <Navbar />
          <Aptitude />
          <Footer />
        </>
      ),
    },
    {
      path: "/Coding",
      element: (
        <>
          <Navbar />
          <Coding />
          <Footer />
        </>
      ),
    },
    {
      path: "/Login",
      element:  (
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/SignUp",
      element:  (
        <>
          <Navbar />
          <SignUp />
          <Footer />
        </>
      )
    },
  ]);
  return <RouterProvider router = {router} />
      
}


export default App;
