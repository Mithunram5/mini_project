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
  IconButton,
  Tooltip,
  Chip,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SourceIcon from '@mui/icons-material/Source';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import RecyclingIcon from '@mui/icons-material/Recycling';

const LogWaste = () => {
  const [wasteData, setWasteData] = useState({
    type: '',
    weight: '',
    category: '',
    date: new Date(),
    location: '',
    source: '',
    image: null,
    tags: [],
    notes: '',
  });
  
  const [tagInput, setTagInput] = useState('');

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
  
  const wasteSources = [
    { value: 'Home', label: 'Home' },
    { value: 'Office', label: 'Office' },
    { value: 'School', label: 'School' },
    { value: 'Restaurant', label: 'Restaurant' },
    { value: 'Outdoor', label: 'Outdoor' },
    { value: 'Other', label: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWasteData({
      ...wasteData,
      [name]: value,
    });
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setWasteData({
        ...wasteData,
        image: e.target.files[0],
      });
    }
  };
  
  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };
  
  const handleAddTag = () => {
    if (tagInput.trim() !== '' && !wasteData.tags.includes(tagInput.trim())) {
      setWasteData({
        ...wasteData,
        tags: [...wasteData.tags, tagInput.trim()],
      });
      setTagInput('');
    }
  };
  
  const handleDeleteTag = (tagToDelete) => {
    setWasteData({
      ...wasteData,
      tags: wasteData.tags.filter((tag) => tag !== tagToDelete),
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
    if (!wasteData.type || !wasteData.weight || !wasteData.category || !wasteData.source) {
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
      location: '',
      source: '',
      image: null,
      tags: [],
      notes: '',
    });
    
    // Reset tag input
    setTagInput('');
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ mb: 4, textAlign: 'center', width: '100%' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 700, 
            color: 'var(--primary-dark)',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}
        >
          <RecyclingIcon sx={{ color: 'var(--primary-color)', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }} />
          Log Your Waste
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '80%',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            mx: 'auto'
          }}
        >
          Track your waste to help monitor your environmental impact and identify areas for improvement.
        </Typography>
      </Box>

      <Paper 
        elevation={2} 
        sx={{ 
          p: { xs: 3, md: 4 }, 
          borderRadius: 'var(--border-radius)',
          boxShadow: 'var(--box-shadow)',
          background: 'linear-gradient(to bottom right, #ffffff, #f9f9f9)',
          width: '100%',
          maxWidth: '800px',
          mx: 'auto'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}>
                <InputLabel id="waste-type-label">Waste Type</InputLabel>
                <Select
                  labelId="waste-type-label"
                  id="waste-type"
                  value={wasteData.type}
                  label="Waste Type"
                  name="type"
                  onChange={handleChange}
                  required
                  sx={{
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--primary-color)',
                      borderWidth: '2px',
                    },
                  }}
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
              <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}>
                <InputLabel id="waste-category-label">Waste Category</InputLabel>
                <Select
                  labelId="waste-category-label"
                  id="waste-category"
                  name="category"
                  value={wasteData.category}
                  onChange={handleChange}
                  label="Waste Category"
                  required
                  sx={{
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--primary-color)',
                      borderWidth: '2px',
                    },
                  }}
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
              <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}>
                <InputLabel id="waste-source-label">Waste Source</InputLabel>
                <Select
                  labelId="waste-source-label"
                  id="waste-source"
                  name="source"
                  value={wasteData.source}
                  onChange={handleChange}
                  label="Waste Source"
                  required
                  startAdornment={<SourceIcon sx={{ ml: 1, mr: 0.5, color: 'var(--primary-color)' }} />}
                  sx={{
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--primary-color)',
                      borderWidth: '2px',
                    },
                  }}
                >
                  {wasteSources.map((option) => (
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
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': { 
                    borderRadius: 2,
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--primary-color)',
                      borderWidth: '2px',
                    },
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={wasteData.date}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                      variant: "outlined",
                      sx: {
                        '& .MuiOutlinedInput-root': { 
                          borderRadius: 2,
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--primary-color)',
                            borderWidth: '2px',
                          },
                        }
                      }
                    }
                  }}
                />
              </LocalizationProvider>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="waste-location"
                name="location"
                label="Location"
                value={wasteData.location}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  startAdornment: <LocationOnIcon sx={{ mr: 1, color: 'var(--primary-color)' }} />,
                }}
                placeholder="Where was this waste collected?"
                sx={{
                  '& .MuiOutlinedInput-root': { 
                    borderRadius: 2,
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--primary-color)',
                      borderWidth: '2px',
                    },
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Box sx={{ 
                border: '1px dashed var(--primary-color)', 
                borderRadius: 2, 
                p: 2, 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(76, 175, 80, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)' }
              }}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="waste-image-upload"
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="waste-image-upload">
                  <Tooltip title="Upload waste image">
                    <IconButton 
                      color="primary" 
                      aria-label="upload waste image" 
                      component="span"
                      sx={{
                        mb: 1,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.2)' }
                      }}
                    >
                      <PhotoCamera />
                    </IconButton>
                  </Tooltip>
                </label>
                <Typography variant="body2" color="textSecondary" align="center">
                  {wasteData.image ? `Selected: ${wasteData.image.name}` : 'Upload an image of your waste (optional)'}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, color: 'var(--text-secondary)' }}>
                  Tags (Optional)
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <TextField
                    fullWidth
                    size="small"
                    id="waste-tags"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    variant="outlined"
                    placeholder="Add tags (e.g., kitchen, office, recyclable)"
                    sx={{
                      mr: 1,
                      '& .MuiOutlinedInput-root': { 
                        borderRadius: 2,
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'var(--primary-color)',
                          borderWidth: '2px',
                        },
                      }
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button 
                    variant="contained" 
                    onClick={handleAddTag}
                    sx={{
                      backgroundColor: 'var(--primary-color)',
                      '&:hover': {
                        backgroundColor: 'var(--primary-dark)',
                      },
                      borderRadius: 'var(--border-radius)'
                    }}
                  >
                    Add
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {wasteData.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      onDelete={() => handleDeleteTag(tag)}
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{ 
                        borderRadius: 'var(--border-radius)',
                        '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)' }
                      }}
                    />
                  ))}
                </Box>
              </Box>
              <TextField
                fullWidth
                id="waste-notes"
                name="notes"
                label="Notes (Optional)"
                multiline
                rows={3}
                value={wasteData.notes}
                onChange={handleChange}
                variant="outlined"
                placeholder="Add any additional information about this waste entry..."
                sx={{
                  '& .MuiOutlinedInput-root': { 
                    borderRadius: 2,
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'var(--primary-color)',
                      borderWidth: '2px',
                    },
                  }
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                  startIcon={<RecyclingIcon />}
                  sx={{
                    backgroundColor: 'var(--primary-color)',
                    '&:hover': {
                      backgroundColor: 'var(--primary-dark)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 'var(--border-radius)'
                  }}
                >
                  Log Waste Entry
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