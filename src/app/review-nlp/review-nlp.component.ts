import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ReviewServiceService } from "../reviewService.service";
import { Review } from "../Review";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Component({
  selector: "app-review-nlp",
  templateUrl: "./review-nlp.component.html",
  styleUrls: ["./review-nlp.component.css"],
})
  

export class ReviewNlpComponent implements OnInit{
  chefid;
  chef;
  sub;
  Img;
  ReviewForm: FormGroup;
  reviews = [];
  submitted = false;
  r;
  currentRate = 3;
  s;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private fb: FormBuilder,
    private _router: Router,
    private afs: AngularFirestore,
    private _nlp: ReviewServiceService
  ) {}

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.chefid = params.get("chefid");
      this.afs.collection('chef').doc(this.chefid).collection('reviews').snapshotChanges().subscribe(s => { 
        this.r = s;
        this.r.forEach(element => {
          this.afs.collection('chef').doc(this.chefid).collection('reviews').doc(element.payload.doc.id).valueChanges().subscribe(t => {
            this.s = t;
            console.log(this.s);
            this.afs.collection('user').doc(this.s.user_id).get().subscribe(p => {
              let name = p;
              this.s.name = name.data().name;
              this.s.id = element.payload.doc.id;
              console.log(this.s);
              this.reviews.push(this.s);
            });
          });
          
          
        });
      });
      this.afs
        .collection("chef")
        .doc(this.chefid)
        .snapshotChanges()
        .subscribe((res) => {
          this.chef = res.payload.data();

          this.chef.reviews.forEach(a => {
            let item: any = a;
            this.afs.collection('user').doc(a.user_id).get().subscribe(p => {
              let name = p;
              item.id = name.data().name;
            });
           
            let userStorageRef = firebase.storage().ref().child(this.chef.img);
    userStorageRef.getDownloadURL().then(url => {
      this.Img = url;
      console.log(this.Img);
    });

          });
          console.log(this.chef);
        });
    });

    this.ReviewForm = this.fb.group({
      admin_review: ["", [Validators.required]]
    });
  }

  get f() { return this.ReviewForm.controls; }

  onBack(): void {
    this._router.navigate(["review"]);
  }

  nlp(reviewId,review) {
    console.log(reviewId);
    this.afs.collection('chef').doc(this.chefid).collection('reviews').doc(reviewId).update({
      isAccepted: true
    });
    this._nlp.getReviewStatus(review).subscribe((response: Review) => {
      console.log(response);
      this.afs.collection('chef').doc(this.chefid).update({
        rating : 4.0
      });
    });
  }

  update() {
    this.submitted = true;

    if (this.ReviewForm.invalid) {
      this.ReviewForm.reset();
      return;
    }else{
      this.afs.collection("chef").doc(this.chefid).update({
        admin_review: this.ReviewForm.value.admin_review,
        admin_rating: this.currentRate,
      });
    }
  }

  Decline(a) {
    console.log(a);
    this.afs.collection('chef').doc(this.chefid).collection('reviews').doc(a).delete();
  }
  
}
//isDeclined


