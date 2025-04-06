import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  CircularProgress,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  CardContent,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Statistics = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleTimeRangeChange = (event, newTimeRange) => {
    if (newTimeRange !== null) {
      setTimeRange(newTimeRange);
    }
  };

  useEffect(() => {
    // Simulate API call to fetch data based on time range
    setLoading(true);
    setTimeout(() => {
      // Mock data for different time ranges
      let mockData;
      
      if (timeRange === 'week') {
        mockData = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          dailyWaste: [2.5, 3.1, 1.8, 4.2, 2.9, 1.5, 3.7],
          wasteByCategory: {
            Recycling: [1.2, 1.5, 0.8, 2.0, 1.4, 0.7, 1.8],
            Compost: [0.8, 1.0, 0.5, 1.2, 0.9, 0.5, 1.2],
            Landfill: [0.5, 0.6, 0.5, 1.0, 0.6, 0.3, 0.7],
          },
          wasteByType: {
            Plastic: 5.2,
            Paper: 4.7,
            Glass: 2.3,
            Metal: 1.5,
            'Food Waste': 4.8,
            Other: 1.2,
          },
          totalWaste: 19.7,
          recyclingRate: 48,
          wasteReduction: 12,
        };
      } else if (timeRange === 'month') {
        mockData = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          dailyWaste: [18.5, 22.1, 19.8, 24.2],
          wasteByCategory: {
            Recycling: [9.2, 10.5, 9.8, 12.0],
            Compost: [5.8, 7.0, 6.5, 7.2],
            Landfill: [3.5, 4.6, 3.5, 5.0],
          },
          wasteByType: {
            Plastic: 22.2,
            Paper: 18.7,
            Glass: 9.3,
            Metal: 6.5,
            'Food Waste': 20.8,
            Other: 7.2,
          },
          totalWaste: 84.6,
          recyclingRate: 52,
          wasteReduction: 8,
        };
      } else {
        mockData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          dailyWaste: [75.5, 82.1, 79.8, 84.2, 89.9, 91.5, 87.7, 85.3, 82.1, 78.9, 80.2, 83.5],
          wasteByCategory: {
            Recycling: [38.2, 40.5, 39.8, 42.0, 44.9, 45.5, 43.7, 42.3, 41.1, 39.9, 40.2, 41.5],
            Compost: [22.8, 25.0, 24.5, 26.2, 27.9, 28.5, 26.7, 25.3, 24.1, 22.9, 24.2, 25.5],
            Landfill: [14.5, 16.6, 15.5, 16.0, 17.1, 17.5, 17.3, 17.7, 16.9, 16.1, 15.8, 16.5],
          },
          wasteByType: {
            Plastic: 255.2,
            Paper: 218.7,
            Glass: 109.3,
            Metal: 76.5,
            'Food Waste': 240.8,
            Other: 99.2,
          },
          totalWaste: 999.7,
          recyclingRate: 50,
          wasteReduction: 15,
        };
      }
      
      setChartData(mockData);
      setLoading(false);
    }, 1000);
  }, [timeRange]);

  // Prepare line chart data for daily waste
  const lineChartData = {
    labels: chartData?.labels || [],
    datasets: [
      {
        label: 'Total Waste (kg)',
        data: chartData?.dailyWaste || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.3,
      },
    ],
  };

  // Prepare bar chart data for waste by category
  const barChartData = {
    labels: chartData?.labels || [],
    datasets: [
      {
        label: 'Recycling',
        data: chartData?.wasteByCategory?.Recycling || [],
        backgroundColor: 'rgba(76, 175, 80, 0.7)',
      },
      {
        label: 'Compost',
        data: chartData?.wasteByCategory?.Compost || [],
        backgroundColor: 'rgba(139, 195, 74, 0.7)',
      },
      {
        label: 'Landfill',
        data: chartData?.wasteByCategory?.Landfill || [],
        backgroundColor: 'rgba(244, 67, 54, 0.7)',
      },
    ],
  };

  // Prepare doughnut chart data for waste by type
  const doughnutChartData = {
    labels: chartData ? Object.keys(chartData.wasteByType) : [],
    datasets: [
      {
        data: chartData ? Object.values(chartData.wasteByType) : [],
        backgroundColor: [
          'rgba(76, 175, 80, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(255, 193, 7, 0.7)',
          'rgba(156, 39, 176, 0.7)',
          'rgba(139, 195, 74, 0.7)',
          'rgba(158, 158, 158, 0.7)',
        ],
        borderColor: [
          'rgba(76, 175, 80, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(156, 39, 176, 1)',
          'rgba(139, 195, 74, 1)',
          'rgba(158, 158, 158, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Waste Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Weight (kg)',
        },
      },
    },
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Waste by Category',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Weight (kg)',
        },
      },
    },
  };

  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Waste by Type',
      },
    },
  };

  // Summary cards data
  const summaryCards = chartData
    ? [
        {
          title: 'Total Waste',
          value: `${chartData.totalWaste} kg`,
          description: `Total waste collected in the selected ${timeRange}`,
          color: '#E3F2FD',
        },
        {
          title: 'Recycling Rate',
          value: `${chartData.recyclingRate}%`,
          description: 'Percentage of waste that was recycled',
          color: '#E8F5E9',
        },
        {
          title: 'Waste Reduction',
          value: `${chartData.wasteReduction}%`,
          description: 'Reduction compared to previous period',
          color: '#FFF8E1',
        },
      ]
    : [];

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
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
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 1
          }}
        >
          <AssessmentIcon sx={{ color: 'var(--primary-color)', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }} />
          Waste Statistics
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: 'var(--text-secondary)', 
            maxWidth: { md: '80%' },
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          Analyze your waste data to identify trends and areas for improvement.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <ToggleButtonGroup
            value={timeRange}
            exclusive
            onChange={handleTimeRangeChange}
            aria-label="time range"
            color="primary"
          >
            <ToggleButton value="week" aria-label="week">
              Week
            </ToggleButton>
            <ToggleButton value="month" aria-label="month">
              Month
            </ToggleButton>
            <ToggleButton value="year" aria-label="year">
              Year
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {summaryCards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', backgroundColor: card.color }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                  {card.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box height={300}>
              <Line data={lineChartData} options={lineChartOptions} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Box height={300}>
              <Bar data={barChartData} options={barChartOptions} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mt: 3 }}>
            <Box height={350}>
              <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Statistics;