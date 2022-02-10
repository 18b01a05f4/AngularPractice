import { HttpClient } from '@angular/common/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Note } from './Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  todo! : Note;
  noteList:Note[] = [];

  _url = 'http://localhost:4200/allNotes/';

  constructor(private _http : HttpClient) { }
  
  setNote(title: string,desc: string) {
    let id = this.noteList.length;
    console.log(id);
    this.noteList.push({id,title,desc});
  }
  getAllTodos() {
    return this.noteList;
  }

  getNote(id:number) : Note | undefined{
    // if(this.noteList.find(todo => todo.id == id) == undefined) return ;
    // console.log(this.noteList.find(todo => todo.id === id)?.id);
    // console.log(this.noteList.find(todo => todo.id === id)?.title);
    // console.log(this.noteList.find(todo => todo.id === id)?.desc)
    return this.noteList.find(todo => todo.id === id);
  }

  updateNote(id:number,n : Note) {
    let note = this.getNote(id);
    // console.log('parametres : '+id+" "+title+" "+desc)
    if(note == undefined) console.log("undefined eror");
    else {
      note.id = n.id;
      note.title = n.title;
      note.desc = n.desc;
    }
    console.log(note?.id);
    console.log(note?.title);
    console.log(note?.desc);
  }

  // updateNote(id:number,note : Note) {
  //   let n = this.getNote(id);
  //   return this._http.put<any>('http://localhost:4200/allNotes',note);
  // }
  

}
