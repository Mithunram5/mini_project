import { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Alert,
  Box,
  Divider,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import RecyclingIcon from '@mui/icons-material/Recycling';

const LogWaste = () => {
  const [wasteData, setWasteData] = useState({
    type: '',
    weight: '',
    category: '',
    date: new Date(),
    notes: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const wasteTypes = [
    { value: 'Plastic', label: 'Plastic' },
    { value: 'Paper', label: 'Paper' },
    { value: 'Glass', label: 'Glass' },
    { value: 'Metal', label: 'Metal' },
    { value: 'Food Waste', label: 'Food Waste' },
    { value: 'Electronic Waste', label: 'Electronic Waste' },
    { value: 'Textile', label: 'Textile' },
    { value: 'Other', label: 'Other' },
  ];

  const wasteCategories = [
    { value: 'Recycling', label: 'Recycling' },
    { value: 'Compost', label: 'Compost' },
    { value: 'Landfill', label: 'Landfill' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWasteData({
      ...wasteData,
      [name]: value,
    });
  };

  const handleDateChange = (newDate) => {
    setWasteData({
      ...wasteData,
      date: newDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!wasteData.type || !wasteData.weight || !wasteData.category) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error',
      });
      return;
    }

    // In a real app, this would send data to a backend API
    console.log('Submitting waste data:', wasteData);
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Waste data logged successfully!',
      severity: 'success',
    });

    // Reset form
    setWasteData({
      type: '',
      weight: '',
      category: '',
      date: new Date(),
      notes: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 2, mb: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <RecyclingIcon sx={{ fontSize: 60, color: 'var(--primary-color)', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
          Log Your Waste
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--text-secondary)' }}>
          Track your waste to help monitor your environmental impact and identify areas for improvement.
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="waste-type-label">Waste Type</InputLabel>
                <Select
                  labelId="waste-type-label"
                  id="waste-type"
                  name="type"
                  value={wasteData.type}
                  onChange={handleChange}
                  label="Waste Type"
                >
                  {wasteTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="waste-category-label">Waste Category</InputLabel>
                <Select
                  labelId="waste-category-label"
                  id="waste-category"
                  name="category"
                  value={wasteData.category}
                  onChange={handleChange}
                  label="Waste Category"
                >
                  {wasteCategories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="waste-weight"
                name="weight"
                label="Weight (kg)"
                type="number"
                value={wasteData.weight}
                onChange={handleChange}
                inputProps={{ step: "0.1", min: "0" }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={wasteData.date}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} fullWidth required />}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true
                    }
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="waste-notes"
                name="notes"
                label="Notes"
                multiline
                rows={4}
                value={wasteData.notes}
                onChange={handleChange}
                placeholder="Add any additional details about this waste entry"
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="button"
                  variant="outlined"
                  sx={{ mr: 2 }}
                  onClick={() => {
                    setWasteData({
                      type: '',
                      weight: '',
                      category: '',
                      date: new Date(),
                      notes: '',
                    });
                  }}
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: 'var(--primary-color)',
                    '&:hover': {
                      backgroundColor: 'var(--primary-dark)',
                    },
                  }}
                >
                  Log Waste
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LogWaste;