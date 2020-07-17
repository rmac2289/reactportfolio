import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Input } from 'reactstrap'
import './Contact.css';
import '../App/App.css'
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { UncontrolledAlert } from 'reactstrap';
import Burger from '../Burger/Burger';


class Contact extends Component {
 
  state = {
    name: '',
    email: '',
    message: '',
    success: '',
  }
  handleSubmit(e) {
    e.preventDefault();
    var templateParams = {
      from_name: this.state.name + ' (' + this.state.email + ')',
      to_name: 'Ross',
      message_html: this.state.message
    }
    emailjs.send('gmail', 'template_DMlIudKC', templateParams, 'user_uXigZw2RYzgOCTjVxakmu')
    .then((result) => {
      if (result.text === 'OK'){
      this.setState({success: <UncontrolledAlert classname="alert" color="success">Message sent!</UncontrolledAlert>})
        console.log('success')
      } else {
        this.setState({success: <UncontrolledAlert className="alert" color="danger">Uh oh, something went wrong!</UncontrolledAlert>})
        console.log('failure')
      }
  }, (error) => {
      console.log(error.text);
  }) 
  
      this.resetForm()
  }
  resetForm(){
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
    render() {
      return (
        <div className="App" id="contactID">
        <div id="body">
        <Burger />
        <Nav />
        <main id="main">
        <div  className="form">
          <section id="contactSection">
            <h1 className="p-heading1">contact me</h1>
            <Form id="form" onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup className="formGroup" controlid="formBasicEmail">
                <label for="email">email</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this, 'email')}
                  className="text-primary"
                  placeholder="abc123@email.com"
                />
              </FormGroup>
  <FormGroup className="formGroup" controlid="formBasicName">
                <label for="name">name</label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, 'name')}
                  className="text-primary"
                  placeholder="John Smith"
                />
              </FormGroup>
  <FormGroup className="formGroup" controlid="formBasicMessage">
  <label for="message">message</label>
                <Input
                  id="message"
                  type="textarea"
                  name="message"
                  className="text-primary"
                  onChange={this.handleChange.bind(this, 'message')}
                  value={this.state.message}
                  placeholder="Wow, what a beautiful website!"
                />
              </FormGroup>
              {this.state.success}
  <Button id="button" variant="primary" type="submit" >
                send message
              </Button>
            </Form>
            </section>
            </div>
            </main>
            </div>
            <Footer />
        </div>  
)
      }
    }
  
export default Contact;
