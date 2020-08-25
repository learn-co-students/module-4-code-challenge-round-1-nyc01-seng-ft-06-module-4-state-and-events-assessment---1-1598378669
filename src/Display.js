import React from 'react'
import { yes, no } from './objects'

class Display extends React.Component {

    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <>

                {this.state.clicked ? <>
                    <h1>{yes["yes-statement"]}</h1>
                    <img onClick={this.clickHandler} src={yes["yes-image"]} />
                </> : <>
                        <h1>{no["no-statement"]}</h1>
                        <img onClick={this.clickHandler} src={no["no-image"]} />
                    </>}


            </>
        )
    }
}

export default Display