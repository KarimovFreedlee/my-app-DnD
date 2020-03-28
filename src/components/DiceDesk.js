import React from 'react'
import '../componentsView/DiceDesk.css'

class DiceDesk extends React.Component{

    render(){
        return(
            <div className='dice-desk'>
                {this.getButtons()}
            </div> 
        )
    }

    getButtons(){
      return ([20,10,8,6,4].map((val,i) => <button className="btn btn-outline-dark" key={i} onClick={()=>this.getRoll(val)}>d{val}</button>))
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