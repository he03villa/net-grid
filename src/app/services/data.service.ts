import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  metodoGet(url) {
    return this.http.get(url);
  }

  metodoPost(url, body) {
    return this.http.post(url, body);
  }

  metodoPut(url, body) {
    return this.http.put(url, body);
  }

  metodoDelete(url) {
    return this.http.delete(url);
  }
}
