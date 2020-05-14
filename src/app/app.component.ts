import {AngularFireAuth} from '@angular/fire/auth';
import {AuthenticationService} from './authentication.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'hiriAdmin';
  doRender = false;
  user: firebase.User;

  constructor(public authService: AuthenticationService, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    // if (this.user) {
    //   this.doRender = true;
    // }
  }

}
