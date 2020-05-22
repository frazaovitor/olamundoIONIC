import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
// importa o formulário do usuário
import { UserFormComponent } from '../../components/user-form/user-form.component';

// importa reactiveformns
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
    // inicializa o reactiveforms
    ReactiveFormsModule
  ],
  declarations: [CreatePage,
    // declara componente do usuário
    UserFormComponent],
    exports: [
      // Exporta componente do formulário do usuário para uso em outras páginas
      UserFormComponent
    ]
})
export class CreatePageModule {}
