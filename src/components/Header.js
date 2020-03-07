import React from 'react'
import '../componentsView/Header.css'

class Header extends React.Component{
    render(){
        const playerName = 'Vlad';

        return(
            <div className = 'header-body'>
                <h4>{playerName}</h4>
                <h4>Profile</h4>
            </div>
        );
    }
}

export default Header