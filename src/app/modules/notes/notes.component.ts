import { Component, OnInit } from '@angular/core';
import {PageInterface} from "../entity/page.interface";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, PageInterface {

  constructor() { }

  ngOnInit(): void {
  }

}
