import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  forgotPassword : FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError : FirebaseCodeErrorService
  ){
    this.forgotPassword =this.fb.group({
      emailAdress: ['', Validators.required]
    })
  }

  ngOnInit(): void {    
  }
  retrieve(){const emailAdress =  this.forgotPassword.value.emailAdress;
    this.afAuth
    .sendPasswordResetEmail(emailAdress)
    .then(() => {
      this.toastr.info('Check your email to reset your password', 'Reset Password')
      this.router.navigate(['/login']);
    })
    .catch((error)=> {
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error'); 
    })
    
  }
}
