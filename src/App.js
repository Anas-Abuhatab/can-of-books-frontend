import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import BestBooks from './BestBooks';
import Footer from './Footer';
import axios from 'axios';
// import { Route, Router, Switch } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id:0,
      desciption:"",
      email :"",
      books:[],
      status:""
    }
  }


  componentDidMount = () => {

    axios.get(`https://mongodb-app-project2.herokuapp.com/books`).then(res => {
     let dataget =res.data
     let id=dataget[0]._id;
     let email =dataget[0].email;
     let desciption=dataget[0].book[0].description
     let status = dataget[0].book[0].status
     

     
      this.setState({
        data: dataget,
        id:id,
        desciption:desciption,
        email:email,
        status:status
      });
      
      
    }).catch((err) => { console.log(err) });
  }

  
  render() {
    return (
      <>
        <Header />
          

        <BestBooks id={this.state.id} 
                  email={this.state.email}
                  desciption={this.state.desciption}
                  status={this.state.status}/>


        <Footer />


      </>
    )
  }
}

export default App
