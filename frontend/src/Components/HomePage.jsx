import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, IconButton, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Draggable from "react-draggable";
import { Facebook, Twitter, LinkedIn, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";


const ScrollContainer = styled(Box)({
  display: "flex",
  overflowX: "auto",
  gap: "16px",
  padding: "16px",
  whiteSpace: "nowrap",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
});

const BlogCard = ({ title }) => (
  <Card sx={{ minWidth: 250, bgcolor: "#1e1e1e", color: "white", borderRadius: 2, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold">{title}</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
        <Link to="http://127.0.0.1:8000/blogs" style={{ textDecoration: "none", width: "100%" }}>
          <Button variant="outlined" color="success" sx={{ width: "100%" }}>
            Read More <ArrowForwardIos sx={{ fontSize: "1rem", marginLeft: 1 }} />
          </Button>
        </Link>
      </Box>
    </CardContent>
  </Card>
);


const NewsCard = ({ title }) => (
  <Card sx={{ minWidth: 250, bgcolor: "#1e1e1e", color: "white", borderRadius: 2, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold">{title}</Typography>
      <Link to="http://127.0.0.1:8000/update" style={{ textDecoration: "none", width: "100%" }}>
      <Button variant="contained" color="success" sx={{ mt: 2, width: "100%" }}>
        Read
      </Button>
      </Link>
    </CardContent>
  </Card>
);

const HomePage = () => {
  return (
    <Box sx={{ bgcolor: "#121212", color: "white", minHeight: "100vh", padding: 3, textAlign: "center", width: "100vw", overflowX: "hidden" }}>

      {/* Navbar */}
      <AppBar position="fixed" sx={{ bgcolor: "#1b1b1b", top: 20, left: 20, right: 20, borderRadius: 2, paddingX: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#4CAF50" }}>HASHOM</Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/learn">Learn</Button>
            <Button color="inherit" component={Link} to="/report">Report Phishing</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Suspicious Link and Think Twice Sections */}
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" sx={{ textTransform: "uppercase", color: "#4CAF50", fontSize: "4rem" }}>
          Suspicious Link?
        </Typography>
        <Typography variant="h3" fontWeight="bold" sx={{ textTransform: "uppercase", fontSize: "4rem" }}>
          Think Twice Before You Click!
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, fontSize: "1.2rem", maxWidth: "80%", marginX: "auto", opacity: 0.8 }}>
          Welcome to Hashom Phishing Awareness campaign. Empowering employees with the knowledge and training to
          recognize, avoid, and report phishing threats, keeping your organization secure.
        </Typography>
      </Box>
      
      {/* News Section */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "left", marginBottom: 2, borderBottom: "2px solid #4CAF50", display: "inline-block" }}>
          Latest Updates
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          <Grid item xs={12} md={4}>
            <NewsCard title="XSS vulerabilities lead to account hijacks" />
          </Grid>
          <Grid item xs={12} md={4}>
            <NewsCard title="Command injection vulnerability in Github Pages" />
          </Grid>
          <Grid item xs={12} md={4}>
            <NewsCard title="Toyota seals backdoor" />
          </Grid>
        </Grid>
      </Container>

      {/* About and Blogs Section */}
      <Container sx={{ marginTop: 5, paddingY: 5 }}>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          {/* About Us Section (Center) */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ bgcolor: "#1b1b1b", borderRadius: 2, padding: 3 }}>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#4CAF50" }}>About Us</Typography>
              <Typography variant="body1" sx={{ marginTop: 2, opacity: 0.8 }}>
                Hashom is dedicated to raising awareness about phishing threats. Our goal is to educate individuals and organizations on recognizing fraudulent attempts, protecting personal data, and ensuring a safer digital environment. Join us in our mission to combat cyber threats effectively!
              </Typography>
            </Box>
          </Grid>
          
          {/* Blogs Section (Right) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: "#1b1b1b", borderRadius: 2, padding: 3 }}>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#4CAF50" }}>Blogs</Typography>
              <Box sx={{ marginTop: 3 }}>
                <BlogCard title="How to Identify Phishing Attacks?" component={Link} to="http://127.0.0.1:8000/blogs/"/>
                <BlogCard title="Why Phishing is a Serious Threat to Your Security?" />
                <BlogCard title="What is Spear Phishing and How to Avoid It?" />
                <BlogCard title="Understanding Phishing: A Beginner's Guide" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Ask AI Container */}
      <Draggable>
        <Box sx={{ position: "fixed", bottom: 20, right: 20, bgcolor: "#1b1b1b", padding: 2, borderRadius: 2, color: "white", cursor: "grab", boxShadow: 3 }}>
          <Typography variant="h6">Ask AI</Typography>
          <Typography variant="body2">How can I help you?</Typography>
        </Box>
      </Draggable>
      
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
    </Box>
  );
};

export default HomePage;
