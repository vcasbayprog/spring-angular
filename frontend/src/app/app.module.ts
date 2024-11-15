import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookCreateComponent } from './book-create/book-create.component';
import { FormsModule } from '@angular/forms';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookUpdateComponent } from './book-update/book-update.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookDeleteComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
