import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './loginPage/Header';
import Footer from './loginPage/Footer';
import LoginSection from './loginPage/LoginSection';
import ContactForm from './E-kycForm/ContactForm';
import KycLogin from './E-kyc/KycLogin';
import Status from './Status/Status';




// App component
const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginSection />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      <Header/>
      <LoginSection/>
      <Footer/>
      <Header/>
      <ContactForm/>
      <Footer/>
      <Header/>
      <KycLogin/>
      <Footer/>
      <Status/>
      <Footer/>

    </div>
  );
};

export default App;
