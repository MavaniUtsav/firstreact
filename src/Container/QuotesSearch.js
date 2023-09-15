import React, { useEffect, useState } from 'react';

function Product(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [input, setInput] = useState("");

    const getData = async () => {
        const response = await fetch('https://type.fit/api/quotes')
        const data = await response.json();

        console.log(data);
        setProductData(data);
        setTimeout(() => {
            setIsLoading(false);
        }, 500)

    }

    const handleInput = (value) => {
        setInput(value);
        // fetchData(value)
        let secondD = productData.filter((product) => {
            return (
                product.text.toLowerCase().includes(value.toLowerCase()) || product.author.toLowerCase().includes(value.toLowerCase())
            )
        })

        setFilterData(secondD);
    }

    useEffect(() => {
        getData();

        return () => {
            console.log("componentWillUnmount");
        }

    }, [isLoading]);

    const finalData = filterData.length > 0 ? filterData : productData

    return (
        <>
            {isLoading ? (<span class="loader"></span>) : < div id='main'>
                <div id='navbar'>
                    <form action='#' id='base'>
                        <input type='text' id='searchbar' placeholder='Type to search...' onChange={(e) => handleInput(e.target.value)}></input>
                    </form>
                </div>
                <div id='products'>
                    {finalData.map((value, index) => {
                        return (
                            <div class="product-card">
                                <div class="product-details">
                                    <h4><a href="">{value.text}</a></h4>
                                    <span class="product-catagory">{value.author}</span>
                                </div>
                            </div>)
                    })
                    }
                </div>
            </div >
            }
        </>

    );
}

export default Product;