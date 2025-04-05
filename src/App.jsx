import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { WasteProvider } from './context/WasteContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import LogWaste from './pages/LogWaste';
import Statistics from './pages/Statistics';
import Tips from './pages/Tips';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <WasteProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/log-waste" element={<LogWaste />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/tips" element={<Tips />} />
            </Routes>
          </Layout>
        </Router>
      </WasteProvider>
    </ThemeProvider>
  )
}

export default App
