import { NgModule } from '@angular/core';

import { ProductComponent } from './index';
import { ProductRoutingModule } from './product.routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProductComponent ],
  imports: [

    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule {

}
