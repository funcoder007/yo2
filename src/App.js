import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListUsersComponent from "./components/ListUsersComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CategoryComponent from "./components/CategoryComponent";
import ViewUserComponent from "./components/ViewUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";
import CategoryUpdate from "./components/CategoryUpdate";
import CategoryAddComponent from "./components/CategoryAddComponent";
import PostsComponent from "./components/PostsComponent";
import PostByUser from "./components/PostByUser";
import PostUpdate from "./components/PostUpdate";

function App() {
  return (
    <div>
      <Router>
       
          <HeaderComponent></HeaderComponent>
          <div className="container">
            <Switch>
            <Route path ="/first" component = {CategoryComponent}></Route>
             <Route path ="/users" component = {ListUsersComponent}></Route>
            
             <Route path ="/adduser" component = {CreateUserComponent}></Route>
             <Route path ="/updateuser/:id" component = {UpdateUserComponent}></Route>
             <Route path ="/viewuser/:id" component = {ViewUserComponent}></Route>
             <Route path ="/categoryupdate/:id" component = {CategoryUpdate}></Route>
             <Route path ="/addcategory" component = {CategoryAddComponent}></Route>
             <Route path ="/allposts" component = {PostsComponent}></Route>
             <Route path ="/postbyuser/:id" component = {PostByUser}></Route>
             <Route path ="/updatepost/:id" component = {PostUpdate}></Route>
            </Switch>
          </div>
          {/* <FooterComponent></FooterComponent> */}
       
      </Router>
    </div>
  );
}

export default App;
