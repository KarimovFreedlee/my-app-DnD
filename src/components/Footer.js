import React from 'react'
import DiceDesk from './DiceDesk'
import SendMessage from './SendMessage'
// import Friends from './Friends'
import '../componentsView/Footer.css'

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
    }

    render(){
        return(
            <div className='footer'>
                <div className='footer-buttons'>
                    {this.state.isOpen ? <DiceDesk/> : null}
                    <button className='dice-button' onClick ={this.handlClick}>Dice</button>
                    <SendMessage/>
                </div>
                <button className="friends-button">Friends</button>
            </div>
        );
    } 

    handlClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Footer