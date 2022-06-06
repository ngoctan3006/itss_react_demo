import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import PostDetails from './components/PostDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
