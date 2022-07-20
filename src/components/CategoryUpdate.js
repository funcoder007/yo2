import React, { Component } from 'react'
import CategoryService from '../services/CategoryService';

export default class CategoryUpdate extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          id:props.match.params.id,
          categoryTitle: '',
          categoryDescription: '',
          
        };
        this.changeCategoryTitleHandler = this.changeCategoryTitleHandler.bind(this);
        this.changeCategoryDescriptionHandler = this.changeCategoryDescriptionHandler.bind(this);
     
        
      }



      componentDidMount()
      {
     
       CategoryService.getCategoryById(this.state.id).then((res)=>
       {
         let category = res.data;
         this.setState({
            categoryTitle: category.categoryTitle,
            categoryDescription: category.categoryDescription,
           
     
         }) ;
     
       }
       )
     
     }


     updateCategory=(e)=>{
        e.preventDefault();
        const category =
        {
            categoryTitle:this.state.categoryTitle,
            categoryDescription:this.state.categoryDescription,
          
        }
        console.log('category'+ JSON.stringify(category));
        CategoryService.updateCategoryById(category,this.state.id).then(res=>
          {
            this.props.history.push('/first');
          });
      
        }

  
      changeCategoryTitleHandler(event) {
        this.setState({ categoryTitle: event.target.value });
      }
    
      changeCategoryDescriptionHandler(event) {
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
              <h3 className="text-center">Update Category</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Category Title </label>
                    <input
                      placeholder="Category Title"
                      name="categoryTitle"
                      className="form-control"
                      value={this.state.categoryTitle}
                      onChange={this.changeCategoryTitleHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Category Description </label>
                    <input
                      placeholder="Category Description"
                      name="categoryDescription"
                      className="form-control"
                      value={this.state.categoryDescription}
                      onChange={this.changeCategoryDescriptionHandler}
                    />
                  </div>
                 
                  <button className="btn btn-success" onClick={this.updateCategory.bind(this)}>Save</button>
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
