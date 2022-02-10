import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
import { LoginComponent } from './login/login.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { ViewAllNotesComponent } from './view-all-notes/view-all-notes.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'vieworadd', component: ViewAllNotesComponent},
  {path:'newNote',component:NewNoteComponent},
  {path: 'allNotes', component:GetAllNotesComponent},
  {path: 'allNotes/:id', component: NoteDetailComponent}
  // {path:'**',component:}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponentsArray = [ LoginComponent,
                                        ViewAllNotesComponent,
                                        NewNoteComponent,
                                        NoteDetailComponent];
