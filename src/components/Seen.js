import React from 'react';
import LeftProfileWindow from './ProfileWindow/LeftProfileWindow';

import axios from 'axios';
import ProductCards from './HomePageComp/ProductCards';

class Seen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfProducts: [],
            loadedArray: [],
            page: 2,
            btnVisible: 'visible'
        }
    }

    componentDidMount = async () => {
        this.setState(await this.getData())
    }

    getData = async () => {
        const apiUrl = `http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts`;
        const response = await axios.get(apiUrl);

        function contains(obj) {
            if (JSON.parse(localStorage.getItem("Seen")).includes(obj._id)) {
                return obj
            }
        }

        let result = response.data.payload.filter(contains);

        return {
            arrayOfProducts: result,
            loadedArray: result.slice(0, 6)
        }
    }

    nextPage = () => {
        this.setState({
            loadedArray: this.state.arrayOfProducts.slice(0, this.state.page * 6),
            page: this.state.page + 1
        })

        if (this.state.loadedArray.length >= this.state.arrayOfProducts.length - 6) {
            this.setState({
                btnVisible: 'hidden'
            })
        }
    }

    render() {
        const styleBtn = { visibility: this.state.btnVisible }
        return (
            <div className='favorites-seen-page'>
                <h1>Просмотренные товары</h1>
                <div className='favorites-seen-base'>
                    <LeftProfileWindow />
                    <div className='favorites-seen-content'>
                        {this.state.loadedArray.map((obj) => (<ProductCards key={obj.id} data={obj} />))}
                    </div>
                </div>
                <div style={styleBtn} className='favorites-seen-btn-add'>
                    <div className='btns' onClick={this.nextPage}>
                        <div className='add-btn'>
                            <p>Ещё</p>
                            <div className='arrow'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Seen