// src/components/AddGoods.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoods } from '../redux/goodsSlice';
import { useNavigate } from 'react-router-dom';

function AddGoods() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoods({ id: Date.now(), name, price: parseFloat(price) }));
    navigate('/'); 
  };

  return (
    <div className="container form-container">
      <h2>Add Goods</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Goods Name"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddGoods;
