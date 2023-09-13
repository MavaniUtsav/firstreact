import React, { useEffect, useState } from 'react';

function Quotes(props) {
    //1.
    const [isLoading, setIsLoading] = useState(true);
    const [qdata, setQData] = useState([]);
    const [index, setIndex] = useState(0);

    const getData = async () => {
        const response = await fetch('https://type.fit/api/quotes')
        const data = await response.json()
        // console.log(data);
        setQData(data);
        setIsLoading(false)
    }

    // 3.
    useEffect(() => {
        getData();
    }, [])

    const nextQuote = () => {
        let newIndex = index + 1;

        if (index < qdata.length-1) {
            setIndex(newIndex)
            console.log(qdata.length, newIndex);
        }
    }

    const previousQuote = () => {
        let newIndex = index - 1;
        // setIndex(index - 1)
    }

    // 2.
    return (
        <div>
            {
                isLoading ? (<span class="loader"></span>) : (
                    <>
                        <h2>Random Quotes</h2>
                        <p>{qdata[index].text}</p>
                        <p>--  {qdata[index].author}</p>

                        <button onClick={previousQuote}>Previous Quote</button>
                        <button onClick={nextQuote}>Next Quote</button>
                    </>)
            }
        </div>
    );
}

export default Quotes;