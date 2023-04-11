import React from 'react';
import iconLupa from './png/iconLupa.png';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    searchText = (event) => {
        this.setState({ value: event.target.value });
    }

    searchEnter = () => {
        localStorage.setItem('Search', this.state.value);
    }

    render() {
        return (
            <div className='search-panel'>
                <Link to='/catalog' onClick={this.searchEnter}>
                    <img src={iconLupa} />
                </Link>
                <input placeholder='Поиск' onChange={this.searchText} value={this.state.value} />
            </div >
        )
    }
}

export default Search