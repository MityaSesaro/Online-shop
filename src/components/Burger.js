import React from 'react';
import NeonLogo from './png/NeonLogo.png';
import { Link } from 'react-router-dom';
import store from '../store/store.js';
import BurgerWindowActionCreator from '../store/actionCreators/BurgerWindowActionCreator'
import action_2 from '../store/actions/action_2';

class Burger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibilityB: 'visible',
            visibilityO: 'hidden',
            visibilityOT: 'hidden',
            burgerState: true,
            OTstate: true
        }
    };

    componentDidMount() {
        store.subscribe(() => {


            const data = store.getState();

            if (data.type == action_2) {
                (data.value == 'hide')
                    ?
                    this.setState({
                        visibilityB: 'visible',
                        visibilityO: 'hidden',
                        visibilityOT: 'hidden',
                        burgerState: true,
                        OTstate: true,
                    })
                    :
                    this.setState({
                        visibilityB: 'hidden',
                        visibilityO: 'visible',
                        visibilityOT: 'visible',
                        burgerState: false,
                        OTstate: false,
                    })
            }
        })
    }

    openBurger = () => {
        this.state.burgerState
            ?
            this.setState({ visibilityB: 'hidden', visibilityO: 'visible', burgerState: false, visibilityOT: 'hidden', OTstate: true })
            :
            this.setState({ visibilityB: 'visible', visibilityO: 'hidden', burgerState: true, visibilityOT: 'hidden', OTstate: true })
    }

    OptionsTwo = () => {
        this.state.OTstate
            ?
            this.setState({ visibilityOT: 'visible', OTstate: false })
            :
            this.setState({ visibilityOT: 'hidden', OTstate: true })
    }

    HideBurger = (category) => {
        localStorage.setItem("Search", category);
        store.dispatch(BurgerWindowActionCreator('hide'));
        console.log(category);
    }

    render() {
        const styleB = { visibility: this.state.visibilityB }
        const styleO = { visibility: this.state.visibilityO }
        const styleOT = { visibility: this.state.visibilityOT }
        const styleWomen = {}
        return (
            <div className='burger' >
                <div className='burger-options' style={styleO}>
                    <img src={NeonLogo} onClick={this.openBurger} />
                    <li onClick={this.OptionsTwo} style={styleWomen}>Женщинам</li>
                    <li>Мужчинам (cкоро)</li>
                    <li>Детям (cкоро)</li>
                    <li>Обувь (cкоро)</li>
                    <li>Игрушки (cкоро)</li>
                    <li>Аксессуары (cкоро)</li>
                    <li>Большие размеры (cкоро)</li>
                    <li>Дополнительно (cкоро)</li>
                    <li>Акции (cкоро)</li>
                </div>
                <div className='burger-options-two' style={styleOT}>
                    <div />
                    <Link to='/catalog'>
                        <li onClick={() => this.HideBurger('Блузки и рубашки')} value='Блузки и рубашки'>Блузки и рубашки</li>
                    </Link>
                    <Link to='/catalog'>
                        <li onClick={() => this.HideBurger('Майки')}>Майки</li>
                    </Link>
                    <Link to='/catalog'>
                        <li onClick={() => this.HideBurger('Костюмы')}>Костюмы</li>
                    </Link>
                    <Link to='/catalog'>
                        <li onClick={() => this.HideBurger('Брюки')}>Брюки</li>
                    </Link>
                    <li>Джинсы (cкоро)</li>
                    <li>Юбки (cкоро)</li>
                    <li>Шорты (cкоро)</li>
                    <li>Свитшоты, худи (cкоро)</li>
                    <li>Пиджаки и жакеты (cкоро)</li>
                    <li>Платья и сарафаны (cкоро)</li>
                    <li>Верхняя одежда (cкоро)</li>
                </div>
                <div className='burger-menu' style={styleB} onClick={this.openBurger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Burger