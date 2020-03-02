import React, {Component} from 'react'
import DiceDesk from './DiceDesk'
import SendMessage from './SendMessage'
import Friends from './Friends'
import '../componentsView/Footer.css'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
    }

    render(){
        return(
            <div className='FooterBody'>
                <button className='DiceButton' onClick ={this.handlClick}>Dice</button>
                <SendMessage/>
                <Friends/>
                {this.getDice()}
            </div>
        );
    }  

    getDice(){
        if (!this.state.isOpen) return null
        return <DiceDesk/>
    }

    handlClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Footer