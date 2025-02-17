import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import theme from './MUI.theme';
import ItemDetails from './pages/ItemDetails';
import ItemsCatalogue from './pages/ItemsCatalogue';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Payment from './pages/Payment';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path="/search/:query" element={<ItemsCatalogue />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/pay" element={<Payment />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
