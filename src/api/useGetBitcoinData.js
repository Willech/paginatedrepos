import React, { useEffect, useState } from 'react';
import axios from 'axios'

const API_URL = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2"; 

const useGetBitcoinData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            throw new Error("Something went wrong!");
            const res = await axios(API_URL);
            setData(res.data.Data.Data.reverse());
        }
        fetchData().then(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000)
        }).catch(error => {
            setIsLoading(false);
            setError(error);
        });  
    }, [])

    return [data, isLoading, error];
}

export default useGetBitcoinData;