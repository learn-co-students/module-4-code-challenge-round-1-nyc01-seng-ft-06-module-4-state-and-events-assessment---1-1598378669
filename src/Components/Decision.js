import React from 'react'
import { yes, no } from '../objects'

export default class Decision extends React.Component {



    render() {
        return <div>
        <img 
        onClick={() => this.props.onClick("yes")}
        alt="yes"
        className="yes" 
        src={yes["yes-image"]}></img>
        
        <img 
        onClick={() => this.props.onClick("no")}
        className="no"
        alt="no" 
        src={no["no-image"]}></img>
        </div>
    }
}