import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { PageProductComponent } from './pages/page-product/page-product.component';
import { PageResetLoginComponent} from './pages/page-reset-login/page-reset-login.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: PageLoginComponent},
  {path: 'products/:id', component: PageProductComponent},
  {path: 'account', component: AccountComponent},
  {path: 'resetPassword', component: PageResetLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
