import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService 
    ){    
    this.userRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      checkTerms : ['', Validators.required]
    })
  }
  
  register(){
    const email = this.userRegister.value.email;
    const password = this.userRegister.value.password;
    const confirmPassword = this.userRegister.value.confirmPassword;

    if(password !== confirmPassword){
      this.toastr.error('Passwords mismatch', 'Error');
      return;
    }
    
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => { 
        this.verifyEmail();           
    }).catch((error) => {      
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    });    
  }  

  verifyEmail(){
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info('Your account has been created successfully', 'Very good!');
        this.router.navigate(['/login']);
    });
  }
  
}
