import { useState, useEffect } from 'react';
import { Container, Grid, Typography, Paper, Box, CircularProgress, Card, CardContent } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DeleteIcon from '@mui/icons-material/Delete';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CompostIcon from '@mui/icons-material/Compost';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Mock data - in a real app, this would come from a database
  const [wasteData, setWasteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch data
    setTimeout(() => {
      try {
        const mockData = {
          totalWaste: 125.5,
          recycled: 45.2,
          composted: 30.8,
          landfill: 49.5,
          recentEntries: [
            { id: 1, type: 'Plastic', weight: 2.3, date: '2023-06-15', category: 'Recycling' },
            { id: 2, type: 'Food Waste', weight: 1.5, date: '2023-06-14', category: 'Compost' },
            { id: 3, type: 'Paper', weight: 3.1, date: '2023-06-13', category: 'Recycling' },
            { id: 4, type: 'General Waste', weight: 4.2, date: '2023-06-12', category: 'Landfill' },
          ],
          wasteByCategory: {
            Plastic: 35.2,
            Paper: 28.7,
            Food: 30.8,
            Glass: 10.3,
            Metal: 5.5,
            Other: 15.0,
          },
        };
        setWasteData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load waste data');
        setLoading(false);
      }
    }, 1000); // Simulate network delay
  }, []);

  // Prepare chart data
  const chartData = {
    labels: ['Recycled', 'Composted', 'Landfill'],
    datasets: [
      {
        data: wasteData ? [wasteData.recycled, wasteData.composted, wasteData.landfill] : [],
        backgroundColor: ['#4CAF50', '#8BC34A', '#F44336'],
        borderColor: ['#087f23', '#5a9216', '#ba000d'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value}kg (${percentage}%)`;
          },
        },
      },
    },
  };

  // Waste category summary cards
  const categorySummary = [
    {
      title: 'Recycling',
      value: wasteData?.recycled || 0,
      unit: 'kg',
      icon: <RecyclingIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      color: '#E8F5E9',
    },
    {
      title: 'Compost',
      value: wasteData?.composted || 0,
      unit: 'kg',
      icon: <CompostIcon sx={{ fontSize: 40, color: '#8BC34A' }} />,
      color: '#F1F8E9',
    },
    {
      title: 'Landfill',
      value: wasteData?.landfill || 0,
      unit: 'kg',
      icon: <DeleteIcon sx={{ fontSize: 40, color: '#F44336' }} />,
      color: '#FFEBEE',
    },
    {
      title: 'Total Waste',
      value: wasteData?.totalWaste || 0,
      unit: 'kg',
      icon: <LocalDrinkIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      color: '#E3F2FD',
    },
  ];

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography color="error">{error}</Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>
        Waste Management Dashboard
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4, color: 'var(--text-secondary)' }}>
        Track and monitor your waste management efforts. See your impact and find ways to improve.
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {categorySummary.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                backgroundColor: category.color,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  {category.icon}
                  <Typography variant="h6" component="div" sx={{ ml: 1, fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                </Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                  {category.value} {category.unit}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts and Recent Entries */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Waste Distribution
            </Typography>
            <Box height={300} display="flex" justifyContent="center" alignItems="center">
              <Pie data={chartData} options={chartOptions} />
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Recent Waste Entries
            </Typography>
            {wasteData?.recentEntries.length > 0 ? (
              wasteData.recentEntries.map((entry) => (
                <Box 
                  key={entry.id} 
                  sx={{ 
                    p: 2, 
                    mb: 2, 
                    borderRadius: 1, 
                    backgroundColor: entry.category === 'Recycling' 
                      ? '#E8F5E9' 
                      : entry.category === 'Compost' 
                        ? '#F1F8E9' 
                        : '#FFEBEE',
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        {entry.type}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {entry.date}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {entry.weight} kg
                      </Typography>
                      <Typography variant="caption" sx={{ 
                        display: 'inline-block',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        backgroundColor: entry.category === 'Recycling' 
                          ? '#4CAF50' 
                          : entry.category === 'Compost' 
                            ? '#8BC34A' 
                            : '#F44336',
                        color: 'white',
                      }}>
                        {entry.category}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ))
            ) : (
              <Typography>No recent entries found.</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;