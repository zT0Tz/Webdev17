import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import { HttpService } from '../../services/http.service';
import { Response, Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  items:any = [];
  
  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService,
    public httpService:HttpService
  ) { }


    ngOnInit() {
  		this.httpService.getFunc().subscribe(
  				data => {
  			const myArr = [];
  			const itemKey = [];
  			for(let key in data){
  				myArr.push(data[key]);
  				itemKey.push(key);
  			}
  			this.items = myArr;
 	
  		}
  			)
    }

  login(){
    this.af.auth.login();
  }

}
