import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  /*Cria uma lista de usuarios{UM ARRAY}*/
  usuarios: Array<Usuario[]>;
  nome: string;
  total: number;

  constructor(private usuarioServices: UsuarioService) { }

  /*Passo meus usuarios para a lista vazia e armazeno usuarios em data*/
  ngOnInit() {
    this.usuarioServices.getUsuarioList().subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }
  /*Deleto pelo id*/
  deleteUsuario(id: number, index) {

    if (confirm('Deseja mesmo Excluír usuário?')) {
      this.usuarioServices.deletarUsuario(id).subscribe(data => {


        this.usuarios.splice(index, 1); //remover da tela


        /*
         this.usuarioServices.getUsuarioList().subscribe(data => {
           this.usuarios = data;
         });*/

      });
    }
  }
  buscar() {

    if (this.nome === '') {
      this.usuarioServices.getUsuarioList().subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totaElements;
      });
    } else {

      this.usuarioServices.buscaNome(this.nome).subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    }




  }

  carregarPagina(pagina) {
    this.usuarioServices.getUsuarioPage(pagina - 1).subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }
}
