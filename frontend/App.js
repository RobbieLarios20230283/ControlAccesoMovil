import React from "react";
import Navigation from "./src/navigation/Navigation"; 
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    // Wrap the Navigation component with AuthProvider to provide auth context
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}