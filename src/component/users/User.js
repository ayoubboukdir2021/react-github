import React from 'react'
import { Link } from 'react-router-dom';

function User(props) {

    let {avatar_url , login , html_url , repos_url} = props.user;
    return (
                <div className="card">
                    <img className="card-img-top" src={avatar_url} alt="avatar" />
                    <div className="card-body">
                        <h4 className="card-title">{login}</h4>
                        <p className="card-text">
                            <Link to={'/users/'+login} className="btn btn-success">Show more</Link>
                            <Link to={repos_url} className="btn btn-warning">Repositories</Link>
                        </p>
                    </div>
                </div>
    )
}

export default User
