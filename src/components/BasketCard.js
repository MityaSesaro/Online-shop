import React from 'react';
import axios from 'axios';

import iconHeart from './png/iconHeart.png';
import iconGarbage from './png/iconGarbage.png';

class BasketCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }



    addToFav = () => {
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

    delFromCart = () => {
        let str = localStorage.getItem('Basket');
        let arr = JSON.parse(str);

        arr.splice(0, 1)
        localStorage.setItem("Basket", JSON.stringify(arr));
    }

    render() {
        return (
            <div className='basket-one-cart'>
                <div className='image'>
                    <img src={this.props.data.photosURL[0]} />
                </div>
                <div className='about'>
                    <h3>{this.props.data.name}</h3>
                    <span>
                        <p className='color'>Цвет: <div className='color-circle' style={{ backgroundColor: this.props.data.colors[0] }}></div></p>
                        <p>Размер: {this.props.data.sizes[0]}</p>
                    </span>
                    <div className='count'>
                        <div className='pm' onClick={() => (this.state.count > 0) ? this.setState({ count: this.state.count - 1 }) : ""}>—</div>
                        <div className='digit'>{this.state.count}</div>
                        <div className='pm' onClick={() => this.setState({ count: this.state.count + 1 })}>+</div>
                    </div>
                    <div className='addTo'>
                        <div className='addToFavorite' onClick={this.addToFav}>
                            <img src={iconHeart} />
                            <p>В избранное</p>
                        </div>
                        <div className='deleteFromCart' onClick={this.delFromCart}>
                            <img src={iconGarbage} />
                            <p>Удалить</p>
                        </div>
                    </div>
                </div>
                <div className='price'>
                    <h3>Стоимость</h3>
                    <p>{this.state.count * this.props.data.price}</p>
                </div>
            </div>
        )
    }

}

export default BasketCard