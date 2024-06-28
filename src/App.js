import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import AppBarComponent from "./Pages/Components/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Privacy from "./Pages/Privacy/Privacy";
import Tutorial from "./Pages/Tutorial/Tutorial";
import About from "./Pages/About/About";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <AppBarComponent />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Privacy"  element={<Privacy />} />
            <Route path="/Tutorial"   element={<Tutorial />} />
            <Route path="/About"   element={<About />} />
          </Routes>
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
