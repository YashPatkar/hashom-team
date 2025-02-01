import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import Learn from "./Components/Learn";
import HomePage from "./Components/HomePage";
import ReportPhishing from "./Components/ReportPhising";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#1b1b1b", top: 20, right: 20, width: "auto", borderRadius: 2 }}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/learn">Learn</Button>
        <Button color="inherit" component={Link} to="/report">Report Phishing</Button>
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/report" element={<ReportPhishing/>} />
      </Routes>
    </Router>
  );
};

export default App;
