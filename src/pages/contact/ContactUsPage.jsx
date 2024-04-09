import React from 'react';
import './ContactUs.css';
import { Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export const ContactUsPage = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6}>
          <Card className="contact-card" style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>Contact Us</Typography>
              <Typography variant="body1">
                If you have any questions or inquiries, feel free to contact us. Our team will be happy to assist you.
              </Typography>
              <Grid container spacing={2} className="info">
                <Grid item xs={12} sm={4}>
                  <Card style={{ height: '100%', backgroundColor: '#cab273' }}>
                    <CardContent>
                      <LocationOnIcon className="icon" />
                      <Typography variant="h6" gutterBottom>Location</Typography>
                      <Typography variant="body2">1234 Jewelry Street<br />City, Country</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card style={{ height: '100%', backgroundColor: '#cab273' }}>
                    <CardContent>
                      <EmailIcon className="icon" />
                      <Typography variant="h6" gutterBottom>Email</Typography>
                      <Typography variant="body2">info@example.com</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card style={{ height: '100%', backgroundColor: '#cab273' }}>
                    <CardContent>
                      <PhoneIcon className="icon" />
                      <Typography variant="h6" gutterBottom>Phone</Typography>
                      <Typography variant="body2">+123 456 7890</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="contact-card" style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Send Us a Message</Typography>
              <form>
                <TextField id="name" label="Your Name" fullWidth margin="normal" />
                <TextField id="email" label="Your Email" fullWidth margin="normal" />
                <TextField id="message" label="Your Message" multiline rows={4} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </motion.div>
  );
};
