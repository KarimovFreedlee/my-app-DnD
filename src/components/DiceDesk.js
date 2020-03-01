import React, {Component} from 'react'
import '../componentsView/DiceDesk.css'

class DiceDesk extends Component{

    render(){
        return(
            <div className='DiceDesk'>
                <button onClick={this.getRoll(20)}>d20</button>
                <button onClick={this.getRoll(10)}>d10</button>
                <button onClick={this.getRoll(8)}>d8</button>
                <button onClick={this.getRoll(6)}>d6</button>
                <button onClick={this.getRoll(4)}>d4</button>
            </div>
        )
    }

    getRandom(min, max){
        return Math.floor(Math.random() * (max - min)) + min;  
    }

    getRoll(max){
        let diceValue = this.getRandom(1,max)
        console.log(diceValue)
    }
}

export default DiceDesk