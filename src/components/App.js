import React, {Component} from 'react'
import Header from './Header'
import Body from './Body'
import '../componentsView/App.css'
 
class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}

 export default App