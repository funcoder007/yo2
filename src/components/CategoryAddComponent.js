import React, { Component } from 'react'
import CategoryService from '../services/CategoryService';

export default class CategoryAddComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
          categoryTitle: '',
          categoryDescription: ''
        
        };
        this.changecategoryTitle = this.changecategoryTitle.bind(this);
        this.changecategoryDescription = this.changecategoryDescription.bind(this);
        
        this.saveCategory=this.saveCategory.bind(this);
      }



      saveCategory=(e)=>{
        e.preventDefault();
        const category =
        {
            categoryTitle:this.state.categoryTitle,
            categoryDescription:this.state.categoryDescription,
         
        }
      
        console.log('category'+ JSON.stringify(category));
        CategoryService.createCategory(category).then(res=>
          {
            this.props.history.push('/first');
          });
      
        }

        changecategoryTitle(event) {
            this.setState({ categoryTitle: event.target.value });
          }
        
          changecategoryDescription(event) {
            this.setState({ categoryDescription: event.target.value });
          }
          
        

          
  cancel()
  {
    this.props.history.push('/first');
  }

    
  render() {
    return (
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Add Category</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label> Category Title  </label>
                      <input
                        placeholder="Category Title"
                        name="categoryTitle"
                        className="form-control"
                        value={this.state.categoryTitle}
                        onChange={this.changecategoryTitle}
                      />
                    </div>
  
                    <div className="form-group">
                      <label> Category Description </label>
                      <input
                        placeholder="Category Description"
                        name="categoryDescription"
                        className="form-control"
                        value={this.state.categoryDescription}
                        onChange={this.changecategoryDescription}
                      />
                    </div>
                   
                    <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
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
