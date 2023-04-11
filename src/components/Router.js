import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterLayout from './RouterLayout.js';
import HomePage from './HomePage.js';
import Catalog from './Catalog.js';
import Favorites from './Favorites.js';
import Basket from './Basket.js';
import Seen from './Seen.js';
import Bonuses from './Bonuses.js';
import ProductPage from './ProductPage.js';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RouterLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='catalog' element={<Catalog />} />
                        <Route path='favorites' element={<Favorites />} />
                        <Route path='basket' element={<Basket />} />
                        <Route path='seen' element={<Seen />} />
                        <Route path='bonuses' element={<Bonuses />} />
                        <Route path='product-page/:product_id' element={<ProductPage />}>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router