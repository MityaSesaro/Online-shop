import React from 'react';
import ChatPNG from './png/Chat.png';
import XPNG from './png/X.png';

class Buttons extends React.Component {
    render() {
        return (
            <div className='btns'>
                <div className='catalog-btn'>
                    <p>Каталог</p>
                    <div className='arrow'></div>
                </div>
                <br />
                <div className='send-btn'>
                    <p>Отправить</p>
                    <div className='arrow'></div>
                </div>
                <br />
                <div className='more-btn'>
                    <p>Подробнее</p>
                    <div className='arrow'></div>
                </div>
                <br />
                <div className='chat-btn'>
                    <img src={ChatPNG}></img>
                </div>
                <br />
                <div className='x-btn'>
                    <img src={XPNG}></img>
                </div>
                <div className='circle-arrow'>
                    <div className='arrow'></div>
                </div>
            </div>
        )
    }
}

export default Buttons