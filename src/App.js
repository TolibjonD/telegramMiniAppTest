// src/App.js
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Ensure Telegram WebApp object is available
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Set Header Color
      webApp.setHeaderColor("#ffffff");

      // Log Mini App information
      console.log("Telegram WebApp Initialized:", webApp.initData);

      // Expand the Web App
      webApp.expand();
    } else {
      console.error("Telegram WebApp is not available");
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1>Telegram Mini Web App</h1>
      <p>
        This is a demo of using the <b>Telegram Web App</b> API in a React app.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f9",
    minHeight: "100vh",
  },
};

export default App;
