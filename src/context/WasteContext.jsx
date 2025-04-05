import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const WasteContext = createContext();

// Custom hook to use the waste context
export const useWaste = () => {
  const context = useContext(WasteContext);
  if (!context) {
    throw new Error('useWaste must be used within a WasteProvider');
  }
  return context;
};

// Provider component
export const WasteProvider = ({ children }) => {
  // State for waste data
  const [wasteData, setWasteData] = useState({
    totalWaste: 0,
    recycled: 0,
    composted: 0,
    landfill: 0,
    recentEntries: [],
    wasteByCategory: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load initial data
  useEffect(() => {
    // In a real app, this would fetch from an API or database
    // For this mini project, we'll use mock data
    try {
      // Simulate API call
      setTimeout(() => {
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
      }, 1000);
    } catch (err) {
      setError('Failed to load waste data');
      setLoading(false);
    }
  }, []);

  // Function to add a new waste entry
  const addWasteEntry = (entry) => {
    // Generate a unique ID (in a real app, this would come from the backend)
    const id = Date.now();
    const newEntry = { id, ...entry };
    
    // Update the waste data
    setWasteData((prevData) => {
      // Calculate new totals
      const newTotalWaste = prevData.totalWaste + parseFloat(entry.weight);
      let newRecycled = prevData.recycled;
      let newComposted = prevData.composted;
      let newLandfill = prevData.landfill;
      
      // Update category totals
      if (entry.category === 'Recycling') {
        newRecycled += parseFloat(entry.weight);
      } else if (entry.category === 'Compost') {
        newComposted += parseFloat(entry.weight);
      } else if (entry.category === 'Landfill') {
        newLandfill += parseFloat(entry.weight);
      }
      
      // Update waste by type
      const newWasteByCategory = { ...prevData.wasteByCategory };
      if (newWasteByCategory[entry.type]) {
        newWasteByCategory[entry.type] += parseFloat(entry.weight);
      } else {
        newWasteByCategory[entry.type] = parseFloat(entry.weight);
      }
      
      // Add to recent entries (keep most recent 10)
      const newRecentEntries = [newEntry, ...prevData.recentEntries].slice(0, 10);
      
      return {
        totalWaste: newTotalWaste,
        recycled: newRecycled,
        composted: newComposted,
        landfill: newLandfill,
        recentEntries: newRecentEntries,
        wasteByCategory: newWasteByCategory,
      };
    });
    
    return id; // Return the ID of the new entry
  };

  // Value to be provided by the context
  const value = {
    wasteData,
    loading,
    error,
    addWasteEntry,
  };

  return <WasteContext.Provider value={value}>{children}</WasteContext.Provider>;
};