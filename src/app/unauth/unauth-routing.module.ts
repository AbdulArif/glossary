import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthComponent } from './unauth.component';

const routes: Routes = [
  { path: '', component: UnauthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnauthRoutingModule { }
