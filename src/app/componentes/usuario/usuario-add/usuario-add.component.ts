import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new Usuario();

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }
  /*Carrega a pagina e se caso tenha algum id na url*/
  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.userService.buscaPorId(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }
  salvar() {
    /*Se caso tenha um ID atualiza*/
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.userService.UpdateUsuario(this.usuario).subscribe(data => {
        this.novo();
        console.log('Atualizado com sucesso!!!' + data);
      });
      /*Se caso não tem um ID salva*/
    } else {
      this.userService.salvarUsuario(this.usuario).subscribe(data => {
        this.novo();
        console.log('Usuario salvo!! ' + data);
      });
    }
  }
  novo() {
    this.usuario = new Usuario();
  }

}
