import React from 'react';
import FirstDropdown from '../Dropdown';
import SecondDropdown from '../Dropdown';
import { useStateValue } from '../../StateContextProvider';

import '../../Styles/Header.css';

const Header = () => {

    const [{ cryptoList, firstSelected, secondSelected }, dispatch] = useStateValue();

    const setFirstSelected = (val) => {
        dispatch({
            type: 'updateFirstCryptoSelected',
            payload: {
                firstSelected: val
            }
        });
    }

    const setSecondSelected = (val) => {
        dispatch({
            type: 'updateSecondCryptoSelected',
            payload: {
                secondSelected: val
            }
        });
    }

    return (
        <div className="card header-container">
            <div className="card-body">
                <h1 className="header-title">Crypto Exchange</h1>
                <FirstDropdown selected={firstSelected} options={cryptoList} setSelected={setFirstSelected}/>
                <SecondDropdown selected={secondSelected} options={cryptoList} setSelected={setSecondSelected}/>
            </div>
        </div>
    )
}

export default Header;