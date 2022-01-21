import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Posts from "./pages/Posts";
import Post from './pages/Post';
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter basename="https://lowlifeboy.github.io/rrd-rt">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to="/posts" />}
          />
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/post/:id" element={<Post/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
