import React, { useState } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Button, Box, Container, Modal, TextField, Grid, Snackbar, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";

const ReportPhishingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", type: "", details: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleSubmit = async () => {
    if (formData.details.length > 200) {
      setSnackbarMessage("Report details can't exceed 200 characters.");
      setSnackbarOpen(true);
    } else {
      try {
        await axios.post("http://127.0.0.1:8000/phishingform", formData, {
          headers: { "Content-Type": "application/json" },
        });
        setSnackbarMessage("Phishing report submitted successfully.");
        setFormData({ name: "", company: "", type: "", details: "" });
        handleCloseModal();
      } catch (error) {
        setSnackbarMessage("Phishing report submitted successfully.");
      }
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ bgcolor: "#121212", color: "white", minHeight: "100vh", padding: 3, textAlign: "center", width: "100vw", overflowX: "hidden" }}>
      <AppBar position="fixed" sx={{ bgcolor: "#1b1b1b", top: 20, right: 20, left: 20, borderRadius: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#4CAF50" }}>
            HASHOM
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/learn">Learn</Button>
            <Button color="inherit" component={Link} to="/report-phishing">Report Phishing</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#4CAF50" }}>Report Phishing</Typography>
        <Button variant="contained" color="success" onClick={handleOpenModal}>Report Phishing</Button>
      </Container>

      <Modal open={openModal} onClose={handleCloseModal} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ bgcolor: "#1e1e1e", padding: 3, borderRadius: 2, width: 400 }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#4CAF50" }}>Report a Phishing Incident</Typography>
          <TextField
            label="Your Name"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2, bgcolor: "#4CAF50", color: "white" }}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            label="Your Company"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2, bgcolor: "#4CAF50", color: "white" }}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
          <TextField
            select
            label="Type of Phishing"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2, bgcolor: "#4CAF50", color: "white" }}
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Email Phishing">Email Phishing</MenuItem>
            <MenuItem value="Spear Phishing">Spear Phishing</MenuItem>
            <MenuItem value="Whaling">Whaling</MenuItem>
            <MenuItem value="Smishing">Smishing (SMS Phishing)</MenuItem>
            <MenuItem value="Vishing">Vishing (Voice Phishing)</MenuItem>
          </TextField>
          <TextField
            label="Details of the Report"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{ marginBottom: 2, bgcolor: "#4CAF50", color: "white" }}
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            inputProps={{ maxLength: 200 }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth variant="outlined" color="error" onClick={handleCloseModal}>Cancel</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        action={<Close sx={{ color: "white" }} onClick={() => setSnackbarOpen(false)} />}
      />
    </Box>
  );
};

export default ReportPhishingPage;
