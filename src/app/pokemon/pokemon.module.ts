import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';
import { MenuModule } from '../shared/components/menu/menu.module';
import { CabecalhoModule } from '../shared/components/cabecalho/cabecalho.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    MenuModule,
    CabecalhoModule
  ],
  declarations: [PokemonPage]
})
export class PokemonPageModule {}
