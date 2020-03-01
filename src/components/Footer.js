import React, {Component} from 'react'
import DiceDesk from './DiceDesk'
import '../componentsView/Footer.css'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
    }

    render(){
        const {isOpen} = this.state
        return(
            <div className='FooterBody'>
                <button onClick ={this.handlClick}>Dice</button>
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