import axios from "axios";
import http from './http-common';

class CategoryService
{
getCategories()
{
    return http.get("/categories/");
}
deleteCategory(categoryId)
{
   return http.delete("/categories" + '/' + `${categoryId}`);
}

getCategoryById(categoryId)
 {
    return http.get(`/categories/${categoryId}`);
 }
 updateCategoryById(category , categoryId)
 {
    return http.put("/categories" + '/' + `${categoryId}`,category);
 }

 createCategory(category)
 {
     return http.post("/categories/",category);
 }

}
export default new CategoryService();

