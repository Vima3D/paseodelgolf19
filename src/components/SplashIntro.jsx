import React, { useEffect, useState } from "react";

export function SplashIntro() {
  const [activeStep, setActiveStep] = useState(0); // 0 = initial, 1 = active, 2 = fade, 3 = hidden
  const titleLetters = "PASEO DEL GOLF".split("");

  useEffect(() => {
    // Step 1: Activate letters sequentially
    const timer1 = setTimeout(() => {
      setActiveStep(1);
    }, 200);

    // Step 2: Fade letters
    const timer2 = setTimeout(() => {
      setActiveStep(2);
    }, 1800);

    // Step 3: Slide up intro curtain
    const timer3 = setTimeout(() => {
      setActiveStep(3);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (activeStep === 3) return null;

  return (
    <div
      className={`intro-screen ${
        activeStep === 2 ? "intro-fading" : ""
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#000000",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 1s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.8s ease",
        transform: activeStep === 2 ? "translateY(-100vh)" : "translateY(0)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "90%", padding: "20px" }}>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhil6fCAIqiAxveBrHSzi0bL9LaRmMB0LRbMy_OV_E0Sv7uyjpMtXZ943s92PhdnIbrpNS627-YFa2Rx97ZotH0-TelVUKaP9DPcCxjs8XezmtxQVVWXquJC-AW1Zxx-g4z9M5XEQi8ygghyphenhyphencIhRCqtlZW2v2uNkja1sXPg2xIvnASumbTpJf3dZUZgGTY/s2168/logou.png"
          alt="Paseo del Golf 19 Logo"
          style={{
            maxWidth: "600px",
            width: "80%",
            height: "auto",
            marginBottom: "20px",
          }}
        />
        <h1
          style={{
            fontSize: "3.5rem",
            color: "#ffffff",
            fontFamily: "'Luckiest Guy', cursive",
            letterSpacing: "4px",
            margin: 0,
          }}
        >
          {titleLetters.map((char, index) => (
            <span
              key={index}
              style={{
                display: char === " " ? "inline-block" : "inline-block",
                width: char === " " ? "15px" : "auto",
                transition: "all 0.4s ease",
                opacity: activeStep >= 1 ? (activeStep === 2 ? 0 : 1) : 0,
                transform:
                  activeStep === 1
                    ? "translateY(0)"
                    : activeStep === 2
                    ? "translateY(-50px)"
                    : "translateY(20px)",
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
