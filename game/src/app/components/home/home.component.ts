import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private auth: Auth){
  
  }
  
  ngOnInit(){
    
  }
}
