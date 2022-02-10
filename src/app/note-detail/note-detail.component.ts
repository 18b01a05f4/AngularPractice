import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../Note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-detail',
  template: `
  <p>note-detail works!</p>
  
  <form [formGroup]="editNoteForm" (ngSubmit)="onSubmit()" class="container">
    <div class="form-group">
      <label>Title</label>
      <input class="form-control" type="text" name="text" formControlName="title">
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea class="form-control" type="text" name="desc" formControlName="desc" rows="10"></textarea>
    </div>
    <br>
      <button class="btn btn-success" type="submit">Save</button> &nbsp;&nbsp;
      <button class="btn btn-secondary" (click)="goback()" type="button">Back</button>
      <h2 *ngIf="flag">Saved Succesfully!</h2>
  </form>  
  `,
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  public id!: number;
  public fetchednote! : Note | undefined;

  public title!:string;
  public desc!:string;

  public flag = false;

  constructor(private _noteservice: NoteService,private router : Router, 
    private fb:FormBuilder,private route :ActivatedRoute) { }

  
  editNoteForm! : FormGroup;
  ngOnInit(): void {
    this.editNoteForm = this.fb.group({
      id : [''],
      title : [''],
      desc : ['']
    })
    this.route.paramMap.subscribe(params => {
        let id = parseInt((params).get('id')+"");
        this.id = id;
    });
    this.fetchednote =  this._noteservice.getNote(this.id);
    // console.log("desc"+this.fetchednote?.desc);
    if(this.fetchednote != undefined) {
      this.editNoteForm.patchValue({
        id : this.fetchednote.id,
        title : this.fetchednote.title,
        desc : this.fetchednote.desc
      })
    }
    else console.log("fetchNote is undefined")
  }

  goback() {
    this.router.navigate(['/allNotes']);
  }

  onSubmit() {
    console.log(this.editNoteForm.value);
    this._noteservice.updateNote(this.editNoteForm.value.id,this.editNoteForm.value);
    this.flag = true;
    //   .subscribe({next: () => {
    //       (response:any) => console.log('success');
    //     },
    //       error: error => {
    //         console.log('error');
    //       }
    // });
  }

  // func(title : string,desc : string) {
  //   console.log('parametres : '+title+" "+desc)
  //   this._noteservice.updateNote(this.id,title,desc);
  //   this.flag = true;
  // }
}
