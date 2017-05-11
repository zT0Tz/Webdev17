import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Response, Http } from '@angular/http';

@Component({
  selector: 'app-getlfg',
  templateUrl: './getlfg.component.html',
  styleUrls: ['./getlfg.component.css']
})
export class GetlfgComponent implements OnInit {

items:any = [];
 
  constructor(public httpService:HttpService) { }
 
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

}
