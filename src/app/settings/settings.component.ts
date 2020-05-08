import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  items;
  signinForm: FormGroup;
  submitted = false;
  constructor(private afs: AngularFirestore,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      nic: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });

    this.afs.collection('admin').doc("tR94rrOXXHgC6RP9scrEPA6MYPt1").snapshotChanges().subscribe(serverItems => {
      this.items = serverItems.payload.data();
      console.log(this.items)
    });
  }

  get f() { return this.signinForm.controls; }

  update(item) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signinForm.invalid) {
      this.signinForm.reset();
      return;
    }
    else {
      this.afs.collection('admin').doc('tR94rrOXXHgC6RP9scrEPA6MYPt1').update({
        name: this.signinForm.value.name,
        address: this.signinForm.value.address,
        nic: this.signinForm.value.nic,
        phone: this.signinForm.value.phone,
      });
    }
   
  }

}
