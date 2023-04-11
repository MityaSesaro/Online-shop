import React from 'react';
import Accordion from './Accordion';


class FAQ extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const accordionData = [
            {
                title: 'Как сделать заказ?',
                content: `Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. `
            },
            {
                title: 'Способы оплаты',
                content: `Тут будут способы оплаты`
            },
            {
                title: 'Доставка',
                content: `Тут будет что-то про доставку`
            },
            {
                title: 'Сроки доставки',
                content: `Что-то про сроки доставки`
            },
            {
                title: 'Как сделать обмен?',
                content: `Что-то про то как сделать обмен`
            },
            {
                title: 'Как сделать возврат?',
                content: `Что-то про возврат`
            },
            {
                title: 'Куда и когда вернутся деньги за возвращённый товар?',
                content: `Что-то про деньги и куда и когда их вернут`
            }
        ];
        return (
            <div className='FAQ-block'>
                <h2>Часто задаваемые вопросы</h2>
                <h3>FAQ</h3>
                <div className='FAQ-main'>
                    {accordionData.map(({ title, content }) => (<Accordion title={title} content={content} />))}
                </div>
            </div>
        )
    }
}

export default FAQ