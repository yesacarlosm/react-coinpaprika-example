import Axios from 'axios';
import config from '../config';

export const fetchCryptocurrencies = () => {
    return Axios.get(`${config.COINPAPRIKA_BASE_URL}coins/`).then(res => res.data);
}

export const fetchCurrencyExchange = (base, quote, amount) => {
    return Axios
        .get(`${config.COINPAPRIKA_BASE_URL}price-converter/?base_currency_id=${base}&quote_currency_id=${quote}&amount=${amount}`)
        .then(res => res.data);
}