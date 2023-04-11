import React from 'react';
import axios from 'axios';

import ReviewCards from '../HomePageComp/ReviewCards';


class ProductPageFeedback extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfReviews: [0, 1]
        }
    }

    render() {
        return (
            <div className='product-feedbak'>
                <h2>Отзывы наших покупателей</h2>
                <div className='feedback-middle'>
                    {this.state.arrayOfReviews.map((e) => (<ReviewCards key={e} />))}
                    <div className='feedback-btn'>
                        <div className='btns'>
                            <div className='circle-arrow'>
                                <div className='arrow'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='add-feedback-btn'>
                    <p>Добавить отзыв</p>
                </div>
            </div>
        )
    }
}

export default ProductPageFeedback