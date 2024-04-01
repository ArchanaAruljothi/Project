import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService 



 {
  baseUrl="http://localhost:8888";
  userUrl="http://localhost:9999/users";
  constructor(private _http:HttpClient) { }
getUsers(){
  return this._http.get(this.userUrl);
}
  //get request
  getRequest(tableName:any){
    return this._http.get(`${this.baseUrl}/${tableName}`);
  }
 
  //delete request
  deleteRequest(tableName:any,id:any){
    return this._http.delete(`${this.baseUrl}/${tableName}/${id}`);
  }
 
  //post request
  postRequest(tableName:any,data:any){
    return this._http.post(`${this.baseUrl}/${tableName}`,data);
  }
 
  //single user request
  SingleUserGetRequest(tableName:any,id:any){
    return this._http.get(`${this.baseUrl}/${tableName}/${id}`);
  }
 
  //put request
  putRequest(tableName:any,id:any,data:any){
    return this._http.put(`${this.baseUrl}/${tableName}/${id}`,data);
  }
 
  //how to add user in session storage
  signIn(user:any){
    sessionStorage.setItem("user",user);
  }
 
  //how to remove user in session storage
  signOut(user:any){
    sessionStorage.clear();
  }
}