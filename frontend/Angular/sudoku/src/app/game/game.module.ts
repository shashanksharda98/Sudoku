import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

import { GameRoutingModule } from './game-routing.module';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { GridComponent } from './main/grid/grid.component';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule
  ]
})
export class GameModule { }
