import React, {Component} from 'react'
import Header from './Header'
import Body from './Body'
import '../componentsView/App.css'
 


class App extends Component{

    render(){
        const playerName = 'Vlad';
        return(
            <div>
                <Header playerName={playerName}/>
                <Body/>
            </div>
        );
    }
}

 export default App