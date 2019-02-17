import { AuthGuardsService } from './auth/auth-guards.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
   { path: 'recipe', loadChildren: './recipe/recipe.module#RecipeModule' },
  // {
  //   path: 'not-found',
  //   loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  // },
  // {
  //   path: '*',
  //   redirectTo: '/not-found'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
