import React from 'react';
import { Outlet, Link } from 'react-router-dom';


import iconBasket from '../png/iconBasket.png';
import iconEye from '../png/iconEye.png';
import iconHeart from '../png/iconHeart.png';
import iconBonus from '../png/iconBonus.png';
import iconExit from '../png/iconExit.png';
import iconStory from '../png/iconStory.png';
import iconAvatar from '../png/iconAvatar.png';

class AutoProfileWindow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='left-profile-window'>
                <div className='top'>
                    <div className='profile-basket'>
                        <img className='imgBasket' src={iconBasket} />
                        <p>Корзина</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='bottom'>
                    <Link to='/favorites'>
                        <div className='favorites'>
                            <img className='imgHeart' src={iconHeart} />
                            <p>Избранное</p>
                        </div>
                    </Link >
                    <Link to='/seen'>
                        <div className='seen'>
                            <img className='imgEye' src={iconEye} />
                            <p>Просмотренные</p>
                        </div>
                    </Link >
                </div>
                <div className='line'></div>
                <div className='additionaly'>
                    <Link to='/bonuses'>
                        <div className='bonus'>
                            <img className='imgBonus' src={iconBonus} />
                            <p>Бонусы</p>
                        </div>
                    </Link >
                    <div className='privat'>
                        <img className='imgPrivat' src={iconAvatar} />
                        <p>Личные данные</p>
                    </div>
                    <div className='story'>
                        <img className='imgStory' src={iconStory} />
                        <p>История покупок</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='exit'>
                    <div className='exit-button'>
                        <img className='imgExit' src={iconExit} />
                        <p>Выход</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoProfileWindow