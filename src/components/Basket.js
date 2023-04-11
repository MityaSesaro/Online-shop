import React from 'react';
import axios from 'axios';
import iconBasket from './png/iconBasket.png'

import BasketCard from './BasketCard';

class Basket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfProducts: [],
            loadedArray: [],
            sum: 0
        }
    }

    componentDidMount = async () => {
        this.setState(await this.getData())
    }

    getData = async () => {
        const apiUrl = `http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts`;
        const response = await axios.get(apiUrl);

        function contains(obj) {
            if (JSON.parse(localStorage.getItem("Basket")).includes(obj._id)) {
                return obj
            }
        }

        let result = response.data.payload.filter(contains);
        console.log('res', result);

        let summ = 0;
        result.map((obj) => summ += obj.price);

        return {
            arrayOfProducts: result,
            loadedArray: result.slice(0, 6),
            sum: summ
        }
    }

    GoBack = () => {
        window.history.back()
    }

    render() {
        return (
            <div className='basket-page'>
                <div className='header'>
                    <div className='btns' onClick={this.GoBack}>
                        <div className='back-btn'>
                            <div className='arrow'></div>
                        </div>
                    </div>
                    <h2>Корзина</h2>
                    <img src={iconBasket} />
                </div>
                <div className='basket-main'>
                    {this.state.loadedArray.map((obj) => (<BasketCard key={obj.id} data={obj} />))}
                </div>
                <div className='footer'>
                    <h3>Итого: </h3>
                    <p>{this.state.sum}</p>
                    <h4>Товары: {this.state.arrayOfProducts.length} шт</h4>
                </div>
                <div className='button-basket'>
                    <p>Заказать</p>
                </div>
            </div>
        )
    }
}

export default Basket