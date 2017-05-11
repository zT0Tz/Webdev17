import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id;
  platform;
  ID;
  image;
  age;
  playtime;
  voice;
  game;
  style;
  character;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.platform = listing.platform;
      this.ID = listing.ID;
      this.age = listing.age;
      this.playtime = listing.playtime;
      this.voice = listing.voice;
      this.game = listing.game;
      this.style = listing.style;
      this.character = listing.character;
    });
  }

  onEditSubmit(){
    let listing = {
        platform:this.platform,
        ID:this.ID,
        age:this.age,
        playtime:this.playtime,
        voice:this.voice,
        game:this.game,
        style:this.style,
        character:this.character
    }

    this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['/listings']);
  }

}
