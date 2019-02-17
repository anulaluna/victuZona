import { NgModule } from '@angular/core';

import { RecipeComponent } from './index';
import { RecipeRoutingModule } from './recipe.routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RecipeComponent ],
  imports: [

    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule {

}
