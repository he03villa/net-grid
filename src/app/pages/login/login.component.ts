import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { FavoritoService } from '../../services/favorito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  validarMensaje = true;
  ojito = true;

  constructor(
    public service: ServiceService,
    private fb: FormBuilder,
    private User: UserService,
    private Favorito: FavoritoService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  cambiarValidarMensaje() {
    this.validarMensaje = true;
  }

  async login(event) {
    this.service.addLoading(event.target);
    if (!this.form.invalid) {
      const data = { email: this.form.controls.email.value, password: this.form.controls.password.value, rol: 1 };
      console.log(data);
      const res:any = await this.User.Login(data);
      if (res.status) {
        this.service.Alert('error', '', 'EL usuario no existe', 'Aceptar', '', false);
      } else {
        const resFa = await this.Favorito.getAllFavorito(res.id);
        res.favorito = resFa;
        localStorage.setItem('dataUser', JSON.stringify(res));
        this.service.url('dashboar');
      }
      console.log(res);
      this.service.removeLoading(event.target);
    } else {
      this.validarMensaje = false;
      this.service.removeLoading(event.target);
    }
  }

}
