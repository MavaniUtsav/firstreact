import React, { useEffect, useState } from 'react';
import companyLogo from '../logo.png';

function Product(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const [input, setInput] = useState("")
    const [secondData, setSecondData] = useState([]);
    // let secondData = []

    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();

        console.log(data);
        setProductData(data);
        setIsLoading(false);

    }

    const fetchData = async (value) => {
        let secondD = productData.filter((product) => {
            return (
                value && product && product.category && product.title.toLowerCase().includes(value)
            )
        })
        
        setProductData(secondD)
    }

    const handleInput = (value) => {
        setInput(value);
        fetchData(value)
    }

    useEffect(() => {
        getData();

        return () => {
            console.log("componentWillUnmount");
        }

    }, [isLoading])

    return (
        <>
            {isLoading ? (<span class="loader"></span>) : < div id='main'>
                <div id='navbar'>
                    <form action='#' id='base'>
                        <img src={companyLogo} alt="" id='logo' />
                        <input type='text' id='searchbar' placeholder='Type to search...' value={input} onChange={(e) => handleInput(e.target.value)}></input>
                        {/* <button id='search' type='submit'>Search</button> */}
                    </form>
                </div>
                <div id='products'>
                    {productData.map((value, index) => {
                        return (
                            <div class="product-card">
                                <div class="badge">Hot</div>
                                <div class="product-tumb">
                                    <img src={value.image} alt="" />
                                </div>
                                <div class="product-details">
                                    <span class="product-catagory">{value.category}</span>
                                    <h4><a href="">{value.title}</a></h4>
                                    <div class="product-bottom-details">
                                        <div class="product-price"><small>$120.00</small>${value.price}</div>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div >
            }
        </>

    );
}

export default Product;