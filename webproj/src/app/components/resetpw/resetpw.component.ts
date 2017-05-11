import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseApp, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css']
})
export class ResetpwComponent implements OnInit {
  private auth: any;
  error : any;

  constructor(private af: AngularFire,
    @Inject(FirebaseApp) fa: any,
    private router: Router) {
    this.auth = fa.auth();
  }
  onSubmit(formData){
    if (formData.valid){
      console.log(formData.value);
      this.auth.sendPasswordResetEmail(formData.value.email).then((success) =>{
        console.log(success); //remove in production
        this.router.navigate(['/resetpg']);
        // this.errCond = false;
      }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }
  ngOnInit() {
  }

}
