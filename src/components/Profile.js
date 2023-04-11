import React from 'react';
import iconAvatar from './png/iconAvatar.png';
import ProfileWindow from './ProfileWindow/ProfileWindow';
import AutoProfileWindow from './ProfileWindow/AutoProfileWindow';
import store from '../store/store.js';

import action_1 from '../store/actions/action_1';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibilityPW: 'hidden',
            visibilityAPW: 'hidden',

            avatarState: false
        }
    };

    openWindow = () => {
        (localStorage.getItem("Id") == undefined || localStorage.getItem("Id") == '')
            ?
            (this.state.avatarState
                ?
                this.setState({ visibilityPW: 'hidden', avatarState: false })
                :
                this.setState({ visibilityPW: 'visible', avatarState: true })
            )
            :
            (this.state.avatarState
                ?
                this.setState({ visibilityAPW: 'hidden', avatarState: false })
                :
                this.setState({ visibilityAPW: 'visible', avatarState: true })
            )
    }

    componentDidMount() {
        store.subscribe(() => {
            const data = store.getState();
            if (data.type == action_1) {

                (data.value == 'hide') ? this.setState({ visibilityPW: 'hidden', visibilityAPW: 'hidden', avatarState: false }) : this.setState({ visibilityPW: 'visible', visibilityAPW: 'visible', avatarState: true })
            }
        })
    }

    render() {
        const stylePW = { visibility: this.state.visibilityPW }
        const styleAPW = { visibility: this.state.visibilityAPW }
        return (
            <div>
                <div className='profile-panel' onClick={this.openWindow}>
                    <img className='img' src={iconAvatar} />
                </div>
                <div className='profile-window' style={stylePW} >
                    <ProfileWindow />
                </div>
                <div className='profile-window' style={styleAPW} >
                    <AutoProfileWindow />
                </div>
            </div>
        )
    }
}

export default Profile