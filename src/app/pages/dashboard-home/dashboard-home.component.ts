import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CharacterService } from '../../services/character.service';
import { FavoritoService } from '../../services/favorito.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  character = [];
  dataUser;
  pagesarray: any = [];
  totalpage:number;
  dataFilter = {
    page: 1,
    name: '',
    status: ''
  }

  constructor(
    private service: ServiceService,
    private Character: CharacterService,
    private Favorito: FavoritoService
  ) { }

  ngOnInit() {
    this.dataUser = JSON.parse(localStorage.getItem('dataUser'));
    this.getAllCharacte();
  }

  async getAllCharacte() {
    const res:any = await this.Character.getAllCharacter(this.dataFilter);
    console.log(res);
    this.character = res.results;
    this.totalpage = res.info.pages;
    this.pagesarray.length = res.info.pages;
  }

  filtrar() {
    this.getAllCharacte();
  }

  detallesfavorito() {
    this.service.url('dashboar/favorito');
  }

  irPerfil() {
    this.service.url('dashboar/perfil');
  }

  cerrar() {
    localStorage.removeItem('dataUser');
    this.service.url('login');
  }

  detallespersonaje(id) {
    this.service.url(`dashboar/vista-personaje/${id}`);
  }

  detallespersonajelocalizacion(localizaction) {
    const residentesp = localizaction.split('/');
    const idp = residentesp[residentesp.length - 1];
    this.service.url(`dashboar/location/${idp}`);
  }

  verificarfavorito(id) {
    const post = this.dataUser.favorito.findIndex(f => f.ref_api === id);
    if (post >= 0) {
      return true;
    } else {
      return false;
    }
  }

  async eliminarfavorito(id) {
    const favorito = this.dataUser.favorito.find(f => parseInt(f.ref_api) === parseInt(id));
    const res = await this.Favorito.deleteFavorito(favorito.id);
    const post = this.dataUser.favorito.findIndex(f => parseInt(f.ref_api) === parseInt(id));
    this.dataUser.favorito.splice(post, 1);
    localStorage.setItem('dataUser', JSON.stringify(this.dataUser));
  }

  async agregarfavorito(id) {
    const data = { id_usuario: this.dataUser.id, ref_api: id };
    const res = await this.Favorito.saveFavorito(data);
    this.dataUser.favorito.push(res);
    localStorage.setItem('dataUser', JSON.stringify(this.dataUser));
  }

  sumarpage() {
    if (this.totalpage == this.dataFilter.page) {
      this.dataFilter.page = this.totalpage

    } else {
      this.dataFilter.page += 1;
    }
    this.getAllCharacte();
  }

  restarpage() {
    if (this.dataFilter.page == 1) {
      this.dataFilter.page = 1

    } else {
      this.dataFilter.page -= 1;
    }
    this.getAllCharacte();
  }

  paginacionactual(pagenumber: number) {
    this.dataFilter.page = pagenumber;
    this.getAllCharacte();
  }

}
