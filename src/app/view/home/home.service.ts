import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

    list() {
      return this.http.get<User[]>(this.API);
    }
  }

