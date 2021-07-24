import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'signIn', loadChildren: () => import('./sign-in/sign-in.module').then(m=>m.SignInModule)},
  {path: 'game', loadChildren: () => import('./game/game.module').then(n=>n.GameModule)},
  {path:'', redirectTo:'/signIn', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
