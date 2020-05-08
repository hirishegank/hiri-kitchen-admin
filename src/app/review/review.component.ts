import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }
  currentRate = 3;
  chefs = [];
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

}
