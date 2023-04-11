import React from 'react';
import LeftProfileWindow from './ProfileWindow/LeftProfileWindow';

class Bonuses extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='favorites-seen-page'>
                <h1>Бонусы</h1>
                <div className='favorites-seen-base'>
                    <LeftProfileWindow />
                    <div className='bonuses-content'>
                        <div className='point'>
                            <h3>0.00</h3>
                            <p>Бонусных баллов</p>
                        </div>
                        <div className='percent'>
                            <h3>3%</h3>
                            <p>Бонусов от суммы покупок</p>
                        </div>
                        <div className='sum'>
                            <h3>325, 00 р.</h3>
                            <p>Сумма покупок</p>
                        </div>
                        <div className='more'>
                            <h3> </h3>
                            <p>Как получить больше? →</p>
                        </div>
                        <div className='ellipse'></div>
                        <div className='fill-ellipse'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bonuses