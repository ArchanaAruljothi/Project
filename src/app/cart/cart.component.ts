
import { Component } from '@angular/core';
import { GlobalServiceService } from '../../shared/services/global-service.service';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
 
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
         cartArray:any;
 
         constructor(private globalserv:GlobalServiceService){}
 
         ngOnInit()
         {
          this.globalserv.getCart().subscribe((res)=>{
            this.cartArray=res;
            console.log(this.cartArray);
          })
         }
}