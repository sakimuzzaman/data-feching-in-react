

import React, { useEffect, useState } from 'react';

 export default function Quote()  {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums');
            const data = await res.json();
            setQuote(data);
        }

        fetchQuote();
 
        
    }, [])
    return (
        <div>
            <h1>Get quotes using fetch API</h1>

            <div>{.title}</div>
        </div>
    );
}

