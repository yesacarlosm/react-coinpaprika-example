import React from 'react';
import Header from '../Header';
import Body from '../Body';
import { useStateValue } from '../../StateContextProvider';
import { fetchCryptocurrencies } from '../../Services/coinpaprika.service';
import '../../Styles/Main.css';

const Main = () => {

  const [{ }, dispatch] = useStateValue();

  React.useEffect(() => {
    fetchCryptocurrencies()
      .then(result => {
        dispatch({
          type: 'fetchCryptoList',
          payload: {
            cryptoList: result.slice(0, 10)
          }
        });
      })
  }, []);

  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
}

export default Main;
