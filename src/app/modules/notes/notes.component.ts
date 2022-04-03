import { Component, OnInit } from '@angular/core';
import {PageInterface} from "../entity/page.interface";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, PageInterface {

  titreBrouillons:string[]=['note1'];

  constructor() { }

  ngOnInit(): void {
  }

  nouvelleNote() {
    this.titreBrouillons.push('Note '+(this.titreBrouillons.length+1));
  }

}
