import React, { Component } from 'react'
import PostService from '../services/PostService';

export class PostUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:props.match.params.id,
          post:[]
          
        };
        this.changePostTitleHandler = this.changePostTitleHandler.bind(this);
        this.changePostContentHandler = this.changePostContentHandler.bind(this);
     
        
      }



      componentDidMount()
      {
     
       PostService.getPostById(this.state.id).then((res)=>
       {
         let detail = res.data;
         this.setState({
            post: detail
         }) ;
     
       }
       )
     
     }


     updatePost=(e)=>{
        e.preventDefault();
        const updatedPost = 
        {
            title:this.state.post.title,
            content:this.state.post.content,
          
        }
        console.log('category'+ JSON.stringify(updatedPost));
        PostService.updatePostd(updatedPost,this.state.id).then(res=>
          {
            this.props.history.push('/allposts');
          });
      
        }

  
        changePostTitleHandler(event) {
        this.setState({ title: event.target.value });
      }
    
      changePostContentHandler(event) {
        this.setState({ content: event.target.value });
      }
      cancel()
      {
        this.props.history.push('/allposts');
      }
    



  render() {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Post</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Post Title </label>
                    <input
                      placeholder="Post Title"
                      name="posttitle"
                      className="form-control"
                      value={this.state.post.title}
                      onChange={this.changePostTitleHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Post Content </label>
                    <input
                      placeholder="Post Content"
                      name="postcontent"
                      className="form-control"
                      value={this.state.post.content}
                      onChange={this.changePostContentHandler}
                    />
                  </div>
                 
                  <button className="btn btn-success" onClick={this.updatePost.bind(this)}>Update</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default PostUpdate