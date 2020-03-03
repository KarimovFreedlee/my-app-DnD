import React, {Component} from 'react'
import '../componentsView/Header.css'

class Header extends Component{
    render(){
        return(
            <div className = 'HeaderBody'>
                    <h4>{this.props.playerName}</h4>
                    <h4>Profile</h4>
            </div>
        );
    }
}

export default Header