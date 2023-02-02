import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.component.html',
  styleUrls: ['./vista-personaje.component.scss']
})
export class VistaPersonajeComponent implements OnInit {

  Personaje: any;

  constructor(
    public service: ServiceService,
    private idpersonaje: ActivatedRoute,
    private Character: CharacterService,
  ) { }

  ngOnInit() {
    const id = this.idpersonaje.snapshot.paramMap.get("id");
    this.getPersona(id);
  }

  async getPersona(id) {
    const res:any = await this.Character.getPersonaje(id);
    this.Personaje = res;
  }

  formatEpisodio(url) {
    if (url) {
      if (url.length > 3) {
        let result;
        result = url.substring(url.lastIndexOf('/') + 1);
        return result;
      }
      return url;
    }
    return url;
  }

}
