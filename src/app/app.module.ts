import { GuardiaoGuard } from './service/guardiao.guard';
import { UsuarioAddComponent } from './componentes/usuario/usuario-add/usuario-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule, ModuleWithComponentFactories } from '@angular/core';
import { FormsModule } from '@Angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { BrMaskerModule } from 'br-mask';
import {NgxPaginationModule} from 'ngx-pagination';


/*Rotas de paginas*/
export const appRouters: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [GuardiaoGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'usuarios', component: UsuarioComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuarioAdd', component: UsuarioAddComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuarioAdd/:id', component: UsuarioAddComponent, canActivate: [GuardiaoGuard] }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,


  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    BrMaskerModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
