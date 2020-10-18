import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';


class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    //posle render method-ot se izvrsuva
    componentDidMount() {
        fetch('http://localhost:8080/api/books/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,

                })
            });
    }

    //map creates new array i ni ovozmozuva da go izminuvame sekoj objekt


    handleDelete = (id) => {
        // event.preventDefault();
        console.log('vo handle delete i id:' + id);


        axios.delete(`http://localhost:8080/api/books/${id}`)
            .then(() => {
                return axios.get(`http://localhost:8080/api/books/`)
            })
            .then(res => {
                const items = res.data;
                this.setState({items});
            })


    };

    render() {
        let {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>

                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Book</th>
                            <th>Type</th>
                            <th>Author</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.bookName}</td>
                                <td>{item.typeName}</td>
                                <td>{item.authorName + " " + item.authorSurname}</td>
                                <button onClick={() => this.handleDelete(item.id)}><i className="fas fa-times"/>DELETE
                                </button>
                                <button><i className="fas fa-edit"
                                           style={{cursor: 'pointer', float: 'right', color: 'red'}}/>EDIT
                                </button>
                            </tr>
                        ))}
                        </tbody>
                    </table>


                    {/*<Borrowed rows={this.props.items}/>*/}
                </div>
            )
        }

    }
}

export default Books;