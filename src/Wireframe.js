import React from 'react'
import {yes, no} from "./objects"

class Wireframe extends React.Component{

    state={clicked:false}

    toggleImage =()=>{
     let click = this.state.clicked
     this.setState({clicked:!click}, ()=>{console.log(this.state.clicked)})
    }

    changeStatement=()=>{
        if (this.state.clicked===true){
            return yes["yes-statement"]
        } else {
            return no["no-statement"] 
        }
    }
    
    render(){
        
        return(
        <>
            <h2>{this.changeStatement()}</h2>
            <img onClick={this.toggleImage} src={this.state.clicked?`${yes["yes-image"]}`:`${no["no-image"]}`}/>
        </>
        )
    }
}





export default Wireframe