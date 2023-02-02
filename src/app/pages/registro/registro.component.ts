import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  validarMensaje = true;
  ojito1 = true;
  ojito2 = true;

  constructor(
    public service: ServiceService,
    private fb: FormBuilder,
    private User: UserService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordC: ['', [Validators.required]]
    });
  }

  cambiarValidarMensaje() {
    this.validarMensaje = true;
  }

  async registrar(event) {
    this.service.addLoading(event.target);
    if (!this.form.invalid) {
      if (this.form.controls.password.value != this.form.controls.passwordC.value) {
        this.service.Alert('error', '', 'Las contraseñas no coinciden', 'Aceptar', '');
        this.service.removeLoading(event.target);
        return false;
      }
      const data = {
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
      };
      console.log(data);
      const res:any = await this.User.saveUser(data);
      if (res.status) {
        this.service.Alert('error', '', 'EL usuario ya existe', 'Aceptar', '', false);
      } else {
        const resp = await this.service.Alert('success', '', 'EL usuario se registro', 'Aceptar', '', false);
        if (resp && !resp) {
          this.service.url('login');
        }        
      }
      this.service.removeLoading(event.target);
    } else {
      this.validarMensaje = false;
      this.service.removeLoading(event.target);
    }
  }

}
