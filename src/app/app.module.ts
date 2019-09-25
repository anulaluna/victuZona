import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { RecipeModule } from './recipe/recipe.module';
import { ProductModule } from './product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductEditComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    RecipeModule,
    HomeModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
