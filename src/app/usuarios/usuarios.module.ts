import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from '../tabla-usuarios/tabla-usuarios.component';
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: TablaUsuariosComponent
  }
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class UsuariosModule { }
