import React from 'react'
import '../componentsView/SendMessage.css'

class SendMessage extends React.Component{
    render(){
        return(
            <div className='send-message'>
                <input type='text'></input>
                <button>Send</button>
            </div>
        );
    }

}

export default SendMessage