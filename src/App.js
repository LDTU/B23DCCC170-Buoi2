import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoodsManager from './components/GoodsManager';
import AddGoods from './components/AddGoods';
import EditGoods from './components/EditGoods';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoodsManager />} />
        <Route path="/add" element={<AddGoods />} />
        <Route path="/edit/:id" element={<EditGoods />} />
      </Routes>
    </Router>
  );
}

export default App;
