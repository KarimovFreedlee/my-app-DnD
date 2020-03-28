import React from 'react'
import { connect } from 'react-redux'
import '../componentsView/MessageContainer.css'

class MessageContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            messages : ''
        }
    }

    render(){
        return(
            <div className='chat'>
                {this.state.messages}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        
    }
}

export default connect(mapStateToProps, null)(MessageContainer) 