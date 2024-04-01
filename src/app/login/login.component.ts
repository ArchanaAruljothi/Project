import { Component } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators } from '@angular/forms';


import { CommonModule } from '@angular/common';


import { Router, RouterLink } from '@angular/router';
import { GlobalServiceService } from '../../shared/services/global-service.service';
 
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData:any;
  userDB:any;
  constructor(private _globalSer:GlobalServiceService,private _router:Router){}
    ngOnInit(){
      this.userData=new FormGroup({
         userId:new FormControl(" ",[Validators.required]),
         userPass:new FormControl(" ",[Validators.required])
      })
    }
   checkData(){
    //console.log(this.userData.value);
    this._globalSer.getRequest("users").subscribe((res)=>{
      this.userDB = res;
      const data = this.userDB.filter((val:any)=>{
        return val.uid===this.userData.value.userId && val.upass===this.userData.value.userPass})
      if(data.length>0){
        this._globalSer.signIn(this.userData.value.userId);
        this._router.navigate(['menu']);
      }
      else{
        window.alert("Invalid Credential");
      }
    })
 
}
}


