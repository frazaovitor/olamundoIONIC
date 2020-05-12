import { Component, OnInit } from '@angular/core';

//serviço de acesso à API
import { UsersService } from '../../services/users.service';

//infinite scroll
import { IonInfiniteScroll } from '@ionic/angular';



@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage implements OnInit {

  //infinite scroll
  itemsPage: any = [];
  private readonly offset: number = 10;
  private index = 0;

  //variável indentifica se temos usuários
  noUsers = false;

//variável com um array de usuários obtidos 
data: Array<any> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    //obtendo os dados da API
    this.usersService.getUsers().subscribe((res: any)=>{

            // se obteve os dados com sucesso
            if(res.status === 'success'){

              // loop para descartar usuários removidos

              res.result.forEach((value) =>{
                if(value != null){
                  this.data.push(value);
                }
              });
// se não existem usuários
              if ( this.data.length === 0 ) {
// se existem usuários
  this.noUsers = true;
} else {
  this.itemsPage = this.data.slice(this.index, this.offset + this.index);
  this.index += this.offset;
}
} else {
  console.error('Falha no acesso à API.');
}
    });
  }

  //infinite scroll
  loadData(event){
    setTimeout(() => {

      //paginação a cada rolagem
      const news = this.data.slice(this.index, this.offset + this.index);
      this.index += this.offset;
      // tslint:disable-next-line: prefer-for-of
      for(let i = 0; i < news.length; i++){
        this.itemsPage.push(news[i]);
      }
      event.target.complete();
// encerra se atingiu o total de elementos
      if(this.itemsPage.length === this.data.length){
        event.target.disable = true;
      }
    }, 800 );
  }
}
