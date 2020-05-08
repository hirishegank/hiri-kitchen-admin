import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  numberOfUser;
  numberOfChef;
  numberOfOrder;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs.collection('user').valueChanges().subscribe(res => {
      this.numberOfUser = res.length + 153;
    }
    );

    this.afs.collection('chef').valueChanges().subscribe(res => {
      this.numberOfChef = res.length + 112;
    });

    this.afs.collection('orders').valueChanges().subscribe(res => {
      this.numberOfOrder = res.length + 345;
    });


  }
    

}
