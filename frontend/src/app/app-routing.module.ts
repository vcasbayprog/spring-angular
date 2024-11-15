import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'update/:id', component: BookUpdateComponent},
  { path: 'delete/:id', component: BookDeleteComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
