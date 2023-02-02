import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private Data: DataService,
    private servicios: ServiceService
  ) { }

  saveUser(data) {
    const url = `${ this.servicios.ApiURL }/user`;
    return this.servicios.Promet(this.Data.metodoPost(url, data));
  }

  Login(data) {
    const url = `${ this.servicios.ApiURL }/login`;
    return this.servicios.Promet(this.Data.metodoPost(url, data));
  }

  update(id, data) {
    const url = `${ this.servicios.ApiURL }/user/${ id }`;
    return this.servicios.Promet(this.Data.metodoPut(url, data));
  }
}
