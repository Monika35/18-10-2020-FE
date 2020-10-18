import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
                    <div className="container">
                        <a className="navbar-brand" href="/">e-Library</a>
                        <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                            <ul className="nav navbar-nav">
                                <li className="nav-item"><a href="#" className="nav-link">News</a></li>
                                <li className="nav-item"><a href="/books" className="nav-link">Books</a></li>
                                <li className="nav-item"><a href="/addBook" className="nav-link">AddBook</a></li>

                                <li className="nav-item"><a href="/" className="nav-link">Borrowed</a></li>
                            </ul>
                            <ul className="nav navbar-nav flex-row justify-content-between ml-auto">

                                <li className="dropdown order-1">
                                    <button type="button"
                                            className="btn btn-outline-secondary text-light bg-primary">Login
                                    </button>
                                    <button type="button"
                                            className="btn btn-outline-secondary bg-primary text-light">Sing Up
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Header;
