import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../Note';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-get-all-notes',
  template: `
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th> 
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let n of noteList">
        <td>{{n.id}}</td>
        <td>{{n.title}}</td>
        <td>{{n.desc}}</td>
        <td>
          <button class="glyphicon glyphicon-pencil" (click)="editNote(n.id)" ></button>
        </td>
        <td>
          <button class="glyphicon glyphicon-trash" (click)="delNote(n.id)" ></button>
        </td>
      </tr>
    </tbody>
</table>

    `,
  styles: [
  ]
})
export class GetAllNotesComponent implements OnInit {
  noteList! : Array<Note>;
  constructor(private _noteservice : NoteService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.noteList = this._noteservice.getAllTodos();
  }

  delNote(id : number) {
    this.noteList.splice(id,1);
  }

  editNote(id : number) {
    this.router.navigate(['/allNotes',id]);
  }


}
