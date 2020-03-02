import React, {Component} from 'react'
import Footer from './Footer'
import MessageContainer from './MessageContainer'
import '../componentsView/Body.css'

class Body extends Component{
    render(){
        return(
            <div className='Body'>
                <MessageContainer/>
                <Footer/>
            </div>
        );
    }
}

export default Body