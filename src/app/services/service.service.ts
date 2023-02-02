import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  ApiURL = 'https://net-grid-api.herokuapp.com/api';
  ApiURLRM = 'https://rickandmortyapi.com/api/character';
  ApiURLRML = 'https://rickandmortyapi.com/api/location';

  constructor(
    private router: Router,
  ) { }

  url(url) {
    this.router.navigate([url]);
  }

  Alert(icon, title, text, confirmButtonText, cancelButtonText, showCancelButton = false) {
    return Swal.fire({
      icon,
      title,  
      html: text,
      confirmButtonText,
      cancelButtonText,
      showCancelButton,
      showCloseButton: true
    }).then();
  }

  Toast(icon, title) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon,
      title
    });

  }

  validarNumero(valor) {
    // tslint:disable-next-line: max-line-length
    if (isNaN(valor) === true || valor === 'NaN' || valor <= 0.000000 || valor === undefined || valor === null || valor === '' || valor === 'null') {
      return false;
    } else {
      return true;
    }
  }

  validarNumeroConCero(valor) {
    // tslint:disable-next-line: max-line-length
    if (isNaN(valor) === true || valor === 'NaN' || valor === undefined || valor === null || valor === '' || valor === 'null') {
      return false;
    } else {
      return true;
    }
  }

  validarText(valor) {
    if (valor === undefined || valor == null || valor === '' || valor === 'null' || valor <= 0) {
      return false;
    } else {
      return true;
    }
  }

  validarCorreo(email) {
    // tslint:disable-next-line: max-line-length
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(pattern)) {
        return true;
    } else {
        return false;
    }
  }

  Promet(subscribe) {
    return new Promise((resolve, reject) => subscribe.subscribe((resul) => resolve(resul), error => reject(error)));
  }

  addLoading(target) {
    target.innerHTML += " <i class='fas fa-spinner fa-pulse'></i>"; 
    target.disabled = true;
  }

  removeLoading(target) {
    let sprinner = target.lastChild;
    target.removeChild(sprinner);
    target.disabled = false;
  }
}
