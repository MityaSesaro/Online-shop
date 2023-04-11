import React from 'react';
import iconProfile from '../png/iconProfile.png';

class ReviewCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amountStars: [1, 2, 3, 4, 5]
        }
    }

    render() {
        return (
            <div className='review-cards'>
                <img src={iconProfile} />
                <div className='description'>
                    <div className='stars'>
                        {this.state.amountStars.map((e) => <div className='star' key={e}></div>)}
                    </div>
                    <p>Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.</p>
                    <div className='person'>
                        <p className='name'>Анна Котлова</p>
                        <p className='date'>23.05.2021</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewCards