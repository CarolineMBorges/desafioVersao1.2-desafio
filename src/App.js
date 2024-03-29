import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
    constructor(){
        super();
        this.state={
        appName: "Desafio Kabum",
        home: false
    }
}
render() {
    return (
        <div className="off-canvas-wrapper">
            <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                <div className="off-canvas-content" data-off-canvas-content>

                    <Header name={this.state.appName}/>
                    <Routes name={this.state.appName}/>
                    <Footer/>
                </div>
            </div>
        </div>
);
}
}
export default App;