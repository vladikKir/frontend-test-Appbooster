import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import NavBar from './Navbar';

const CurrencyPage = () => {
    const [baseCurrency, setBaseCurrency] = useState('rub');
    const [currencies, setCurrencies] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}.json`);
            const data = response.data[baseCurrency];
            const courses = {
                rub: data.rub,
                usd: data.usd,
                eur: data.eur
            }
            setCurrencies(courses);
        }
        fetch();
    }, [currencies]);

    return (
        <>
        <NavBar baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency}/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(currencies)
                    .map(([currency, value]) => {
                        return (
                            <tr key={currency}>
                                <th>{currency}</th>
                                <th>{value}</th>
                            </tr>
                        )
                    })}
            </tbody>
        </Table>
        </>
    )
}

export default CurrencyPage;
