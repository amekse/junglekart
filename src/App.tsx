import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import theme from './MUI.theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
