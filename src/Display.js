import React from 'react'
import { yes, no } from './objects'


class Display extends React.Component {
state = {flag: false}
  
clickHandler = () => {
  this.setState({flag: !this.state.flag})
}

render() {
  return (
    <React.Fragment>
            {this.state.flag ? <>
                <h1>{yes["yes-statement"]}</h1>
                <img onClick={this.clickHandler} src={yes["yes-image"]} />
            </> : <>
                    <h1>{no["no-statement"]}</h1>
                    <img onClick={this.clickHandler} src={no["no-image"]} />
                </>}
    </React.Fragment>
  )
}
}

export default Display