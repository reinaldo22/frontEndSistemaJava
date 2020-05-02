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
  usuarios: Observable<Usuario[]>;
  nome: string;

  constructor(private usuarioServices: UsuarioService) { }

  /*Passo meus usuarios para a lista vazia e armazeno usuarios em data*/
  ngOnInit() {
    this.usuarioServices.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });
  }
  /*Deleto pelo id*/
  deleteUsuario(id: number) {

    if (confirm('Deseja mesmo Excluír usuário?')) {
      this.usuarioServices.deletarUsuario(id).subscribe(data => {
        console.log('Retorno do mètodo delete: ' + data);

        /*Atualizo a lista de usuarios*/
        this.usuarioServices.getUsuarioList().subscribe(data => {
          this.usuarios = data;
        });
      });
    }
  }
  buscar() {
    this.usuarioServices.buscaNome(this.nome).subscribe(data => {
      this.usuarios = data;
    });
  }


}
