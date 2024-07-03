import { Component } from '@angular/core';
import {FormControl,Validator,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Angular App';
    userLogin(item:any)
    {
      console.log(item);
    }

    loginForm = new FormGroup({
      user: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
    ReactiveForm(){
      console.log(this.loginForm.value)
    }

    get user()
    {
    return this.loginForm.get('user')
    }
    // get password()
    // {
    // return this.loginForm.get('password')
    // }
}
