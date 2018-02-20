import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private _userUrl = './api/users.json';

  constructor(
    private _http: HttpClient
  ) {
    
  }

  get(): Observable<User[]> {
    return this._http.get<User[]>(this._userUrl);
  }

  getByid(id: number): Observable<User> {
    return this._http.get<User[]>(this._userUrl).map(users => users.find(x => x.id == id));
  }
}
