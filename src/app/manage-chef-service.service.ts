import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageChefServiceService {

  constructor(private afs: AngularFirestore) { }
  

  InsertChef(data){
    return this.afs.collection("chef").add(data).then(function(docRef) {
     console.log("Document written with ID: ", docRef.id);
 })
 .catch(function(error) {
     console.error("Error adding document: ", error);
 });
   }
 
 
   deletechef(data) {
     return this.afs
       .collection("chef")
       .doc(data.payload.doc.id)
       .delete();
   }
 
   getchef() {
     return this.afs.collection("chef").snapshotChanges();
   }
 
}
