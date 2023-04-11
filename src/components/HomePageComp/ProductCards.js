import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from '../../store/store';
import ProductInfoAction from '../../store/actionCreators/ProductInfoAction';

import iconHeart from '../png/iconHeart.png';
import iconBasket from '../png/iconBasket.png';

class ProductCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amountStars: [1, 2, 3, 4, 5]
        }
    }

    Product_Id = () => {
        localStorage.setItem("Product_Id", this.props.data._id);

        store.dispatch(ProductInfoAction())

        this.addToSeen()
    }

    addToFavorites = () => {
        let a = this.props.data._id;
        let str = localStorage.getItem('Favorites') ? localStorage.getItem('Favorites') : '[]';
        let arr = JSON.parse(str);

        if (arr.includes(a) == true) {
            let index = arr.indexOf(a);
            arr.splice(index, 1);
        }
        else {
            arr.push(a)
        }
        localStorage.setItem("Favorites", JSON.stringify(arr));
    }

    addToSeen = () => {
        let a = this.props.data._id;
        let str = localStorage.getItem('Seen') ? localStorage.getItem('Seen') : '[]';
        let arr = JSON.parse(str);

        if (arr.includes(a) == true) {
            let index = arr.indexOf(a);
            arr.splice(index, 1);
        }
        else {
            arr.push(a)
        }
        localStorage.setItem("Seen", JSON.stringify(arr));
    }

    render() {
        return (
            <div className='product-cards'>
                <img src={this.props.data.photosURL[0]} />
                <p className='price'>{this.props.data.price} р</p>
                <div className='middle'>
                    <p>{this.props.data.name}</p>
                    <img className='heart' src={iconHeart} onClick={this.addToFavorites} />
                    <Link to={`/product-page/${this.props.data._id}`} onClick={this.Product_Id}>
                        <img className='basket' src={iconBasket} />
                    </Link>
                </div>
                <div className='bottom'>
                    <div className='btns'>
                        <Link to={`/product-page/${this.props.data._id}`} onClick={this.Product_Id}>
                            <div className='more-btn'>
                                <p>Подробнее</p>
                                <div className='arrow'></div>
                            </div>
                        </Link >
                    </div>
                    <div className='stars'>
                        {this.state.amountStars.map((e) => <div className='star' key={e}></div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCards