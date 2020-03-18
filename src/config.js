import dotenv from 'dotenv';
dotenv.config();

const config = {
    COINPAPRIKA_BASE_URL: process.env.REACT_APP_COINPAPRIKA_BASE_URL
};

export default config;
