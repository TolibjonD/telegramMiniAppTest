// src/App.js
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;

      webApp.setHeaderColor("#ffffff");

      console.log("Telegram WebApp Initialized:", webApp.initData);

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
