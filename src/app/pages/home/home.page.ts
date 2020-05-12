import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
// ação do botão "Listar usuários"
  listUsers(){
    this.navCtrl.navigateForward('usuarios/todos');
  }

  //ação do botão criar usuário
  createUsers(){
    this.navCtrl.navigateForward('usuarios/criar');
  }

}
