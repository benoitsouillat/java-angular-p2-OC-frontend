import { Injectable } from '@angular/core';
import { Register } from '../models/Register';
import { loginUserDTO } from '../DTO/loginUserDTO';
import { loginResponseDTO } from '../DTO/loginResponseDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
      private httpClient: HttpClient
  ) { }

  register(user: Register): Observable<Object> {
    return this.httpClient.post('/api/register', user);
  }

  login(user: loginUserDTO): Observable<loginResponseDTO> {
    return this.httpClient.post<loginResponseDTO>('/api/login', user);
  }

  saveToken(response: loginResponseDTO): void {
      localStorage.setItem('userToken', response.token);
  }

}
