import React from 'react';

class ProductPageHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='header' onClick={() => window.history.back()}>
                <div className='btns'>
                    <div className='back-btn'>
                        <div className='arrow'></div>
                    </div>
                </div>
                <p>Главная/ Женщинам /Блузки и рубашки </p>
            </div>
        )
    }
}

export default ProductPageHeader