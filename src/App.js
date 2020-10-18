import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import BorrowedData from "./components/BorrowedData";
import Books from "./components/Books";
import AddBook from "./components/AddBook";



class App extends Component {


    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <hr/>
                <Router>
                    <Route exact path="/" component={BorrowedData}/>
                    <Route exact path="/books" component={Books}/>
                    <Route exact path="/addBook" component={AddBook}/>
                </Router>
            </div>
        )
    }
}

export default App;