import React from 'react';
import ListContainer from './components/ListContainer';
import Navbar from './components/Navbar';

export default function App() {
  // EXERCISE (1) -- Create a Navbar component from scratch
  // Should be a nav element with .navbar class
  return (
    <>
      <Navbar />
      <ListContainer title="School Work" />
    </>
  );
}
