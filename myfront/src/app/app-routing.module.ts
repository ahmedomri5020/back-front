import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { PlatsComponent } from './plat/plat.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Move this line up
  { path: 'plats', component: PlatsComponent },
  { path: 'add-plat', component: AddPlatComponent },
  { path: '', redirectTo: 'plats', pathMatch: 'full' },
  { path: '**', redirectTo: 'plats' }, // This should come last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
