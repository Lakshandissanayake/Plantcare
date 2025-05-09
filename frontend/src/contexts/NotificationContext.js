import React, { createContext, useContext, useState } from "react";

// Create the context
const NotificationContext = createContext();

// Create a provider component
export function NotificationProvider({ children }) {
  const [settings, setSettings] = useState({
    email: false,
    sms: false,
    push: false,
  });

  // Function to toggle notification settings
  const toggleSetting = (type) => {
    setSettings((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <NotificationContext.Provider value={{ settings, toggleSetting }}>
      {children}
    </NotificationContext.Provider>
  );
}

// Custom hook to use the notification context
export function useNotificationSettings() {
  return useContext(NotificationContext);
}
