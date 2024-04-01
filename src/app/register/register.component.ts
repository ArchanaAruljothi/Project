import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { DatabaseserviceService } from '../../shared/services/databaseservice.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Form:any;
  userData:any;
  constructor(private fb:FormBuilder,private _router:Router){
  
  
    this.Form=this.fb.group({
      Name: ['',[Validators.required,Validators.pattern("^[a-zA-Z]{3,25}$")]],
      Email:['',[Validators.required,Validators.pattern('/^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$/')]],
      Pass:['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]],
      Confirmpass:['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]],
      term:['this',[Validators.requiredTrue]],
    })
  }
  
  
  
  submitData(){
    window.alert("Registered Successfully");
    this._router.navigate(['home']);
  }
  }
