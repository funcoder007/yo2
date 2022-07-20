import React, { Component } from 'react'
import UserService from '../services/UserService'

export default class ListEmployeeComponent extends Component {
  
   constructor(props)
   {
    super(props)
    this.state={

        users : []

    }
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.category = this.category.bind(this);
    this.allPosts = this.allPosts.bind(this);
    this.viewPostsByUser = this.viewPostsByUser.bind(this);
   }

   viewUser(userId)
   {
    this.props.history.push(`/viewuser/${userId}`);
   }

   deleteUser(userId)
   {
    UserService.deleteUser(userId).then(
      res=>{

        this.setState(
          {
            users:this.state.users.filter(user=>user.id!= userId)
          }
        );
      }
    )
   }

   editUser(id)
   {
       this.props.history.push(`/updateuser/${id}`);
   }
  
  componentDidMount()
  {
    UserService.getUsers().then((res)=>
    {
        this.setState({users : res.data});

    })
  }

  addUser()
  {
     this.props.history.push('/adduser');
  }
  category()
  {
     this.props.history.push('/first');
  }
  //Posts

  allPosts()
  {
    this.props.history.push('/allposts');
  }
  //Post By A Particular User
  viewPostsByUser(id)
  {
    this.props.history.push(`/postbyuser/${id}`);
  }
  
    render() {
    return (
      <div>
        <br></br>
         <h2 className= " text-center">Admin Users List</h2>

         <div className='row'>
         <div className='button'>
          <button className='btn btn-primary' onClick ={this.addUser}>Add New User</button>
         </div>
         <div className='button' >
          <button className='btn btn-primary' onClick ={this.category}>Categories</button>
         </div>
         <div className='button'>
          <button className='btn btn-primary' onClick ={this.allPosts}>All Posts</button>
         </div>
 
         </div>
         <br></br>
         <div className='row'>

          <table className='table table-striped table-bordered'>
                   <thead>
                    <tr>
                        <th>User Name </th>
                        <th>User Email </th>
                        <th>User About </th>
                        <th>Actions </th>
                    </tr>


                   </thead>


                   <tbody>
                           {
                            this.state.users.map(


                              user=>
                              <tr key ={user.id}>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>{user.about}</td>
                                  <td>
                                    <button onClick= {()=> this.editUser(user.id)} className='btn btn-info'>Update</button>
                                    <button style = {{marginLeft:"10px"}} onClick= {()=> this.deleteUser(user.id)} className='btn btn-danger'>Delete</button>
                                    <button style = {{marginLeft:"10px"}} onClick= {()=> this.viewUser(user.id)} className='btn btn-warning'>View</button>
                                    <button style = {{marginLeft:"10px"}} onClick= {()=> this.viewPostsByUser(user.id)} className='btn btn-success'>User's Posts</button>
                                  </td>
                                  
                              </tr>


                            )
                           }
                   </tbody>
          </table>





         </div>

      </div>
    )
  }
}
