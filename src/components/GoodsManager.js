import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteGoods, searchGoods } from '../redux/goodsSlice';
import { useNavigate } from 'react-router-dom';

function GoodsManager() {
  const goodsList = useSelector((state) => state.goods.goodsList);
  const searchQuery = useSelector((state) => state.goods.searchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteGoods(id));
  };

  const handleSearch = (e) => {
    dispatch(searchGoods(e.target.value));
  };

  const filteredGoods = goodsList.filter(goods =>
    goods.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Goods"
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
      />

      {/* Button to navigate to Add Goods page */}
      <button onClick={() => navigate('/add')}>Add Goods</button>

      {/* Goods List */}
      <ul>
        {filteredGoods.map((goods) => (
          <li key={goods.id}>
            <span>{goods.name} - ${goods.price}</span>
            <div>
              <button onClick={() => navigate(`/edit/${goods.id}`)}>Edit</button>
              <button onClick={() => handleDelete(goods.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoodsManager;
