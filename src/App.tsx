import { Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { BeerDetail } from './features/beers/BeerDetail';
import { BeerList } from './features/beers/BeerList';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900]
        }}>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<BeerList />} />
            <Route path="/beers/:id" element={<BeerDetail />} />
            <Route path="*" element={
              <Box>
                <Typography>404</Typography>
                <Typography>Page not found</Typography>
              </Box>
            } />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
