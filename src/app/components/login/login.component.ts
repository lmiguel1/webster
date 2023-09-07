import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError : FirebaseCodeErrorService
    ){
      this.userLogin = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

    ngOnInit(): void {}

    login() {
      const email = this.userLogin.value.email;
      const password = this.userLogin.value.password;      
      
      this.afAuth.signInWithEmailAndPassword(email, password).then((user) =>{     
        if(user.user?.emailVerified){
          this.router.navigate(['/user-profile']);
        }else{
          this.router.navigate(['/verify-email']);
        }
        }).catch((error) => {
          this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
        }) 
    }

}
