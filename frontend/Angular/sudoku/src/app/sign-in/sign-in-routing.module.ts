import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninPageComponent } from './main/signin-page/signin-page.component';


const routes: Routes = [
  {path:'', component:MainComponent,
  children:[
    {path:'', component: SigninPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
