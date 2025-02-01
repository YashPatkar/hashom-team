import React from "react";
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Container, Box, IconButton } from "@mui/material";
import { ArrowForwardIos, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

const articles = [
  { id: 1, title: "Understanding Phishing" },
  { id: 2, title: "Common Phishing Tactics" },
  { id: 3, title: "Email Phishing Explained" },
  { id: 4, title: "How to Stay Safe Online" },
  { id: 5, title: "Reporting Phishing Attacks" }
];

const Home = () => {
  return (
    <Box sx={{ bgcolor: "#121212", color: "white", minHeight: "100vh", padding: 3, textAlign: "center", width: "100vw", overflowX: "hidden" }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ bgcolor: "#1b1b1b", top: 20, right: 20, left: 20, borderRadius: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#4CAF50" }}>
            HASHOM
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/learn">Learn</Button>
            <Button color="inherit" component={Link} to="/report">Report Phishing</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#4CAF50" }}>
          Phishing Awareness
        </Typography>

        {["101", "102", "103", "104", "105"].map((section) => (
          <Box key={section} sx={{ marginTop: 5 }}>
            <Typography variant="h5" gutterBottom>
              Phishing {section}
            </Typography>
            <Box sx={{ display: "flex", overflowX: "auto", gap: 2, paddingBottom: 2 }}>
              {articles.map((article) => (
                <Card key={article.id} sx={{ minWidth: 250, bgcolor: "#1e1e1e", color: "white" }}>
                  <CardContent>
                    <Typography variant="h6">{article.title}</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                      <Button variant="outlined" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/t1" >Read</Button>
                      <Button variant="contained" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/p1">
                        Take Assessment
                      </Button>
                    </Box>
                  </CardContent>
                </Card> 
              ))}
            </Box>
          </Box>
        ))}
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "#1b1b1b", padding: 3, textAlign: "center", marginTop: 5 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#4CAF50" }}>HASHOM</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, marginBottom: 1 }}>© 2025 Hashom. All rights reserved.</Typography>
        <Box>
          <IconButton href="#" sx={{ color: "#4CAF50" }}><Facebook /></IconButton>
          <IconButton href="#" sx={{ color: "#4CAF50" }}><Twitter /></IconButton>
          <IconButton href="#" sx={{ color: "#4CAF50" }}><LinkedIn /></IconButton>
        </Box>
      </Box>

      {/* Floating Ask AI Container */}
      <Draggable>
        <Box sx={{ position: "fixed", bottom: 20, right: 20, bgcolor: "#1b1b1b", padding: 2, borderRadius: 2, color: "white", cursor: "grab", boxShadow: 3 }}>
          <Typography variant="h6">Ask AI</Typography>
          <Typography variant="body2">How can I help you?</Typography>
        </Box>
      </Draggable>
    </Box>
  );
};

export default Home;
