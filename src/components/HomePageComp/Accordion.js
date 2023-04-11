import React from 'react';

class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false
        }
    }


    render() {
        return (
            <div className="accordion-item">
                <div className='content'>
                    <div className="accordion-title" onClick={() => this.setState({ isActive: !this.state.isActive })}>
                        <div className='title'>{this.props.title}</div>
                        <div className='symbol'>{this.state.isActive ? '-' : '+'}</div>
                    </div>
                    {this.state.isActive && <div className="accordion-content">{this.props.content}</div>}
                </div>
                {this.state.isActive ? <div></div> : <div className='line'></div>}
            </div>
        )
    }
}

export default Accordion