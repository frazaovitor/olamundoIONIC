import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPageRoutingModule } from './edit-routing.module';

import { EditPage } from './edit.page';
import { CreatePageModule } from '../create/create.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule,

    // Inicializa componente do formulário à partir de CreatePageModule
    CreatePageModule,

    // Inicializa ReactiveForms
    ReactiveFormsModule
  ],
  declarations: [EditPage]
})
export class EditPageModule {}
