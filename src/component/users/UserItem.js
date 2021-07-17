import React, { Component } from 'react'
import axios from 'axios';
import User from './User';
export class UserItem extends Component {

    state = {
        user:{}
    }

    componentWillMount() {
        const login = this.props.match.params.login;
        console.log(this.props);
        axios.get(`https://api.github.com/users/${login}`)
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }


    render() {
        return (
            <div>
                <User user={this.state.user}/>
            </div>
        )
    }
}

export default UserItem
