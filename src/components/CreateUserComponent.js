import React, { Component } from "react";
import UserService from "../services/UserService";

export default class CreateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      about: '',
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeAboutHandler = this.changeAboutHandler.bind(this);
    this.saveUser=this.saveUser.bind(this);
  }

  
  saveUser=(e)=>{
    e.preventDefault();
    const user =
    {
      name:this.state.name,
      email:this.state.email,
      about:this.state.about
    }
  
    console.log('user'+ JSON.stringify(user));
    UserService.createUser(user).then(res=>
      {
        this.props.history.push('/users');
      });
  
    }

  changeNameHandler(event) {
    this.setState({ name: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }
  changeAboutHandler(event) {
    this.setState({ about: event.target.value });
  }


  
  cancel()
  {
    this.props.history.push('/users');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add User</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Email </label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> About </label>
                    <input
                      placeholder="About"
                      name="about"
                      className="form-control"
                      value={this.state.about}
                      onChange={this.changeAboutHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
