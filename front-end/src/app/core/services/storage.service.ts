import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setUser(): void {
    localStorage.setItem("existUser", "exist");
  }

  existUser(): boolean {
    return !!localStorage.getItem("existUser");
  }

  removeUser(): void {
    localStorage.removeItem("existUser");
  }
}
