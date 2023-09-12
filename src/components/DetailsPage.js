import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCategory } from '../Redux/Home/HomePageSlice';

function renderTableRow(label, value) {
  return (
    <tr key={label}>
      <th>{label}</th>
      <td>{value}</td>
    </tr>
  );
}

const DetailsPage = () => {
  const { id } = useParams();
  const category = useSelector((state) => state.homepage.categories.find((c) => c.id === id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!category) {
      dispatch(fetchCategory(id));
    }
  }, [category, dispatch, id]);

  if (!category) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="details-page">
      <div className="detail">
        <button type="button" className="btn-icon" onClick={handleGoBack}>
          Back
        </button>
        <h1 className="heading">Currency Details</h1>
      </div>

      <table className="currency-table">
        <caption>Currency Detail</caption>
        <tbody>
          {renderTableRow('Cur Logo', <img src={category.image.small} alt={category.name} />)}
          {renderTableRow('Name', category.name)}
          {renderTableRow('Symbol', category.symbol)}
          {renderTableRow('Block time in minutes', category.block_time_in_minutes)}
          {renderTableRow('Last update', category.last_updated)}
          {renderTableRow('Current price', category.market_data.current_price.usd)}
          {renderTableRow('High 24', category.market_data.high_24)}
          {renderTableRow('Total volume', category.market_data.total_volume.usd)}
          {renderTableRow('Market cap rank', category.market_data.market_cap_rank)}
          {renderTableRow('Market Cap Change % (24h)', category.market_data.market_cap_change_percentage_24h)}
          {renderTableRow('Market Cap Change (24h)', category.market_data.market_cap_change_24h)}
          {renderTableRow('Price Change (24h)', category.market_data.price_change_24h)}
          {renderTableRow('Price Change % (7d)', category.market_data.price_change_percentage_7d_in_currency.usd)}
          {renderTableRow('Price Change % (14d)', category.market_data.price_change_percentage_14d)}
          {renderTableRow('Price Change % (30d)', category.market_data.price_change_percentage_30d)}
          {renderTableRow('Price Change % (60d)', category.market_data.price_change_percentage_60d)}
          {renderTableRow('Price Change % (200d)', category.market_data.price_change_percentage_200d)}
          {renderTableRow('Price Change % (1y)', category.market_data.price_change_percentage_1y)}
          {renderTableRow('Total Volume', category.market_data.total_volume.usd)}
          {renderTableRow('Total Supply', category.market_data.total_supply)}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsPage;
