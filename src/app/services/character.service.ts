import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private Data: DataService,
    private servicios: ServiceService
  ) { }

  getAllCharacter(data) {
    let anexo = `?page=${data.page}`;
    if (data.name != '') {
      anexo += `&name=${data.name}`;
    }
    if (data.status != '') {
      anexo += `&status=${data.status}`;
    }
    const url = `${ this.servicios.ApiURLRM }/${anexo}`;
    return this.servicios.Promet(this.Data.metodoGet(url));
  }

  getPersonaje(data) {
    const url = `${ this.servicios.ApiURLRM }/${data}`;
    return this.servicios.Promet(this.Data.metodoGet(url));
  }

  getLocation(data) {
    const url = `${ this.servicios.ApiURLRML }/${data}`;
    return this.servicios.Promet(this.Data.metodoGet(url));
  }
}
