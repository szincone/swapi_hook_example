import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import DisplayChars from './containers/DisplayChars.js';

export default function App() {
  const [chars, setChars] = useState([]);

  const fetchPeople = async () => {
    const response = await axios('https://swapi.co/api/people/');
    setChars(response.data.results);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#C1BFB5',
      }}
    >
      <Route
        path="/"
        render={(props) => <DisplayChars {...props} chars={chars} />}
      />
    </div>
  );
}
