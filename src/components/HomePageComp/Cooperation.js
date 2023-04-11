import React from 'react';
import iconSack from '../png/iconSack.png';
import iconPeople from '../png/iconPeople.png';
import iconList from '../png/iconList.png';
import iconGear from '../png/iconGear.png';

class Cooperation extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='cooperation-block'>
                <h2>Сотрудничество с нами</h2>
                <p>Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения. </p>
                <div className='options'>
                    <div>
                        <h3>Становитесь партнёром</h3>
                        <p>Регистрируйтесь и переходите в свой кабинет</p>
                    </div>
                    <div>
                        <h3>Рекламируйте товары</h3>
                        <p>Рекламируйте наши товары на форумах, сайтах, в социальных сетях</p>
                    </div>
                    <div>
                        <h3>Приводите покупателей</h3>
                        <p>Приводите покупателей на наш сайт по уникальной ссылке</p>
                    </div>
                    <div>
                        <h3>Получайте бонусы</h3>
                        <p>Копите бонусы от каждого оплаченного заказа</p>
                    </div>
                </div>
                <h3>Это выгодно. Какие преимущества?</h3>
                <div className='benefits'>
                    <div>
                        <img src={iconGear} />
                        <p>Автоматизация процессов</p>
                    </div>
                    <div>
                        <img src={iconList} />
                        <p>Пополнение ассортимента</p>
                    </div>
                    <div>
                        <img src={iconPeople} />
                        <p>Поддержка и обучение</p>
                    </div>
                    <div>
                        <img src={iconSack} />
                        <p>Бонусы за новых клиентов</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cooperation