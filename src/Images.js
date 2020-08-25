import React, {Component} from 'react';
import {yes} from './objects.js'


class Images extends Component{
    render() {
        let yesImage = yes.map((yesImg)=> <Images key = {yesImg.id} image={yesImg.yes-image} statement={yesImg.yes-statement}/> ) 
        return <div className="Images">
            <p>{yesImage}</p>
        </div>
        
    }

}


export default Images



