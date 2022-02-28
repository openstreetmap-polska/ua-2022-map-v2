import * as React from 'react';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Routes, Redirect, Switch, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from './Header';
import Map from './Map';

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/:lang">
            <Box sx={{ flexGrow: 1 }}>
              <Header />
              <Map />
            </Box>
          </Route>
          <Redirect to="/ua" />
        </Switch>
    </BrowserRouter>
  );
}
