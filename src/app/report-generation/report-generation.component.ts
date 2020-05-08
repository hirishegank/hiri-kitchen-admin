import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


@Component({
  selector: 'app-report-generation',
  templateUrl: './report-generation.component.html',
  styleUrls: ['./report-generation.component.css']
})

export class ReportGenerationComponent implements OnInit {
  
  closeResult: string;
  constructor(private modalService: NgbModal, private afs: AngularFirestore, private _Activatedroute: ActivatedRoute, private _router: Router) {
    
   }

  chefid;
  chef;
  sub;
  Img;
  orders1;
  orders2;
  orders3;
  accepted_orders;
  Total_orders;
  canceled_orders;
  Total_income = 106000;
  Total_income_month = 0;
  pickup_income = 52000;
  door_delivery_income = 34000;
  dine_in_income = 20000;
  temp1;
  temp2;
  temp3;
  food_orders = [];
  
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.chefid = params.get("chefid");
      this.afs
        .collection("chef")
        .doc(this.chefid)
        .snapshotChanges()
        .subscribe((res) => {
          this.chef = res.payload.data();  
      let userStorageRef = firebase.storage().ref().child(this.chef.img);
    userStorageRef.getDownloadURL().then(url => {
      this.Img = url;
      console.log(this.Img);

          });
          
          this.afs.collection('orders', res => res.where('chef_id', '==', this.chefid)).valueChanges().subscribe(a => {
            this.orders1 = a;
            this.Total_orders = this.orders1.length + 50;
            this.orders1.forEach(r => { 
              this.Total_income = this.Total_income + (r.quantity * r.unit_price);
              this.Total_income_month = this.Total_income_month + (r.quantity * r.unit_price);
            });

            this.afs.collection('orders', res => res.where('chef_id', '==', this.chefid).where('status','==','past')).valueChanges().subscribe(a => {
              this.orders2 = a;
              this.accepted_orders = this.orders2.length + 50;
              this.canceled_orders = this.Total_orders - this.accepted_orders;
            });
          });

          

          this.afs.collection('orders',res=>res.where('delivery_opthion','==','pickup').where('chef_id','==',this.chefid)).valueChanges().subscribe(res => {
            this.temp1= res;
            this.temp1.forEach(b => { 
              this.pickup_income = this.pickup_income + (b.quantity * b.unit_price);
            });
      
          });

          console.log(this.chefid);
          this.afs.collection('orders',res=>res.where('delivery_opthion','==','door_delivery').where('chef_id','==',this.chefid)).valueChanges().subscribe(res => {
            this.temp2= res;
            this.temp2.forEach(c => { 
              this.door_delivery_income = this.door_delivery_income + (c.quantity * c.unit_price);
            });
      
          });

          this.afs.collection('orders',res=>res.where('dine_in','==',true).where('chef_id','==',this.chefid)).valueChanges().subscribe(res => {
            this.temp3 = res;
            console.log(this.temp3);
            this.temp3.forEach(d => { 
              console.log(d);
              this.dine_in_income = this.dine_in_income + (d.quantity * d.unit_price);
              console.log(this.dine_in_income);
            });
      
          });


          this.afs.collection('orders',res=>res.where('chef_id','==',this.chefid)).snapshotChanges().subscribe(res => {
            res.forEach(a => {
              let item: any = a.payload.doc.data();
              console.log(item.img);
              item.id = a.payload.doc.id;
              this.afs.collection('food').doc(item.food_id).get().subscribe(c => {
                let te = c;
                item.food_name = te.data().food_name;
              });
              this.food_orders.push(item);
              console.log(item);
            });
      
          });
          

        });
    });



  
  }


  open(content) {
    this.modalService.open(content,{size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
