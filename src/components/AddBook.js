import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';


class AddBook extends Component {

  constructor(props){
    super(props);

      this.state={
             name:'',
            typeName:''
      }
  }

    changeHandler = (e) =>{
      this.setState({[e.target.name]: e.target.value})
    };

    submitHandler = e =>{
        e.preventDefault(); //za da nema refresiranje na stranata

        const book={
            name:this.state.name,
            type:{
                name: this.state.typeName
            }
        }

        axios.post(`http://localhost:8080/api/books/post`,book)
            .then(res=>{
                console.log(book)
            })
    }

    render() {
        const {name,typeName}=this.state;
        return(
            <form onSubmit={this.submitHandler}>
            <div>
               <input type="text" name="name" value={name} onChange={this.changeHandler}/>
            </div>
                <div>
                    <input type="text" name="typeName" value={typeName} onChange={this.changeHandler}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddBook;