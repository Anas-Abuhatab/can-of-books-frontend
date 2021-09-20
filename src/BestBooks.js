import React, { Component } from 'react';

class BestBooks extends Component {
    render() {
        return (
            <div>
                <h1>ID: {this.props.id}</h1>
                <h1>Email: {this.props.email}</h1>
                <h1>Desciption: {this.props.desciption}</h1>
                <h1>Status: {this.props.status}</h1>

            </div>
        )
    }
}

export default BestBooks
