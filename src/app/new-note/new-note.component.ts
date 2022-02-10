import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../Note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note',
  template: `
    <div class="container">
      <h2 stryle="text-align:center">Add a note</h2>
      <div class="form-group">
        <label>Title</label>
        <input type="text" [(ngModel)]="title" class="form-control">
      </div>
        <br>
      <div class="form-group">
        <label>Description</label>
        <textarea type="text" [(ngModel)]="desc" class="form-control"></textarea>
      </div>
      <br>
      <button class="btn btn-success" (click)="func()">Save</button>&nbsp;&nbsp;
      <button class="btn btn-secondary" (click)="goback()">Back</button>
      <h2 *ngIf="flag">Saved Succesfully!</h2>
    </div> 
  `,
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  public noteList! : Array<Note>;

  public title! : string;
  public desc! : string;
  public id : any;

  constructor(private _noteservice: NoteService,private router : Router, 
              private fb:FormBuilder,private route :ActivatedRoute) { }
  public flag = false;

  
  newNoteForm! : FormGroup;
  ngOnInit(): void {
    this.newNoteForm = this.fb.group({
      id : [''],
      title : [''],
      desc : ['']
    })
  }
  
  func() {
    // this.ngOnInit();
    this._noteservice.setNote(this.title,this.desc);
    this.flag = true;
  }

  goback() {
    this.router.navigate(['/vieworadd']);
  }

}
