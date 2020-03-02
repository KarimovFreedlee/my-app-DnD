import React, {Component} from 'react'
import '../componentsView/SendMessage.css'

class SendMessage extends Component{
    render(){
        return(
            <div className='SendMessage'>
                <input type='text'></input>
                <button>Send</button>
            </div>
        );
    }

}

export default SendMessage