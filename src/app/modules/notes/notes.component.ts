import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  titreBrouillons:string[]=['note1'];

  constructor() { }

  ngOnInit(): void {
  }

  nouvelleNote() {
    this.titreBrouillons.push('Note '+(this.titreBrouillons.length+1));
  }

}
