import React from 'react'
import MessageContainer from './MessageContainer'
import '../componentsView/Body.css'

class Body extends React.Component{
    render(){
        return(
            <div className='body'>
                <MessageContainer/>
            </div>
        );
    }
}

export default Body