import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editGoods } from '../redux/goodsSlice';
import { useParams, useNavigate } from 'react-router-dom';

function EditGoods() {
  const { id } = useParams();  
  const goodsList = useSelector((state) => state.goods.goodsList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goods = goodsList.find(item => item.id === parseInt(id));

  const [name, setName] = useState(goods ? goods.name : '');
  const [price, setPrice] = useState(goods ? goods.price : '');

  useEffect(() => {
    if (!goods) {
      navigate('/');
    }
  }, [goods, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editGoods({ id: parseInt(id), newData: { name, price: parseFloat(price) } }));
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Goods</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditGoods;
