import React from 'react';
import Header from "./components/headerBlock/header";
import {BrowserRouter} from "react-router-dom";
import s from './App.module.scss'
import Footer from "./components/footerBlock/footer";
import Body from "./components/bodyBlock/body";
import ReactDOM from "react-dom";
import store from "./data/state";


class App extends React.Component {

    render() {
        return <p>Hello, World!</p>
    }
}


class App extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <div className={s.app}>
                    <Header menu={store.getState().links}/>
                    <Body data={store.getState()}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
