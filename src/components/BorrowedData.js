import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



class BorrowedData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    //posle render method-ot se izvrsuva
    componentDidMount() {
        fetch('http://localhost:8080/api/students/')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    isLoaded: true,
                    items: json,

                })
            });
    }

    handleDelete = (id) => {
        // event.preventDefault();
        //console.log('vo handle delete i id:' + id);


        axios.delete(`http://localhost:8080/api/borrows/${id}`)
            .then(() => {
                return axios.get(`http://localhost:8080/api/students/`)
            })
            .then(res => {
                const items = res.data;
                this.setState({items});
            })


    };


    //map creates new array i ni ovozmozuva da go izminuvame sekoj objekt
    render() {
        var {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>

                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>SampleId</th>
                            <th>Book</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.index}</td>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>{item.sampleId}</td>
                                <td>{item.bookName}</td>
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

export default BorrowedData;