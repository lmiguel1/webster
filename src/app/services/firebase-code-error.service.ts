import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string){
    switch(code) {
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'User already exists';
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'Password is too weak';
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Invalid Email';
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Wrong password';
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'User not found';
      default:
        return 'Please fill in all fields'  
    }

  }
}
