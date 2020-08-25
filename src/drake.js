
import React from 'react';
import './App.css';


class Drake extends React.Component{
 
    constructor(props){
        super()
        this.state = {
            
            status: "Yes",
            drakeImg: props.data[0]["yes-image"],
            drakeText: props.data[0]["yes-statment"]
        }
    }

    clickingIMG = () => {
        if (this.state.status === "yes"){
            this.setState.status = "No"
            this.setState.drakeImg = this.props.data[1]["no-image"]
            this.setState.drakeText= this.props.data[1]["no-statment"]
        } else {
            this.setState.status= "Yes",
            this.setState.drakeImg= this.props.data[0]["yes-image"],
            this.setState.drakeText= this.props.data[0]["yes-statment"]
        }

    }



    render(){
        


  return (<div>
		<h2>{this.state.drakeText}</h2>;
        <img onClick = {this.clickingIMG} src = {this.state.drakeImg} />
		   
	    </div>)
    }
}

export default Drake;
