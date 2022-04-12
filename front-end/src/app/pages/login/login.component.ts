import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  userForm: FormGroup;
  messageError: string;
  isLoading: boolean;

  constructor(private router: Router,
    private _authService: AuthService,
    private _store: StorageService,
    private _storage: StorageService) {
    this.isLoading = false;
    this.validateLogIn();
  }

  ngOnInit() {
    this.createUserForm();
  }

  validateLogIn(): void {
    if (this._storage.existUser()) {
      this.router.navigate(['dashboard']);
    }
  }

  createUserForm(): void {
    let formProperties = Object.getOwnPropertyNames(new User());
    let object = {}
    formProperties.forEach(propertie => {
      object[propertie] = new FormControl("", [Validators.required]);
    })
    this.userForm = new FormGroup(object);
  }

  async signIn(): Promise<void> {
    let user = Object.assign(new User, this.userForm.value);
    this.isLoading = true;
    await this._authService.singIn(user)
      .then(() => {
        this._store.setUser();
        this.navigateToDashboard()
      })
      .catch(error => this.messageError = error.error.message);
    this.isLoading = false;
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
