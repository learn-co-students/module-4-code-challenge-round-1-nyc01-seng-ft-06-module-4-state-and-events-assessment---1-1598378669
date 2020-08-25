
import React from 'react';
import './App.css';


class Drake extends React.Component{
 
    constructor(props){
        super()
        this.state = {
            
            status: "Yes",
            drakeImg: props.data[0]["yes-image"],
            drakeText: props.data[0]["yes-statement"]
        }
    }

    clickingIMG = () => {
        if (this.state.status === "Yes"){
            this.setState({
            status: "No",
            drakeImg: this.props.data[1]["no-image"],
            drakeText: this.props.data[1]["no-statment"]
            })
        } else {
            this.setState({
            status: "Yes",
            drakeImg: this.props.data[0]["yes-image"],
            drakeText: this.props.data[0]["yes-statment"]
            })
        }

    }



    render(){
        console.log(this.props.data[1]["no-statment"])


  return (
        <div>
                <h2>{this.state.drakeText}</h2>
                <img onClick = {this.clickingIMG} src = {this.state.drakeImg} />
		   
	    </div>)
    }
}

export default Drake;
