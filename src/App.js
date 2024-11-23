import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [safeArea, setSafeArea] = useState({ top: 0, bottom: 0, left: 0, right: 0 });

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Set Telegram header color
      webApp.setHeaderColor("bg_color");

      // Get SafeAreaInset values from CSS variables
      const computedStyles = getComputedStyle(document.documentElement);
      setSafeArea({
        top: parseInt(computedStyles.getPropertyValue("--tg-safe-area-inset-top")) || 0,
        bottom: parseInt(computedStyles.getPropertyValue("--tg-safe-area-inset-bottom")) || 0,
        left: parseInt(computedStyles.getPropertyValue("--tg-safe-area-inset-left")) || 0,
        right: parseInt(computedStyles.getPropertyValue("--tg-safe-area-inset-right")) || 0,
      });

      // Expand the app
      webApp.expand();
    }
  }, []);

  return (
    <div
      style={{
        paddingTop: safeArea.top,
        paddingBottom: safeArea.bottom,
        paddingLeft: safeArea.left,
        paddingRight: safeArea.right,
        textAlign: "center",
        backgroundColor: "#f4f4f9",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h1>Telegram Mini App</h1>
      <p>
        Safe Area Insets:<br />
        Top: {safeArea.top}px<br />
        Bottom: {safeArea.bottom}px<br />
        Left: {safeArea.left}px<br />
        Right: {safeArea.right}px
      </p>
      <button
        style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}
        onClick={() => window.Telegram.WebApp.sendData("Hello, Bot!")}
      >
        Send Data to Bot
      </button>
    </div>
  );
};

export default App;
