import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  // cria formulário
  public userForm: FormGroup;

  constructor(// construtor do formulário reativo
    private formBuilder: FormBuilder,
    
    //inicializa a API
    private UsersService: UsersService,

    // roteamento
    public navCtrl: NavController,
    ) { 
    
      //definindo campos do formulário
      this.userForm = this.formBuilder.group(
        {
          // campo 'id'
          id: [null],

          //campo 'name'
          name:[                      // nome do campo
            null,                     // valor inicial
            Validators.compose([      // regras de validação
              Validators.required,    // campo obrigatório
              Validators.minLength(3) // comprimento mínimo de caracter
            ])
          ],
          // campo email
          email: [
            null,
            Validators.compose([
              Validators.required,
              Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$')
            ])
          ],

          // campo avatar
          avatar: [
            null,
            Validators.compose([
              Validators.required,
              // tslint:disable-next-line: max-line-length
              Validators.pattern(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)
            ])
          ],
          // campo status
          status: [1]
        }
      );
  }

  ngOnInit() {}

  // processa formulário
  onSubmit(){
    //console.log(this.userForm.value);

    //se o campo id está vazio, estamos cadastrando um novo usuário
    if (this.userForm.value.id === null){

      //cadastra usuário

      //remove o campo id
      delete this.userForm.value.id;

      // ajusta o valor do campo "status" para numérico
      if(!this.userForm.value.status){
        this.userForm.value.status = 0;
      }else{
        this.userForm.value.status = 1;
      }

      //Salvar dados na API
      this.UsersService.postUser(this.userForm.value).subscribe(

        (res: any) =>{

          // se foi adicionado 
          if(res.status === 'success') {

            // feedback
            alert(`"${this.userForm.value.name}" foi adicionado com sucesso!\nClique em OK para continuar.`);

            // retorna para a listagem
            this.navCtrl.navigateForward('usuarios/todos');

            // limpa o formulário
            //this.userForm.reset();
          }
        }

      );

    }else{
       //editar usuário
    }
  }
}
