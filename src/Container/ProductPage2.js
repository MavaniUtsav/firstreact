import React, { useEffect, useState } from 'react';
import companyLogo from '../logo.png';

function ProductPage2(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [active, setActive] = useState('');
    // const [secondD, setSecondD] = useState([]);

    const getData = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();

        // console.log(data);
        setProductData(data.products);
        setTimeout(() => {
            setIsLoading(false);
        }, 500)
    }

    const handleSearch = (value) => {
        let secondD;

        secondD = productData.filter((product) => {
            return (
                product.description.toLowerCase().includes(value.toLowerCase()) || product.price.toString().includes(value.toString()) || product.category.toLowerCase().includes(value.toLowerCase()) || product.title.toLowerCase().includes(value.toLowerCase())
            )
        })

        if (value === 'lowtohigh') {
            secondD = [...productData].sort((a, b) => a.price - b.price);
        } else if (value === 'hightolow') {
            secondD = [...productData].sort((a, b) => b.price - a.price);
        } else if (value === 'atoz') {
            secondD = [...productData].sort((a, b) => a.title > b.title ? 1 : -1);
        } else if (value === 'ztoa') {
            secondD = [...productData].sort((a, b) => a.title > b.title ? -1 : 1);
        }

        setFilterData(secondD);
    }

    // const handleFilter = (value) => {
    //     let filter;
    //     if (value === 'lowtohigh') {
    //         filter = [...productData].sort((a, b) => a.price - b.price);
    //     } else if (value === 'hightolow') {
    //         filter = [...productData].sort((a, b) => b.price - a.price);
    //     } else if (value === 'atoz') {
    //         filter = [...productData].sort((a, b) => a.title > b.title ? 1 : -1);
    //     } else if (value === 'ztoa') {
    //         filter = [...productData].sort((a, b) => a.title > b.title ? -1 : 1);
    //     }

    //     setFilterData(filter);
    // }

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
                        <input type='text' id='searchbar' placeholder='Type to search...' onChange={(e) => handleSearch(e.target.value)}></input>
                    </form>
                </div>
                <div id='category'>
                    <span onClick={() => handleSearch('')}>All</span>
                    <span onClick={() => handleSearch('smartphones')} id='smartphones' className={active == 'smartphones' ? 'active' : undefined}>SMARTPHONES</span>
                    <span onClick={() => handleSearch('laptops')} id='laptops' className={active == 'laptops' ? 'active' : undefined}>LAPTOPS</span>
                    <span onClick={() => handleSearch('fragrances')} id='fragrances'>FRAGRANCES</span>
                    <span onClick={() => handleSearch('skincare')} id='skincare'>SKINCARE</span>
                    <span onClick={() => handleSearch('groceries')} id='groceries'>GROCERIES</span>
                    <span onClick={() => handleSearch('home-decoration')} id='home-decoration'>HOME-DECORATION</span>
                </div>
                <div id='filter'>
                    <select name="dropdown" id='dropdown' onChange={(e) => handleSearch(e.target.value)}>
                        <option value="">-- Select --</option>
                        <option value="atoz">A to Z</option>
                        <option value="ztoa">Z to A</option>
                        <option value="hightolow">Price(High to Low)</option>
                        <option value="lowtohigh">Price(Low to High)</option>
                    </select>
                </div>
                <div id='products'>
                    {finalData.map((value, index) => {
                        return (
                            <div class="product-card">
                                <div class="badge">Hot</div>
                                <div class="product-tumb">
                                    <img src={value.images[0]} alt="" />
                                </div>
                                <div class="product-details">
                                    <span class="product-catagory">{value.category}</span>
                                    <h4><a href="">{value.title}</a></h4>
                                    <p>{value.description}</p>
                                    <div class="product-bottom-details">
                                        <div class="product-price"><small>$999.00</small>${value.price}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div >
            }
        </>

    );
}

export default ProductPage2;

// Keep a new state such as "selectedButton" then set this state with clicked button's id. Now, Look for if a button's "id" is equal to the "selectedButton" state. If yes, highlight it with a conditional class.
// https://stackoverflow.com/questions/54310548/how-to-highlight-selected-button-in-react#:~:text=Keep%20a%20new%20state%20such,it%20with%20a%20conditional%20class.
