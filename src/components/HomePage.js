import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilter, fetchCategories } from '../Redux/Home/HomePageSlice';
import '../style/Home.css';

const CurrencyTable = ({ categories }) => (
  <table className="currency-table">
    <colgroup>
      <col span={1} style={{ width: '5%' }} />
      <col span={1} style={{ width: '4%' }} />
    </colgroup>
    <thead>
      <tr>
        <th>Cur Logo</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Current Price</th>
        <th>Market Cap</th>
        <th>Market Cap Rank</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((category) => (
        <tr key={category.id}>
          <td>
            <Link to={`/details/${category.id}`}>
              <img src={category.image.small} alt={category.name} />
            </Link>
          </td>
          <td>
            <Link to={`/details/${category.id}`}>{category.name}</Link>
          </td>
          <td>{category.symbol}</td>
          <td>{category.market_data.current_price.usd}</td>
          <td>{category.market_data.market_cap.usd}</td>
          <td>{category.market_data.market_cap_rank}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

CurrencyTable.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const HomePage = () => {
  const filter = useSelector((state) => state.homepage.filter);
  const categories = useSelector((state) => state.homepage.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const filteredCategories = categories.filter(
    (category) => category.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="home-page">
      <h1>Foreign Currency</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Currency name"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <CurrencyTable categories={filteredCategories} />
    </div>
  );
};

export default HomePage;
