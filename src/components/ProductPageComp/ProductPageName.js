import React from 'react';
import axios from 'axios';


import iconHeart from '../png/iconHeart.png';
import iconBasket from '../png/iconBasket.png';

import store from '../../store/store';
import ProductInfo from '../../store/actions/ProductInfo';

class ProductPageName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfProducts: [],
            arrayOfStars: [0, 1, 2, 3, 4],
            photosUrl: undefined,
            product: {},
        }
    }

    GetCount() {
        this.setState({ photoCount: this.state.photoCount + 1 });
        return this.state.photoCount
    }

    fetchData = async () => {
        this.setState({ product: await this.getData() })
    }

    componentDidMount = async () => {
        console.log("Data:", this.props.productData);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        this.fetchData();

        store.subscribe(() => {
            const data = store.getState();
            console.log(data);
            if (data.type == ProductInfo) {
                this.fetchData();
            }
        })
    }

    componentDidUpdate = async () => {
        console.log('productUpd:', this.state.product);
        if (this.state.photosUrl == undefined && this.props.productData.photosURL != undefined) {
            let photosArray = [];
            for (let i = 0; i < this.props.productData.photosURL.length; i++) {
                photosArray.push({
                    id: i,
                    url: this.props.productData.photosURL[i]
                })
            }
            this.setState({ photosUrl: photosArray })
        }
    }

    getData = async () => {
        const apiUrl = `http://cepbep.ddns.net:2500/api/shopDB/products/getProductById/${localStorage.getItem('Product_Id')}`
        const response = await axios.get(apiUrl);
        console.log('response', response);
        return response.data[0]

    }

    addToCart = () => {
        let a = localStorage.getItem('Product_Id');
        let str = localStorage.getItem('Basket') ? localStorage.getItem('Basket') : '[]';
        let arr = JSON.parse(str);

        if (arr.includes(a) == true) {
            let index = arr.indexOf(a);
            arr.splice(index, 1);
        }
        else {
            arr.push(a)
        }
        localStorage.setItem("Basket", JSON.stringify(arr));
    }



    render() {
        console.log('product:', this.state.product);
        if (this.state.product && this.state.photosUrl) return (
            <div className='product-main'>
                <div className='product-name'>
                    <h2 onClick={this.Gettt}>Блузка женская</h2>
                    <p>Арт {localStorage.getItem('Product_Id')}</p>
                </div>
                <div className='product-description'>
                    <div className='product-photo'>
                        <div className='big'>
                            <img key={0} src={this.state.product.photosURL[0]} />
                        </div>
                        <div className='mini'>
                            {this.state.product.photosURL.map((obj) => <img key={obj} src={obj} />)}
                        </div>
                    </div>
                    <div className='product-choiсe'>
                        <h2>{this.state.product.price} б.р</h2>
                        <h3>Цвета</h3>
                        <div className='colors'>
                            {this.state.product.colors.map((c) => <div key={c} style={{ backgroundColor: c }} className='colors-circle'></div>)}
                        </div>
                        <h3>Размер</h3>
                        <div className='sizes'>
                            {this.state.product.sizes.map((c) => <div key={c} className='size-circle'><p>{c}</p></div>)}
                        </div>
                        <a>Таблица размеров</a>
                        <div className='button-cart'>
                            <div className='btns' onClick={this.addToCart}>
                                <div className='add-cart-btn'>
                                    <p>В корзину</p>
                                    <img src={iconBasket} />
                                </div>
                            </div>
                            <img className='heart' src={iconHeart} />
                        </div>
                        <div className='product-feedback'>
                            <div className='stars'>
                                {this.state.arrayOfStars.map((c) => <div key={c + 100} className='star'></div>)}
                            </div>
                            <a>Добавить отзыв</a>
                        </div>
                        <h3>Описание</h3>
                        <h4>{this.props.productData.description}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductPageName