import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl = 'http://localhost:3000/api';

  // backend route prefix (add /users for ex, or /auth in components) 
  // baseUrl = 'https://leikaback.herokuapp.com/api';


  constructor(private http: HttpClient) { }

  getTypeRequest(url: any) {
    return this.http.get(`${this.baseUrl}${url}`, { withCredentials : true }).pipe(map(res => {
      return res;
    }));
  };

  // for login
  postTypeRequest(url: any, payload: any) {
    // add withCredentials : true to get cookie from server in browser storage
    return this.http.post(`${this.baseUrl}${url}`, payload, { withCredentials : true }).pipe(map(res => {
      return res;
    }));
  };

  // WE MUST USE PATCH METHOD TO USE MONGOOSE UPDATE METHODS ?
  putTypeRequest(url: any, payload: any) {
    return this.http.put(`${this.baseUrl}${url}`, payload, { withCredentials : true }).pipe(map(res => {
      return res;
    }));
  };

  patchTypeRequest(url: any, payload: any) {
    return this.http.patch(`${this.baseUrl}${url}`, payload, { withCredentials : true }).pipe(map(res => {
      return res;
    }));
  };

  deleteTypeRequest(url: any) {
    return this.http.delete(`${this.baseUrl}${url}`, { withCredentials : true }).pipe(map(res => {
      return res;
    }));
  };


}
