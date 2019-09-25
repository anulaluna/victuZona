import { NgModule } from '@angular/core';

import { ProductComponent } from './index';
import { ProductRoutingModule } from './product.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ProductComponent],
  imports: [BrowserModule, CommonModule, ProductRoutingModule]
})
export class ProductModule {}
