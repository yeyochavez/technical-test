import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  messageError: string;
  isLoading: boolean;

  constructor(private router: Router, private _userServise: UserService) {
    this.isLoading = false;
  }


  ngOnInit() {
    this.createUserForm();
  }

  createUserForm(): void {
    let formProperties = Object.getOwnPropertyNames(new User());
    let object = {}
    formProperties.forEach(propertie => {
      object[propertie] = new FormControl("", [Validators.required]);
    })
    this.userForm = new FormGroup(object);
  }

  async signUp(): Promise<void> {
    let user = Object.assign(new User, this.userForm.value);
    this.isLoading = true;
    await this._userServise.saveUser(user)
      .then(() => {
        this.navigateToDashboard()
      });
    this.isLoading = false;
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard'])
  }

}
