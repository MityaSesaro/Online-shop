import React from 'react';
import JeansOne from './png/JeansOne.jpg';
import JeansTwo from './png/JeansTwo.jpg';

import { Link } from 'react-router-dom';

import WhyAreWe from './HomePageComp/WhyAreWe';
import TimeToBuy from './HomePageComp/TimeToBuy';
import Feedback from './HomePageComp/Feedback';
import FAQ from './HomePageComp/FAQ';
import Cooperation from './HomePageComp/Cooperation';
import Invitation from './HomePageComp/Invitation';
import Footer from './HomePageComp/Footer';

import Buttons from './Buttons';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    CatalogLink = () => {
        localStorage.setItem("Search", "Каталог");
    }

    render() {
        return (
            <div>
                <div className='home-page'>
                    <div className='circleAb'></div>
                    <div className='fill-circle'></div>
                    <div className='ellipse'></div>
                    <div className='ellipse2'></div>
                    <div className='home-page-content'>
                        <div className='home-page-left'>
                            <img src={JeansTwo} />
                            <div>
                                <h1>Добро пожаловать в <span>Cokteil</span></h1>
                            </div>
                            <p>Экономим Ваше время!<br />
                                Предлагаем лучшие цены!<br />
                                Доставляем в кратчайшие сроки!
                            </p>
                        </div>
                        <div className='home-page-right'>
                            <img src={JeansOne} />
                        </div>
                    </div>
                    <Link to='/catalog' onClick={this.CatalogLink}>
                        <div className='btns'>
                            <div className='catalog-btn'>
                                <p>Каталог</p>
                                <div className='arrow'></div>
                            </div>
                        </div>
                    </Link>
                    <WhyAreWe />
                    <TimeToBuy />
                    <Feedback />
                    <FAQ />
                    <Cooperation />
                    {/* <Buttons /> */}
                </div>
                <Invitation />
                <Footer />
            </div>
        )
    }
}

export default HomePage