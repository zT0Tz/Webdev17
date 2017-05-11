import {Component,OnInit,AfterViewInit} from '@angular/core'


@Component({
  // selector: 'google-adsense',
  selector: 'app-advertise',
  template: ` <div>
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-0443011292983797"
            data-ad-slot="8184819393"
            data-ad-format="auto"></ins>
         </div>   
            <br>            
  `,

})

export class AdvertiseComponent implements AfterViewInit {

  constructor() {    
  } 

  ngAfterViewInit() {
     setTimeout(()=>{
      try{
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      }catch(e){
        console.error("error");
      }
    },2000);
 }     
}