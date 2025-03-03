import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); //Initialize AOS on mount

    return () => {
      AOS.refresh(); //Cleanup (refresh animations if needed)
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", height:"200vh" }}>
      <div height="100vh">scroll down
      <h2 data-aos="fade-up">🚀 Scroll to See Animations</h2>
      <p data-aos="zoom-in">This text zooms in!</p>
      <p data-aos="flip-left">This flips from left!</p>
      <p data-aos="slide-up">This slides up!</p>

      <h2 data-aos="fade-up">🚀 Scroll to See Animations</h2>
      <p data-aos="zoom-in">This text zooms in!</p>
      <p data-aos="flip-left">This flips from left!</p>
      <p data-aos="slide-up">This slides up!</p>

      <h2 data-aos="fade-up">🚀 Scroll to See Animations</h2>
      <p data-aos="zoom-in">This text zooms in!</p>
      <p data-aos="flip-left">This flips from left!</p>
      <p data-aos="slide-up">This slides up!</p>
      </div>
      <h2 data-aos="fade-up">🚀 Scroll to See Animations</h2>
      <p data-aos="zoom-in">This text zooms in!</p>
      <p data-aos="flip-left">This flips from left!</p>
      <p data-aos="slide-up">This slides up!</p>
    </div>
  )
}

export default App
