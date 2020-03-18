import React from 'react';
import { fetchCurrencyExchange } from '../../Services/coinpaprika.service';
import { useStateValue } from '../../StateContextProvider';

import '../../Styles/Body.css';

const Body = () => {

    const [currencyExchange, setCurrencyExchange] = React.useState(null);

    const [error, setError] = React.useState(null);

    const [{ firstSelected, secondSelected }] = useStateValue();

    React.useEffect(() => {
        if (firstSelected !== undefined && secondSelected !== undefined) {
            if (firstSelected !== secondSelected) {
                fetchCurrencyExchange(firstSelected, secondSelected, 1)
                    .then(result => {
                        setCurrencyExchange(result);
                        setError(null);
                    })
            } else {
                setError('Please select different cryptocurrencies.')
                setCurrencyExchange(null);
            }
        }

    }, [firstSelected, secondSelected]);

    const getCurrencyExchange = () => {
        if (error) {
            return (<h4>{error}</h4>);
        }
        if (currencyExchange) {
            return (
                <React.Fragment>
                    <h4>{currencyExchange.amount} {currencyExchange.base_currency_name} = {currencyExchange.price} {currencyExchange.quote_currency_name}</h4>
                    <h6>Last update: {currencyExchange.quote_price_last_updated.slice(0,10)}</h6>
                </React.Fragment>
            )
        }
        return (
            <h4>Please select two cryptocurrencies.</h4>
        )
    }

    return (
        <div className="card body">
            <div className="card-body body">
                {getCurrencyExchange()}
            </div>
        </div>
    )
}

export default Body;