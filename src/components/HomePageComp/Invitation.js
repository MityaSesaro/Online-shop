import React from 'react';

class Invitation extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='invitation-block'>
                <div className='letter'>
                    <h2>Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</h2>
                    <input placeholder='Ваше имя'></input>
                    <input placeholder='Номер телефона'></input>
                    <input placeholder='Электронная почта'></input>
                    <div className='radio'>
                        <input type='radio' id='label' />
                        <label for='label'>Даю согласие на обработку персональных данных</label>
                    </div>
                    <div className='btns-position'>
                        <div className='btns'>
                            <div className='send-btn'>
                                <p>Отправить</p>
                                <div className='arrow'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invitation