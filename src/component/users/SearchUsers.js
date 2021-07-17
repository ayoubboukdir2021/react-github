import React, { Component } from 'react'

export class SearchUsers extends Component {

    


    submitHundlar = (event) => {
        event.preventDefault();
        this.props.getUserSerach(event.target.elements[0].value);
    }
    render() {
        return (
                <form onSubmit={this.submitHundlar}>
                    <div className="form-group">
                        <input placeholder="search users..." id="search" type="text" className="form-control" />
                    </div>

                    <button className="btn btn-danger btn-block">Search</button>
                </form>
        )
    }
}

export default SearchUsers
