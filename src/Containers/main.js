import React from 'react';
import Statement from '../Components/statement'
import Image from '../Components/image'
import {yes, no} from '../objects'

function Main() {
    
    

    return (
        <>
            <h1>Main</h1>
            <Statement value={yes["yes-statement"]}/>
            <Image value={yes["yes-image"]}/>
        </>
    )
}

export default Main;