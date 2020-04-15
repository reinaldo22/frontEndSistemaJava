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


/*Rotas de paginas*/
export const appRouters: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'usuarios', component: UsuarioComponent }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
