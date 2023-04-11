import React from 'react';
import axios from 'axios';

import ProductCards from './HomePageComp/ProductCards';

class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfProducts: [],
            loadedArray: [],
            page: 2,
            btnVisible: 'visible'
        }
    }

    componentDidMount = async () => {
        this.setState(await this.getData());
    }

    getData = async () => {
        const apiUrl = (
            (localStorage.getItem("Search") == "Каталог")
                ?
                'http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts'
                :
                `http://cepbep.ddns.net:2500/api/shopDB/products/searchProducts/:${localStorage.getItem("Search")}`
        )

        const response = await axios.get(apiUrl)

        return (localStorage.getItem("Search") == "Каталог") ?
            {
                arrayOfProducts: response.data.payload,
                loadedArray: response.data.payload.slice(0, 6)
            }
            :
            {
                arrayOfProducts: response.data,
                loadedArray: response.data.slice(0, 6)
            }

    }

    nextPage = () => {
        this.setState({
            loadedArray: this.state.arrayOfProducts.slice(0, this.state.page * 6),
            page: this.state.page + 1
        })

        if (this.state.loadedArray.length >= this.state.arrayOfProducts.length - 6) {
            this.setState({
                btnVisible: 'hidden'
            })
        }

        console.log(this.state.arrayOfProducts);
        console.log(localStorage.getItem("Search") == "Каталог");
    }


    render() {
        const styleBtn = { visibility: this.state.btnVisible }
        return (
            <div className='catalog-page'>
                <div className='catalog-navigation'>
                    <p className='p-nav'>Главная/ Женщинам / {localStorage.getItem('Search')}</p>
                </div>
                <h2>{localStorage.getItem('Search')}</h2>
                <div className='catalog-sort'>
                    <h4>Сортировать по:</h4>
                    <p>Популярности</p>
                    <p>Рейтингу</p>
                    <p>Цене</p>
                    <p>Скидке</p>
                    <p>Обновлению</p>
                </div>
                <div className='main-catalog-page'>
                    <div className='main-sort'>

                    </div>
                    <div className='catalog-main-content'>
                        {this.state.loadedArray.map((obj) => (<ProductCards key={obj.id} data={obj} />))}
                    </div>

                </div>
                <div style={styleBtn} className='catalog-btn-add'>
                    <div className='btns' onClick={this.nextPage}>
                        <div className='add-btn'>
                            <p>Ещё</p>
                            <div className='arrow'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog