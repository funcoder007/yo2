import React, { Component } from "react";
import CategoryService from "../services/CategoryService";

export default class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.deleteCategory = this.deleteCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  updateCategory(categoryId) {
    this.props.history.push(`/categoryupdate/${categoryId}`);
  }
  componentDidMount() {
    CategoryService.getCategories().then((res) => {
      this.setState({ categories: res.data });
    });
  }

  deleteCategory(categoryId) {
    CategoryService.deleteCategory(categoryId).then((res) =>
      this.setState({
        categories: this.state.categories.filter(
          (category) => category.categoryId != categoryId
        ),
      })
    );
  }

  addCategory() {
    this.props.history.push("/addcategory");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="row">
          <div className="button">
            <button className="btn btn-primary" onClick={this.addCategory}>
              Add New Category
            </button>
          </div>
        </div>
        <br></br>
        <h2 className=" text-center">All Categories</h2>
        <br></br>
        <table className="table">
          <tbody className="table-group-divider">
            {this.state.categories.map((user) => (
              <tr key={user.categoryId}>
                <div>
                  {" "}
                  <tr>
                    <td>Category Id</td>
                    <td>{user.categoryId}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>Category Title</td>
                    <td>{user.categoryTitle}</td>
                  </tr>
                </div>
                <div>
                  <tr>
                    <td>Description</td>
                    <td>{user.categoryDescription}</td>
                  </tr>
                </div>
                <br></br>
                <br></br>
                <div>
                  <tr>
                    <td>Action</td>
                    <td>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.updateCategory(user.categoryId)}
                        className="btn btn-info"
                      >
                        Update
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteCategory(user.categoryId)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.viewUser(user.id)}
                        className="btn btn-warning"
                      >
                        View
                      </button>
                    </td>
                  </tr>
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
