import { useState, useEffect } from 'react';
import { QuoteViewComponent } from './QuoteViewComponent';

export const QuoteComponent = () => {
    const [quote, setQuote] = useState('');

    const getQuote = async () => {
        const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
        const response = await fetch(apiUrl);
        const data = await response.json();
        setQuote(data.value);
    };

    const handleClick = () => {
        getQuote();
    }

    useEffect(() => {
        const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
        const getQuote = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setQuote(data.value);
        };

            getQuote();

    }, []);

    return (
        <>
            <button onClick={handleClick}>Get New Quote</button>
            <QuoteViewComponent quote={quote} />
        </>
    );
};
