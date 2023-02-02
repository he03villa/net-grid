import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { AuthService } from './services/auth.service';
import { NoAuthService } from './services/no-auth.service';


const routes: Routes = [
  { 
    path: 'dashboar',
    component: DashboradComponent,
    canActivate: [AuthService],
    children: [
      { path: '', loadChildren: () => import('./pages/dashboard-home/dashboard-home.module').then(m => m.DashboardHomeModule) },
      { path: 'vista-personaje/:id', loadChildren: () => import('./pages/vista-personaje/vista-personaje.module').then(m => m.VistaPersonajeModule) },
      { path: 'favorito', loadChildren: () => import('./pages/favorito/favorito.module').then(m => m.FavoritoModule) },
      { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule) },
      { path: 'location/:id', loadChildren: () => import('./pages/locatio/locatio.module').then(m => m.LocatioModule) },
      { path: '**', redirectTo: '' }
    ]
  },
  { 
    path: '',
    component: ContentComponent,
    canActivate: [NoAuthService],
    children: [
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroModule) },
      { path: '**', redirectTo: 'login' }
    ]
  },
  { path: '**', redirectTo: 'content' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
