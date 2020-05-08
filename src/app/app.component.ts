import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from './authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hiriAdmin';

  user: firebase.User;

  constructor(public authService: AuthenticationService, private afAuth: AngularFireAuth) {
   afAuth.authState.subscribe(user => this.user = user);
   }
}
