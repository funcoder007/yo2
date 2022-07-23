import React, { Component } from "react";
import UserService from "../services/UserService";
import Delhi1 from "../assests/Delhi1.webp";
import Mumbai1 from "../assests/Mumbai1.webp";
import Ahmedabad1 from "../assests/Ahmedabad1.webp";
import Chennai1 from "../assests/Chennai1.webp";
import Banglore1 from "../assests/Banglore1.webp";
import Hyderabad1 from "../assests/Hyderabad1.webp";
import Cities1 from "../assests/Cities1.webp";
import pine from "../assests/pine.jpg";
import india from "../assests/india.jpg";

export default class CreateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      about: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeAboutHandler = this.changeAboutHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      about: this.state.about,
    };

    console.log("user" + JSON.stringify(user));
    UserService.createUser(user).then((res) => {
      this.props.history.push("/users");
    });
  };

  changeNameHandler(event) {
    this.setState({ name: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }
  changeAboutHandler(event) {
    this.setState({ about: event.target.value });
  }

  cancel() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <div>
        <section id="span1">
          <div className="test">
            <img src={pine} />
            <div className="text1">Welcome!</div>
          </div>
        </section>
      
        <div className="OurPartners">Our Partners</div>
        <section id="span2">
          <div className="test2">
           
            <div className="text2">Titan Eye+<br></br><br></br>Polaroid<br></br><br></br>Fossil</div>
            <div className="text3">Vogue<br></br><br></br>Ray-Ban<br></br><br></br>Fastrack</div>
            <div className="text4">Adensco<br></br><br></br>Coolwinks<br></br><br></br>Burberry</div>
           
          </div>
        </section>
        

        <div>
          <div className="container">
           
            <div className="row">
          
            <div className="NewPartner">New Partner</div>
              <div className="card col-md-6 offset-md-3 offset-md-3" id="form">
              LensCart
                <h3 className="text-center">Add User</h3>
                <div className="card-body">
                  
                  <form>
                    <div className="form-outline mb-4">
                      <div class="label"> Name</div>
                      <input
                        placeholder="Name"
                        name="name"
                        className="form-control form-control-lg"
                        value={this.state.name}
                        onChange={this.changeNameHandler}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <div class="label"> Email</div>
                      <input
                        placeholder="Email"
                        name="email"
                        className="form-control form-control-lg"
                        value={this.state.email}
                        onChange={this.changeEmailHandler}
                      />
                    </div>
                    <div className="form-group form-outline mb-4">
                      <div class="label"> About</div>
                      <input
                        placeholder="About"
                        name="about"
                        className="form-control form-control-lg"
                        value={this.state.about}
                        onChange={this.changeAboutHandler}
                      />
                    </div>
                    <div className="btns">
                      <button
                        className="btn btn-success"
                        id="buttonsave"
                        onClick={this.saveUser}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-danger"
                        id="buttondelete"
                        onClick={this.cancel.bind(this)}
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="Stores1">LENSCART</div>
           <div className="Stores">Stores In INDIA</div>
          <section id="span3">
          <div className="test3">
        
            <img src={Delhi1} />
           Delhi
           <img src={Mumbai1} />
           Mumbai
           <img src={Ahmedabad1} />
           Ahmedabad
           <img src={Chennai1} />
           Chennai
           <img src={Banglore1} />
           Banglore
           
           
          </div>
        </section>
          
        </div>
      </div>
    );
  }
}
