import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  dataUser: any;
  
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if (user && user.emailVerified) {
        this.dataUser = user;
        this.showPopupAfterDelay();
      } else {
        this.router.navigate(['/select-profile']);
      }
    });
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/select-profile']));
  }

  private showPopupAfterDelay() {
    const popup = document.querySelector('.popup') as HTMLDivElement;
    const close = document.querySelector('.close') as HTMLElement;

    setTimeout(() => {
      popup.style.display = 'block';
    }, 5000);

    close.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }
}
