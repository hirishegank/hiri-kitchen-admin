import {AngularFirestore} from '@angular/fire/firestore';
import {Component, OnInit} from '@angular/core';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {

  currentRate = 3;
  chefs = [];

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.afs.collection('chef').snapshotChanges().subscribe(res => {
      this.chefs = [];
      res.forEach(a => {
        let item: any = a.payload.doc.data();
        console.log(item.img);
        item.id = a.payload.doc.id;
        let userStorageRef = firebase.storage().ref().child(item.img);
        userStorageRef.getDownloadURL().then(url => {
          item.Img = url;
        });
        this.chefs.push(item);
      });

    });


  }

  getDate() {
    const d = new Date();
    const dtf = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'short', day: '2-digit'});
    const [{value: mo}, , {value: da}, , {value: ye}] = dtf.formatToParts(d);
    return `Last Update: ${ye}/${mo}/${da}`;
  }
}
