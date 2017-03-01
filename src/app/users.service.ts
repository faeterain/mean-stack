import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  API = 'http://localhost:3000';
  // Get all posts from the API
  getAllUsers() {
    return this.http.get('/')
      .map(res => res.json());
  }

}
