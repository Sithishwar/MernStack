import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./connector/Navbar";
import Offer from "./pages/Offer";
import Page1 from "./pages/Page1";
import Aboutus from "./pages/Aboutus";
import Faq from "./pages/Faq";
import TAC from "./pages/TAC";
import Cart from "./pages/Cart";
import PrivacyPolicy from './pages/home/Privacy';
import Accessibility from './pages/home/Accessibility';
import OurStory from "./pages/About/OurStory";
import Careers from "./pages/About/Careers";
import Press from "./pages/About/Press";
import Blog from "./pages/About/Blog";
import Sustainability from "./pages/About/Sustainability";
import Login from "./pages/Login";
import AccountSettings from "./pages/AccountSettings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Page1 />
            </>
          </ProtectedRoute>
        } />
        
        {/* Add the account settings route */}
        // Make sure this route is included in your Routes component
        <Route path="/account" element={
          <ProtectedRoute>
            <AccountSettings />
          </ProtectedRoute>
        } />
        
        {/* Other routes remain the same */}
        <Route path="/about" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Aboutus />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/offer" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Offer />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/faq" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Faq />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/terms" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <TAC />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/privacy-policy" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <PrivacyPolicy />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/cart" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Cart />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/accessibility" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Accessibility />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/our-story" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <OurStory />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/careers" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Careers />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/press" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Press />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/blog" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Blog />
            </>
          </ProtectedRoute>
        } />
        
        <Route path="/sustainability" element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Sustainability />
            </>
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
