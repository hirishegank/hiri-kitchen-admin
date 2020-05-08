import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  chefs = [];
  ngOnInit() {
    this.afs.collection('chef').snapshotChanges().subscribe(res => {
      this.chefs = [];
      res.forEach(a => {
        let item: any = a.payload.doc.data();
        console.log(item.img);
        item.id = a.payload.doc.id;
        let temp: string = item.img;
        let userStorageRef = firebase.storage().ref().child(temp);
        userStorageRef.getDownloadURL().then(url => {
          item.Img = url;
        });


        this.chefs.push(item);
      });

    });


  
  }

}
