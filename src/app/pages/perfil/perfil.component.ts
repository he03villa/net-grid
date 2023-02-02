import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  validarMensaje = true;
  dataUser;

  constructor(
    public service: ServiceService,
    private fb: FormBuilder,
    private User: UserService
  ) { }

  ngOnInit() {
    this.dataUser = JSON.parse(localStorage.getItem('dataUser'));
    this.form = this.fb.group({
      name: [this.dataUser.name, [Validators.required]],
      address: [this.dataUser.address, [Validators.required]],
      birthdate: [this.dataUser.birthdate, [Validators.required]],
      city: [this.dataUser.city, [Validators.required]]
    });
  }

  cambiarValidarMensaje() {
    this.validarMensaje = true;
  }

  async actualizar(event) {
    this.service.addLoading(event.target);
    if (!this.form.invalid) {
      const data = this.form.getRawValue();
      console.log(data);
      const res:any = await this.User.update(this.dataUser.id, data);
      Object.assign(this.dataUser, res);
      localStorage.setItem('dataUser', JSON.stringify(this.dataUser));
      this.service.Alert('success', '', 'El usuario se actualizo', 'Aceptar', '');
      this.service.removeLoading(event.target);
    } else {
      this.validarMensaje = false;
      this.service.removeLoading(event.target);
    }
  }

}
