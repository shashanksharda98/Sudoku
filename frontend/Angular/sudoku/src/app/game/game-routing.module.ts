import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './main/grid/grid.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', component:MainComponent,
   children:[
     {path:'puzzle', component:GridComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
