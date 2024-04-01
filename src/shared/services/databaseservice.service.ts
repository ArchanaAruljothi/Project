import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseserviceService {
  constructor(private _http:HttpClient){}
  //make get request
  fetchData(){
    return this._http.get("http://localhost:8888/users");
}

//post request
addEmployee(data:any){
   return this._http.post(`http://localhost:8888/users`,data);
}


}
