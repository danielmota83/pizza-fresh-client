import theme from 'assets/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router'
import {QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
   <ThemeProvider theme={theme}>
    <BrowserRouter>
    <QueryClientProvider client = {queryClient}>
      <Router/>
    </QueryClientProvider>
   
    
    </BrowserRouter>

   </ThemeProvider>
  );
}

export default App;
