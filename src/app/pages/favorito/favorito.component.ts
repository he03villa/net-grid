import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { FavoritoService } from '../../services/favorito.service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent implements OnInit {

  dataUser;
  character = [];
  pagesarray: any = [];
  totalpage:number;

  constructor(
    public service: ServiceService,
    private Character: CharacterService,
    private Favorito: FavoritoService
  ) { }

  ngOnInit() {
    this.dataUser = JSON.parse(localStorage.getItem('dataUser'));
    const favoritos = this.dataUser.favorito.map(f => f.ref_api).toString();
    this.listarFavoritos(favoritos);
  }

  async listarFavoritos(ids) {
    if (ids != '') {
      const res:any = await this.Character.getPersonaje(ids);
      console.log(res);
      console.log(res.length);
      if (res.length) {
        this.character = res;
      } else {
        this.character.push(res);
      }
    }
  }

  detallesfavorito() {
    this.service.url('dashboar/favorito');
  }

  detallespersonaje(id) {
    console.log(id);
    this.service.url(`dashboar/vista-personaje/${id}`);
  }

  detallespersonajelocalizacion(id) {}

  async eliminarfavorito(id) {
    const favorito = this.dataUser.favorito.find(f => parseInt(f.ref_api) === parseInt(id));
    const res = await this.Favorito.deleteFavorito(favorito.id);
    const post = this.dataUser.favorito.findIndex(f => f.ref_api === id);
    const post2 = this.character.findIndex(f => f.id === id);
    this.dataUser.favorito.splice(post, 1);
    this.character.splice(post2, 1);
    localStorage.setItem('dataUser', JSON.stringify(this.dataUser));
  }

}
