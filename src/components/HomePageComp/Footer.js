import React from 'react';
import NeonLogo from '../png/NeonLogo.png';
import iconCall from '../png/iconCall.png';
import iconTelegram from '../png/iconTelegram.png';
import iconInstagram from '../png/iconInstagram.png';
import iconMail from '../png/iconMail.png';

class Footer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='footer-block'>
                <div className='information'>
                    <h2>Информация</h2>
                    <h3>Главная</h3>
                    <h3>Акции</h3>
                    <h3>Каталог</h3>
                    <h3>Возврат</h3>
                    <h3>Доставка</h3>
                    <h3>Партнёрам</h3>
                    <h3>Способы оплаты</h3>
                    <h3>Как сделать заказ?</h3>
                </div>
                <div className='cabinet'>
                    <h2>Мой кабинет</h2>
                    <h3>Мои заказы</h3>
                    <h3>Мои адреса</h3>
                    <h3>Мои скидки</h3>
                    <h3>Моя информация</h3>
                </div>
                <div className='contacts'>
                    <h2>Контактная информация</h2>
                    <p>ИП Вишневский Иван Сергеевич
                        государственная регистрация №690867884 от 31.07.2020.
                        <br />
                        Логойским горисполкомом
                        Защита прав потребителей +375259990755
                    </p>
                </div>
                <div className='social-media'>
                    <h2>Соц. сети</h2>
                    <div className='media-logo'>
                        <img src={iconTelegram} />
                        <img src={iconInstagram} />
                        <img src={iconMail} />
                        <img src={iconCall} />
                    </div>
                </div>
                <div className='logo'>
                    <img src={NeonLogo} />
                </div>
            </div>
        )
    }
}

export default Footer