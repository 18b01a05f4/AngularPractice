import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewAllNotesComponent } from './view-all-notes/view-all-notes.component';
import { routingComponentsArray } from './app-routing.module';
import { NewNoteComponent } from './new-note/new-note.component';
import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewAllNotesComponent,
    routingComponentsArray,
    NewNoteComponent,
    GetAllNotesComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
