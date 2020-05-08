import { AuthenticationService } from './../authentication.service';
import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: NgbDateStruct;
  date;
  user: firebase.User;

  constructor(public authService: AuthenticationService, private afAuth: AngularFireAuth) {
   afAuth.authState.subscribe(user => this.user = user);
   }
   

  ngOnInit() {
    this.date = formatDate(new Date(),'yyyy/MM/dd','en');
    console.log(this.date);
  }

}
