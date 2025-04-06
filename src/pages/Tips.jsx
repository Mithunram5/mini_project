import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Divider,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NatureIcon from '@mui/icons-material/Nature';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CompostIcon from '@mui/icons-material/Compost';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WaterIcon from '@mui/icons-material/Water';

const Tips = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Waste reduction tips data
  const tipCategories = [
    {
      id: 'reduce',
      title: 'Reduce',
      icon: <NatureIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      description: 'Tips to reduce waste generation',
      color: '#E8F5E9',
      tips: [
        {
          title: 'Shop with reusable bags',
          description: 'Bring your own shopping bags to avoid single-use plastic bags.',
          icon: <ShoppingBagIcon />,
        },
        {
          title: 'Buy in bulk',
          description: 'Purchase items in bulk to reduce packaging waste.',
          icon: <ShoppingBagIcon />,
        },
        {
          title: 'Choose products with minimal packaging',
          description: 'Select items with less packaging or packaging made from recyclable materials.',
          icon: <ShoppingBagIcon />,
        },
        {
          title: 'Use reusable containers',
          description: 'Opt for reusable containers for food storage instead of disposable options.',
          icon: <ShoppingBagIcon />,
        },
      ],
    },
    {
      id: 'reuse',
      title: 'Reuse',
      icon: <WaterIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      description: 'Ways to reuse items before discarding',
      color: '#E3F2FD',
      tips: [
        {
          title: 'Repurpose glass jars',
          description: 'Use glass jars for storage, organizing, or DIY projects.',
          icon: <WaterIcon />,
        },
        {
          title: 'Donate usable items',
          description: 'Donate clothes, furniture, and other items instead of throwing them away.',
          icon: <WaterIcon />,
        },
        {
          title: 'Repair broken items',
          description: 'Fix broken items when possible instead of replacing them.',
          icon: <WaterIcon />,
        },
        {
          title: 'Use cloth napkins',
          description: 'Switch to cloth napkins instead of paper ones.',
          icon: <WaterIcon />,
        },
      ],
    },
    {
      id: 'recycle',
      title: 'Recycle',
      icon: <RecyclingIcon sx={{ fontSize: 40, color: '#FF9800' }} />,
      description: 'Proper recycling practices',
      color: '#FFF3E0',
      tips: [
        {
          title: 'Know your local recycling rules',
          description: 'Learn what can and cannot be recycled in your area.',
          icon: <RecyclingIcon />,
        },
        {
          title: 'Clean containers before recycling',
          description: 'Rinse food containers to prevent contamination of recyclable materials.',
          icon: <RecyclingIcon />,
        },
        {
          title: 'Remove labels and caps when required',
          description: 'Follow local guidelines for preparing items for recycling.',
          icon: <RecyclingIcon />,
        },
        {
          title: 'Recycle electronics properly',
          description: 'Take electronic waste to designated e-waste recycling centers.',
          icon: <RecyclingIcon />,
        },
      ],
    },
    {
      id: 'compost',
      title: 'Compost',
      icon: <CompostIcon sx={{ fontSize: 40, color: '#8BC34A' }} />,
      description: 'Tips for effective composting',
      color: '#F1F8E9',
      tips: [
        {
          title: 'Start a compost bin',
          description: 'Create a compost bin for food scraps and yard waste.',
          icon: <CompostIcon />,
        },
        {
          title: 'Know what to compost',
          description: 'Learn which items can be composted and which should be avoided.',
          icon: <CompostIcon />,
        },
        {
          title: 'Balance green and brown materials',
          description: 'Maintain a proper ratio of nitrogen-rich and carbon-rich materials.',
          icon: <CompostIcon />,
        },
        {
          title: 'Turn your compost regularly',
          description: 'Mix the compost pile to aerate it and speed up decomposition.',
          icon: <CompostIcon />,
        },
      ],
    },
  ];

  // Waste reduction challenges
  const challenges = [
    {
      title: '7-Day Zero Waste Challenge',
      description: 'Try to produce no landfill waste for a week by planning meals, shopping with reusable bags, and avoiding single-use items.',
      difficulty: 'Medium',
      duration: '7 days',
    },
    {
      title: 'Plastic-Free Month',
      description: 'Eliminate single-use plastics from your life for a month. Find alternatives for common plastic items.',
      difficulty: 'Hard',
      duration: '30 days',
    },
    {
      title: 'Compost Starter',
      description: 'Begin composting your food scraps and yard waste. Track how much you divert from landfill.',
      difficulty: 'Easy',
      duration: 'Ongoing',
    },
    {
      title: 'Repair Don\'t Replace',
      description: 'Instead of replacing broken items, challenge yourself to repair them or find someone who can.',
      difficulty: 'Medium',
      duration: 'Ongoing',
    },
  ];

  // FAQ section
  const faqs = [
    {
      question: 'What items can be recycled?',
      answer: 'Recyclable items typically include paper, cardboard, glass bottles and jars, aluminum cans, and certain plastics (usually types 1 and 2). However, recycling rules vary by location, so check with your local recycling program for specific guidelines.',
    },
    {
      question: 'How do I start composting at home?',
      answer: 'To start composting at home, you need a compost bin or pile in your yard, or a special indoor composting system. Begin by collecting food scraps like fruit and vegetable peels, coffee grounds, and eggshells. Mix these "green" materials with "brown" materials like dry leaves, newspaper, or cardboard. Keep the compost moist but not wet, and turn it regularly to aerate it.',
    },
    {
      question: 'What are some easy ways to reduce waste daily?',
      answer: 'Simple ways to reduce waste include using reusable shopping bags, water bottles, and coffee cups; buying in bulk to reduce packaging; choosing products with minimal or recyclable packaging; composting food scraps; and repairing items instead of replacing them when possible.',
    },
    {
      question: 'How can I reduce food waste?',
      answer: 'Reduce food waste by planning meals and making shopping lists to avoid overbuying, storing food properly to extend its life, using leftovers creatively, composting food scraps, and understanding the difference between "sell by," "use by," and "best by" dates on food products.',
    },
    {
      question: 'What should I do with electronic waste?',
      answer: 'Electronic waste (e-waste) should never go in regular trash or recycling bins. Many communities have special e-waste collection events or drop-off locations. Some electronics retailers also offer recycling programs. Before recycling, consider donating working electronics or having them repaired if they\'re fixable.',
    },
  ];

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
          <LightbulbIcon sx={{ color: 'var(--primary-color)', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }} />
          Waste Reduction Tips & Resources
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: 'var(--text-secondary)', 
            maxWidth: { md: '80%' },
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          Discover practical ways to reduce, reuse, recycle, and compost. Small changes in your daily habits can make a big difference for our environment.
        </Typography>
      </Box>

      {/* Tip Categories */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 3 }}>
        Waste Management Strategies
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {tipCategories.map((category) => (
          <Grid item xs={12} md={6} key={category.id}>
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
                  <Typography variant="h5" component="div" sx={{ ml: 1, fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {category.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  {category.tips.map((tip, index) => (
                    <Grid item xs={12} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box sx={{ 
                          mr: 2, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          width: 36,
                          height: 36,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0,0,0,0.08)'
                        }}>
                          {tip.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                            {tip.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {tip.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Challenges Section */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mt: 6, mb: 3 }}>
        Waste Reduction Challenges
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: 'var(--text-secondary)', mb: 3 }}>
        Challenge yourself to reduce waste with these activities. Start small and work your way up to bigger challenges!
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {challenges.map((challenge, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ 
              height: '100%',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }
            }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 2 }}>
                  {challenge.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip 
                    label={`Difficulty: ${challenge.difficulty}`} 
                    size="small" 
                    sx={{ 
                      backgroundColor: challenge.difficulty === 'Easy' 
                        ? '#E8F5E9' 
                        : challenge.difficulty === 'Medium' 
                          ? '#FFF8E1' 
                          : '#FFEBEE',
                      color: 'text.primary'
                    }} 
                  />
                  <Chip 
                    label={`Duration: ${challenge.duration}`} 
                    size="small" 
                    sx={{ backgroundColor: '#E3F2FD', color: 'text.primary' }} 
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {challenge.description}
                </Typography>
                <Button 
                  variant="outlined" 
                  size="small" 
                  sx={{ mt: 1 }}
                  onClick={() => console.log(`Starting challenge: ${challenge.title}`)}
                >
                  Start Challenge
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FAQ Section */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mt: 6, mb: 3 }}>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mb: 6 }}>
        {faqs.map((faq, index) => (
          <Accordion 
            key={index} 
            expanded={expanded === `panel${index}`} 
            onChange={handleChange(`panel${index}`)}
            sx={{ 
              mb: 2, 
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default Tips;