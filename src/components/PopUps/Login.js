import React from 'react';
import axios from 'axios';

import XPNG from '../png/X.png';
import store from '../../store/store.js';
import FormLoginWindowActionCreator from '../../store/actionCreators/FormLoginWindowActionCreator';
import LoginWindowActionCreator from '../../store/actionCreators/LoginWindowActionCreator';
import Registration from '../PopUps/Registration';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibilityReg: 'hidden',
            login: '',
            pass: ''
        }
    }

    Hide = () => {
        store.dispatch(FormLoginWindowActionCreator('hide'));
        store.dispatch(LoginWindowActionCreator('hide'));
    }

    regButton = () => {
        this.setState({
            visibilityReg: 'visible',
        })
        store.dispatch(FormLoginWindowActionCreator('hide'));
        store.dispatch(LoginWindowActionCreator('hide'));

        console.log(this.state.login);
    }

    Login = (event) => {
        this.setState({
            login: event.target.value
        })
    }

    Password = (event) => {
        this.setState({
            pass: event.target.value
        })
    }

    EnterToAcc = async () => {
        const apiUrl = 'http://cepbep.ddns.net:2500/api/hotelDB/users/login'
        try {
            const response = await axios.post(apiUrl, {
                "login": this.state.login,
                "password": this.state.pass
            }).catch(function (error) {
                alert(error);
            });

            localStorage.setItem("Id", response.data[0]._id);

            window.location.reload(false)
        }
        catch (err) {
            alert('Введены неверные логин или пароль')
        }
    }


    render() {
        const styleReg = { visibility: this.state.visibilityReg }
        return (
            <div className='back-popup'>
                <div className='login-popup'>
                    <div className='login-btn'>
                        <div className='btns' onClick={this.Hide}>
                            <div className='x-btn'>
                                <img src={XPNG}></img>
                            </div>
                        </div>
                    </div>
                    <h2>Вход в личный кабинет</h2>
                    <input placeholder='Логин' type='text' onChange={this.Login} />
                    <input placeholder='Пароль' type='password' onChange={this.Password} />
                    <a>Не помню пароль</a>
                    <div className='two-buttons'>
                        <div className='login-button' onClick={this.EnterToAcc}>
                            <p>Войти в кабинет</p>
                        </div>
                        <div className='reg-button' onClick={this.regButton}>
                            <p>Регистрация</p>
                        </div>
                    </div>
                    <div className='popup-circle'></div>
                </div>
                <div style={styleReg}>
                    <Registration />
                </div>
            </div >
        )
    }
}

export default Login