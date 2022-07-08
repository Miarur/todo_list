import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
