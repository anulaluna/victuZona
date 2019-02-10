import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CollapseDirective } from './shared/collapse.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DropdownDirective,
    CollapseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
