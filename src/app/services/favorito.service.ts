import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  constructor(
    private Data: DataService,
    private servicios: ServiceService
  ) { }

  getAllFavorito(id) {
    const url = `${ this.servicios.ApiURL }/favorito/${id}`;
    return this.servicios.Promet(this.Data.metodoGet(url));
  }

  saveFavorito(data) {
    const url = `${ this.servicios.ApiURL }/favorito`;
    return this.servicios.Promet(this.Data.metodoPost(url, data));
  }

  deleteFavorito(id) {
    const url = `${ this.servicios.ApiURL }/favorito/${id}`;
    return this.servicios.Promet(this.Data.metodoDelete(url));
  }
}
