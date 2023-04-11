import React from 'react';

class WhyAreWe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='why-are-we'>
                <h2>Почему выбирают нас?</h2>
                <div className='text'>
                    <p>Скидки постоянным клиентам от 5%</p>
                    <p>Предлагаем самые выгодные цены</p>
                    <p>Наши покупатели всегда остаются довольны</p>
                    <p>Ширикий ассортимент товаров для всей семьи</p>
                </div>
                <div className='text'>
                    <p>Возможность доставки в любой город Беларуси </p>
                    <p>Пункты выдачи заказов рядом с домом</p>
                </div>
                <div className='ballOne'></div>
                <div className='ballTwo'></div>
                <div className='ballThree'></div>
                <div className='ballFour'></div>
                <div className='scrollBtn'></div>
            </div>
        )
    }
}

export default WhyAreWe