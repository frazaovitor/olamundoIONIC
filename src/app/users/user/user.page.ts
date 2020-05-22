import { Component, OnInit } from '@angular/core';

// Rotas dinâmicas
import { ActivatedRoute } from '@angular/router';

// Importa modelo dos dados
import { User } from '../../models/users.model';

// Importa o service dos usuários
import { UsersService } from '../../services/users.service';

// Importa classe de navegação
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  // Obtém o Id do usuário da URL da rota
  id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

  // Variável que indentifica se temos usuários
  noUser = false;

  // Variável com a array de usuários obtidos
  data: User;

  constructor(

    // Inicializa rotas dinâmicas para obter o Id
    private route: ActivatedRoute,

    // Inicializa o service dos usuários
    private usersService: UsersService,

    // Navegação
    private navCtrl: NavController

  ) { }

  ngOnInit() {

    // Temos o Id do usuário
    // console.log('ID: ', this.id);

    // Consultar a API para o Id informado usando o service getUser
    this.usersService.getUser(this.id.toString()).subscribe(

      (res: any) => {

        // Recebemos dados da API
        // console.log(res);

        // Caso a consulta à API falhe...
        if (res.status !== 'success') {
          console.error(`Erro: ${res.result}`);
          return false;
        }

        // Se não retornou ninguém
        if (res.result === 'No record found') {

          // Informa ao HTML que ususário não existe
          this.noUser = true;

          // Sai sem fazer mais nada
          return false;

          // Se usuário existe
        } else {

          // Mostra no HTML os dados do ususário
          this.data = res.result;

          // Variável lida pelo HTML
          // console.log(this.data);
        }
      }
    );
  }

  // Ação do botão Editar
  editUser(id: string) {
    this.navCtrl.navigateForward(`usuarios/editar/${id}`)
  }

  // Ação do botão Apagar
  delUser(id: string, name: string) {

    // Confirmação
    if (!confirm(
      `Tem certeza que deseja apagar "${name}"?\n
    Esta ação é irreversível!\n
Clique em [Ok] para apagar e [Cancelar] para não apagar...`
    )) {

      // Sai sem fazer nada
      return false;
    }

    // Apaga o retgistro com o Id informado
    this.usersService.deleteUser(this.id.toString()).subscribe(
      (res: any) => {

        // Se apagou
        if (res.status === 'success' && res.result === 'Record deleted successfully') {

          // Feedback
          alert(`Usuário apagado com sucesso!\n\nClique em [Ok] para continuar...`);

          // Retorna para a listagem de ususários
          this.navCtrl.navigateForward('usuarios/todos');

          // SE não conseguiu apagar
        } else {

          // Erro
          console.error('Falha ao apagar usuário: ', res.result);

        }
      }
    );
  }

  // Ação do botão listar usuários
  listUsers() {
    this.navCtrl.navigateForward('usuarios/todos');
  }
}