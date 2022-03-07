import * as React from 'react';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Routes, Redirect, Switch, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from './Header';
import Map from './Map';
import { LANGUAGE } from './utils/consts';
import AppBar from '@mui/material/AppBar';

export default function App() {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/:lang">
            <Box sx={{ flexGrow: 1 }}>
              <React.Suspense fallback={<AppBar position="static"/>}>
                <Header />
              </React.Suspense>
              <Map />
            </Box>
          </Route>
          <Redirect to={`/${LANGUAGE.UA}`} />
        </Switch>
    </BrowserRouter>
  );
}
