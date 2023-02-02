import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-locatio',
  templateUrl: './locatio.component.html',
  styleUrls: ['./locatio.component.scss']
})
export class LocatioComponent implements OnInit {

  Localizacion: any;
  Nombrepersonas: any = [];

  constructor(
    private idlocalizar: ActivatedRoute,
    private Character: CharacterService,
    public service: ServiceService,
  ) { }

  ngOnInit() {
    const idlocalizacion = this.idlocalizar.snapshot.paramMap.get("id");
    this.listarLocacion(idlocalizacion);
  }

  async listarLocacion(id) {
    const res:any = await this.Character.getLocation(id);
    this.Localizacion = res;
    this.residentes(this.Localizacion.residents);
  }

  async residentes(residentes: any) {
    for (let index = 0; index < residentes.length; index++) {
      const element = residentes[index];
      const residentesp = element.split('/');
      const idp = residentesp[residentesp.length - 1];
      const resp:any = await this.Character.getPersonaje(idp);
      this.Nombrepersonas.push(resp.name);
    }
  }

}
