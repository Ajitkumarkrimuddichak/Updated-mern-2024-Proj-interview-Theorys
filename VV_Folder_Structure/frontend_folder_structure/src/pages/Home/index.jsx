import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// import './home.module.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page content.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
