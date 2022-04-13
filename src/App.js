import React from "react";
import { Routes } from "react-router-dom";
import {} from '/'

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes></Routes>;
      </AuthProvider>
    </div>
  );
}

export default App;
