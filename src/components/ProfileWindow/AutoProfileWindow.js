import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../store/store.js';
import axios from 'axios';


import iconBasket from '../png/iconBasket.png';
import iconEye from '../png/iconEye.png';
import iconHeart from '../png/iconHeart.png';
import iconBonus from '../png/iconBonus.png';
import iconExit from '../png/iconExit.png';
import iconStory from '../png/iconStory.png';
import iconAvatar from '../png/iconAvatar.png';
import LoginWindowActionCreator from '../../store/actionCreators/LoginWindowActionCreator.js';

class AutoProfileWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount = async () => {
        this.setState({ name: await this.getData() })
    }

    Exit = () => {
        localStorage.setItem("Id", '');
        store.dispatch(LoginWindowActionCreator('hide'))
    }

    Hide = () => {
        store.dispatch(LoginWindowActionCreator('hide'))
    }

    getData = async () => {
        const apiUrl = `http://cepbep.ddns.net:2500/api/hotelDB/users/${localStorage.getItem('Id')}`
        const response = await axios.get(apiUrl);
        return response.data.fullName
    }

    render() {
        return (
            <div>
                <div className='top'>
                    <div className='circle'></div>
                    <div className='login-name'>
                        <p>{this.state.name}</p>
                    </div>
                    <Link to='/basket'>
                        <div className='profile-basket' onClick={this.Hide}>
                            <img className='imgBasket' src={iconBasket} />
                            <p>Корзина</p>
                        </div>
                    </Link>
                </div>
                <div className='line'></div>
                <div className='bottom'>
                    <Link to='/favorites'>
                        <div className='favorites' onClick={this.Hide}>
                            <img className='imgHeart' src={iconHeart} />
                            <p>Избранное</p>
                        </div>
                    </Link >
                    <Link to='/seen'>
                        <div className='seen' onClick={this.Hide}>
                            <img className='imgEye' src={iconEye} />
                            <p>Просмотренные</p>
                        </div>
                    </Link>
                </div>
                <div className='line'></div>
                <div className='additionaly'>
                    <Link to='/bonuses'>
                        <div className='bonus' onClick={this.Hide}>
                            <img className='imgBonus' src={iconBonus} />
                            <p>Бонусы</p>
                        </div>
                    </Link>
                    <div className='privat' onClick={this.Hide}>
                        <img className='imgPrivat' src={iconAvatar} />
                        <p>Личные данные</p>
                    </div>
                    <div className='story' onClick={this.Hide}>
                        <img className='imgStory' src={iconStory} />
                        <p>История покупок</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='exit'>
                    <Link to='/'>
                        <div className='exit-button' onClick={this.Exit}>
                            <img className='imgExit' src={iconExit} />
                            <p>Выход</p>
                        </div>
                    </Link >
                </div>
            </div>
        )
    }
}

export default AutoProfileWindow