import axios from 'axios';
import { glanceMockData } from '../typecodes/constants';

export const fetchProducts = (skip = 1) => {
    const limit = 5;
    let skipTo = skip * 5;
    return axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skipTo}`
    );
};

export const fetchGlanceData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status:200,
                data:glanceMockData
            });
        }, 3000);
    });
};
