import React from "react";
import Layout from './layout';
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Discussion from "./pages/Discussion";
import Signin from "./pages/Signin";
import './App.css';

function App() {
  return (
    <Layout >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
    </Layout>
  );
}

export default App;
