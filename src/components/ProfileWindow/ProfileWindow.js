import React from 'react';
import iconBasket from '../png/iconBasket.png';
import iconEye from '../png/iconEye.png';
import iconHeart from '../png/iconHeart.png';
import Login from '../PopUps/Login'

import action_3 from '../../store/actions/action_3';
import store from '../../store/store.js';


class ProfileWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibilityLog: 'hidden',
        }
    }

    Login = () => {
        this.setState({
            visibilityLog: 'visible'
        })
    }

    componentDidMount() {
        store.subscribe(() => {
            const data = store.getState();
            if (data.type == action_3) {

                (data.value == 'hide') ? this.setState({ visibilityLog: 'hidden' }) : this.setState({ visibilityLog: 'visible' })
            }
        })
    }

    render() {
        const styleLog = { visibility: this.state.visibilityLog }

        return (
            <div>
                <div className='top'>
                    <div className='circle'></div>
                    <div className='login-button' onClick={this.Login}>
                        <p>Войти</p>
                    </div>
                    <div className='profile-basket'>
                        <img className='imgBasket' src={iconBasket} />
                        <p>Корзина</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='bottom'>
                    <div className='favorites'>
                        <img className='imgHeart' src={iconHeart} />
                        <p>Избранное</p>
                    </div>
                    <div className='seen'>
                        <img className='imgEye' src={iconEye} />
                        <p>Просмотренные</p>
                    </div>
                </div>
                <div style={styleLog}>
                    <Login />
                </div>

            </div>
        )
    }
}

export default ProfileWindow