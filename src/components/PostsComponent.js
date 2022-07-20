import React, { Component } from "react";
import PostService from "../services/PostService";

export class PostsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      
    };
   
  }

  componentDidMount() {
    PostService.getPosts().then((res) => {
      const check = res.data;
      this.setState({ content: res.data.content });
      console.log("Data is coming here");
      console.log(check);
    });
  }
  editUser(id)
  {
      this.props.history.push(`/updatepost/${id}`);
  }
  
  delete(postId)
  {
   PostService.deletePost(postId).then(
     res=>{

       this.setState(
         {
           posts:this.state.content.filter(p=>p.id!= postId)
         }
       );
     }
   )
  }
  
 




  render() {
    return (
      <div>
        <br></br>
             
       
  
                

           



        <br></br>
        <h2 className=" text-center">All Posts</h2>
        
        <br></br>
        <table className="table">
          <tbody className="table-group-divider">
            {this.state.content.map((post) => (
              <tr key={post.postId}>
                <div>
                  <tr>
                    <td>Post Title</td>
                    <td>{post.title}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>Post Content</td>
                    <td>{post.content}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>Post Image</td>
                    <td>{post.imageName}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>Post Date</td>
                    <td>{post.addedDate}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>Category Id</td>
                    <td>{post.category.categoryTitle}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>Category title</td>
                    <td>{post.category.categoryTitle}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>Category Description</td>
                    <td>{post.category.categoryDescription}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>User Id</td>
                    <td>{post.user.userId}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>User Name</td>
                    <td>{post.user.name}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>User Email</td>
                    <td>{post.user.Email}</td>
                  </tr>
                </div>
                <div>
                  <td>
                    <button
                      onClick={() => this.editUser(post.postId)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.delete(post.postId)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </div>
               
                <br></br>
                <br></br>
                <br></br>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostsComponent;

{
  /* <br></br>
           
<br></br>
<h2 className=" text-center">All Posts</h2>
<br></br>
<table className="table">
  <tbody className="table-group-divider">
    { this.state.content.map(post => (
     <div>
     <tr key={ post.postId}>
       
        <div>
          <tr>
            <td>Post Title</td>
            <td>{post.title}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>Description</td>
            <td>{post.content}</td>
          </tr>
        </div>
        <br></br>
        <br></br>
        
      </tr>
      </div>
    ))}
  </tbody>
</table>  */
}
