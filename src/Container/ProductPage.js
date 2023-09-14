import React, { useEffect, useState } from 'react';
import companyLogo from '../logo.png';

function Product(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [input, setInput] = useState("");

    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
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
                product.description.toLowerCase().includes(value.toLowerCase()) || product.price.toString().includes(value.toString()) || product.category.toLowerCase().includes(value.toLowerCase()) || product.title.toLowerCase().includes(value.toLowerCase())
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
                        <img src={companyLogo} alt="" id='logo' />
                        <input type='text' id='searchbar' placeholder='Type to search...' onChange={(e) => handleInput(e.target.value)}></input>
                    </form>
                </div>
                <div id='products'>
                    {finalData.map((value, index) => {
                        return (
                            <div class="product-card">
                                <div class="badge">Hot</div>
                                <div class="product-tumb">
                                    <img src={value.image} alt="" />
                                </div>
                                <div class="product-details">
                                    <span class="product-catagory">{value.category}</span>
                                    <h4><a href="">{value.title}</a></h4>
                                    {/* <p>{value.description}</p> */}
                                    <div class="product-bottom-details">
                                        <div class="product-price"><small>$120.00</small>${value.price}</div>
                                    </div>
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