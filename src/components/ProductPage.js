import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import ProductPageMore from './ProductPageComp/ProductPageMore';
import ProductPageHeader from './ProductPageComp/ProductPageHeader';
import ProductPageName from './ProductPageComp/ProductPageName';
import ProductPageFeedback from './ProductPageComp/ProductPageFeedback';
import { useParams } from 'react-router-dom';
import store from '../store/store';
import ProductInfo from '../store/actions/ProductInfo';



function ProductPage() {
    const [product, setProduct] = useState([])
    const [arrayOfStars, setArrayOfStars] = useState([0, 1, 2, 3, 4])
    const paramsData = useParams()

    useEffect(() => {
        async function fetchData() {
            setProduct(await getData())
        }
        fetchData();

        store.subscribe(() => {
            const data = store.getState();
            console.log(data);
            if (data.type == ProductInfo) {
                fetchData();
            }
        })
    }, [])


    const getData = async () => {
        const apiUrl = `http://cepbep.ddns.net:2500/api/shopDB/products/getProductById/${paramsData.product_id}`
        const response = await axios.get(apiUrl)
        return response.data
    }

    return (
        <div className='product-page'>
            <ProductPageHeader />
            <ProductPageName productData={product[0]} />
            <ProductPageFeedback />
            <ProductPageMore />
        </div >
    )
}

export default ProductPage