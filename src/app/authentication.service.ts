import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from  "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth,public router: Router) { 
    this.user$ = afAuth.authState;
  }


  async  login(email: string, password: string) {

    try {
      //  await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      await this.afAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['overview']);
        return false;
    } catch (e) {
      console.log(e.message);
      return true;
    }

}

async logout() {
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['']);
}
}
