import React from 'react'


export default class State extends React.Component {

    state = {}

    render() {
        return <div className="statement">
        <h1>{this.props.statement}</h1>
        </div>
    }
}