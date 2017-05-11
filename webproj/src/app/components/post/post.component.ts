import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Http, Response, Headers } from '@angular/http';
 
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
ID:any;
game:any;
type:any;
start:any;
duration:any;
  constructor(public httpService: HttpService) { }
 
  ngOnInit() {
  	
  }
 
  getFormData(){
  	this.httpService.postFunc({ID:this.ID, game:this.game, type:this.type, start:this.start, duration:this.duration}).subscribe(
  			(res: Response) => console.log(res));
           this.ID = this.game = this.type = this.start = this.duration ="";
  	
  }
 
}