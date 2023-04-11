import React from 'react';
import axios from 'axios';
import ProductCards from '../HomePageComp/ProductCards';

class ProductPageMore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfProducts: [],
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
            <div className='product-page-more'>
                <h2>С этим товаром также покупают</h2>
                <div className='more-carousel'>
                    {this.state.arrayOfProducts.map((obj) => (<ProductCards key={obj._id} data={obj} />))}
                </div>
            </div>
        )
    }
}

export default ProductPageMore