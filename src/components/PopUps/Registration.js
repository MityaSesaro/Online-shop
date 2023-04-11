import React from 'react';
import axios from 'axios';

import XPNG from '../png/X.png';
import store from '../../store/store.js';
import FormLoginWindowActionCreator from '../../store/actionCreators/FormLoginWindowActionCreator';
import LoginWindowActionCreator from '../../store/actionCreators/LoginWindowActionCreator';


class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            tryPassword: '',
            number: '',
            email: '',
            fullName: '',
        }
    }

    RegToAcc = async () => {
        const apiUrl = 'http://cepbep.ddns.net:2500/api/hotelDB/users/register'
        try {
            const response = await axios.post(apiUrl, {
                "login": this.state.login,
                "password": this.state.password,
                "tryPassword": this.state.tryPassword,
                "email": this.state.email,
                "phoneHumber": this.state.number,
                "fullName": this.state.fullName
            }).catch(function (error) {
                alert(error);
            });

            window.location.reload(false)
        }
        catch (err) {
            alert('Не все поля заполнены')
        }
    }

    login = (event) => {
        this.setState({
            login: event.target.value
        })
    }

    pass = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    tryPass = (event) => {
        this.setState({
            tryPassword: event.target.value
        })
    }

    number = (event) => {
        this.setState({
            number: event.target.value
        })
    }

    email = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    fullName = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }

    render() {
        return (
            <div className='back-popup'>
                <div className='reg-popup'>
                    <div className='reg-btn'>
                        <div className='btns' onClick={() => window.location.reload(false)}>
                            <div className='x-btn'>
                                <img src={XPNG}></img>
                            </div>
                        </div>
                    </div>
                    <h2>Регистрация</h2>
                    <div className='info'>
                        <div className='left'>
                            <input placeholder='Введите логин' type='text' onChange={this.login} />
                            <input placeholder='Придумайте пароль' type='password' onChange={this.pass} />
                            <input placeholder='Повторите пароль' type='password' onChange={this.tryPass} />
                        </div>
                        <div className='right'>
                            <input placeholder='Контактный телефон' type='text' onChange={this.number} />
                            <input placeholder='Почта' type='text' onChange={this.email} />
                            <input placeholder='Полное имя' type='text' onChange={this.fullName} />
                        </div>
                    </div>
                    <div className='one-button'>
                        <div className='reg-button' onClick={this.RegToAcc}>
                            <p>Регистрация</p>
                        </div>
                    </div>
                    <div className='popup-circle'></div>
                </div>
            </div >
        )
    }
}

export default Registration