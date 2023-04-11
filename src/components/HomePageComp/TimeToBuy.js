import React from 'react';
import axios from 'axios';
import ProductCards from './ProductCards';

class TimeToBuy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfProducts: []
        }
    }

    componentDidMount = async () => {
        this.setState({ arrayOfProducts: await this.getData() })
        console.log(this.state.arrayOfProducts)
    }

    getData = async () => {
        const apiUrl = `http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts`
        const response = await axios.get(apiUrl)
        return response.data.payload
    }

    render() {
        return (
            <div className='time-to-buy'>
                <h2>Успей купить!</h2>
                <h3>Акции</h3>
                <div className='carousel-products'>
                    {this.state.arrayOfProducts.map((obj) => (<ProductCards key={obj._id} data={obj} />))}
                </div>
            </div>
        )
    }
}

export default TimeToBuy