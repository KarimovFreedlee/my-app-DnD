import React from 'react'
import Header from './Header'
import Body from './Body'
import '../componentsView/App.css'
import Footer from './Footer';
 
class App extends React.Component{

    render(){
        return(
            <div className="app">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

 export default App