import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = { login: '', senha: '' };

  constructor(private loginService: LoginServiceService, private router: Router) { }


  public login() {
    this.loginService.login(this.usuario);
  }

  /*Guarda o token para não precisar ficar fazendo login todo momento*/
  ngOnInit() {
    if (localStorage.getItem('token') != null && localStorage.getItem('token').toString().trim() != null) {
      this.router.navigate(['home']);
    }
  }

}
