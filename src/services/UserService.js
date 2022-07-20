import axios from "axios";
import http from './http-common';

class UserService
{
getUsers()
{
    return http.get("/users/");
}
 createUser(user)
 {
     return http.post("/users/",user);
 }
 getUserById(userId)
 {
    return http.get(`/users/${userId}`);
 }
 updateUserById(user , userId)
 {
    return http.put("/users" + '/' + `${userId}`,user);
 }
 deleteUser(userId)
 {
    return http.delete("/users" + '/' + `${userId}`);
 }

}
export default new UserService();

