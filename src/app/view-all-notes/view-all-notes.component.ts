import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../Note';

@Component({
  selector: 'app-view-all-notes',
  templateUrl: './view-all-notes.component.html',
  styleUrls: ['./view-all-notes.component.css']
})
export class ViewAllNotesComponent implements OnInit {

  noteList! : Array<Note>;
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

  }
  goToNewNote() {
    this.router.navigate(['/newNote']);
  }

  getNotes() {
    this.router.navigate(['/allNotes']);
  }

}
